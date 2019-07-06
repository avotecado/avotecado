import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Content from './pages/Content.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Politicians from '/imports/api/politicians';
import { withTracker } from 'meteor/react-meteor-data';

// import Hello from './components/Hello';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden' }}>
          <Navbar />
          <Route exact path='/' component={Home} />
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
// export default withTracker(() => { return { Politicians: Politicians }; })(App);
