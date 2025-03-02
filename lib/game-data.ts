import { GameData } from '@/lib/types'

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
        'You stand at the jagged mouth of a colossal cave on Mount Drakkar, wind howling through the peaks. Legends whisper of Vermithrax, an ancient dragon guarding a hoard of unimaginable wealth and secrets. Sulfur stings your nose, and a faint, eerie glow pulses from within. Your companions, Thorne the Warrior and Elara the Mage, exchange wary glances.',
      background:
        'https://images.unsplash.com/photo-1726424342902-9a163f1b2a23?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'mage',
          text: 'The air hums with ancient magic. It’s not just the dragon we should fear—it’s what lies beyond.',
        },
        {
          characterId: 'warrior',
          text: 'I’ve faced beasts before, but this heat… it’s alive. Blade at the ready, then?',
        },
      ],
      choices: [
        {
          id: 'stealth',
          text: 'Slip in quietly, using stealth to avoid the dragon’s notice.',
          nextSceneId: 'stealth_approach',
        },
        {
          id: 'direct',
          text: 'Stride in boldly, prepared to confront whatever awaits.',
          nextSceneId: 'direct_approach',
        },
        {
          id: 'scout',
          text: 'Send Elara to scout ahead with her magic.',
          nextSceneId: 'scout_path',
        },
      ],
    },
    stealth_approach: {
      id: 'stealth_approach',
      narration:
        'You creep through the twisting tunnels, shadows dancing on the walls. The air grows hotter as you emerge into a vast chamber glittering with gold, jewels, and strange artifacts. Vermithrax slumbers atop a mound of treasure, scales glinting like molten fire. Something glimmers oddly among the hoard—a small, glowing orb.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'mage',
          text: 'That orb—it’s a Seeing Stone! It could reveal truths or trap us in illusions.',
        },
        {
          characterId: 'warrior',
          text: 'The dragon’s asleep, but not for long. We’ve got one shot at this.',
        },
      ],
      choices: [
        {
          id: 'grab_gold',
          text: 'Snatch a handful of gold and retreat quietly.',
          nextSceneId: 'stealth_gold',
        },
        {
          id: 'take_orb',
          text: 'Risk taking the glowing orb instead of the gold.',
          nextSceneId: 'stealth_orb',
        },
        {
          id: 'wake_dragon',
          text: 'Wake Vermithrax and demand answers.',
          nextSceneId: 'confront_dragon',
        },
      ],
    },
    direct_approach: {
      id: 'direct_approach',
      narration:
        'You march into the cave, boots echoing against stone. The tunnel widens into a cavern where Vermithrax rears up, eyes blazing like twin suns. ‘Mortals,’ it rumbles, ‘you dare disturb my rest?’ The air crackles with tension as treasure gleams behind it.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Speak your purpose, or become ash where you stand.',
        },
        {
          characterId: 'mage',
          text: 'We could negotiate… or fight. What’s your call?',
        },
      ],
      choices: [
        {
          id: 'fight',
          text: 'Draw your weapons and battle the dragon.',
          nextSceneId: 'battle_dragon',
        },
        {
          id: 'talk',
          text: 'Offer respect and ask for a share of the hoard.',
          nextSceneId: 'negotiate_dragon',
        },
      ],
    },
    scout_path: {
      id: 'scout_path',
      narration:
        'Elara casts a shimmering spell, her form fading into mist as she scouts ahead. She returns pale-faced. ‘There’s a hidden passage,’ she whispers, ‘guarded by skeletal warriors—and a riddle etched in stone.’ The dragon’s roar echoes faintly behind you.',
      background:
        'https://images.unsplash.com/photo-1624024021122-9c7f0ca937eb?q=80&w=2940&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'mage',
          text: 'The riddle says: ‘I speak without a mouth and hear without ears.’ What’s the answer?',
        },
        {
          characterId: 'warrior',
          text: 'We solve it, or we fight those bones. Think fast!',
        },
      ],
      choices: [
        {
          id: 'answer_echo',
          text: 'Answer the riddle: ‘An echo.’',
          nextSceneId: 'hidden_passage',
        },
        {
          id: 'fight_skeletons',
          text: 'Ignore the riddle and battle the skeletal guards.',
          nextSceneId: 'skeleton_fight',
        },
      ],
    },
    stealth_gold: {
      id: 'stealth_gold',
      narration:
        'You scoop up a handful of glittering coins and turn to flee. But as you step back, the coins crumble to dust in your hands, and Vermithrax’s eyes snap open. ‘Thieves!’ it roars, fire licking the air.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Gold is fleeting, but my wrath is eternal. Face me or perish!',
        },
      ],
      choices: [
        {
          id: 'run',
          text: 'Run for the exit, abandoning the treasure.',
          nextSceneId: 'escape_fail',
        },
        {
          id: 'fight',
          text: 'Stand and fight the enraged dragon.',
          nextSceneId: 'battle_dragon',
        },
      ],
    },
    stealth_orb: {
      id: 'stealth_orb',
      narration:
        'You pluck the Seeing Stone from the hoard. It pulses warmly in your hand, and visions flood your mind—wars, lost kingdoms, and a glimpse of Vermithrax’s sorrowful past. The dragon stirs, sensing the theft.',
      background:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      characters: ['narrator', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'mage',
          text: 'The orb’s power is immense… but it’s tied to the dragon’s soul.',
        },
        {
          characterId: 'dragon',
          text: 'That stone is my memory, mortal. Return it, or bear its curse.',
        },
      ],
      choices: [
        {
          id: 'return_orb',
          text: 'Offer the orb back to Vermithrax.',
          nextSceneId: 'ending_knowledge',
        },
        {
          id: 'keep_orb',
          text: 'Keep the orb and flee.',
          nextSceneId: 'curse_ending',
        },
      ],
    },
    confront_dragon: {
      id: 'confront_dragon',
      narration:
        'You shout to wake Vermithrax. It rises, towering over you, but its gaze is curious, not hostile. ‘Boldness intrigues me,’ it says. ‘Choose a reward from my hoard, but know each bears a price.’',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Gold brings greed, wisdom brings burden, power brings doom. What do you seek?',
        },
      ],
      choices: [
        {
          id: 'gold',
          text: 'Choose the gold.',
          nextSceneId: 'ending_gold',
        },
        {
          id: 'wisdom',
          text: 'Choose the wisdom.',
          nextSceneId: 'ending_knowledge',
        },
        {
          id: 'power',
          text: 'Choose the power.',
          nextSceneId: 'curse_ending',
        },
      ],
    },
    battle_dragon: {
      id: 'battle_dragon',
      narration:
        'You charge Vermithrax, blades clashing against scales, magic flaring in the dark. The dragon fights fiercely, but a lucky strike finds a weak spot. It collapses, breathing its last, and the cavern trembles.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fEVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'warrior',
          text: 'It’s done… but at what cost?',
        },
        {
          characterId: 'mage',
          text: 'The treasure’s ours, yet I feel a shadow growing.',
        },
      ],
      choices: [
        {
          id: 'take_all',
          text: 'Take the entire hoard and leave.',
          nextSceneId: 'greed_ending',
        },
        {
          id: 'leave',
          text: 'Leave the treasure and honor the dragon’s fall.',
          nextSceneId: 'honor_ending',
        },
      ],
    },
    negotiate_dragon: {
      id: 'negotiate_dragon',
      narration:
        'You bow to Vermithrax, offering respect. It studies you, then nods. ‘Few choose words over steel,’ it says. ‘Ask one boon, and I shall grant it.’ The hoard glimmers temptingly behind it.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Name your desire—wealth, knowledge, or my protection.',
        },
      ],
      choices: [
        {
          id: 'wealth',
          text: 'Ask for wealth.',
          nextSceneId: 'ending_gold',
        },
        {
          id: 'knowledge',
          text: 'Ask for knowledge.',
          nextSceneId: 'ending_knowledge',
        },
        {
          id: 'protection',
          text: 'Ask for protection.',
          nextSceneId: 'protection_ending',
        },
      ],
    },
    hidden_passage: {
      id: 'hidden_passage',
      narration:
        'The riddle’s answer—‘echo’—unlocks the passage. You step into a chamber lit by glowing crystals, revealing a tome encased in glass. It radiates power, but the dragon’s roar grows louder behind you.',
      background:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'mage',
          text: 'This tome could hold forbidden spells… or curses.',
        },
        {
          characterId: 'warrior',
          text: 'Grab it quick—Vermithrax is coming!',
        },
      ],
      choices: [
        {
          id: 'take_tome',
          text: 'Take the tome and run.',
          nextSceneId: 'curse_ending',
        },
        {
          id: 'leave_tome',
          text: 'Leave it and face the dragon.',
          nextSceneId: 'confront_dragon',
        },
      ],
    },
    skeleton_fight: {
      id: 'skeleton_fight',
      narration:
        'You draw your weapons as skeletal warriors lurch forward, bones clattering. The fight is brutal but swift—shattered bones litter the floor. The passage lies open, but Vermithrax’s roar shakes the cave.',
      background:
        'https://images.unsplash.com/photo-1624024021122-9c7f0ca937eb?q=80&w=2940&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'warrior',
          text: 'That was too easy. Something’s wrong.',
        },
      ],
      choices: [
        {
          id: 'proceed',
          text: 'Enter the passage.',
          nextSceneId: 'hidden_passage',
        },
        {
          id: 'retreat',
          text: 'Turn back to face the dragon.',
          nextSceneId: 'direct_approach',
        },
      ],
    },
    escape_fail: {
      id: 'escape_fail',
      narration:
        'You sprint for the exit, but Vermithrax’s fire engulfs the tunnel. The last thing you see is a wall of flame as the cave collapses around you.',
      background:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
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
    ending_gold: {
      id: 'ending_gold',
      narration:
        'Vermithrax grants you a chest of gold and jewels. You leave the cave rich beyond dreams, but whispers of greed follow you, and shadows grow longer each night.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Take your prize, but beware its weight.',
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
        'Vermithrax shares ancient secrets—magic, history, and truths of the world. You leave wiser, not richer, your mind alight with possibilities. As you step into the sunlight, you feel the weight of understanding, a gift both liberating and heavy.',
      background:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
      characters: ['narrator', 'mage', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Knowledge is a flame that never fades. Use it well.',
        },
        {
          characterId: 'mage',
          text: 'This is a treasure no thief can steal. Thank you, Vermithrax.',
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
    curse_ending: {
      id: 'curse_ending',
      narration:
        'You clutch the Seeing Stone—or the tome—and flee, but its power twists around you. Visions of doom haunt your every step; your companions grow distant, their eyes hollow. The treasure’s might is yours, but so is its curse.',
      background:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
      characters: ['narrator', 'warrior', 'mage'],
      dialogues: [
        {
          characterId: 'warrior',
          text: 'What have we done? I can’t trust my own shadow anymore.',
        },
        {
          characterId: 'mage',
          text: 'The magic’s too strong… it’s consuming us.',
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
    greed_ending: {
      id: 'greed_ending',
      narration:
        'You haul the dragon’s hoard from the cave, gold spilling from your arms. But as you descend Mount Drakkar, the weight grows unbearable. Villages shun you, thieves stalk you, and the treasure becomes your prison.',
      background:
        'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'warrior'],
      dialogues: [
        {
          characterId: 'warrior',
          text: 'We won the battle, but lost everything else.',
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
    honor_ending: {
      id: 'honor_ending',
      narration:
        'You leave the hoard untouched, bowing to the fallen Vermithrax. As you exit, a warm wind carries the dragon’s voice: ‘Your honor endures.’ The world feels lighter, and tales of your deed spread far.',
      background:
        'https://images.unsplash.com/photo-1726424342902-9a163f1b2a23?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'dragon'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'Few choose the harder path. You are remembered.',
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
    protection_ending: {
      id: 'protection_ending',
      narration:
        'Vermithrax agrees to guard your homeland, its shadow a shield against invaders. You return not with treasure, but with peace—an alliance forged in trust. The dragon’s eyes watch the horizon as you depart.',
      background:
        'https://images.unsplash.com/photo-1726424342902-9a163f1b2a23?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      characters: ['narrator', 'dragon', 'mage'],
      dialogues: [
        {
          characterId: 'dragon',
          text: 'My strength is yours, mortal. Call, and I will come.',
        },
        {
          characterId: 'mage',
          text: 'A dragon as an ally… who would’ve thought?',
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
