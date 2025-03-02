// Game data structure
type Choice = {
  id: string
  text: string
  nextSceneId: string
}

export type Character = {
  id: string
  name: string
  image: string
}

type Scene = {
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

type GameData = {
  title: string
  initialScene: string
  scenes: Record<string, Scene>
  characters: Record<string, Character>
}

// Demo game data
export const dragonLairGame: GameData = {
  title: "Dragon's Lair Adventure",
  initialScene: 'intro',
  characters: {
    narrator: {
      id: 'narrator',
      name: 'Narrator',
      image: '/game-images/narrator.jpg',
    },
    warrior: {
      id: 'warrior',
      name: 'Thorne the Warrior',
      image:
        'https://images.unsplash.com/photo-1652292365691-ac6c678d09df?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    mage: {
      id: 'mage',
      name: 'Elara the Mage',
      image:
        'https://images.unsplash.com/photo-1701958213864-2307a737e853?q=80&w=3167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    dragon: {
      id: 'dragon',
      name: 'Vermithrax the Dragon',
      image:
        'https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  scenes: {
    intro: {
      id: 'intro',
      narration:
        'You stand at the entrance of a massive cave carved into the side of Mount Drakkar. Legends speak of an ancient dragon that guards a treasure beyond imagination. The air is thick with the smell of sulfur, and an eerie glow emanates from deep within.',
      background:
        'https://images.unsplash.com/photo-1726424342902-9a163f1b2a23?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'mage',
          text: "My magical senses are tingling. There's powerful magic ahead, not just from the dragon but from the treasure it guards.",
        },
        {
          characterId: 'warrior',
          text: 'I can feel the heat from here. The dragon must be massive. We should proceed with caution.',
        },
      ],
      choices: [
        {
          id: 'stealth',
          text: 'Proceed quietly, using stealth to avoid alerting the dragon',
          nextSceneId: 'stealth_approach',
        },
        {
          id: 'direct',
          text: 'March forward confidently, ready for whatever comes',
          nextSceneId: 'direct_approach',
        },
      ],
    },
    stealth_approach: {
      id: 'stealth_approach',
      narration:
        'You decide to take the cautious approach, moving silently through the winding tunnels. The passage narrows, and you find yourself in a massive chamber filled with gold and jewels. In the center, curled around a particularly large pile of treasure, sleeps the dragon.',
      background:
        'https://images.unsplash.com/photo-1633395427368-eebd2170f50a?q=80&w=1000&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Choose wisely from my hoard. Not all treasures are what they seem.',
        },
        {
          characterId: 'warrior',
          text: 'Thank you, mighty Vermithrax. Your generosity will not be forgotten.',
        },
      ],
      choices: [
        {
          id: 'restart',
          text: 'Play Again',
          nextSceneId: 'intro',
        },
      ],
      isEnding: true,
    },
    ending_knowledge: {
      id: 'ending_knowledge',
      narration:
        "Instead of gold, you choose to learn from the dragon's ancient wisdom. Vermithrax shares secrets of magic, history, and the world that few mortals have ever known.",
      background:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'You show wisdom beyond your years. Knowledge, unlike gold, grows when shared.',
        },
        {
          characterId: 'mage',
          text: 'This is worth more than any treasure. We will use this knowledge well.',
        },
      ],
      choices: [
        {
          id: 'restart',
          text: 'Play Again',
          nextSceneId: 'intro',
        },
      ],
      isEnding: true,
    },
  },
}
