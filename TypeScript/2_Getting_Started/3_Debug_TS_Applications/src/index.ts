/* Enabled Settings
1. sourceMap - This will create source map file inside outDir for the understanding of debuggers
*/

/* Steps to debug
1. Add Breakpoint - To debug the application we can add breakpoints, Here we will add the breakpoint at age variable declaration
2. Go to Run and Debug (Ctrl + Shif + D) inside VS Code
3. Click on create launch.json file
4. Select Node.js
5. Add "preLaunchTask": "tsc: build - {path_of_tsconfig.json}" key-value pair inside launch.json file
6. Click on Launch Program (F5)
7. We can use Step Over (F10) to move to the next line
8. All the variables will be showing up in Variables Section 
9. We can also watch specific variable by adding variable name to the watch section
10. We can Step Into function (F11)
11. We can Step Out of the function (Shift + F11)
*/

let age: number = 17;

if (age < 18) age += 1;
console.log(age);
