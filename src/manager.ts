import { Affair } from './Affair';
import { Member } from './Member';
import { Organization } from './Organization';

export class AffairManager{
    allMembers : Member[];
    allAffairs : Affair[];
    allOrganizations : Organization[];

    constructor(){
        this.allMembers = [];
        this.allAffairs = [];
        this.allOrganizations = [];
    }

    //register a member
    addMember(name : string, email : string){
        this.allMembers.push(new Member(name, email));
    }

    //adds an affair
    addAffair(affairName : string, zipcode : string, date : string){        
        let zip = Number(zipcode);
        this.allAffairs.push(new Affair(affairName, zip, date));
        
    }

    //adds an organization
    addOrganization(name : string){
        this.allOrganizations.push(new Organization(name));
    }


    addMemberToAffair(memberName : string, affairName : string){
        var Mindex = -1;
        for(var i = 0; i < this.allMembers.length; i++){
            if(this.allMembers[i].name == memberName)
                Mindex = i;
        }

        var Aindex = -1;
        for(var i = 0; i < this.allAffairs.length; i++){
            if(this.allAffairs[i].name == affairName)
                Aindex = i;
        }

        const isNotequal = (currentval) => currentval != this.allMembers[Mindex];
        if(Mindex != -1 && Aindex != -1 && this.allAffairs[Aindex].members.every(isNotequal))
            this.allAffairs[Aindex].addMemberToAffair(this.allMembers[Mindex]);
    }

    search(arr, query : string) : string[]{
        function isEq(name){
            return name == query;
        }
        return arr.filter(isEq);
    }
    
    findMemberNames(query : string) : string[]{
        return this.search(this.allMembers, query);
    }

    findAffairNames(query: string) : string[]{
        return this.search(this.allAffairs, query);
    }

    findOrganizationNames(query: string) : string[]{
        return this.search(this.allOrganizations, query);
    }

    modifyAffair(affairName : string, newTitle : string, newTime : string){
        this.allAffairs.forEach(element => {
            if( element.name == this.search(this.allAffairs, affairName).toString()){
                if(newTitle != undefined)
                element.name = newTitle;
                if(newTime != undefined)
                element.time == newTime;
            }
        });
        ;
    }

    addAffairToOrganization(affairName : string, organizationName : string){        
        var Aindex = -1;
        for(var i = 0; i < this.allAffairs.length; i++){
            if(this.allAffairs[i].name == affairName)
                Aindex = i;
        }

        var Oindex = -1;
        for(var i = 0; i < this.allOrganizations.length; i++){
            if(this.allOrganizations[i].name == organizationName)
                Oindex = i;
        }

        const isNotequal = (currentval) => currentval != this.allAffairs[Aindex];
        if(Oindex != -1 && Aindex != -1 && this.allOrganizations[Oindex].affairs.every(isNotequal))
            this.allOrganizations[Oindex].addAffairToOrg(this.allAffairs[Aindex]);
    }

    getMembers(affairName : string) : String[]{        
        let memArr :String[] = [];

        this.allAffairs.forEach(element => {
            if( element.name == this.search(this.allAffairs, affairName).toString()){
                element.members.forEach(member => {                    
                    memArr.push(member.name + ": " + member.email);
                })
            }
        });    

        return memArr;
    }

    addMemberToOrganization(memberName : string, organizationName : string){
        var Mindex = -1;
        for(var i = 0; i < this.allMembers.length; i++){
            if(this.allMembers[i].name == memberName)
                Mindex = i;
        }

        var Oindex = -1;
        for(var i = 0; i < this.allOrganizations.length; i++){
            if(this.allOrganizations[i].name == organizationName)
                Oindex = i;
        }

        const isNotequal = (currentval) => currentval != this.allMembers[Mindex];
        if(Mindex != -1 && Oindex != -1 && this.allOrganizations[Oindex].members.every(isNotequal))
            this.allOrganizations[Oindex].addMemToOrg(this.allMembers[Mindex]);
    }

    getMembersOfOrg(organizationName : string){
        let memArr :String[] = [];

        this.allOrganizations.forEach(element => {
            if( element.name == this.search(this.allOrganizations, organizationName).toString()){
                element.members.forEach(member => {                    
                    memArr.push(member.name + ": " + member.email);
                })
            }
        });    

        return memArr;
    }
}

