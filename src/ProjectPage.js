import React, {Component} from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './assests/projectPage.css';
export default class ProjectPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let projectName = this.props.match.params.projectid;
    let imgUrl = "../img/" + projectName + "-cover.PNG"
    let jumboStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
      height: "100%"
    }
    // component is in its own folder?
    let projectPage = (
      <div>
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h1>Piaro</h1>
              <img src={imgUrl} alt="Piaro"/>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="text-justify project-page">

              <Row className="role-summary">
                <Col>
                  <h3>Role</h3>
                  <p>Software Developer</p>
                  <h3>Timeline</h3>
                  <p>October 2018</p>
                </Col>
                <Col>
                  <h3>Team</h3>
                  <p><a href="danielnguyen.me" target="_blank">Daniel Nguyen</a> Elias Mendel</p>
                  <h3>Tools</h3>
                  <p>Android Studio, Google Language API, Firebase</p>
                </Col>
              </Row>
              <div>
              <h2>Description</h2>
              <p>Piaro is a translation messaging application</p>
              <h2>Goals</h2>
              <p>
                The main goal was to create a way for people across the world to talk to each other without dealing with language barriers.
              </p>
              </div>
              <div>
                <h2>Process</h2>
                <h3>Planning</h3>
                <p>put planning stuff here</p>
                <h3>Testing</h3>
                <p>tested here</p>
              </div>
              </Col>
            </Row>
        </Container>
      </div>
    );
    return projectPage;
  }
}
