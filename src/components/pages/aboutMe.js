import React, { Component } from 'react'; 

import '../../Assets/css/about.min.css';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<h1>About Me</h1>
      	<div className="row">
      		<div className="col" id="img">
      			<img className="profile-pic" src={require('../../Assets/img/profile-pic.png')} alt=""/>
      		</div>
      		<div className="col" id="description">
      			<p>Hello World!</p><p>My name is Sarmed Chaudhry and i recently graduated with a <b id="key-words">Computer Science</b> degree at the University of California San Diego.</p>
                <p>My goal is to furthur develop my skills as a <b id="key-words">Software Engineer</b> who specializes in <b id="key-words">Frontend/Web development</b>.</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default About;
