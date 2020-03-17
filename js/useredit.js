
let user = {
    id: 11,
    username: "test",
    password: "changed data",
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
        method: "PUT",
        url: "http://localhost:51764/api/Users/11",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log("Resolved: ", res);
        })
        .fail((err) => {
            console.error("ERROR: ", err);
    });

});