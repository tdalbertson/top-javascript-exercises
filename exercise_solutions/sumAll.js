const sumAll = function(num1, num2) {
    let startNumber = 0;
    let endNumber = 0;

    try {
        if (typeof num1 !== "number" || typeof num2 !== "number") throw "ERROR";
        if (num1 < 0 || num2 < 0) throw "ERROR";
    } catch (error) {
        return error;
    }
    
    if (num1 < num2) {
        startNumber = num1;
        endNumber = num2;

    } else {
        startNumber = num2;
        endNumber = num1;
    }
    
    let sum = 0;
    for (let i = startNumber + 1; i <= endNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
