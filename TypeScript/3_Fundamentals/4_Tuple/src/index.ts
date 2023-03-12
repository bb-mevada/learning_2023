// It is useful when need pair of values

// 1, Bhavesh
let user: [number, string] = [1, "Bhavesh"];
user[0]; // We can access all the methods of number type using .
user[1]; // We can access all the methods of string type using .

// Internally tuples are javascript arrays
// As a best practice we should restrict the use of tuples for storing only two values

// Be aware with push method as it is allowing to push inside the tuple which should not be the case. So avoid it
// user.push(1);
console.log(user);
