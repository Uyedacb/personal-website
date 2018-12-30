import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Redirect } from 'react-router-dom'
import AboutPage from './AboutPage';
import CustomNavbar from './CustomNavbar';
import ProjectPage from './ProjectPage';
import HomeProjectPage from './HomeProjectPage';

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar/>
        <Switch>
          <Route exact path="/" component={HomeProjectPage} />
          <Route path="/about" component={AboutPage}/>
          <Route path="/projects/:projectid" component={ProjectPage}/>
        </Switch>
      </div>
    );
  }
}
export default App;
