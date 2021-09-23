import { Affair } from "./Affair";
import { Member } from "./Member";

export class Organization{
    name : string;

    affairs : Affair[];
    members : Member[];

    constructor (Name : string){
        this.name = Name;
        this.affairs = [];
        this.members = [];
    }

    addAffairToOrg(affair : Affair){
        this.affairs.push(affair);
    }

    toString = function () {
        return this.name;
    };

    addMemToOrg(member : Member){
        this.members.push(member);
    }
}