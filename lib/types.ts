// Game data structure
export type Choice = {
  id: string
  text: string
  nextSceneId: string
}

export type Character = {
  id: string
  name: string
  image: string
}

export type Scene = {
  id: string
  narration: string
  background: string
  characters: string[] // Character IDs
  dialogues: {
    characterId: string
    text: string
  }[]
  choices: Choice[]
  isEnding?: boolean
}

export type GameData = {
  title: string
  initialScene: string
  scenes: Record<string, Scene>
  characters: Record<string, Character>
}
