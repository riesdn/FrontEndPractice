
let vdr = null;

$().ready(() => {

    
    $("button").click(() => {
        
        let vdrID = $("#getID").val();
        // you have to set this inside the click bc otherwise it grabs the value on page load BEFORE the user actually inputs any data

        $.getJSON(`http://localhost:51764/api/Vendors/${vdrID}`)
            .done((v) => {
                vdr = v;
                console.log("Vendor: ", vdr);
                display();
            }).fail((err) => {
                console.error("ERROR: ", err);
        });

    });

});

const display = () => {

    $("#tdID").text(vdr.id);
    $("#tdCode").text(vdr.code);
    $("#tdName").text(vdr.name);
    $("#tdAddress").text(`${vdr.address}, ${vdr.city}, ${vdr.state} ${vdr.zip}`);
    $("#tdPhone").text(vdr.phone);
    $("#tdEmail").text(vdr.email);

};