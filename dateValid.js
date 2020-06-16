function isDateValid(date){
    //ex: 03.02.2020
const year = ;
const month = ;
const day = ;
    //insert if
dateLength;
dateFormat;
validYear;
isLeapYear;

}

function dateLength(date) {
    return date.length == 10;
}

function dateFormat(date) {
    return date.indexOf(".") == 2 && date.lastIndexOf(".") == 5;
}

function validYear(year) {
    return year.length === 4 && year >= '0000' && year <= '9999'
}

function isLeapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}