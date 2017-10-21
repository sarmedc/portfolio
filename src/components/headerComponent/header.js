import React, { Component } from 'react';
import {	
	Link
} from 'react-router-dom'; 

class Header extends Component {
  render() {
    return (
      <header>

      	<div className="logo">
          
      	</div> 

	    <nav>
	      <ul>
	        <li>
	          <Link to="/portfolio">Home</Link>	   		    		
	      	</li>
	      	<li>
	      	  <Link to="/AboutMe">About Me</Link>
	      	</li>
	      	<li>
	      	  <Link to="/Projects">Projects</Link>
	      	</li>  
	      	<li>
	      	  <Link to="/Resume">Resume</Link>
	      	</li>     		
	      </ul>
	    </nav>

      </header>
    );
  }
}

export default Header;
