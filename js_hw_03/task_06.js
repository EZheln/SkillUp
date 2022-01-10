// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает 
//массив объектов и имя продукта (значение свойства name). 
//Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


//var 1
const calculateTotalPrice = function(allProdcuts, productName) {
    let totalPrice = 0;
    for (let elem of allProdcuts) {
        if (elem.name === productName){
            return totalPrice += elem.price * elem.quantity
        }
    }
}

// var2
// const calculateTotalPrice = function(allProdcuts, productName) {
//     let prodName; 
//     for (let elem of allProdcuts){
//         if (elem.name === productName){
//             prodName = elem.name
//         }    
//     };
//     let prodArr = allProdcuts.map((prod) => {
//         if (prod.name === prodName){
//         return {
//             ... prod,
//             totalPrice: prod.price * prod.quantity
//         };
//         }
//         return prod
//     });  
//     let total = prodArr.filter((item) => {
//         return item.totalPrice
//     });
//     return total[0].totalPrice
// };    


console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(products, 'Сканер')); // 8100
console.log(calculateTotalPrice(products, 'Захват')); // 2400