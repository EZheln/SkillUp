/*
Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз 
добавляет введенное значение к общей сумме.
При загрузке страницы пользователю предлагается в prompt ввести число. 
Ввод добавляется к значению переменной total. 
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. 
После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'. 
Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. 
Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
let input; 
let total = 0;
*/

let userInput = prompt('Enter number');
let total = 0;
for (let i = 0; userInput !== null; i++) {
    if (!Number(userInput)){
        alert('Not a number, try again');
        userInput = prompt('Enter number');
        continue;
    }
    else if (userInput !== null) {
        total += Number(userInput);
        userInput = prompt('Enter number');
    } 
}
alert(`Your balance is ${total}`);