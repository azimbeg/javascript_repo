
/* Let's consider a scenario where you have an array of teams in a sports league, 
and you want to create a function that takes a team name and an array of additional teams, 
adds the new team to the existing array, and returns a new array with all the teams. 
Use the rest operator to collect the additional teams into an array and the spread operator 
to combine arrays.*/

const initialTeams = ["Team A", "Team B", "Team C"];

const teamName = (...addNewTeam)=>{
    let combineTeam = [...initialTeams,...addNewTeam];
    return combineTeam;
}

let team1 = teamName("Team D","Team E");
console.log(team1);