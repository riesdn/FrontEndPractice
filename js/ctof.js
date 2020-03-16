
const degC = () => {
    return document.getElementById("degC");
}
const degF = () => {
    return document.getElementById("degF");
}

const ctof = () => {
    degF().value = (+degC().value * 9 / 5) + 32;
}

const ftoc = () => {
    degC().value = (+degF().value - 32) * 5 / 9;
}