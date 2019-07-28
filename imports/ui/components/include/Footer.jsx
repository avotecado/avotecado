import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <>
                <Container display='flex' maxWidth='lg' component='div' style={{
                    fontWeight: 'bold',
                    backgroundColor: '#f2f2f2',
                    marginTop: '3em',
                    paddingTop: '3em'
                }}>
                    about / <a href='https://github.com/avotecado/avotecado'>contact</a> / <Link
                    to='/legal'>legal</Link>
                    <Typography component='div'
                                style={{fontFamily: 'Helvetica Black Extended', fontWeight: 'bold', fontSize: '2rem',}}>
                        avotecado
                    </Typography>
                </Container>
            </>
        );
    }
}