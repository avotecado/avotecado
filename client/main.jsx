import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '/imports/ui/App'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import importedTheme from '../imports/startup/theme.json';

const theme = createMuiTheme(importedTheme);

Meteor.startup(() => {
    render(
        <MuiThemeProvider theme={theme}>
        <App/>
        </MuiThemeProvider>,
        document.getElementById('react-target'));
});
