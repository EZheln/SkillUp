// Напиши скрипт подсчета стоимости гравировки украшений. 
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку 
// (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// VAR 1
const calculateEngravingPrice = function(message, pricePerWord) {
    let messsageArr = message.split(' ');
    let isNotEmpty_messageArr = messsageArr.filter((isNotEmpty) =>{
        return isNotEmpty !== ''
    });
        if (isNotEmpty_messageArr.length != 0) {
        let totalPrice = isNotEmpty_messageArr.length * pricePerWord;
        return totalPrice 
    }
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
console.log(calculateEngravingPrice(' Donec orci lectus aliquam est     magnis', 10)); // 60


// VAR 2
// const calculateEngravingPrice = function(message, pricePerWord) {
//     let messsageArr = message.split(' ');
//     let resultArr = [];
//         for (let elem of messsageArr){
//             if (elem !== ''){
//                  resultArr.push(elem)
//             }
//         }
//         if (resultArr.length !== 0) {
//             let totalPrice = resultArr.length * pricePerWord;
//             return totalPrice
//         }    
// }
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
// console.log(calculateEngravingPrice(' Donec orci lectus aliquam est     magnis', 10)); // 60