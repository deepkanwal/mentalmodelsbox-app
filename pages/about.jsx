import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import { SITE_TITLE } from '../misc/constants.js';

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title> About - {SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta
            name='description'
            content={`Details and contact information about the ${SITE_TITLE}.`}
          />
          <meta
            name='keywords'
            content='mental models,decision making,thinking,bias,cognitive bias'
          />
        </Head>
        <Container fluid>
          <Row noGutters>
            <h1>About</h1>
          </Row>
          <Row noGutters>
            <h2>Overview</h2>
            <p>
              {SITE_TITLE} is a collection of models with fairly broad applicability. While there
              are a lot of great resources out there on mental models, we've tried to maintain a
              focus on brief descriptions with simple, real life examples of the models in use.
            </p>
            <p>
              If there's a model you find interesting, we'd encourage you to research and read more
              about it. In the interest of brevity and conciseness, we do omit a lot of interesting
              details and history.
            </p>
          </Row>
          <Row noGutters>
            <h2>Contact</h2>
            <p>
              If you'd like to contact us, feel free to shoot us a message on{' '}
              <a href='https://twitter.com/mentalmodelsbox'>Twitter</a>. For bugs, feel free to file
              an issue or create a pull request on{' '}
              <a href='https://github.com/deepkanwal/mentalmodelsbox-app'>GitHub</a>.
            </p>
          </Row>
          <Row noGutters>
            <h2>License</h2>
            <p>
              Text on this website is available under the{' '}
              <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
                Creative Commons Attribution-ShareAlike 4.0 License
              </a>. A lot of the model information has been sourced from{' '}
              <a href='https://en.wikipedia.org'>Wikipedia</a> and a link to the corresponding
              article is provided under each model when available.
            </p>
          </Row>

          <Row noGutters />
        </Container>
      </Fragment>
    );
  }
}

export default AboutPage;
