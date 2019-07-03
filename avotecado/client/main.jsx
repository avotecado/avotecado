import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import politicianListReducer from '/imports/ui/reducers';
// import selectPoliticianReducer from '/imports/ui/reducers/selectPoliticianReducer';
import reducers from '/imports/ui/reducers/index';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-target')
  );
});
