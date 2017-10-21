import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import '../../Assets/css/projects.min.css';

class Projects extends Component {
  render() {
  	
    return (
      <div className="container-fluid">
      	<h1 className="pName">Projects</h1>
      	<div className="row">
      		<Grid>
			    <Row className="show-grid">
			      <Col sm={6} md={4}><img className="projectImg" 			      
			      	src={require('../../Assets/img/reddit-clone.png')} alt=""/><br/>
			      	<div className="pDiv">			      	
			      	<h2 className="pTitle">Reddit Clone</h2>
      				<p className="pDescription">Developed a lite clone of Reddit.com that displays the top current posts of a given subreddit</p>
      				</div>
      				<p>      		
                    	<Button className="btn" bsStyle="link" bsSize="large"><a href="https://github.com/sarmedc/Reddit-Clone" className="link">More Info</a></Button>
                	</p>
			      </Col>
			      <Col sm={6} md={4}><img className="projectImg" 
			      	src={require('../../Assets/img/wiki-search.png')} alt=""/><br/>
			      	<div className="pDiv">
			      	<h2 className="pTitle">Wiki Search</h2>
			      	<p className="pDescription">Wiki Search displays to users all related search results that links to their respective articles</p>
			      	</div>
			      	<p>
                    	<Button className="btn" bsStyle="link" bsSize="large"><a href="https://github.com/sarmedc/Wiki-Search" className="link">More Info</a></Button>
                	</p>
			      </Col>
			      <Col sm={6} md={4}><img className="projectImg" 
			      	src={require('../../Assets/img/clean-app.png')} alt=""/><br/>
			      	<div className="pDiv">
			      	<h2 className="pTitle">Clean With Friends</h2>
			      	<p className="pDescription">A web application that encourages users to collaborate with their housemates to keep their living space clean. Built using Node.js, Express, and MongoDB, as well as hosted on Heroku.</p>
			      	</div>
			      	<p>
                    	<Button className="btn" bsStyle="link" bsSize="large"><a href="https://github.com/sarmedc/CleaningApp" className="link">More Info</a></Button>
                	</p>
			      </Col>			      
			    </Row>
			    <br/>
			</Grid>
      	</div>
      </div>
    );
  }
}

export default Projects;
