"use strict";
function calculateTax(income) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
function calculateTaxWithYear(income, taxYear) {
    if (taxYear < 2023) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTaxWithYear(10000, 2023);
