// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
//Функция считает общую сумму запрплаты работников и возращает ее. 
//Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

let count = 0;
const countTotalSalary = function(employees) {
  for (let elem in employees){
      let task = employees[elem];
    if (task > 0){
    count += task;
    }
  }
  console.log(count);
};


// countTotalSalary({}); // 0


// countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }); // 330

countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }); // 400