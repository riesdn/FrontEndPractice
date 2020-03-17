
let ans = 0;

const boxSum = () => {
    return document.getElementById("sum");
}

const boxInp = () => {
    return document.getElementById("inp");
}

const display = () => {
    boxSum().value = ans;
    boxInp().value = "";
    if (ans % 3 == 0 && ans != 0) {
        boxSum().style.color = "blue";
    } else {
        boxSum().style.color = "black";
    }
}

const clr = () => {
    ans = 0;
    display();
};

const add = () => {
    ans += +boxInp().value;
    display();
};

const subtract = () => {
    ans -= +boxInp().value;
    display();
};

const multiply = () => {
    ans *= +boxInp().value;
    display();
}

const divide = () => {
    ans /= +boxInp().value;
    display();
}