import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

import Button from '@material-ui/core/Button';

export class PoliticianFollow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followedArray: [],
            politician: '',
            loaded: false
        };
    }

    componentDidMount() {
        if (this.props.followedArray) {
            this.setState({followedArray: this.props.followedArray, loaded: true});
        }
    }

        render() {
        if (this.state.loaded) {
            let politician = this.props.politician;
            let followedArray = this.props.followedArray.flatMap(x => (x.following));
            let alreadyFollows = (followedArray.includes(politician._id));
            let buttonTextStyle = {
                fontFamily: 'Fact-ExpandedMedium',
                fontWeight: 'bold',
                fontSize: '1.15em',
                color: 'black',
                margin: '0.15em'
            };

            if (alreadyFollows) {
                return (
                    <div>
                        <Button variant='outlined' style={buttonTextStyle}
                                onClick={() => Meteor.call('followed.remove', politician._id)}>
                            Unfollow
                        </Button>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Button variant='outlined' style={buttonTextStyle}
                                onClick={() => Meteor.call('followed.add', politician._id)}>
                            Follow
                        </Button>
                    </div>
                );
            }
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }
}

export default PoliticianFollow;
