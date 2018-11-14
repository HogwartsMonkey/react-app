

export function Outgoing(offer_id, ab, position,page,icid) {
    var localICID = icid;
    var url = "https://api.top10bestukonlinecasinos.co.uk/outgoing?icid=" + icid + "&offer_id=" + offer_id + "&ab=" + ab + "&position=" + position + "&page=" + window.location.pathname;
    goog_report_conversion(url);
    window.open(url, '_blank');
}






