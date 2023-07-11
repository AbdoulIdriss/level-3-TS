interface IAuth {
    login(username: string, password: string): string;
    signUp( username:string, password:string, firstName?:string , lastName?:string):boolean;

    verifyAccount?(email:string):boolean;

    //method signature 
    forgetPassword (email:string):string;
    forgetPassword (email:string , password:string):string;
    forgetPassword (email:string, password:string, isActive:boolean):string;
}