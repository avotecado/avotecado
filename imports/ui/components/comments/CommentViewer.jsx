import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from "react-router-dom";

export default class PoliticianViewComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsArray: []
        };
    }

    componentDidMount() {
        this.setState({commentsArray: this.props.commentsArray});
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({commentsArray: this.props.commentsArray});
        }
    }

    render() {
        if (this.state.commentsArray.length > 0) {
            return (
                <>
                    <Container>
                        <List style={{height: '12em', overflowY: 'auto'}}>
                            <div>
                                {this.state.commentsArray.map((message, index) => (
                                    <ListItem key={index}>
                                        <div style={{fontFamily: 'Fact-ExpandedMedium'}}>
                                            <NavLink to={'/user?' + `${message.user}`}>
                                                {message.username}
                                            </NavLink>:
                                        </div>
                                        {message.message}
                                    </ListItem>
                                ))}
                            </div>
                        </List>
                    </Container>
                </>
            );
        } else {
            return (
                <>
                    <Container>
                        <List style={{height: '12em', overflowY: 'auto', overflowX: 'hidden'}}>
                            <div>
                                <ListItem>
                                    No comments, why not make one?
                                </ListItem>
                            </div>
                        </List>
                    </Container>
                </>
            );
        }
    }
}
