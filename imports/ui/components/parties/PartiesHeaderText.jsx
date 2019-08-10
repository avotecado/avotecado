import React from 'react';
import {Container} from '@material-ui/core';

const containerStyle = {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'};
const filledText = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '2em',
    fontColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    marginBottom: '-0.35em'
};
const outlinedText = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '2em',
    WebkitTextFillColor: 'rgba(255,255,255,0.001)',
    WebkitTextStrokeWidth: '1.75px',
    WebkitTextStrokeColor: 'rgb(0, 146, 69)'
};

export default function PartiesHeaderText() {

    return (
        <>
            <Container style={containerStyle}>
                <div>
                    <span style={filledText}>Incumbent{' '}</span>
                    <span style={outlinedText}>Parties</span>
                </div>
                <span style={{color: 'white', backgroundColor: 'black'}}>
                    These are the parties your elected councillors belong to.
                </span>
            </Container>
        </>
    );
}
