import React, { Component } from 'react';

// import PoliticianContextProvider from './context/PoliticianContext';

import Header from './components/Header.jsx';
import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Parties from './pages/Parties';
import Votes from './pages/Votes';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer.jsx';
import Legal from './pages/Legal';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          {/* <PoliticianContextProvider> */}
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/politicians' component={Politicians} />
          <Route exact path='/parties' component={Parties} />
          <Route exact path='/votes' component={Votes} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/legal' component={Legal} />
          <Footer />
          {/* </PoliticianContextProvider> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
