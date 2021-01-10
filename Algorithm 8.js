//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
    str = str.toLowerCase();
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

    }
    arr = arr.toString().replaceAll(",", " ")
    console.log(arr)
    return arr
}

titleCase("I'm a little tea pot");