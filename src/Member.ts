export class Member{
    name : string;
    email : string;

    constructor (Name : string, Email : string){
        this.name = Name;
        this.email = Email;
    }

    toString = function () {
        return this.name;
    };
}