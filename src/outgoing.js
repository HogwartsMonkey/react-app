

export default function Outgoing(offer_id, ab, position, page, param_icid) {
    var localICID = param_icid || icid;
    var url = "https://api.top10bestukonlinecasinos.co.uk/outgoing?icid=" + icid + "&offer_id=" + offer_id + "&ab=" + ab + "&position=" + position + "&page=" + window.location.pathname;
    goog_report_conversion(url);
    window.open(url, '_blank');
}





