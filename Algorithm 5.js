//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

let truncateString = (str, num) => {
    let tdot = '...';
    if (str.length > num) {
        let newStr = str.slice(0, num)
        newStr = newStr.concat(tdot)
        return newStr
    } else {
        return str
    }
}
