//Built in types
//built-in type derivators

//Defining a union type
let username: string | number;
username:""
username: 5;
//PArtial => makes all props optional 
type User = {
    name:string;
    age:number;
    gender:string;
}
type Man = Partial<User>; //man has all the User props by they are optional

//pick => selects the specified to create a new type
type Woman = Pick<User, "gender" | "age">; //here it is gender and age (not gender or age)

let jane: Woman = {
    gender:"female",
    age: 2
}

//omit => leaves out te specified to create a new type
type Mamal = Omit<User, "age">