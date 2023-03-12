// TypeScript assumes uninitialized values as any by default
// any type can be more useful when we are converting existing javascript code base into typescript

let level;
level = 1;
level = "a";

// But in above code there is no benifit of using TypeScript because we will loose the features that TypeScript provides that's why we should always try to avoid any type

// In below function TypeScript compiler will throw an error related to the type 'any'
// function render(document) {
//     console.log(document);
// }

// To turn off the the error we can explicitely annotate the type of the function parameter
function render(document: any) {
    console.log(document);
}

// or else
// we can enable noImplicityAny option in tsconfig.json
