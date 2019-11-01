import PC_stats from '../components/data/characterStats';

export const myAlert = () => alert("hi from my functionDir alert")

export const customAlert = (custText) => alert(custText)

export function rollDie (dieType) {
    let result = Math.floor(Math.random() * dieType + 1);
  return result
}

export function rollJourneyTable() {
  //$("#gameTableText").html(`${playerCharacterStats.name} sets off on a journey and ...`)
  let storyText = `${PC_stats.name} sets off on a journey and ...`
  let titleText = ""

  console.log("roll on the journey table")
  PC_stats.turn++
  //updateNavbar()
  
  let journeyRoll = rollDie(6)
  
  if (PC_stats.wasLost) {
    journeyRoll++
    PC_stats.wasLost = false
  }
  
  //journeyRoll = 4
  //alert("The begin adventure button was clicked. You rolled: " + d6Roll);

  // Save turn data in the log (we'll push this to MySql at some point)
  //adventureLog.push({ 'turn': PC_stats.turn, 'roll': journeyRoll, 'result': journeyTable[journeyRoll - 1] });

  
  //$("#gameButtons").empty()
  
  switch (journeyRoll) {
    // crossroads
    case 1:
      //$("#gameTableTitle").append(" - Crossroads")
      titleText = " - Crossroads"
      crossroads()
      break;
    // Inn table or roll again
    case 2:
      //$("#gameTableTitle").append(" - Journey on or Stay at Inn")
      titleText = " - Journey on or Stay at Inn"
      journeyOrInn()
      break;
    // lost
    case 3:
      //$("#gameTableTitle").append(" - Lost!")
      titleText = " - Lost!"
      youAreLost()
      break;
    // Encounter
    case 4:
      //$("#gameTableTitle").append(" - An Encounter!")
      titleText = " - An Encounter!"
      rollEncounterTable()
      break;
    // Encounter or Challenge
    case 5:
      if (PC_stats.rebellionLevel > 3) {
        //$("#gameTableTitle").append(" - A Challenge!")
        titleText = " - A Challenge!"
        rollChallengeTable()
      } else {
        //$("#gameTableTitle").append(" - An Encounter!")
        titleText = " - An Encounter!"
        rollEncounterTable()
      }
      break;
    // Traitors or Challenge
    case 6:
      if (PC_stats.rebellionLevel > 3) {
        //$("#gameTableTitle").append(" - A Challenge!")
        titleText = " - A Challenge!"
        rollChallengeTable()
      } else {
        //$("#gameTableTitle").append(" - Traitors!")
        titleText = " - Traitors!"
        rollTraitorsTable()
      }
      break;
  }
};

// --- Crossroads ---
    
export function crossroads() {
  //$("#gameButtons").empty()
  //$("#gameTableText").empty()

  //$("#gameTableText").append(journeyTable[0])
  let bodyText = "You are at a crossroads."
  //$("#adventureLogTableBody").empty()
  // Inn or Encounter
  let rowString = `
    <div class="d-flex mt-2 justify-content-around">
    <button onclick="rollInnTable()" data-id="rollInnBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Go to Inn
    </button>
    <button onclick="startEncounter()" data-id="startEncounterBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Go To Encounter!
    </button>
    </div>
    `
  //$("#gameButtons").empty()
  //$("#gameButtons").html(rowString)
}

// --- Journey or Inn Choice---

export function journeyOrInn() {
  //$("#gameTableText").append(journeyTable[1])
  let bodyText = "You found an inn.  Bypass it?"
  
  let rowString = `
    <div class="d-flex mt-2 justify-content-around">
    <button onclick="rollJourneyTable()" data-id="rollJourneyBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Journey Onward!
    </button>
    <button onclick="rollInnTable()" data-id="rollInnBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Go to Inn
    </button>
    </div>
    `
  //$("#gameButtons").empty()
  //$("#gameButtons").html(rowString)  
}

// --- Roll on the Inn Table ---    

