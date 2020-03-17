
$().ready(() => {

    $("button").click(() => {

        let phone = null;
        let email = null;

        if (!$("#vPhone").val() == "") {
            phone = $("#vPhone").val();
        }
        if (!$("#vEmail").val() == "") {
            email = $("#vEmail").val();
        }

        let vdr = {
            id: 0,
            code: $("#vCode").val(),
            name: $("#vName").val(),
            address: $("#vAddress").val(),
            city: $("#vCity").val(),
            state: $("#vState").val(),
            zip: $("#vZip").val(),
            phone: phone,
            email: email
        };

        console.log(vdr);

        $.ajax({
            method: "POST",
            url: "http://localhost:51764/api/Vendors",
            data: JSON.stringify(vdr),
            contentType: "application/json"
        }).done((res) => {
            $("#result").text("SUCCESS, Thank You!");
            console.log("SUCCESS: ", res);
        }).fail((err) => {
            $("#result").text("ERROR: SEE CONSOLE.LOG");
            console.log("ERROR: ", err);
        });
    });

});