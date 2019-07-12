import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

export class PoliticianMakeAComment extends Component {
  render () {
    return (
      <div>
        <Container>
          <TextField id='makeACommentInput'
            placeholder='Input your comment here.' fullWidth
            margin='none' variant='outlined' InputLabelProps={{ shrink: true }}
            style={{ borderColor: '#009245' }} />
        </Container>

      </div>
    );
  }
}

export default PoliticianMakeAComment;
