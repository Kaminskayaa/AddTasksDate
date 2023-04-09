//1. Напишите функцию, которая принимает на параметры "год" и "месяцы", а затем вернет, какой год будет по прошествии n месяцев.
function afterNumMonths(year, month) {
    let yearPlus = month / 12;
    yearPlus = Math.round(yearPlus);
    let yearResult = year + yearPlus;
    return yearResult;
}
console.log(afterNumMonths(2020, 24));
console.log(afterNumMonths(1832, 2));
console.log(afterNumMonths(1444, 60));

//2. Учитывая параметры день, месяц и год, верните, является ли эта дата допустимой датой.
function isTrueDate(day, month, year) {
    if (day > 31) {
        return false;
    } else {
        if (month % 2 == 0 && day == 31) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(isTrueDate(35, 2, 2018));
console.log(isTrueDate(8, 3, 2021));
console.log(isTrueDate(31, 6, 1985));

//3. Напишите функцию, которая берет время time1 и время time2 и возвращает количество часов, прошедших между двумя временами.
function hoursPass(str1, str2) {
    str1 = str1.split(' ');
    str2 = str2.split(' ');
    str1[0] = str1[0].split(':');
    str2[0] = str2[0].split(':');
    if (str1[1] == 'PM') {
        str1[0][0] = Number(str1[0][0]);
        str1[0][0] += 12;
    }
    if (str2[1] == 'PM') {
        str2[0][0] = Number(str2[0][0]);
        str2[0][0] += 12;
    }
    let result = str2[0][0] - str1[0][0];
    if (result == 1) {
        console.log(result + ' час');
    } else {
        if (result == 2 || result == 3 || result == 4) {
            console.log(result + ' часа')
        } else {
            console.log(result + ' часов');
        }
    }
}
hoursPass("4:00 AM", "10:00 AM");
hoursPass("5:00 PM", "7:00 PM");
hoursPass("1:00 AM", "4:00 PM");


