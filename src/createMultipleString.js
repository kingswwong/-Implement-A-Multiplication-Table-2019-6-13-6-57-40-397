function createMultipleString(start, end) {
    let result = "";
    for(let i = start;i <= end;i++){
        for(let j = start;j <= i;j++){
            result += j + "*" + i + "=" + i*j;
            if(j != i){
                result += "\t";
            }
        }
        if(i != end){
            result += "\n";
        }
    }
    return result;
}

module.exports = createMultipleString