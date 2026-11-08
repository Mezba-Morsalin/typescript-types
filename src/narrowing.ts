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