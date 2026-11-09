// type of

let x : number = 123

console.log(typeof x === "number");

// type guard 

const typeValue = (value : string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase
    }

    else if (typeof value === "number") {
        return value
    }
    else {
        return value
    }
}

console.log(typeValue("Kamal"));
console.log(typeValue(80));

const getValue = (value :string | number) => {
    if (typeof value === "number") {
        return value.toFixed(1)
    }
    else {
        return value
    }
}

console.log(getValue(45.5565));
console.log(getValue("Mezba"));

// Truthiness

type User = {
    name : string,
    age : number,
    address : {
        houseName : string
    }
} | null

const user : User = {
    name : "Mezba Morsalin",
    age : 24,
    address : {
        houseName : "Monjil"
    }
}

const getUser = (user : User) => {
    if (user) {
        console.log(user.address);
        return
    }
    throw new Error("User Doesn't Exist")
}

getUser(user)


type Player = {
    name : string,
    age : number,
    club? : {
        clubName : string[]
    },
    goals : number,
    retired : boolean
} | null

const player : Player = {
    name : "Neymar Jr",
    age : 34,
    club : {
        clubName : ["Santos", "Barcelona", "Paris Saint Germain"]
    },
    goals : 80,
    retired : true
}

const getPlayer = (player : Player) => {
  
        if (player) {
            console.log(player.name);

            if (player && player.club) {
        console.log(player.club.clubName);
    }
    return;
        } 

    throw new Error("Player Information False")
}

getPlayer(player)


// Caveat typeof

const printAll = (x : string | string[] | null) => {
    if (x && typeof x === "object") {
        for(const value of x) {
            console.log(value);
        }
    }
    else if (typeof x === "string") {
        console.log(x);
    }
    else {
        console.log("");
    }
}

printAll(null)


// Equal narrowing

const equalValue = (x : number | string , y : number | boolean) => {
    if (x === y) {
        console.log(x, y);
        return
    }
}

equalValue(5, 6)

const moreEqual = (x : string | string[] | null) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let value of x) {
            console.log(value);
        }
        return
        }
        console.log(x);
        return
    }
    
        console.log("");
}

moreEqual("Mezba")

// in type

type Bird = {
    fly : () => void
}

type Fish = {
    swim : () => void;
}

const bird : Bird = {
    fly : () => console.log("Bird is Flying")
}
const fish : Fish = {
    swim : () => console.log("Fish is Swimming")
}

const getAnimals = (animal : Bird | Fish) => {
    if ("fly" in animal) {
        console.log(animal.fly);
        return;
    }
    console.log(animal.swim);
}

getAnimals(bird)
getAnimals(fish)


// Instance of 

const date = new Date();
const err = new Error("Something Went Wrong")

console.log(date instanceof Date);
console.log(err instanceof Error);


const checkInstance = (value : Date | string) => {
    if (value instanceof Date) {
        console.log(value.toISOString());
        return;
    }
    const date = new Date(value);
    console.log(date.toISOString());
}
checkInstance("2026-11-16")


const dateInstance = (value : Date | string) => {
    if (value instanceof Date) {
        console.log(value.toISOString());
        return;
    }

    const date = new Date(value);
    console.log(date.toISOString());
}

dateInstance(new Date("2026-11-09"))


// Discriminated Union

interface Circle {
    kind : "circle",
    radius : number
}

interface Square {
    kind : "square",
    sideLength : number
}

type Shape = Circle | Square

const checkShape = (shape : Shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
        return;
    }

    console.log(shape.sideLength);
}

checkShape({
    kind: "circle",
    radius: 10
});

checkShape({
    kind: "square",
    sideLength: 20
});