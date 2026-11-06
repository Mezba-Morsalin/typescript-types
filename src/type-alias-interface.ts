type School = "Uttara High School" | 1564

const school : School = "Uttara High School"

interface SchoolName  {
    school : string,
    students : number,
    isAdmission : boolean
}

const schoolName : SchoolName = {
    school : "Uttara High School",
    students : 1260,
    isAdmission : true
}

console.log(schoolName);


// interface extends
interface PlayerName {
    name : string
}

interface PlayerGoal extends PlayerName {
    goals : number
}

const playerDetails : PlayerGoal = {
    goals : 80,
    name : "Neymar Jr"
}

console.log(playerDetails);


// type alias and &
type PlayerFirstClub = {
    clubName : string,
}

type ClubYearsPlayed = PlayerFirstClub & {
    year : string | number
}

const playerClubDetails : ClubYearsPlayed = {
    clubName : "FC Barcelona",
    year : "2013-2017"
}

console.log(playerClubDetails);


//  if same name interface it can be merge easily
interface ClubName {
    name : string
}

interface ClubName {
    trophy : number
}

const clubName : ClubName = {
    name : "Real Madrid",
    trophy : 15
}

console.log(clubName);


// but type alias can't get to merge by same name