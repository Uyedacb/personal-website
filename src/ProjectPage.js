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
              <img src={imgUrl} alt="Piaro"/>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="text-justify project-page">
              <h1>Piaro</h1>
              <div className="role-summary">
                <h3>Role:</h3>
                <p>Software Developer</p>
                <h3>Time:</h3>
                <p>October 2018</p>
                <h3>Team:</h3>
                <a href="danielnguyen.me" target="_blank"><p>Daniel Nguyen</p></a>
                <p>Elias Mendel</p>
                <p>Insert summary intro here</p>
                <h3>Tools:</h3>
              </div>
              <div>
              <h2>Description</h2>
              <p>Piaro is translating messaging application</p>
              <h2>Goals</h2>
              <p>the main goal was to create a way for people across the world talk</p>
              <h2>Process</h2>
              </div>
              <div>
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
