import React from 'react';
import Header from './header/Header';
import Hero from './hero/Hero';
import About from './about/About';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/reset.scss';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Hero} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
