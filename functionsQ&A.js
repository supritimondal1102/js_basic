//QS.create a functions using the "functions" keyword that takes a String as an argument & return the number of vowels in the strings.

function countVowels(str) {
    let count = 0;
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
