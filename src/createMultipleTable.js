const isValidNumber = require('../src/isValidNumber')
const createMultipleString = require('../src/createMultipleString')

function createMultipleTable(start, end){
    if(isValidNumber(start,end)){
        return createMultipleString(start, end);
    }
}

module.exports = createMultipleTable