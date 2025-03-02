import { GameData } from '@/lib/types'

export const hauntedHollowGame: GameData = {
  title: 'Haunted Hollow',
  initialScene: 'intro',
  characters: {
    narrator: {
      id: 'narrator',
      name: 'Narrator',
      image:
        'https://images.unsplash.com/photo-1647575211406-ae6c9d4d2553?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    ranger: {
      id: 'ranger',
      name: 'Kael the Ranger',
      image:
        'https://images.unsplash.com/photo-1705105238704-a62b18e1b985?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    spirit: {
      id: 'spirit',
      name: 'The Whispering Shade',
      image:
        'https://images.unsplash.com/photo-1665028464248-f29dcbccdad5?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  },
  scenes: {
    intro: {
      id: 'intro',
      narration:
        'Mist coils around gnarled trees as you step into Haunted Hollow. A chill bites the air, and faint whispers echo from the shadows.',
      background:
        'https://images.unsplash.com/photo-1729807749326-8c5f461dcf7e?q=80&w=2879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'ranger'],
      dialogues: [
        {
          characterId: 'ranger',
          text: 'Stay sharp—this forest doesn’t forgive the careless.',
        },
      ],
      choices: [
        {
          id: 'lantern',
          text: 'Light your lantern to pierce the gloom.',
          nextSceneId: 'lantern_path',
        },
        {
          id: 'listen',
          text: 'Pause and listen to the whispers.',
          nextSceneId: 'whisper_path',
        },
      ],
    },
    lantern_path: {
      id: 'lantern_path',
      narration:
        'The lantern’s glow reveals a path of glowing mushrooms leading to a crumbling well. Something glints inside.',
      background:
        'https://plus.unsplash.com/premium_photo-1723120592961-ed7cf49ac48b?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'ranger'],
      dialogues: [
        {
          characterId: 'ranger',
          text: 'That well’s unnatural. Could be a trap—or a prize.',
        },
      ],
      choices: [
        {
          id: 'reach',
          text: 'Reach into the well for the glinting object.',
          nextSceneId: 'well_grab',
        },
        {
          id: 'ignore',
          text: 'Ignore it and follow the mushrooms deeper.',
          nextSceneId: 'mushroom_path',
        },
      ],
    },
    whisper_path: {
      id: 'whisper_path',
      narration:
        'The whispers grow into a voice. A spectral figure drifts from the mist, offering a riddle: ‘I am taken, yet I remain.’',
      background:
        'https://plus.unsplash.com/premium_photo-1723799413646-9fb1f800cedb?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'spirit'],
      dialogues: [
        {
          characterId: 'spirit',
          text: 'Answer, or wander lost forever.',
        },
      ],
      choices: [
        {
          id: 'shadow',
          text: 'Answer: ‘A shadow.’',
          nextSceneId: 'spirit_gift',
        },
        {
          id: 'silence',
          text: 'Stay silent and back away.',
          nextSceneId: 'lost_ending',
        },
      ],
    },
    well_grab: {
      id: 'well_grab',
      narration:
        'Your hand closes around a silver locket. The air screams, and skeletal hands claw from the well.',
      background:
        'https://images.unsplash.com/photo-1679453082083-7d8fae05e340?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'ranger'],
      dialogues: [
        {
          characterId: 'ranger',
          text: 'Drop it! That’s no treasure—it’s cursed!',
        },
      ],
      choices: [
        {
          id: 'keep',
          text: 'Keep the locket and run.',
          nextSceneId: 'curse_ending',
        },
        {
          id: 'drop',
          text: 'Drop it and fight the hands.',
          nextSceneId: 'fight_hands',
        },
      ],
    },
    mushroom_path: {
      id: 'mushroom_path',
      narration:
        'The mushrooms lead to a hollow tree pulsing with violet light. A voice offers you its power—for a price.',
      background:
        'https://images.unsplash.com/photo-1623077495207-d1daf2aaa36e?q=80&w=2804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'spirit'],
      dialogues: [
        {
          characterId: 'spirit',
          text: 'Take my strength. Give me your voice.',
        },
      ],
      choices: [
        {
          id: 'accept',
          text: 'Accept the deal.',
          nextSceneId: 'power_ending',
        },
        {
          id: 'refuse',
          text: 'Refuse and leave.',
          nextSceneId: 'escape_ending',
        },
      ],
    },
    spirit_gift: {
      id: 'spirit_gift',
      narration:
        'The shade nods. ‘Wise one,’ it says, handing you a shard of moonlight that hums with energy.',
      background:
        'https://images.unsplash.com/photo-1531263348817-2a52ea675d96?q=80&w=3068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'spirit'],
      dialogues: [
        {
          characterId: 'spirit',
          text: 'This will guide you out—or deeper still.',
        },
      ],
      choices: [
        {
          id: 'leave',
          text: 'Use it to escape the hollow.',
          nextSceneId: 'escape_ending',
        },
        {
          id: 'stay',
          text: 'Seek the hollow’s heart with it.',
          nextSceneId: 'power_ending',
        },
      ],
    },
    fight_hands: {
      id: 'fight_hands',
      narration:
        'You shatter the skeletal hands. The well collapses, revealing a hidden tunnel glowing faintly.',
      background:
        'https://images.unsplash.com/photo-1619845138898-581540d590d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'ranger'],
      dialogues: [
        {
          characterId: 'ranger',
          text: 'That was close. Tunnel’s our way out—or in.',
        },
      ],
      choices: [
        {
          id: 'tunnel',
          text: 'Enter the tunnel.',
          nextSceneId: 'power_ending',
        },
        {
          id: 'exit',
          text: 'Turn back and leave.',
          nextSceneId: 'escape_ending',
        },
      ],
    },
    curse_ending: {
      id: 'curse_ending',
      narration:
        'The locket burns cold in your grasp. Whispers fill your mind, and the forest claims you as its own.',
      background:
        'https://images.unsplash.com/photo-1641077294233-059b53c2e1fb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator'],
      dialogues: [],
      choices: [
        {
          id: 'restart',
          text: 'Play Again',
          nextSceneId: 'intro',
        },
      ],
      isEnding: true,
    },
    power_ending: {
      id: 'power_ending',
      narration:
        'You embrace the hollow’s magic. Strength surges through you, but your eyes glow violet—forever changed.',
      background:
        'https://images.unsplash.com/photo-1606522109608-e5b0c3166605?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'ranger'],
      dialogues: [
        {
          characterId: 'ranger',
          text: 'You’re not the same. Was it worth it?',
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
    escape_ending: {
      id: 'escape_ending',
      narration:
        'You stumble out of the hollow, alive but haunted. The forest watches as you flee.',
      background:
        'https://images.unsplash.com/photo-1590678003063-ab36365ff1e4?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator'],
      dialogues: [],
      choices: [
        {
          id: 'restart',
          text: 'Play Again',
          nextSceneId: 'intro',
        },
      ],
      isEnding: true,
    },
    lost_ending: {
      id: 'lost_ending',
      narration:
        'The whispers fade. You wander endlessly, a ghost among the trees.',
      background:
        'https://images.unsplash.com/photo-1578587018458-e4a8d991d14a?q=80&w=2832&auto=format&fit=crop',
      characters: ['narrator'],
      dialogues: [],
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