export function rollInnTable() {
  // Successfully completed side quests will modify this roll.
  // 1 quest = +1
  // 2-3 quests = +2
  // 4 or more = +3
  
  let modifier = 0
  switch (PC_stats.sideQuests) {
    case 0:
      modifier = 0
    break;
    case 1:
      modifier = 1
    break;
    case 2:
    case 3:
      modifier = 2
    break
    default:
      modifier = 3
  }
  
  //$("#gameTableTitle").html("Inn Table")
  let titleText = "A fine Inn..."
  
  let rowString = ""
  // clear the story div
  //$("#gameTableText").empty()
  PC_stats.findRetainerModifier = 0
  
  console.log("roll on the inn table")
  //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': 'Player Choice', 'result': 'Stay at the Inn' });
  let roll_1d6 = rollDie(6) + modifier;
  console.log("roll + modifier: " + roll_1d6)
  //roll_1d6 = 1
  
  //$("#gameTableText").append(innTable[roll_1d6 - 1])
  
  switch (roll_1d6) {
    case 1:
      console.log("[1] Your paladin is turned away!  Journey on...")
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': innTable[0] });
      //$("#gameTableText").append("Your paladin is turned away.")
      let bodyText = "Your paladin is turned away."
    break;
    case 2:
      bodyText = ""
      console.log("[2] Grumpy Patrons")
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Grumpy patrons' });
      PC_stats.rumors--
      //updateNavbar()
      let rowString = "Grumpy patrons (rumors -1)"
      if (PC_stats.numRetainers > 0) {
        let first_d6Roll = rollDie(6)
        let second_d6Roll = rollDie(6)
        let twoD6 = first_d6Roll + second_d6Roll
        if (twoD6 < 8) {
          // random retainer has been killed
          rowString += "<br>If that wasn't bad enough, one of your retainers has been killed in an ambush!"
          //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': twoD6, 'result': 'One of your retainers has been killed!' });
        }
      }
      //$("#gameTableText").append(rowString)
      bodyText += rowString
    break;
    case 3:
      console.log("[3] Shady Characters")
      //$("#gameTableText").append("Shady characters abound, making it hard to find good help. (-1 to the retainer roll)<br>")
      bodyText = "Shady characters abound, making it hard to find good help. (-1 to the retainer roll)<br>"
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Shady Characters.' });
      let first_d6Roll = rollDie(6)
      let second_d6Roll = rollDie(6)
      let twoD6 = first_d6Roll + second_d6Roll
      if (twoD6 < 6) {
        let first_d6Roll = rollDie(6)
        let second_d6Roll = rollDie(6)
        let third_d6Roll = rollDie(6)
        let threeD6 = first_d6Roll + second_d6Roll + third_d6Roll
        rowString = "Robbed!"
        rowString += "<br>You lose " + threeD6 + " silver pieces."
        //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'You have been robbed!' });
        PC_stats.money -= threeD6
        //updateNavbar()
        //$("#gameTableText").append(rowString)
        bodyText += rowString
      }
    break;
    case 4:
      console.log("[4] Greedy Traders")
      bodyText = ""
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Greedy traders.' });
      if (PC_stats.numMerchants < 1) {
        // items cost double. items sold for half
        console.log("Greedy traders. Items cost double and are sold for half!")
        //$("#gameTableText").append("Greedy Traders, everything costs double and everything you sell is at half the normal value!")
        bodyText = "Greedy Traders, everything costs double and everything you sell is at half the normal value!"
      } else {
        //$("#gameTableText").append("Greedy Traders but your merchant is able to counter them!")
        bodyText = "Greedy Traders but your merchant is able to counter them!"
      }
    break;
    case 5:
      //$("#gameTableText").append("Talkative innkeeper.  Add +1 to the Rumor Roll")
      bodyText = "Talkative innkeeper.  Add +1 to the Rumor Roll"
      console.log("[5] Talkative innkeeper")
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Talkative innkeeper.' });

      // this is not correct.  not automatic rumors.  but a roll to see if any and how many
      PC_stats.rumors++
      //updateNavbar()
      break;
    case 6:
      let num = rollDie(6)
      if (num < 6) {
        console.log("[6] Abundant Retainers looking for work")
        //$("#gameTableText").append("Abundant Retainers looking for work.  +1 to the Find Retainer Roll")
        bodyText = "Abundant Retainers looking for work.  +1 to the Find Retainer Roll"
        //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Add +1 to the Find Retainer roll.' });
        PC_stats.findRetainerModifier++
      } else {
        //$("#gameTableText").append("Nothing special happens this time.")
        bodyText = "Boring stay... Nothing special happens this time."
      }
    break;
    case 7:
      num = rollDie(6)
      if (num < 6) {
        console.log("[6] Free Food & Abundant Retainers looking for work!")
        //$("#gameTableText").append("Abundant Retainers looking for work.  +1 to the Find Retainer Roll")
        bodyText = "Abundant Retainers looking for work.  +1 to the Find Retainer Roll"
        //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Add +1 to the Find Retainer roll.' });
        PC_stats.findRetainerModifier++
      }
      //$("#gameTableText").append("<br>Free food and lodging!")
      bodyText = "<br>Free food and lodging!"
      console.log("[7] Free food and lodging!")
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Free food and lodging!' });
    break;
    case 8:
      console.log("[8] Wealthy patron donates to your cause!")
      //adventureLog.push({ 'turn': playerCharacter.turn, 'roll': roll_1d6, 'result': 'Wealthy nobel donates money to your cause!' });
      let money = 0
      for (let i=0; i<3; i++) {
        money += rollDie(6)
      }
      money = (5 * money)
      console.log("You gain: " + money + " silver pieces")
      //$("#gameTableText").append(`<p>You gain ${money} silver pieces! </p>`)
      bodyText = `<p>You gain ${money} silver pieces! </p>`
      PC_stats.money += money
      //updateNavbar()
    break;
  }
  //logTurn()
  rowString = `
    <div class="d-flex mt-2">
    <button onclick="rollJourneyTable()" data-id="rollJourneyBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Journey On
    </button>
    </div>`
  //$("#gameButtons").empty()
  //$("#gameButtons").html(rowString)

  // show button somehow
}

