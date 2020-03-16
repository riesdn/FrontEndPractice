
let savedUsers = null;

$().ready(() => {

    console.log("Before the getJSON call.");

    $.getJSON("http://localhost:51764/api/Users")
        .done((users) => {
            // don't have to declare what type of data users will be bc we're in JS and all variables are flexible or whatever the term was
            // users is going to contain the data from the call, like the output box in Postman
            savedUsers = users;
            console.log("Users: ", users);
            display();
        })
        .fail((err) => {
            console.error("ERROR: ", err);
        })
    ;

    console.log("After the getJSON call.");

});

const display = () => {
    
    let tbody = $("#userTBody");
    tbody.html("");
    for(let user of savedUsers) {
        let tr = $("<tr></tr>"); // this creates a jQuery object we can use
        let tdId = `<td>${user.id}</td>`;
        let tdUsername = `<td>${user.username}</td>`;
        let tdName = `<td>${user.firstName} ${user.lastName}</td>`;
        let tdPhone = `<td>${user.phone}</td>`;
        let tdEmail = `<td>${user.email}</td>`;
        tr.html(tdId + tdUsername + tdName + tdPhone + tdEmail);
        tbody.append(tr);
    }

};