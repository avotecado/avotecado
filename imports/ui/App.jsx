import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Home from './pages/Home';
import Politicians from './pages/PoliticiansMain';
import Login from './pages/Login';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

// import Hello from './Hello.jsx';
// import Info from './Info.jsx';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <MyProvider>
        <div style={{ overflowX: 'hidden' }}>
          <Family />
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/Politicians' component={Politicians} />
          <Route exact path='/Login' component={Login} />
          {/* <Route exact path='/Content' component={Content} /> <Route exact path='/Profile' component={Profile} /> */}
          {/* <Info /> */}
          {/* <Logout /> */}
          <Footer />
        </div>
      </MyProvider>
      </BrowserRouter>
    );
  }
}

export default App;
