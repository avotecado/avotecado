import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Header2 from './components/Header2.jsx';
import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Parties from './pages/Parties';
import Votes from './pages/Votes';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import UserDirectory from './pages/UserDirectory';
import Footer from './components/Footer.jsx';
import Legal from './pages/Legal';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          <Header2 />
          <Route exact path='/' component={Home} />
          <Route exact path='/politicians' component={Politicians} />
          <Route exact path='/parties' component={Parties} />
          <Route exact path='/votes' component={Votes} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/userprofile' component={UserProfile} />
          <Route exact path='/userdirectory' component={UserDirectory} />
          <Route exact path='/legal' component={Legal} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
