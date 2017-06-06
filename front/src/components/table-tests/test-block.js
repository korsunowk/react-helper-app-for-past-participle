import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import '../../styles/test-block.css';


export default class TestBlock extends React.Component {
    render () {
        return (
          <ul className="dropdown-menu">
            <NavLink to="/tests/random" activeClassName="active">
              <li className="test-button">
                Test with random verbs
              </li>
            </NavLink>
            <li role="separator" className="divider"></li>
            <NavLink to="/tests/alternate" activeClassName="active">
              <li className="test-button">
                Test with alternate verbs
              </li>
            </NavLink>
          </ul>
        )
    }
}