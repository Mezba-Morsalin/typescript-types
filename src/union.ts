// Literal Type

type Status = "pending"

const status : Status = "pending"

console.log(status);

// Basic Union

type Identity = string | number

const id : Identity = "Frontend Developer"

console.log(id);

// Literal Union

type Role = "Manager" | "Instructor" | "Developer"

const role : Role = "Developer"

console.log(role);

// Object Union
type Admin = {userId : number, useRole: "admin", privileges : string[] }
type manager = {userId : number, useRole: "manager", plan : string [] }

type User = Admin | manager

const user : User = {userId : 234, useRole : "manager", plan : ["Manager Plan"]}
console.log(user);