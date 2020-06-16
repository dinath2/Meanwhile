function isDateValid(date){
    //ex: 03.02.2020
const year = date.substring(6,9);
const month = date.substring(4,5);
const day = date.substring (0,2);

    //insert if
    if (dateLength(date) && dateFormat(date) && monthLength(date) && validYear(year) && isLeapYear(year)) 
    {return true;} else {return false;}
}

function dateLength(date) {
    return date.length == 10;
}

function dateFormat(date) {
    return date.indexOf(".") == 2 && date.lastIndexOf(".") == 5;
}

function monthLenght(date) {
    return month.length == 2 
    && month >= 1 
    && month <= 12;
}

function dayLength(date) {
    return day.length == 2
    && ;
}

function evenMonth(date) {

}

function oddMonth(date) {
    
}

function validYear(year) {
    return year.length === 4 
    && year >= '0000' 
    && year <= '9999';
}

function isLeapYear(year){
    return ((year % 4 == 0) 
    && (year % 100 != 0)) || (year % 400 == 0);
}