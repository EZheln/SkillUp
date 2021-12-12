/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. 
Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов
*/

let country = {
    "China": 150,
    "Chili": 250,
    "Australia": 165,
    "India": 90,
    "Jamaica": 130
}
let message = prompt("Enter your country");
let messageUpdate = message[0].toUpperCase() + message.toLowerCase().slice(1);
let exit = false; 
for (let elem in country) {
    if (exit) {
        break;
    } 
    switch(messageUpdate) {
        case elem :
            exit = true;
            console.log(`Delivery to ${messageUpdate} will cost ${country[elem]} credits.`);
   }
}
if (exit === false) {
    alert('Delivery does not exist in your country.');
}