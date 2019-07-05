import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  render () {
    return (
      <div>
        <CssBaseline />
        <Paper>
          <Typography component='div' style={{ backgroundColor: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus justo id consequat lacinia. 
            Nulla bibendum eros vitae urna commodo, eu rutrum purus facilisis. Etiam in metus eu orci tempor rhoncus eget nec velit. 
            Vivamus non lectus sed ligula maximus consequat. Ut iaculis pharetra sodales. Curabitur non commodo eros. 
            Ut vitae eros lacinia, lobortis justo eget, blandit neque. In tincidunt nisl eget massa gravida scelerisque. 
            Fusce lobortis augue eu ipsum semper ultrices. Cras ut luctus nibh. Etiam congue placerat imperdiet. Phasellus a mi ex.
            <p />
            Vivamus lacinia, purus a elementum ultrices, sapien metus mollis ipsum, feugiat semper est arcu non enim. 
            Aenean aliquam nisi et libero egestas, et convallis urna tempus. Aliquam et orci enim. 
            Aenean lobortis, leo ac rhoncus hendrerit, orci mi cursus mauris, ut convallis mauris turpis at orci. 
            Etiam et molestie leo, eget pellentesque ligula. Vivamus elementum massa nec congue ullamcorper. 
            Aenean vel pellentesque lectus, quis faucibus nibh. Donec commodo blandit ullamcorper. 
            Donec lacus erat, lobortis vitae leo at, luctus dignissim enim. Aenean in fermentum lacus. 
            Integer faucibus ultricies elit hendrerit fringilla. Curabitur auctor augue ante, id vulputate massa feugiat ac.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Home;
