"use strict";
exports.__esModule = true;
exports.AffairManager = void 0;
var Affair_1 = require("./Affair");
var Member_1 = require("./Member");
var Organization_1 = require("./Organization");
var AffairManager = /** @class */ (function () {
    function AffairManager() {
        this.allMembers = [];
        this.allAffairs = [];
        this.allOrganizations = [];
    }
    //register a member
    AffairManager.prototype.addMember = function (name, email) {
        this.allMembers.push(new Member_1.Member(name, email));
    };
    //adds an affair
    AffairManager.prototype.addAffair = function (affairName, zipcode, date) {
        var zip = Number(zipcode);
        this.allAffairs.push(new Affair_1.Affair(affairName, zip, date));
    };
    //adds an organization
    AffairManager.prototype.addOrganization = function (name) {
        this.allOrganizations.push(new Organization_1.Organization(name));
    };
    AffairManager.prototype.addMemberToAffair = function (memberName, affairName) {
        var _this = this;
        var Mindex = -1;
        for (var i = 0; i < this.allMembers.length; i++) {
            if (this.allMembers[i].name == memberName)
                Mindex = i;
        }
        var Aindex = -1;
        for (var i = 0; i < this.allAffairs.length; i++) {
            if (this.allAffairs[i].name == affairName)
                Aindex = i;
        }
        var isNotequal = function (currentval) { return currentval != _this.allMembers[Mindex]; };
        if (Mindex != -1 && Aindex != -1 && this.allAffairs[Aindex].members.every(isNotequal))
            this.allAffairs[Aindex].addMemberToAffair(this.allMembers[Mindex]);
    };
    AffairManager.prototype.search = function (arr, query) {
        function isEq(name) {
            return name == query;
        }
        return arr.filter(isEq);
    };
    AffairManager.prototype.findMemberNames = function (query) {
        return this.search(this.allMembers, query);
    };
    AffairManager.prototype.findAffairNames = function (query) {
        return this.search(this.allAffairs, query);
    };
    AffairManager.prototype.findOrganizationNames = function (query) {
        return this.search(this.allOrganizations, query);
    };
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
        var _this = this;
        this.allAffairs.forEach(function (element) {
            if (element.name == _this.search(_this.allAffairs, affairName).toString()) {
                if (newTitle != undefined)
                    element.name = newTitle;
                if (newTime != undefined)
                    element.time == newTime;
            }
        });
        ;
    };
    AffairManager.prototype.addAffairToOrganization = function (affairName, organizationName) {
        var _this = this;
        var Aindex = -1;
        for (var i = 0; i < this.allAffairs.length; i++) {
            if (this.allAffairs[i].name == affairName)
                Aindex = i;
        }
        var Oindex = -1;
        for (var i = 0; i < this.allOrganizations.length; i++) {
            if (this.allOrganizations[i].name == organizationName)
                Oindex = i;
        }
        var isNotequal = function (currentval) { return currentval != _this.allAffairs[Aindex]; };
        if (Oindex != -1 && Aindex != -1 && this.allOrganizations[Oindex].affairs.every(isNotequal))
            this.allOrganizations[Oindex].addAffairToOrg(this.allAffairs[Aindex]);
    };
    AffairManager.prototype.getMembers = function (affairName) {
        var _this = this;
        var memArr = [];
        this.allAffairs.forEach(function (element) {
            if (element.name == _this.search(_this.allAffairs, affairName).toString()) {
                element.members.forEach(function (member) {
                    memArr.push(member.name + ": " + member.email);
                });
            }
        });
        return memArr;
    };
    AffairManager.prototype.addMemberToOrganization = function (memberName, organizationName) {
        var _this = this;
        var Mindex = -1;
        for (var i = 0; i < this.allMembers.length; i++) {
            if (this.allMembers[i].name == memberName)
                Mindex = i;
        }
        var Oindex = -1;
        for (var i = 0; i < this.allOrganizations.length; i++) {
            if (this.allOrganizations[i].name == organizationName)
                Oindex = i;
        }
        var isNotequal = function (currentval) { return currentval != _this.allMembers[Mindex]; };
        if (Mindex != -1 && Oindex != -1 && this.allOrganizations[Oindex].members.every(isNotequal))
            this.allOrganizations[Oindex].addMemToOrg(this.allMembers[Mindex]);
    };
    AffairManager.prototype.getMembersOfOrg = function (organizationName) {
        var _this = this;
        var memArr = [];
        this.allOrganizations.forEach(function (element) {
            if (element.name == _this.search(_this.allOrganizations, organizationName).toString()) {
                element.members.forEach(function (member) {
                    memArr.push(member.name + ": " + member.email);
                });
            }
        });
        return memArr;
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
