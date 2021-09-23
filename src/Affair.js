"use strict";
exports.__esModule = true;
exports.Affair = void 0;
var Affair = /** @class */ (function () {
    function Affair(Name, Zipcode, Time) {
        this.toString = function () {
            return this.name;
        };
        this.name = Name;
        this.zipcode = Zipcode;
        this.time = Time;
        this.members = [];
    }
    Affair.prototype.addMemberToAffair = function (m) {
        this.members.push(m);
    };
    return Affair;
}());
exports.Affair = Affair;
