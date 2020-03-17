
let user = null;

$().ready(() => {

    console.log("Before the getJSON call.");

    $("button").click(() => {
       let uId = $("#getU").val(); 
       
       $.getJSON(`http://localhost:51764/api/Users/${uId}`)
           .done((u) => {
               // don't have to declare what type of data users will be bc we're in JS and all variables are flexible or whatever the term was
               // users is going to contain the data from the call, like the output box in Postman
               user = u;
               console.log("User: ", u);
               display();
           })
           .fail((err) => {
               console.error("ERROR: ", err);
           })
       ;

    });

    console.log("After the getJSON call.");

});

const display = () => {
    
    $("#tId").text(user.id);
    $("#tUsername").text(user.username);
    $("#tPassword").text(user.password);
    $("#tName").text(`${user.firstName} ${user.lastName}`);
    $("#tPhone").text(user.phone);
    $("#tEmail").text(user.email);
    $("#tReviewer").text(user.isReviewer);
    $("#tAdmin").text(user.isAdmin);

};