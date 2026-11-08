// as syntax

type Status = "pending" | "approved" | "cancelled"

const someStatus : Status = "pending"

const showStatus = (stats : Status) => {
    console.log(`The Value of Status is ${stats}`);
}
 showStatus(someStatus)



type ExpectedStatus = 4 | 5 | 6

const countStatus : number = 5

const showCountStatus = (count : ExpectedStatus) => {
    console.log(`The Count Status is ${count}`);
}

showCountStatus(countStatus as ExpectedStatus)


// No Null Assertion

const userName : string | null = "Mezba"

console.log(userName!.length);


interface UserDetails {
    name : string,
    age : number
}

let user : UserDetails | null = {
    name : "Mezba Morsalin",
    age : 24
}


console.log(user!.name);


interface PlayerGoals {
    goals?: number
}

const playerGoals : PlayerGoals = {
    goals : 80
}

const countedGoals : number = playerGoals.goals!

console.log(countedGoals);