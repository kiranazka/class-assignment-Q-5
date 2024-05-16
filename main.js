function calculator(var1, var2, operator) {
    if (operator === "+") {
        return var1 + var2;
    }
    else if (operator === "-") {
        return var1 - var2;
    }
    else if (operator === "*") {
        return var1 * var2;
    }
    else if (operator === "/") {
        return var1 / var2;
    }
}
console.log(calculator(19, 25, "+"));
