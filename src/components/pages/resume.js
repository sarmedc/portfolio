import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import {Button} from 'react-bootstrap';
import pdf from '../../Assets/img/Resume_Sarmed.pdf'

import '../../Assets/css/resume.min.css'; 

//var Button = ReactBootstrap.Button;

class Resume extends Component {
	
  render() {
    return (
      <div className="container-fluid">
      	<h1 className="resumeTitle">Resume</h1>
      	<div className="row btnLinks">     
	        <div className="col">
	        	<Button className="btn" bsStyle="link" bsSize="large"><a href="https://github.com/sarmedc" className="link"><i className="fa fa-github fa-fw"></i> <span className="network-name">GITHUB</span></a></Button>
	        </div>
	        <div className="col">
	        	<Button bsSize="large" bsStyle="link" className="btn"><a href="https://www.linkedin.com/in/sarmedc" className="link"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">LINKEDIN</span></a></Button>
	        </div>
        </div>  
      	<div className="frame">
	        <Document
	          file={pdf}
	          onLoadSuccess={this.onDocumentLoad}
	          className="resume">
	          <Page pageNumber={1} />
	        </Document>
        </div>
        

      </div>
    );
  }
}

export default Resume;
