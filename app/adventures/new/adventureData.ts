export const adventureData = {
  themes: [
    { value: 'medieval fantasy', label: 'Medieval Fantasy' },
    { value: 'sci-fi space', label: 'Sci-Fi Space' },
    { value: 'haunted forest', label: 'Haunted Forest' },
    { value: 'pirate seas', label: 'Pirate Seas' },
    { value: 'cyberpunk city', label: 'Cyberpunk City' },
  ],
  goals: [
    { value: 'find treasure', label: 'Find Treasure' },
    { value: 'defeat a foe', label: 'Defeat a Foe' },
    { value: 'solve a mystery', label: 'Solve a Mystery' },
    { value: 'escape danger', label: 'Escape Danger' },
    { value: 'gain power', label: 'Gain Power' },
  ],
  characters: [
    'Thorne the Warrior',
    'Elara the Mage',
    'Vex the Rogue',
    'A Ghostly Spirit',
    'A Cunning Pirate',
  ],
  tones: [
    { value: 'serious and challenging', label: 'Serious and Challenging' },
    { value: 'playful and easy', label: 'Playful and Easy' },
    { value: 'dark and moderate', label: 'Dark and Moderate' },
    { value: 'epic and intense', label: 'Epic and Intense' },
  ],
  choiceStyles: [
    'Moral Dilemmas',
    'Exploration-Focused',
    'Combat-Based',
    'Puzzle-Solving',
  ],
  endings: [
    'Victory',
    'Tragic Loss',
    'Bittersweet',
    'Cursed Fate',
    'Unexpected Ally',
  ],
}

export type finalAdventureData = {
  characters: string[]
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
