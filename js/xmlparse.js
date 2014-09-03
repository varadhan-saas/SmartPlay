function getData() {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "http://SRIWEBSERVER.cloudapp.net/Service1.svc/G1",
        async: false,
        success: function (xml1) {
            var resp = $(xml1).find('_userName').first().text();
            alert(resp);
            console.log(xml1);
        },
        error: function(data, status, errorThrown) {
            alert(data);
            console.log(data);
        }
    });
}
