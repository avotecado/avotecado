import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class VoteDescriptionDialog extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Help
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        <span style={{fontFamily: 'Helvetica Black Extended'}}>Explaining 'Votes'</span>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: 'black', fontFamily: 'Fact-Expanded'}}>
                            Vote: A Council member’s response on a motion. Votes are recorded as follows: <p/>

                            ✔️<strong>In favour</strong>: In favour of the motion. <p/>

                            ❌ <strong>In opposition</strong>: In opposition of the motion. <p/>

                            ❔ <strong>Absent</strong>: Absent from the current meeting or absent from the Council
                            Chambers, but
                            present at the meeting. <p/>

                            ➖ <strong>No Vote</strong>: Not eligible to vote (on a Public Hearing item due to absence
                            from the Public
                            Hearing) pursuant to s. 18.26 of the Procedure Bylaw. <p/>

                            ⬛ <strong>Abstain</strong>: Formally decline to vote (recorded as a vote in favour of the
                            motion pursuant
                            to s. 145.1(3) of the Vancouver Charter). <p/>

                            ⚠️ <strong>Declared Conflict</strong>: Conflict of Interest declared pursuant to s.145.2 of
                            the Vancouver
                            Charter. <p/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogTitle>
                        <span style={{fontFamily: 'Helvetica Black Extended'}}>Explaining 'Decisions'</span>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: 'black', fontFamily: 'Fact-Expanded'}}>
                            Decision: The outcome of the vote. Decisions are recorded as follows: <p/>

                            ✔️✔️<strong>Carried Unanimously</strong>: A motion that is passed by the affirmative vote of
                            all Council
                            members present at the meeting. Note: Some agenda items with this decision type may have
                            been adopted on consent. <p/>

                            ✔️<strong>Carried</strong>: A motion that is passed by the affirmative vote of the majority
                            or two-thirds
                            of the Council members present at the meeting, depending on the requirements for a
                            motion. <p/>

                            ❌ <strong>Lost</strong>: A motion that is defeated by the negative vote of the majority of
                            Council
                            members present at the meeting. <p/>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{display:'flex', justifyContent:'center'}}>
                        <Button style={{fontFamily:'Helvetica Black Extended'}} onClick={this.handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default VoteDescriptionDialog;
