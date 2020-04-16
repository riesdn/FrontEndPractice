
$().ready(() => {

    $("button").click(() => {

        let vID = $("#getId").val();
        
        $.ajax({
            method: "DELETE",
            url: `http://localhost:51764/api/Vendors/${vID}`,
            contentType: "application/json"
        })
        .done((res) => {
            console.log("Resolved: ", res);
        })
        .fail((err) => {
            console.error("ERROR: ", err);
        });

        $("#getId").attr("disabled", true);
        $("button").removeClass("btn-primary").addClass("btn-secondary").attr("disabled", true).text("COMPLETE");
        
    });

});