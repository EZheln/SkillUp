/*
На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой). 
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. 
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой). 
При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить 
в переменную.
Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'. 
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice. 
Проверяет сможет ли пользователь оплатить заказ: если сумма к оплате превышает количество кредитов на счету, выводи в консоль 
сообщение 'Недостаточно средств на счету!'. 
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету 
осталось [число] кредитов.'.
*/

let credits = 35500;
let pricePerDroid = 3000;
let message = prompt('Input number of droid');

if (message === null) {
    console.log('Denied by User.');
} 
else if (Number(message) <= 0 || !Number(message)) {
    console.log('Incorrect input');
}
else if (!Number.isInteger(Number(message))){
    console.log('Incorrect input, enter integer');
}
else if (Number(message) > 0 && Number.isInteger(Number(message))) {
    let totalPrice = Number(message) * pricePerDroid;
    let leftCredits = credits - totalPrice;
    if (leftCredits >= 0) {
        console.log(`You bought ${message} droid, your balance is ${leftCredits} credits.`);
    } else {
        console.log("Not enought credits.");
    }   
}




