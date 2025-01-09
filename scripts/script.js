// 1-е задание
let a = 10;
alert(a);

a = 20;
alert(a);

// 2-е задание

let yearIphone = 2007;
alert(yearIphone);

// 3-е задание

let nameJS = 'Brendan Eich';
alert(nameJS);

// 4-е задание

let number1 = 10;
let number2 = 2;

alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);

// 5-е задание 

let result = 2**5;
alert(result);

// 6-е задание 

a = 9;
let b = 2;
alert(a % b);

// 7-е задание

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8-е задание

let age = Number(prompt('Сколько вам лет?'))
alert(age)

// 9-е задание

let user = {
    name: 'Камиль',
    age: 15,
    isAdmin: true
};

user['city of residence'] = true;
user.age = 20;
delete user['city of residence'];


let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info])

// 10-е задание

let personeName = prompt('Как тебя зовут, брат?')
alert(`Привет, ${personeName}!`)