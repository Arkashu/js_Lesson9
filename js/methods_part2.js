function mainFunction(callback){
    let num = +prompt('Введите число');
    let pow = +prompt('Введите степень');
    callback(num, pow);
}

function exponentiation(a, b){
    return alert(Math.pow(a, b));
}

function multiplay(a, b){
    return alert(a * b);
}

function division( a, b){
    return alert(a / b);
}

function modulo(a, b){
    return alert(a % b);
}

mainFunction(modulo);

