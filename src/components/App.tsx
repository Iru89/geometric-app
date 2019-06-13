import * as React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import MenuApp from "./MenuApp";

const App: React.FunctionComponent = () => {

      const appName: string = "GeometricApp";

      return (
          <div className="App">

              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Header name={appName} />
              </div>

              <div className="App-main">
                  <MenuApp/>
                  <Main/>
              </div>

              <div className="App-footer">
                  <Footer/>
              </div>

          </div>
    );
};

export default App;