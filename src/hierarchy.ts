// Top Types

let get : any = "Mezba"
get = 256

const totalLength = get.length
console.log(totalLength);

let name : unknown = "Morsalin"

name = 489

console.log(name);

// Core Types

const myName : string = "Mezba Morsalin";

let age : number = 24

const isHuman : boolean = true ;

console.log(`The Name is ${myName} and, age is ${age}, He is a ${isHuman} Person`);

// Unit Types

const details = (value : number) => {
    console.log(value);
}

details(656);

// Sub Unit Types

const detailsTwo = () => {
    return undefined
}

detailsTwo()


// Null Types

interface Goals {
    goals : number
}

type totalGoals = Goals | null

let goal: totalGoals = null

console.log(goal);


// Bottom Types

const errFunction = (msg: string): never => {
    throw new Error(msg);
};

try {
    errFunction("Never Types");
} catch (error) {
    console.log(error);
}
