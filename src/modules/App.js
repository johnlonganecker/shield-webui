import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import logo from '../logo.svg';

import '../App.css';
import Navi from './nav/Navi'
import Mousetrap from 'mousetrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);
      console.log(context);

    Mousetrap.bind('g h', function() { 
      console.log('me'); 
      context.router.push('/jobs');
    });
  }
  render() {
    return (
      <div className="page">
        <div className="header">
          <div className="notification">
            <h2>Some Error</h2>
          </div>
          <Navi />
        </div>
        <div className="content">
          <ReactCSSTransitionGroup
            transitionName="page-content"
            transitionEnterTimeout={500} 
            transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default App;
