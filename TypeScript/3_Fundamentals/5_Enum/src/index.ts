const small = 1;
const medium = 2;
const large = 3;

// We can declare three variables as declared above or instead we can declare a enum

// As a convention name of the enum shold be in PascalCase
// By default typescript assign Small: 0, Medium: 1, Large: 2 to enum variables if we don't explicitely provide the values

enum Size {
    Small, // 0
    Medium, // 1
    Large, // 2
}

enum Size1 {
    Small = 1,
    Medium, // 2
    Large, // 3
}

enum Size3 {
    Small = "s",
    Medium = "m",
    Large = "l",
}

// How to access enum values
let mySize: Size = Size.Medium;
console.log(mySize);

// declaring enum with const keyword will reduce the lines of code for generated javascipt

// This will generate less loc
const enum Size4 {
    Small = "s",
    Medium = "m",
    Large = "l",
}
let mySize2: Size4 = Size4.Medium;
console.log(mySize2);
