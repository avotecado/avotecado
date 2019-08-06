import React, { Component } from 'react';
import Header from './components/include/Header.jsx';
import Footer from './components/include/Footer.jsx';

import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Parties from './pages/Parties';
import Votes from './pages/Votes';
import Login from './pages/Login';
import Register from './pages/Register';
import UserSettings from './pages/UserSettings';
import UserDirectory from './pages/UserDirectory';
import PublicProfile from "./pages/PublicProfile";
import AdminPanel from "./pages/AdminPanel";

import { BrowserRouter, Route } from 'react-router-dom';

// import TraversyCarousel from './components/home/Carousel/TraversyCarousel';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/politicians' component={Politicians} />
          <Route exact path='/parties' component={Parties} />
          <Route exact path='/votes' component={Votes} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/user-settings' component={UserSettings} />
          <Route exact path='/user-directory' component={UserDirectory} />
          <Route exact path='/user' component={PublicProfile} />
          <Route path='/admin' component={AdminPanel} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
