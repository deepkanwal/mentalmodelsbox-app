import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Button from '../components/Button';
import { SITE_TITLE } from '../misc/constants.js';

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title> Contribute - {SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta name='description' content={`Contribute to the ${SITE_TITLE} site via GitHub.`} />
          <meta
            name='keywords'
            content='mental models,decision making,thinking,bias,cognitive bias,open source,contribute'
          />
        </Head>
        <Container fluid>
          <Row noGutters className='center'>
            <Col sm='12'>
              <h1>contribute to the site</h1>
            </Col>
          </Row>
          <Row noGutters>
            <Col sm='2' className='center'>
              <div className='contribute-icon'>
                <i className='fab fa-github fa-4x' />
              </div>
            </Col>
            <Col sm='10'>
              <p>
                The website and the accompanying model data is available on GitHub. It's split up
                into two repositories, one for the front-end application and one for the model data.
                They are linked below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm='5'>
              <div className='contribute-repo-button'>
                <Button
                  icon='fab fa-react'
                  content='View App Repo'
                  fontSize='18px'
                  placeIconOnLeft
                  href='https://github.com/deepkanwal/mentalmodelsbox-app'
                />
              </div>
            </Col>
            <Col sm='7'>
              This is the repository for the front-end for the website. If you'd like to contribute
              anything UI or UX related, use this repo.
            </Col>
          </Row>
          <Row>
            <Col sm='5'>
              <div className='contribute-repo-button'>
                <Button
                  icon='fas fa-edit'
                  content='View Data Repo'
                  fontSize='18px'
                  placeIconOnLeft
                  href='https://github.com/deepkanwal/mentalmodelsbox-data'
                />
              </div>
            </Col>
            <Col sm='7'>
              This is the repository for all mental model data used in the website. If you'd like to
              contribute new mental models or update existing ones, use this repo.
            </Col>
          </Row>
        </Container>
        <style jsx>
          {`
            .contribute-icon {
              margin-bottom: 12px;
            }

            .contribute-repo-button {
              margin-bottom: 12px;
              margin-right: 4px;
              float: right;
            }

            @media only screen and (max-width: 575px) {
              .contribute-repo-button {
                float: none;
                margin-right: 0px;
                text-align: center;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default AboutPage;
