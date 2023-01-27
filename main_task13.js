
let isNumber = +prompt('Number');
let isDegree = +prompt('Degree')

function pow (num,degree) {
    if(degree == 1) {
        return num;
    } else {
        return num*pow(num,degree-1);
    };
}
alert(isNumber+" ^ "+isDegree+" = "+pow(isNumber,isDegree));

