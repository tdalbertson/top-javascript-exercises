const removeFromArray = function(array, ...itemToRemove) {
    for (let i = 0; i < itemToRemove.length; i++) {
        while (array.includes(itemToRemove[i])) {
            array.splice(array.indexOf(itemToRemove[i]), 1);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
