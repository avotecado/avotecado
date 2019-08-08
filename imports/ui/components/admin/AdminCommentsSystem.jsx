import React, {Component} from 'react';
import MaterialTable from "material-table";


const COLUMNS = [
    { title: 'User', field: '_id', defaultSort: 'desc', headerStyle: {padding: '1px'}, cellStyle: {fontFamily: 'Fact-Expanded'} },
    { title: 'Comment', field: 'message', type: 'date', cellStyle: {fontFamily: 'Fact-Expanded'} },
    { title: 'Politician Name', field: 'politicianName', cellStyle: {fontFamily: 'Fact-Expanded'} },
    { title: 'Time', field: 'postedAt', cellStyle: {fontFamily: 'Fact-Expanded'} }
];

class AdminCommentsSystem extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            comments: this.props.comments
        });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({
                loading: false,
                comments: this.props.comments
            });
        }
    }


    render() {
        if (this.state.loading) {
            console.log('loading@comments');
            return (
                <>
                    {null}
                </>
            );
        }
        else {
            return (
                <div>
                    {JSON.stringify(this.state.comments)}
                    <MaterialTable columns={COLUMNS} data={this.state.comments} />
                </div>
            );
        }
    }
}

export default AdminCommentsSystem;