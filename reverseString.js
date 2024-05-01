const reverseString = function(string) {
    const splitString = string.split("");
    let reversedString = "";

    for (let i = splitString.length - 1; i >= 0; i--) {
        reversedString += splitString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
