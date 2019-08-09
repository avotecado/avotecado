import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from "react-router-dom";
import {routes} from "../../../utils/routerPaths";

const nameURLStyle = {fontFamily: 'Fact-ExpandedMedium'};
const listItemStyle = {display:'flex', flexDirection:"column", alignItems:"flex-start"};
const mainContainerStyle = {height: '15em', overflowY: 'auto'};
const smallInfoTextStyle = {fontSize:'0.75rem', color:'grey'};

export default class CommentViewer extends Component {
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

    getName(message) {
        if (this.props.userProfile) {
            return (
                <div>
                    Politician Profile:
                    <span style={nameURLStyle}>
                        <NavLink to={`${routes.politicians}`+ '?' + `${message.politician}`}>
                            {message.politicianName}
                        </NavLink>
                    </span>
                </div>
            );
        } else {
            return (
                <div style={nameURLStyle}>
                    <NavLink to={`${routes.user}`+ '?'  + `${message.user}`}>
                        {message.username}
                    </NavLink>:
                </div>
            );
        }
    }

    render() {
        if (this.state.commentsArray.length > 0) {
            return (
                <>
                    <List style={mainContainerStyle}>
                        <div>
                            {this.state.commentsArray.map((message, index) => (
                                <ListItem key={index} style={listItemStyle}>
                                    {this.getName(message)}
                                    <div style={smallInfoTextStyle}>
                                        {message.postedAt.toDateString()} @ {message.postedAt.toTimeString()}
                                    </div>
                                    {message.message}
                                    <br/>
                                </ListItem>
                            ))}
                        </div>
                    </List>
                </>
            );
        } else {
            return (
                <>
                    <Container>
                        <List style={mainContainerStyle}>
                            <div>
                                <ListItem>
                                    No comments yet.
                                </ListItem>
                            </div>
                        </List>
                    </Container>
                </>
            );
        }
    }
}
