import React, { Component } from 'react';    

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';              

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Aboutme from './components/pages/aboutMe';
import Projects from './components/pages/projects';
import Resume from './components/pages/resume';


import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App"> 
        <Header/>
        	<Route exact path='/portfolio' component={Homepage} />
        	<Route exact path='/AboutMe' component={Aboutme} />
        	<Route exact path ='/Projects' component={Projects} />
        	<Route exact path ='/Resume' component={Resume} />
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
