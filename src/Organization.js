"use strict";
exports.__esModule = true;
exports.Organization = void 0;
var Organization = /** @class */ (function () {
    function Organization(Name) {
        this.toString = function () {
            return this.name;
        };
        this.name = Name;
        this.affairs = [];
        this.members = [];
    }
    Organization.prototype.addAffairToOrg = function (affair) {
        this.affairs.push(affair);
    };
    Organization.prototype.addMemToOrg = function (member) {
        this.members.push(member);
    };
    return Organization;
}());
exports.Organization = Organization;
