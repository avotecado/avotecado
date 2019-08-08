import React from "react";

export function matchVoteToPoliticianTableDetailPanel(rowData, politician) {
    let voteResult = [];
    let length = rowData.votes.length;
    for (let i = 0; i < length; i++) {
        let currentVote = rowData.votes[i];
        let politicianName = currentVote ? `${politician[i].firstname} ${politician[i].lastname + ':'}` : null;
        voteResult.push(
            <span key={i}>
                {politicianName} {rowData.votes[i]}<p/>
            </span>
        );
    }
    return voteResult;
}