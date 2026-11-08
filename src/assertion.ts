// as syntax

type Status = "pending" | "approved" | "cancelled"

const someStatus : string = "pending"

const showStatus = (stats : Status) => {
    console.log(`The Value of Status is ${stats}`);
}

const getStatus = showStatus(someStatus as Status)

console.log(getStatus);