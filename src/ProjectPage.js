import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default class ProjectPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let imgUrl = "../img/" + this.props.match.params.projectid + "-cover.PNG"
    let jumboStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: "contain",
      height: "100%"
    }
    // component is in its own folder?
    let projectPage = (
      <div>
        <Container>
          <h1>Piaro</h1>
          <p>Insert summary intro here</p>
          <div>
            <h2>Description</h2>
            <p>Piaro was a passion project set up by...</p>
            <h2>Goals</h2>
            <p>the main goal was to create a way for people across the world talk</p>
            <h2>Process</h2>
            <div>
              <h3>Planning</h3>
              <p>put planning stuff here</p>
              <h3>Testing</h3>
              <p>tested here</p>
              </div>
          </div>
        </Container>
      </div>
    );
    return projectPage;
  }
}
