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
        <Jumbotron fluid style={jumboStyle}>
          <Container>
          </Container>
        </Jumbotron>
      </div>
    );
    return projectPage;
  }
}
