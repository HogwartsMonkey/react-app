
 export var icid = 54;
 export default function incoming() {
    $.ajax({
        url: 'https://api.top10bestukonlinecasinos.co.uk/incoming' + window.location.search,
        type: "GET",
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            if (data.icid) {
                icid = data.icid;
            } else {
                var errStr;
                try {
                    errStr = JSON.stringify(data);
                } catch (e) {
                    errStr = e + '|' + data
                }
                ga('send', 'event', 'error', 'backend', errStr);
                console.error(errStr);
            }
        },
        error: function (err, err2, err3) {
    console.error(err.status + '|' + err.responseText);
    ga('send', 'event', 'error', 'frontend', err.status + '|' + err.responseText +"|"+err2+"|"+err3);
}
    });
}

