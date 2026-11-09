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