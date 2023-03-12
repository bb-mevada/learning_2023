// If we are not returning anything use void

// We can enable compiler option to detect unused parameters (noUnusedParameters)
// function calculateTax(income: number): number {
//     return 0;
// }

// In the below function we are just returning a value for the if part but that can cause bugs so to get the warning related to this issue we can enable another compiler option (noImplicitReturns)
// function calculateTax(income: number) {
//     if (income < 50_000) {
//         return income * 1.2;
//     }
//     // undefined
// }

// We should always mention return type
function calculateTax(income: number): number {
    // let x; // To detect unused variables we can enable (noUnusedLocals) setting
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 1.3;
}

function calculateTaxWithYear(income: number, taxYear: number): number {
    if (taxYear < 2023) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTaxWithYear(10_000, 2023);

// We can also make parameters optional like this
// taxYear?: number

// Default value for parameter
// taxYear = 2023
// taxYear: number = 2023
