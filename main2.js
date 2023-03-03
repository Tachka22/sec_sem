//задача 1
console.log("Задача № 1")
function ConvertSpeed(speed, parametr){
    switch(parametr){
        case 'toMS': 
            return speed * 1000 / 3600;
        case 'toKMH': 
            return speed / 1000 * 3600;
        default:
            return 'Error';
    }
}
console.log(`convertSpeed(36, toMS) ->${ConvertSpeed(36, 'toMS')} м/с`)
console.log(`convertSpeed(20, 'toKMH') ->${ConvertSpeed(20, 'toKMH')} км/ч`)

//задача 2
console.log("Задача № 2")

function absValue(num){
    if(isNaN(num)) return NaN;
    return num<0 ? -num : num
}
console.log(`absValue(-2) -> ${absValue(-2)}`)

//задача 3
console.log("Задача № 3")

function StudentOfPolytech(){
    let student = {
        group: 201,
        last_name: "Иванов",
        first_name: "Иван"
        };
    let resRow = '';
    for (key in student) {
        resRow += ' ' + key;
    }
    console.log(`Список свойств:${resRow}`)
    console.log(`${student.first_name} ${student.last_name} учится в ${student.group} группе`)
}
StudentOfPolytech()

//задача 4
console.log("Задача № 4")
function GetRandom(min, max) {
    min = Number(min);
    max = Number(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(`randomNumber(0, 10) ->${GetRandom(0, 10)}`)

//задача 5
console.log("Задача № 5")
var arr = [1,2,3,4,5,6,7,8,9]
var CountItem = 2;
console.log(`Ваш массив ${arr}` )
console.log(`Число элеменов ${CountItem}`)

function GetRandomItem(arr,CountItem){
    let res =[]
    for (let index = 0; index < CountItem; index++) {
        res.push(arr[Math.floor(GetRandom(0, arr.length))])
    }
    return res
}
console.log(GetRandomItem(arr,CountItem)) 