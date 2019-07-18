import React from 'react';
import { Meteor } from 'meteor/meteor';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // let filteredArray = this.props.filteredArray;
    // console.log(filteredArray);
    // if (filteredArray.length > 0) {
    //   return (
    //     <div>
    //       <Typography>Settings</Typography>
    //       <Card>
    //         <CardContent>
    //           Following:
    //           <List>
    //             {filteredArray.map((politician, index) => (
    //               <ListItemText key={index} >{politician.firstname} {politician.lastname}</ListItemText>
    //             ))}
    //           </List>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   );
    // } else {
      return (
        <div>nothing 2 see here</div>
      );
    // }
  }
}
