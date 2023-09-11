console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()


console.log(gameObjext());
{
    home: {
        teamName: 
        colors: [ ]
        plrayers: {
            "Alan Anderson": {0},
            "Reggie Evans": {30}
        }
    }
    
    'away': {
      
      }
   
    }


function homeTeaamName () {
    let object = hameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());
logs "Brooklyn Nets"


f//unction 
//The top level of the object has two keys: "home", for the home team, and "away", for the away team.
//The values of the "home" and "away" keys are objects too. These objects have the following keys:
//"teamName"
//"colors"
//players"
//The teamName key points to a string of the team name.
//The colors key points to an array of strings that are that team's colors.
//The players key points to an object of players whose names (as strings) are the keys to an object containing their stats. The values for each player's names and their stats can be found in the table below. The stats keys should be formatted like this:
//"number"
//"shoe"
//"points"
//"rebounds"
//"assists"
//"steals"
//"blocks"
//"slamDunks"


//
// src/02-advanced-debug.js
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger;
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger;

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player;
      for (let key in data) {
        debugger;
      }
    }
  }
}
playerStats("Alan Anderson")
//returns:
{
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12, assists:12.
  steals: 3,
  blocks:1
  slamDunks:1
}


function gameObject() {
  let gameObj = {};

  // Add home team details
  gameObj.home = {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      // Add other home team players here...
    },
  };

  // Add away team details
  gameObj.away = {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      // Add other away team players here...
    },
  };

  return gameObj;
}

console.log(gameObject());



//Bonus Questions
//Define functions to return the answer to the following questions:

////Which player has the most points? Call function mostPointsScored.
////Which team has the most points? Call the function winningTeam.
//Which player has the longest name? Call the function playerWithLongestName.
//Super Bonus
//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.