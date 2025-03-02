export type finalAdventureData = {
  characters?: string[]
  endings: string[]
  slug: string
  name: string
  theme: string
  goal: string
  tone: string
  choices: string[]
  customCharacters: string
  customEndings: string
}

import fs from 'fs/promises'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data/adventures')

export type GameChoice = {
  id: string
  text: string
  nextSceneId: string
}

export type GameScene = {
  id: string
  description: string
  choices?: GameChoice[]
}

export type GameData = {
  title: string
  introduction: string
  startingScene: GameScene
  scenes: GameScene[]
  metadata: {
    createdAt: string
    theme: string
    userPrompt: string
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .concat('-', Date.now().toString().slice(-4))
}

export async function saveAdventure(
  slug: string,
  data: GameData
): Promise<void> {
  try {
    // Ensure the data directory exists
    await fs.mkdir(DATA_DIR, { recursive: true })

    const filePath = path.join(DATA_DIR, `${slug}.json`)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Failed to save adventure:', error)
    throw new Error('Failed to save adventure data')
  }
}

export async function getAdventure(slug: string): Promise<GameData | null> {
  try {
    const filePath = path.join(DATA_DIR, `${slug}.json`)
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data) as GameData
  } catch (error) {
    console.error(`Adventure not found: ${slug}`, error)
    return null
  }
}

export async function getAllAdventures(): Promise<
  Array<{ slug: string; title: string; theme: string; createdAt: string }>
> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })

    const files = await fs.readdir(DATA_DIR)
    const adventures = await Promise.all(
      files
        .filter((file) => file.endsWith('.json'))
        .map(async (file) => {
          const slug = file.replace('.json', '')
          const data = await getAdventure(slug)

          return data
            ? {
                slug,
                title: data.title,
                theme: data.metadata.theme,
                createdAt: data.metadata.createdAt,
              }
            : null
        })
    )

    return adventures.filter(Boolean) as Array<{
      slug: string
      title: string
      theme: string
      createdAt: string
    }>
  } catch (error) {
    console.error('Failed to get adventures:', error)
    return []
  }
}
