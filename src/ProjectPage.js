import React, {Component} from 'react';
import { Jumbotron, Container, Table } from 'reactstrap';

export default class ProjectPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let projectName = this.props.match.params.projectid;
    let imgUrl = "../img/" + projectName + "-cover.PNG"
    let jumboStyle = {
      objectFit: "cover",
      width: "100%",
      height: "100%"
    }
    // component is in its own folder?
    let projectPage = (
      <div>
        <img src={imgUrl} style={jumboStyle}/>
        <Container>
          <Table>
            <tr>
              <th>Project:</th>
              <td>{projectName}</td>
            </tr>
          </Table>
        </Container>
      </div>
    );
    return projectPage;
  }
}
