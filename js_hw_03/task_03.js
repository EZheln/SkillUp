// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя 
// самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".


let max_value_prod = 0;
let max_key_prod;
let same_value_prod;
let same_key_prod;
let employee_list = [];

const findBestEmployee = function(employees) {
    for (let elem in employees){
        let name = elem;
        let task = employees[elem];
        if (task > max_value_prod){
            max_value_prod = task;
            max_key_prod = name;
        }
        else if (task === max_value_prod){
            same_value_prod = task;
            same_key_prod = name;
        }
    }
    if (max_value_prod === same_value_prod){
        employee_list.push(max_key_prod);
        employee_list.push(same_key_prod);
    }
    else {
        employee_list.push(max_key_prod);
    }
    return employee_list
};

// console.log(
//   findBestEmployee({
//     ann: 19,
//     david: 19,
//     helen: 99,
//     lorence: 99,
//   }),
// ); // helen, lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux