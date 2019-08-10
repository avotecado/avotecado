import React from "react";

export function createLinks(rowData) {
    // let links = [];
    let voteDate = rowData.voteDate.replace(/-/g,'');
    let meetingType = rowData.meetingType;
    let code = "";
    switch (meetingType) {
        case "City Finance & Services":
            code = "cfsc";
            break;
        case "Courts of Revision":
            code = "crev";
            break;
        case "Policy & Strategic Priorities":
            code = "pspc";
            break;
        case "Public Hearing":
            code = "phea";
            break;
        case "Regular Council":
            code = "regu";
            break;
        case "Special Council":
            code = "spec";
            break;
        default:
            return links;
    }
    let linkBase = "https://council.vancouver.ca/";
    let agendaLink = linkBase + voteDate + '/' + code + voteDate + 'ag.htm';
    let minutesLink = linkBase + voteDate + '/documents/' + code + voteDate + 'min.pdf';
    return [agendaLink, minutesLink];
}