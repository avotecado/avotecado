import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
// import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ overflowX: 'hidden', backgroundColor: 'black' }}>
          <Navbar />
          {/* <Route path='/' component={Hello} /> */}
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
