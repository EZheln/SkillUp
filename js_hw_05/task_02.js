// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

function User(obj) {
    this.obj = obj;
}
User.prototype.getInfo = function(){
    console.log(`User ${this.obj.name} is ${this.obj.age} years old and has ${this.obj.followers} followers`)
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
mango.getInfo(); // User Mango is 2 years old and has 20 followers


const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
poly.getInfo(); // User Poly is 3 years old and has 17 followers