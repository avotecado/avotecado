import React from 'react';

import Header from './components/Header.jsx';
import Home from './pages/Home';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

// import Hello from './Hello.jsx';
import Info from './Info.jsx';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div style={{overflowX: 'hidden' }}>
          <Header />
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/Content' component={Content} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Profile' component={Profile} /> */}
          <Info />
          {/* <Logout /> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
