// Literal Type

type UserName = "Mezba Morsalin"
const userName : UserName = "Mezba Morsalin"

console.log(userName);

// Basic Union

type UserIdentity = string | number
const userIdentity : UserIdentity = "Full-Stack Developer"

console.log(userIdentity);

// Literal Union

type UserRole = "Junior" | "Mid" | "Senior"
const userRole : UserRole = "Junior"

console.log(userRole);

// Object Union

type Manager = {id : number, role : string, isAvailable : boolean}
type Hr = {id : number, role : string, isAvailable : boolean}

type User = Manager | Hr

const userDetails : User = {id : 56, role : "Manager", isAvailable : true }

console.log(userDetails);