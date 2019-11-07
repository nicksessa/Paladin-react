# Paladin-react

This is a React version of my Paladin/GrailQuest game.

The objective of the game is to find the Holy Grail before the kingdom devolves into total anarchy due to the enemies of King Arthur, namely, Morgana and Mordred.

The gameplay revolves around tables from a pen and paper game called "Knight of Destiny" by Victor Jarmusz and Andrea Sfiligoi.  The combat uses a modified version taken from the old choose your adventure game "Grail Quest" by JH Brennan.

The inspiration for the look and feel of the game comes from another RPG style game called "The Boring RPG" which you can find online and in GitHub incidently.

## Purpose - Why did I create this in the first place?

I created this game for several reasons.

1. I have an interest in history, specifically the medieval period.
2. I like games, specifically games that revolve around knights, epic quests and things of that nature.
3. I intend to use this game as a fun (I hope) teaching tool for my son in an effort to get him off the poison that is Minecraft (and other online games).
4. I want to inspire people to read good literature.  (Amadis of Gaul, Don Quixote, Orlando Furioso, Orlando Innamorato, Song of Roland, The Divine Comedy, The Illiad and the Odyssey, the Holy Bible and more)


## Gameplay

As the player's character progresses in the game, key stats are updated in the top Navbar.  These include the name of the character, hit points (health), piety, money, rebellion level, etc.

To win the game, the questing knight (paladin) must find the Holy Grail before the Rebellion Level gets to 5.

The Navbar also has buttons to allow the user to view additional character stats, retainers, inventory, etc.  The "Healing Potions" Navbar button displays the total potions available and allows them to be used by the character to heal up as needed.

The body of the page has three main divs.

1. "eventTitle" is the div where the title of the current event goes.  It will display text such as "Journey on" or "Encounter", etc.
2. "eventBody" is the div where information about the current event goes.  
3. "eventBtns" is where the buttons go.  This allows the user to dynamicaly decide where to go during the adventure.

The side menu allows the user to Sign In and/or Register their account so that their character's information can be saved to a database.  This would allow uers to be able to continue their progress on different computers or in different incognito browser windows.



## Technical Details

### 1. React

This application uses React to render the components.

### 2.Database: MySql

It has a connection to a MySql database for users to create accounts or to log in.

However, this connection is only partially functional.

To Do: 

1. Fix the connection issue.
2. Allow the user to store character data in the database.

### 3. MVC Structure

The application has an MVC structure

### 4. Libraries Utilized

This app requires React of course in addition to Node and Express.  Bootstrap is used for a lot of the CSS related things such as positioning and styling.

This application also uses Cryptr to encrypt the user's password upon the creation of a new account.
It uses Bootstrap-React for buttons and modals.

### 5. Routing

Simple routing but needs a lot of work.

To Do: 

1. Add routes to display character information
2. Add routes to display enemy NPC information
3. Add routing to display quest log

### 6. Deployment

This application is not deployed anywhere.  While I'd like to deploy it to Heroku, I currently don't understand the steps to make this happen despite my utilization of Heroku in previous projects.  I do not understand how to go from the Dev environment to a Production build.


## Additional To Do's

1. Save/load progress/character info via local Storage
2. Save/load progress/character info via database
3. Incorporate the combat system into the game from the non-React version
4. Add functionality for the Retainers
5. Add functionality for the inventory/store
6. Add more game tables and decisions to complete the core game
7. Add a page that displays NPC data including portraits
8. Change background image when traveling to different areas.  For example, display a picture of an Inn when staying at an Inn.  Display a castle when adventuring in Castle Perilous, etc.
9. Display some sort of graphic when the player's character dies.
10. Display a list of living and dead characters.
11. Keep track of "kills"
12. Create a Constructor for NPCs (and PCs?) to make their creation easier and more effecient.


## Notes

The worst thing about this project was learning React.  It seemed as though I only progressed at a snail pace throughout this entire project.

The second worst thing about this project was understanding Routing.  I still do not understand how it works.

The most fun thing about this project was working with the actual logic of the game.  If this project were built soley in Bootstrap JavaScript, then it would have been a lot more fun AND I would have a product that was much more finished!

## Things I learned:

I learned a little about things like 'state' and 'props'.  

I sort of learned how to render components conditionally which is huge.  It seems to me that having the ability to dynamically render components conditionaly is one of the key things a developer would have to know.

ES6 template literals was my favorite thing I learned in my non-React version of the game.  I found it of limited use in the React version however.

Calling (importing) a JavaScript object seems to be a way to handle "global" variables without using something like Redux.  For example, passing data between sibling components is difficult in React unless you have a common parent object/class.  However, if you put data into an object that is imported by both siblings, then you can use that to store key variables and data.

I still maintain that I really know next to nothing about this stuff in particular and life in general :-)




















