import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Content from './pages/Content.jsx';
import Home from './pages/Home.jsx';
import Hello from './components/Hello.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import Hello from './components/Hello';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/Hello' component={Hello} />
          <Route exact path='/Content' component={Content} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Profile' component={Profile} />
          <Footer />
          {/* <Logout /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
