import React from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import PolSelector from './PolSelector.jsx';

const App = () => (
  <div id='main'style={{ overflowX: 'hidden' }}>
    <Navbar />
    <Content />
    {/* <PolSelector /> */}
  </div>
);

export default App;
