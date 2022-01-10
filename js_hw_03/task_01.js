// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

let example = 'Mango';
const user = {
  name: example,
  age: 20,
  hobby: 'html',
  premium: true,
};

//add key mood with value 'happy'
user.mood = 'happy';
console.log(user);

// change hobby value to skydiving
user.hobby = 'skydiving';
console.log(user);

//change premium value to false
user.premium = false;
console.log(user);

// view object key:value
for (let value in user){
    console.log(`${value}: ${user[value]}`);
}

let key = Object.keys(user);
for (let elem of key){
    console.log(`${elem}: ${user[elem]}`)
}