"use strict";
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 1] = "Small";
    Size1[Size1["Medium"] = 2] = "Medium";
    Size1[Size1["Large"] = 3] = "Large";
})(Size1 || (Size1 = {}));
var Size3;
(function (Size3) {
    Size3["Small"] = "s";
    Size3["Medium"] = "m";
    Size3["Large"] = "l";
})(Size3 || (Size3 = {}));
let mySize = Size.Medium;
console.log(mySize);
let mySize2 = "m";
console.log(mySize2);