// --- You are lost ---
export function youAreLost() {
  //$("#gameTableText").append("<p>becomes lost!</p>")
  console.log("journeyTable[2]")
  let rowString = ""
  let bodyText = ""
  if (PC_stats.numMerchants == 0) {
    // roll again but with +1 to the roll
    // set wasLost to true which tells the journey table to add +1 to the journey roll
    //$("#gameTableText").append("<br>You have no choice but to continue on...")
    bodyText = "<br>You have no choice but to continue on..."
    PC_stats.wasLost = true
    rowString += `
    <div class="d-flex mt-2">
    <button onclick="rollJourneyTable()" data-id="rollLostBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Journey On
    </button>
    </div>`
    //$("#gameButtons").empty()
    //$("#gameButtons").html(rowString)
  } else {
    // go to the crossroads
    //$("#gameTableText").append("But luckily your Merchant friend knew a way to get you to an inn.")
    bodyText += "But luckily your Merchant friend knew a way to get you to an inn."
    
    rowString += `
    <div class="d-flex mt-2">
    <button onclick="crossroads()" data-id="rollLostBtn" type="button" class="btn btn-dark rounded-pill mx-2 btn-sm">
        <i class="mt-2"></i>
        Go to Crossroads
    </button>
    </div>`
    //$("#gameButtons").empty()
    //$("#gameButtons").html(rowString)
  }
}

export function rollEncounterTable() {

  console.log("Encounter Table")
}

export function rollChallengeTable() {

  console.log("Challenge Table")
}

export function rollTraitorsTable() {

  console.log("Traitors Table")
}