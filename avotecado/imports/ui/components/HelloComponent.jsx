// import { Meteor } from 'meteor/meteor';
// import { Politicians } from '../../api/politicians';
// import { withTracker } from 'meteor/react-meteor-data';
// import HelloPage from './HelloPage';

// const HelloPageContainer = withTracker(() => {
//   console.log('in hello component');
//   const handler = Meteor.subscribe('Politicians');
//   const loading = !handler.ready();
//   const politiciansExists = !loading;
//   return {
//     loading,
//     politiciansExists,
//     todos: loading ? Politicians.find().fetch() : []
//   };
// })(HelloPage);

// export default HelloPageContainer;
