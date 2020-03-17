
let user = {
    id: 0,
    username: "test",
    password: "test",
    firstName: "test",
    lastName: "test",
    phone: null,
    email: null,
    isReviewer: false,
    isAdmin: false
};

// in Postman the keys also needed to be quoted, but we don't need that in JS

$().ready(() => {

    $.ajax({
        method: "POST",
        url: "http://localhost:51764/api/Users",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log(res);
        })
        .fail((err) => {
            console.error("ERROR: ", err);
    });

});