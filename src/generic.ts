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

// interface Generic

interface User {
    name : string,
    role : string,
    serial : number
}

interface Blog {
    title : string,
    description : string,
    date : string
}

interface ApiResponse <T>{
    data : T,
    success : boolean,
    statusCode : number
}

type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>

const userResponse : UserResponse = {
    success : true,
    statusCode : 201,
    data : {
        name : "Mezba",
        role : "Developer",
        serial : 23
    }
}

const blogResponse : BlogResponse = {
    success : true,
    statusCode : 204,
    data : {
        title : "TypeScript",
        description : "TypeScript is a free, open-source programming language developed by Microsoft that builds on JavaScript by adding static typing.",
        date : "09 November 2026"
    }
}


console.log(userResponse);
console.log(blogResponse);