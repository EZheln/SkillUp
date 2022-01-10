// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.


const findLongestWord = function(string) {
    let stringToArr = string.split(' ');
    let maxLength = 0;
    let maxValue;
    for (let elem of stringToArr){
        if (elem.length > maxLength) {          
            maxLength = elem.length;
            maxValue = elem;          
        }
    }
    return(`'${maxValue}' the longest elemen, length = ${maxLength}`);          
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'