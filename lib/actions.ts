'use server'

import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
import { revalidatePath } from 'next/cache'
import { saveAdventure, generateSlug } from './adventure-utils'
import { finalAdventureData } from '@/app/adventures/new/adventureData'

export async function createAdventure(formData: finalAdventureData) {
  try {
    const { name, theme } = formData
    const slug = generateSlug(name)
    //   const prompt = `
    //   Generate a choice-based game data structure in TypeScript format for an adventure game. The game should have:
    //   - Title: "${formData.name}"
    //   - Theme/Setting: "${formData.theme}"
    //   - Main Goal: "${formData.goal}"
    //   - Characters: "${formData.characters.join(", ")}${formData.customCharacters ? ", " + formData.customCharacters : ""}"
    //   - Tone/Difficulty: "${formData.tone || "moderate"}"
    //   - Choice Style: "${formData.choices.join(", ") || "exploration-focused"}"
    //   - Endings: "${formData.endings.join(", ") || "victory, failure"}${formData.customEndings ? ", " + formData.customEndings : ""}"
    //   - Include 5-8 scenes with branching paths, concise narration, character dialogues, and 2-3 choices per scene leading to the endings.
    //   - Use placeholder image URLs (e.g., "/game-images/default.jpg") for backgrounds and characters.
    //   - Follow this structure:
    //   export type GameData = {
    //     title: string;
    //     initialScene: string;
    //     scenes: Record<string, { id: string; narration: string; background: string; characters: string[]; dialogues: { characterId: string; text: string }[]; choices: { id: string; text: string; nextSceneId: string }[]; isEnding?: boolean }>;
    //     characters: Record<string, { id: string; name: string; image: string }>;
    //   }
    // `;

    // Generate the adventure intro and first scene
    const adventurePrompt = `
  Create a text-based adventure game with the title "${name}" in the ${theme} genre, Tone/Difficulty: "${
      formData.tone || 'moderate'
    }", Main Goal: "${formData.goal}".
  Based on this user prompt: "${prompt}", Endings: "${
      formData.endings.join(', ') || 'victory, failure'
    }${formData.customEndings ? ', ' + formData.customEndings : ''}"
  
  Format your response as a JSON object with the following structure:
  {
    "title": "The adventure title",
    "initialScene": "intro",
    "characters": {
      "narrator": {
        "id": "narrator",
        "name": "Narrator",
        "image": "/game-images/narrator.jpg"
      },
      // Add other characters as needed
    },
    "scenes": {
      "intro": {
        "id": "intro",
        "narration": "A compelling introduction to the adventure setting and premise (about 2-3 paragraphs)",
        "background": "URL to an image representing the scene",
        "characters": ["narrator", "character1", "character2"],
        "dialogues": [
          {
            "characterId": "character1",
            "text": "Dialogue text for character1"
          },
          {
            "characterId": "character2",
            "text": "Dialogue text for character2"
          }
        ],
        "choices": [
          {
            "id": "choice1",
            "text": "First choice description",
            "nextSceneId": "scene1"
          },
          {
            "id": "choice2",
            "text": "Second choice description",
            "nextSceneId": "scene2"
          }
        ]
      },
      "scene1": {
        "id": "scene1",
        "narration": "Description of what happens after the first choice",
        "background": "URL to an image representing the scene",
        "characters": ["narrator", "character1"],
        "dialogues": [
          {
            "characterId": "character1",
            "text": "Dialogue text for character1"
          }
        ],
        "choices": [
          {
            "id": "choice1_1",
            "text": "Option 1",
            "nextSceneId": "scene1_1"
          },
          {
            "id": "choice1_2",
            "text": "Option 2",
            "nextSceneId": "scene1_2"
          }
        ]
      },
      // Add more scenes as needed
    }
  }
  
  Create at least 10 different scenes with meaningful choices that branch the story in different directions.
  Some scenes should be endings (success or failure) - these won't have choices.
  Make the adventure engaging, descriptive, and appropriate for the selected theme.
`

    const { text } = await generateText({
      model: google('gemini-1.5-pro-latest'),
      prompt: adventurePrompt,
    })

    // Parse the generated JSON
    let gameData
    try {
      // Extract JSON from the response (in case the AI includes extra text)
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        gameData = JSON.parse(jsonMatch[0])
      } else {
        throw new Error('No valid JSON found in the response')
      }
    } catch (error) {
      console.error('Failed to parse AI response:', error)
      throw new Error('Failed to generate a valid adventure structure')
    }

    // Save the adventure data
    await saveAdventure(slug, {
      ...gameData,
      metadata: {
        createdAt: new Date().toISOString(),
        theme,
        userPrompt: prompt,
      },
    })

    revalidatePath('/adventures')
    return slug
  } catch (error) {
    console.error('Adventure creation failed:', error)
    throw error
  }
}
