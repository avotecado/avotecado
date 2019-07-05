import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    marginTop: 'calc(5% + 60px)',
    bottom: '0'
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    // backgroundColor: 'black',
    color: '#424242'
  }
}));

export default function Footer () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth='md'>
          <Typography variant='h6' gutterBottom>avotecado</Typography>
          <Typography variant='body2'>
            {'Built for CPSC 436i'}
            <br />
            {'Check the code out on '} <Link href='https://github.com/avotecado/avotecado'> {'Github.'}</Link>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
