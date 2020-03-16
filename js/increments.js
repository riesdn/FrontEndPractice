let count = 0;

$().ready(() => {

    console.log("jQuery working.");
    
    $("#dec").click(() => {
        console.log("decrement was clicked.");
        count--;
        restyle();
    });
    
    $("#inc").click(() => {
        console.log("increment was clicked.");
        count++
        restyle();
    });
    
});

const restyle = () => {

    $("#counter").val(count)
        .css("color", "black")
        .css("font-style", "normal")
        .css("font-weight", "normal")
    ;

    if (count % 5 == 0 && count % 3 == 0 && count % 2 == 0){
        $("#counter").css("font-weight", "bold").css("font-style", "italic").css("color", "red");
    } else if (count % 5 == 0 && count % 3 == 0) {
        $("#counter").css("font-weight", "bold").css("font-style", "italic");
    } else if (count % 5 == 0) {
        $("#counter").css("font-weight", "bold");
    } else if (count % 3 == 0) {
        $("#counter").css("font-style", "italic");
    } else if (count % 2 == 0) {
        $("#counter").css("color", "red");
    }
};