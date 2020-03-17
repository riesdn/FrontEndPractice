
let vendors = null;

$().ready(() => {

    $.getJSON("http://localhost:51764/api/Vendors")
        .done((vdrs) => {
            vendors = vdrs;
            console.log("Vendors: ", vendors);
            display();
        }).fail((err) => {
            console.error("ERROR: ", err);
    });

});

const display = () => {

    let tbody = $("#vdrTBody");
    tbody.html("");

    for(let vdr of vendors) {
        let tr = $("<tr></tr>");
        let tdID = `<td>${vdr.id}</td>`;
        let tdName = `<td>${vdr.name}</td>`;
        let tdAddress = `<td>${vdr.address}, ${vdr.city}, ${vdr.state} ${vdr.zip}</td>`;
        let tdPhone = `<td>${vdr.phone}</td>`;
        let tdEmail = `<td>${vdr.email}</td>`;

        tr.html(tdID + tdName + tdAddress + tdPhone + tdEmail);
        tbody.append(tr);
    }

};