import React, { Component } from 'react';

// import PoliticianContextProvider from './context/PoliticianContext';

import Header from './components/Header.jsx';
import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Login from './pages/Login';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          {/* <PoliticianContextProvider> */}
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/Politicians' component={Politicians} />
          <Route exact path='/Login' component={Login} />
          {/* <Route exact path='/Content' component={Content} /> <Route exact path='/Profile' component={Profile} /> */}
          <Footer />
          {/* </PoliticianContextProvider> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
