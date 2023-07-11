class Authentification implements IAuth {
    login(username: string, password: string): string {
    if(username.length > 2 && password.length > 8) {return "zsefuh uwbv0wyvw"}
    return ""
    }
    signUp( username:string, password:string, firstName?:string , lastName?:string):boolean {
    if(username && password){
        return true;
    }
    return false;
}
    forgetPassword(email: string): string {
        return "";
    }
}