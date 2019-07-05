import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
import Home from './components/Home.jsx';
import Hello from './components/Hello.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// import Hello from './components/Hello';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden', backgroundColor: 'black' }}>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/Hello' component={Hello} />
          <Route exact path='/Content' component={Content} />
          {/* <Logout /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
