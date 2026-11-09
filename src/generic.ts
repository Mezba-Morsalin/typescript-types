// Basic Generic

const inArray = <T> (value: T) => {
    return [value]
}

const strArr = inArray("Mezba")
const numArr = inArray(123/5);

strArr.map((item) => item.toUpperCase())

numArr.map((item) => item.toFixed(2))

console.log(strArr);
console.log(numArr);
