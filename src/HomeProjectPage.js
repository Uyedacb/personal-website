import React, {Component} from 'react';

export default class HomeProjectPage extends Component {
  render() {
    return (
      <div>
        <section className="container aboutMe jumbotron rounded shadow-lg">
            <div className="row" aria-label="About me section">
              <div className="col-sm-12 col-md-4 text-center">
                <img src="./img/profile_pic.jpg" alt="picture of Brian Uyeda"
                className="shadow-sm profile-pic rounded"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8">
                <h1 id="descTitle">Hi, I'm Brian</h1>
                <p className="desc">I'm a Software Engineer and Informatics
                  student working to create sustainable solutions to real world problems.
                </p>
                <div className="icon-row">
                  <div className="container text-center" role="list">
                    <a href="https://github.com/Uyedacb" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/uyedacb/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:uyedacb@uw.edu" target="_top">
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container project-bin">
            <div className="row" id="piaro-preview">
              <div className="col-sm-hidden col-md-4 project-desc">
                <h2>Piaro.</h2>
                <h3>A worldwide messaging app</h3>
                <p className="caption">
                  Piaro is an Android messaging application that allows users to send
                  and recieve messages in their native language. One person might be sending
                  messages in Korean while the other is typing in German.
                </p>
              </div>
              <a href="https://uyedacb.github.io/Piaro/" target="_blank" className="col-sm-12 col-md-8">
                <div className="project-preview">
                  <img src="./img/piaro-example.PNG" alt="two phones with the Piaro application open"/>
                  <div className="preview-overlay" role="hidden">
                    <h2>Piaro</h2>
                  </div>
                </div>
              </a>
            </div>
            <div className="row" id="savetime-preview">
              <div className="col-sm-hidden col-md-4 project-desc">
                <h2>SaveTime.</h2>
                <h3>An application that tracks your habits</h3>
                <p className="caption">
                  Powered through the voice of Alexa, SaveTime allows users to track
                  how they spend their time. It logs the data through AWS and is retrievable
                  by users so that they can analyze where they can make improvements.
                </p>
              </div>
              <a href="https://devpost.com/software/savetime" target="_blank" className="col-sm-12 col-md-8">
                <div className="project-preview">
                  <img src="./img/alexa-echo.jpg" alt="Amazon Alexa Echo with dark background"/>
                  <div className="preview-overlay" role="hidden">
                    <h2>SaveTime</h2>
                  </div>
                </div>
              </a>
            </div>
            <div className="row" id="info201-preview">
              <div className="col-sm-hidden col-md-4 project-desc">
                <h2>Data Analysis on Mental Health.</h2>
                <h3>Finding contributing factors to Depression.</h3>
                <p className="caption">
                  This data visualization project comprises of data taken from the
                  National Survey on Drug Use and Health in 2015 to analyze multiple contributing
                  factors to depression and suicide in the United States.
                </p>
              </div>
              <a href="https://uyedacb.shinyapps.io/Info201_Final/" target="_blank" className="col-sm-12 col-md-8">
                <div className="project-preview">
                  <img src="./img/data-analysis.jpg" alt="preview of data visualization project"/>
                  <div className="preview-overlay" role="hidden">
                    <h2>Mental Health Visualization</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      );
  }
}
