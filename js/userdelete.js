
$().ready(() => {

    $.ajax({
        method: "DELETE",
        url: "http://localhost:51764/api/Users/10",
        contentType: "application/json"
    })
        .done((res) => {
            console.log("Resolved: ", res);
        })
        .fail((err) => {
            console.error("ERROR: ", err);
    });

});