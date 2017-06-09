import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom'

import WordsTable from './components/table-words/table';
import TestBlock from './components/table-tests/test-block';

import RandomTest from './components/table-tests/tests/random-test/random-test';
import AlternateTest from './components/table-tests/tests/alternate-test/alternate-test';

import RandomTranslateTest from './components/table-tests/tests/translate-test/random-translate-test';
import AlternateTranslateTest from './components/table-tests/tests/translate-test/alternate-translate-test';

import RussianRandomTranslateTest from './components/table-tests/tests/translate-test/russian-rand';
import RussianAlternateTranslateTest from './components/table-tests/tests/translate-test/russian-alt';

import Footer from './components/footer';

import SpeedTest from './components/table-tests/tests/speed-tests/speed-test'

import logo from './logo.svg';
import store from './store';
import './App.css';
import './styles/buttons.css'


class App extends Component {
  TestTest = (e) => {
    store.dispatch({
        type: 'TOGGLE_TABLE'
    });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" /> 
        </Link>
        <div className="app-block">
          <h1>Welcome to Past participle helper</h1>    
          <div>
            <div className="buttons">
              <NavLink to='/table' activeClassName="active">
                <div className="button">Table with verbs forms</div>
              </NavLink>
              <div className="btn-group">
                <div className="button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.TestTest}>
                  Some tests <span className="caret"></span>
                </div>
                <TestBlock />
              </div>
              <NavLink to='/speed-test' activeClassName='active'>
                <div className='button'>Speed test</div>
              </NavLink>
            </div>
            
            <Route path="/tests/random" component={RandomTest} />
            <Route path="/tests/alternate" component={AlternateTest} />

            <Route path="/tests/random-translate" component={RandomTranslateTest} />
            <Route path="/tests/alternate-translate" component={AlternateTranslateTest} />

            <Route path="/tests/random-eng-translate" component={RussianRandomTranslateTest} />
            <Route path="/tests/alternate-eng-translate" component={RussianAlternateTranslateTest} />
            
            <Route path="/speed-test" component={SpeedTest} />

            <Route path="/table" component={WordsTable}/>
          </div>
        </div>
        <Footer />
      </div>
          </Router>
      
    );
  }
}

export default App;
