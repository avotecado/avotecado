import React from 'react';
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';

const App = () => (
  <div style={{ overflowX: 'hidden' }}>
    <Navbar />
    <Content />
    {/* <PolSelector /> */}
  </div>
);

export default App;
