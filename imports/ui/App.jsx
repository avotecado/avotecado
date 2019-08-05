import React, { Component } from 'react';
import Header from './components/include/Header.jsx';
import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Parties from './pages/Parties';
import Votes from './pages/Votes';
import Login from './pages/Login';
import Register from './pages/Register';
import UserSettings from './pages/UserSettings';
import UserDirectory from './pages/UserDirectory';
import Footer from './components/include/Footer.jsx';
import Legal from './pages/Legal';

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
          <Route exact path='/usersettings' component={UserSettings} />
          <Route exact path='/userdirectory' component={UserDirectory} />
          <Route exact path='/legal' component={Legal} />
          {/* <Route exact path='/traversycarousel' component={TraversyCarousel} /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
