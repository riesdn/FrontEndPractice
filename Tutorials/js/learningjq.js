
// document.ready( function() {     });
$().ready(function() {

    console.log("jQuery is ready!");

    $("div").html("<h1>Welcome to jQuery!</h1>").css("color", "chartreuse").css("font-family", "Impact").css("font-size", "2rem");

    $("button").click(() => {
        console.warn("You pushed the button.");
    });

});
