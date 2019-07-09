function isValidNumber(start, end){
    return start <= end && start > 0 && end <= 1000 ? true : null;
}
module.exports = isValidNumber