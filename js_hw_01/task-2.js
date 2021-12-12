/*
Напиши скрипт проверки количества товаров на складе. 
Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе). 
Сравни эти значения и по результатам выведи: Если в заказе указано число, превышающее количество товаров на складе, 
то выведи сообщение "На складе недостаточно твоаров!". В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер". 
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.
const total = 100; const ordered = 50;
*/

const total = 100;
const ordered = 50;

if (ordered > 0 && ordered <= total && Number(ordered) && Number.isInteger(Number(ordered))) {
    console.log("Your order is successfully accessed, manager will contact you!");
}
else if (ordered <= 0 || !Number.isInteger(Number(ordered))){
    console.log('Enter correct number');
}
else {
    console.log("Not enough goods!");
}