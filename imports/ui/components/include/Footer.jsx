import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const footerStyle = {fontWeight: 'bold', backgroundColor: '#f2f2f2', marginTop: '3em', paddingTop: '3em'};
const textMarkStyle = {fontFamily: 'Helvetica Black Extended', fontWeight: 'bold', fontSize: '2rem'};

export default class Footer extends Component {
    render() {
        return (
            <>
                <Container maxWidth='lg' component='div' style={footerStyle}>
                    <Link to='/userdirectory'>User Directory</Link> <br/>
                    about / <a href='https://github.com/avotecado/avotecado'>Check us out on GitHub</a>
                    <Typography component='div' style={textMarkStyle}>
                        avotecado
                    </Typography>
                </Container>
            </>
        );
    }
}
