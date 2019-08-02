import React from 'react';
import Template from './templates/template';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Works from './pages/myworks';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Template} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={AboutMe}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/works' component={Works}/>
      </BrowserRouter>
    );
  }
}
