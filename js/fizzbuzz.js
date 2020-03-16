
const go = () => {
    document.getElementsByTagName("button")[0].style.display = "none";
    let ctrl = document.getElementById("ctrl");
    for(let idx = 1; idx <= 100; idx++) {
        if(idx % 3 == 0 && idx % 5 == 0) {
            ctrl.innerHTML += "<p style='color:purple'>FizzBuzz!</p>";
        } else if (idx % 3 == 0) {
            ctrl.innerHTML += "<p style='color:firebrick;'>Fizz! </p>";
        } else if (idx % 5 == 0) {
            ctrl.innerHTML += "<p style='color:royalblue;'>Buzz! </p>";
        } else {
            ctrl.innerHTML += `<p>${idx}</p>`;
        }
    }
}