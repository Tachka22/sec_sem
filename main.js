//задача № 1
console.log("задача № 1");
let aaa = 36;
let bbb = 20;
console.log(`${aaa} км/ч соответсвует ${aaa * 1000 / 3600} м/с`);
console.log(`${bbb} м/с соответсвует ${bbb / 1000 * 3600} км/ч`);


//задача 2
console.log("задача № 2");
let x = 5;
let y = 5;
let z = 6;

if (x + y > z && x + z > y && y + z > x) {
    console.log("треугольник существует");
}
else {
    console.log("треугольника не существует");
}
let P = x + y + z;
console.log(`периметр = ${P}`);
let p = (x + y + z) / 2;
let S = Math.sqrt(p * (p - x) * (p - y) * (p - z));
console.log(`Площадь =${S}`);
console.log(`Соотношение =${P / S}`);

//задача № 3
console.log("задача № 3");
var num = Number(prompt('Введите число'));

if(isNaN(num)){
    console.log('Вы ввели не число')
}
for (let index = 0; index <= num; index++) {

    if (index != 0 && index % 5 == 0) {
        console.log(`${index} fizz buzz`);
    }
    else if (index % 2 == 0) {
        console.log(`${index} buzz`);
    }
    else if (index % 2 != 0) {
        console.log(`${index} fizz`);
    }

}

//зачача № 4
console.log("задача № 4");
function getChars(char, count) {
    result = char;
    for (i = 0; i < count; i += 1) {
        result += char;
    }
    return result;
}

function BuildTree() {
    let text = '';
    for (i = 0; i < 8; i += 1) {
        if (i % 2) {
            text += getChars('#', i);
        } else {
            text += getChars('*', i);
        }
        text += '\n';
    }
    text += '||';
    return text;
}
console.log(BuildTree());
//зачача № 5
console.log("задача № 5");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ChooseNumber() {
    let randomNum = getRandomInt(100)
    while (true) {
        let n = Number(prompt('Введите числот от 0 до 100'))
        if(isNaN(n)){
            console.log('Вы ввели не число')
        }
        console.log(`Ваше число ${n}`);
        if (n < randomNum) {
            console.log("Число меньше заданного")
        }
        else if (n > randomNum) {
            console.log("Число больше заданного")
        }
        else {
            console.log("Верно!")
            break;
        }
    }
}
ChooseNumber();

//зачача № 6
console.log("задача № 6");

function DivOfNum(){
    n = prompt('Введите значение n');
    x = prompt('Введите значение x');
    y = prompt('Введите значение y');
    console.log(`n = ${n}, x = ${x}, y = ${y}=> ${(n%x || n%y) ? false : true}`)
}
DivOfNum()

//зачача № 7
console.log("задача № 7");

function GetQuarter(){
    let n = prompt('Введите месяц')
    if(n<=0 || n>12){
        console.log('Необходимо число 1-12')
    }
    else(
        console.log(`Месяц ${n} => ${Math.ceil(n/3)} квартал`)
    )
}
GetQuarter()