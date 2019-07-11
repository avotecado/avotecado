import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  gridClass: {
    marginTop: '5vw'
  },
  card: {
    marginLeft: '1em',
    marginRight: '1em',
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
    minWidth: 275
  },
  cardText: {
    fontFamily: 'Source Sans Pro',
    fontWeight: '600'
  },
  title: {
    textAlign: 'center'
  }
}));

export default function Home () {
  const classes = useStyles();

  return (
    <div>
      <Container display='flex' maxWidth='md'>
        <Typography className={classes.title} variant='h5'>
          Who are we? 🥑
        </Typography>

        <Typography>
          We make political data understandable by...
        </Typography>

        <Grid className={classes.gridClass} container direction='row' justify='center' alignItems='center'>

          <Card className={classes.card}>
            <Typography className={classes.cardText}>
              <p />
              We have <i>n</i> politicians.
            </Typography>
          </Card>

          <Card className={classes.card}>
            <Typography className={classes.cardText}>
              <p />
              We have <i>n</i> votes on record.
            </Typography>
          </Card>

        </Grid>
      </Container>
    </div>
  );
}
