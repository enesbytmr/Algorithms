// Find the Longest String in Array
//Verilen array icindeki en uzun eklimenin uzunlugunu yazdirma

let longestString = (str) => {
    let maxLength = 0;
    let words = str.split(` `);
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length
        }

    }
return maxLength;
}
 