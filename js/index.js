
const boxSum = () => {
    return document.getElementById("sum");
}

const boxInp = () => {
    return document.getElementById("inp");
}

const clr = () => {
    boxSum().value = 0;
    boxInp().value = 0;
};

const add = () => {
    let sum = Number(boxSum().value);
    let inp = Number(boxInp().value);
    sum += inp;
    boxSum().value = sum;
};

const subtract = () => {
    let sum = Number(boxSum().value);
    let inp = Number(boxInp().value);
    sum -= inp;
    boxSum().value = sum;
};

const multiply = () => {
    let sum = Number(boxSum().value);
    let inp = Number(boxInp().value);
    sum *= inp;
    boxSum().value = sum;
}

const divide = () => {
    let sum = Number(boxSum().value);
    let inp = Number(boxInp().value);
    sum /= inp;
    boxSum().value = sum;
}