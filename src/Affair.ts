import { Member } from './Member';

export class Affair{
    name : string;    
    zipcode : number;
    time : string;

    members : Member[];

    constructor (Name : string, Zipcode : number, Time : string){
        this.name = Name;        
        this.zipcode = Zipcode;
        this.time = Time;

        this.members = [];
    }

    addMemberToAffair(m : Member){
        this.members.push(m);
    }

    toString = function () {
        return this.name;
    };
}