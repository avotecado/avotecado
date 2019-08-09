import React, { Component } from 'react';

import Header from './components/include/Header.jsx';
import Footer from './components/include/Footer.jsx';

import Home from './pages/Home';
import PoliticiansMain from './pages/PoliticiansMain';
import PartiesMain from './pages/PartiesMain';
import Votes from './pages/Votes';
import Login from './pages/Login';
import Register from './pages/Register';
import UserSettings from './pages/UserSettings';
import UserDirectory from './pages/UserDirectory';
import PublicProfile from "./pages/PublicProfile";
import AdminPanel from "./pages/AdminPanel";

import { BrowserRouter, Route } from 'react-router-dom';

import {routes} from "../utils/routerPaths";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path={routes.politicians} component={PoliticiansMain} />
          <Route exact path={routes.parties} component={PartiesMain} />
          <Route exact path={routes.votes} component={Votes} />
          <Route exact path={routes.login} component={Login} />
          <Route exact path={routes.register} component={Register} />
          <Route exact path={routes.userSettings} component={UserSettings} />
          <Route exact path={routes.userDir} component={UserDirectory} />
          <Route exact path={routes.user} component={PublicProfile} />
          <Route exact path={routes.admin} component={AdminPanel} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
