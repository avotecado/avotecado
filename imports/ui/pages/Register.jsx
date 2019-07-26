import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Paper from '@material-ui/core/Paper';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': { fontFamily: 'Fact-ExpandedMedium', color: '#009245' },
    '& .MuiInput-underline:before': { borderBottomColor: 'black' },
    '& .MuiInput-underline:after': { borderBottomColor: '#009245' }
  }
})(TextField);

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      name: '',
      dob: '',
      occupation: '',
      prefParty: '',
      politicalLeaning: '',
      userBio: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value, (typeof e.target.value));
  }

  handleSubmit(e) {
    e.preventDefault();
    let u = this.state;
    console.log(u);
    Accounts.createUser(u, (error) => { if (error) { console.log(error.reason); } });
  }

  render() {
    return (
      <>
        <Container>
          <div>
            <Grid id='top-row' container spacing={2}>
              <Grid item xs={4}>
                <Paper>Grid cell 1, 1</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper>Grid cell 2, 1</Paper>
              </Grid>
            </Grid>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <span style={{ fontFamily: 'Helvetica Black Extended', fontSize: '2em' }}>
              Register an account
            </span>
            <Grid container spacing={2}>
              <Grid item xs>
                <span style={{ fontFamily: 'Fact-ExpandedMedium', fontSize: '1.25em' }}> Required: </span>
                <CustomTextField name='username' label='Pick a name. (REQUIRED!)' style={{ marginBottom: '0.1em' }}
                  required value={this.state.username} onChange={this.handleChange.bind(this)} />
                <CustomTextField name='password' label='Pick a password. (REQUIRED!)' type='password' style={{ marginBottom: '0.1em' }}
                  required value={this.state.password} onChange={this.handleChange.bind(this)} />
                <CustomTextField name='email' label='Input your email. (REQUIRED!)' type='email' style={{ marginBottom: '0.1em' }}
                  required value={this.state.email} onChange={this.handleChange.bind(this)} />
              </Grid>

              <Grid item xs>
                <span style={{ fontFamily: 'Fact-ExpandedMedium', fontSize: '1.25em' }}>
                  Optional:
                </span>
                <CustomTextField name='name' label="What's your name?" style={{ marginBottom: '0.1em' }}
                  value={this.state.name} onChange={this.handleChange.bind(this)} />
                <CustomTextField id='date' name='dob' label="What's your birth date? (YYY-MM-DD)" type='date' style={{ marginBottom: '0.1em' }}
                  defaultValue='1818-05-05' InputLabelProps={{ shrink: true }} onChange={this.handleChange.bind(this)} />
                <CustomTextField name='occupation' label="What's your occupation?" style={{ marginBottom: '0.1em' }}
                  value={this.state.occupation} onChange={this.handleChange.bind(this)} />

                <InputLabel htmlFor='prefParty-simple'>Preferred Party:</InputLabel>
                <Select value={this.state.prefParty} onChange={this.handleChange.bind(this)} inputProps={{ name: 'prefParty', id: 'prefParty-simple' }} >
                  <MenuItem value={'None'}>None</MenuItem>
                  <MenuItem value={'NPA'}>NPA</MenuItem>
                  <MenuItem value={'Green'}>Green</MenuItem>
                  <MenuItem value={'OneCity'}>OneCity</MenuItem>
                  <MenuItem value={'COPE'}>COPE</MenuItem>
                  <MenuItem value={'Independent'}>Independent</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Button type='submit' variant='contained' style={{ fontFamily: 'Helvetica Black Extended', color: 'white', fontSize: '1.25em', backgroundColor: '#009245', textTransform: 'none' }}>
              Register
            </Button>
          </form>
        </Container>
      </>
    );
  }
}

export default Register;
