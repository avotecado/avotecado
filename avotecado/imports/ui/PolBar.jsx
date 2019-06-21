import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const photoName = (firstname, lastname) => {
  let output = 'photos/' + firstname + '_' + lastname + '_40.png';
  return output.replace(' ', '_');
}

function PolBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={photoName(props.firstname, props.lastname)} width='40' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.firstname} {props.lastname}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.party}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

// class PolBar extends Component {
//   render () {
//     return (
//       <div className='polBar'>
//         <span className='pfp'>
//           <img src={photoName(this.props.firstname, this.props.lastname)} width='40' />
//         </span>
//         <div className='polText'>
//           <span className='name'>{this.props.firstname} {this.props.lastname}</span><br />
//           <span className='party'>{this.props.party}</span>
//         </div>
//         <span className='ic_menu_48px_A2_Path_23'>
//           <img src='icons/ic_menu_48px.png' width='48' />
//         </span>
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return { politician: state.politician }
}
export default connect(mapStateToProps)(PolBar);