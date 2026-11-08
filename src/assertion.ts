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