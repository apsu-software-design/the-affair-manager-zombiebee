"use strict";
exports.__esModule = true;
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(Name, Email) {
        this.toString = function () {
            return this.name;
        };
        this.name = Name;
        this.email = Email;
    }
    return Member;
}());
exports.Member = Member;
