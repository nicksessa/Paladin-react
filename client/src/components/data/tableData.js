export let journeyTable = [
    "You have found an inn at a Crossroads. You may choose to stay at the inn or face the danger that awaits. Choose wisely.",
    "You have found an inn.  You may choose to stay at the inn or or bypass it by clicking on the Journey On button.",
    "You are lost! If you have a Merchant retainer, he knows of a shortcut, treat as a result of 1 on this table instead. If you don not have a merchant, roll on this table again with a +1.",
    "Roll on the Encounter Table (3).",
    "If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Encounter Table (3).",
    "If the Rebellion Level is 4, roll on the Challenge Table (7). Otherwise, roll on the Traitors Attack Table (4)."
  ]
 
  export let innTable = [
    "Your paladin is turned away, roll on the Journey Table (1) again.",
    "Roll 2d6. If the result is 7 or less one of your retainers (if any) is killed in an ambush by ruffians. (randomly choose which one) Deduct -1 from the Rumor Roll. No new retainers are available.",
    "Roll 2d6. If the result is 5 or less, if you have coins, 3d6gp is stolen by a pickpocket. Deduct -1 from the Find Retainer roll.",
    "Greedy traders, all items cost double, and you sell treasures at half their value. Ignore this if you have a merchant retainer.",
    "Talkative innkeeper. Add +1 to the Rumor Roll.",
    "Add +1 to the Find Retainer roll if the roll is 5 or less.",
    "You get free food and lodging. Add +1 to the Find Retainer roll if the roll is 5 or less. New retainers are hired for 5gp.",
    "A wealthy noble donates 3d6 x 5gp to your worthy cause."
  ]
 
 export let traitorsTable = [
    "You hear that a questing paladin has been killed by the traitors in a distant location. The Rebellion Level has increased!",
    "You find a questing paladin, mortally wounded by the traitors. Before he dies, he gives you some information. You have gained one rumor but the Rebellion Level has also increased!",
    "There are signs of a brave fight, but no dead questing paladin. This was a lucky escape, the traitors did not get their kill."
  ]
 
 export const encounterTable = {
    2: "Morgana",
    3: "Castle Perilous",
    4: "Village of Plague and Death",
    5: "Grail Castle",
    6: "Minions",
    7: "A Knight Issues a Challenge!",
    8: "Minions",
    9: "A Heroic Quest",
    10: "Village of Poverty and Famine",
    11: "Test of Piety",
    12: "Merlin"
  }
    
  export let castlePerilousTable = [
    "The White Knight. In a room you see a white shield with red cross, the Shield of Evalach. It is guarded by a white† knight, level 7 with 8 life points. No quarter is asked or given. If you defeat the white knight, you may take the shield and get one XP roll. If you already have the shield, roll on this table again.",
    "Penance. You fall asleep. If you committed an act of Dishonor during the game, you wake up outside an abandoned church. Any armor, shield and weapon you had are stolen (except magical ones), and you are left with only a dagger (light slashing weapon). Treasures, coins and retainers remain with you. Otherwise, you heal 1 life point for a good night’s sleep.",
    "The Wanderer. You meet an immortal, over 1,000 years old. If you are currently under Dishonor, it is removed. He takes you to a crossroads, treat as if a 1 was rolled on the Inn Table (2)",
    "The Black Knight or the Red Knight? Opening a door you see two scenes. First: A questing paladin is about to be killed by a black† knight . Second: A maiden is about to be attacked by a red† knight . Choose who to save. If you save the maiden, roll for a piety point, but the Rebellion Level increases by 1 as the questing paladin dies. If you save the questing paladin, do not increase the Rebellion Level. You only fight one of the knights; they are both level 7 with 8 life points. You get an XP roll if you win. No quarter is asked or given. There is no treasure. ",
    "The Hermit. You meet an old hermit who can sell you up to 3 rumors for 50gp each (or at least that value in treasure).",
    "The Dwarf. At the castle gate, a dwarf with a cart offers you a lift. If you pay him 50 gold pieces (or at least that value in treasure), you, along with retainers, can be taken to any quest of your choice from the Side Quest Table (9). You can also ride for free, roll a d6; on a 1-3 go to event 7, and on a 4-6 go to event 9 on the Encounter Table (3)."
  ]
  
