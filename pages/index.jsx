import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';

import MentalModelCell from '../components/MentalModelCell.jsx';
import Linked from '../components/Linked.jsx';
import Button from '../components/Button.jsx';

import modelsAPI from '../api/modelsAPI.js';
import { SITE_TITLE } from '../misc/constants.js';

class HomePage extends Component {
  static async getInitialProps() {
    const model = await modelsAPI.weekly();
    return { model };
  }

  render() {
    const { model } = this.props;
    const modelElement = (
      <Fragment key={model.id}>
        <MentalModelCell key={model.id} model={model} collapsed={false} />
        <br />
      </Fragment>
    );
    return (
      <Fragment>
        <Head>
          <title>{SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta
            name='description'
            content='A collection of mental models useful in everyday life.'
          />
          <meta
            name='keywords'
            content='mental models,decision making,thinking,bias,cognitive bias'
          />
        </Head>
        <div>
          <Container fluid>
            <Row noGutters>
              <Col md='7'>
                <div className='home-header-test'>
                  <h4>the building blocks of making</h4>
                  <h3>better decisions</h3>
                  <br />
                  <Linked href='/explore' color='black'>
                    <div className='home-cta main-font'>explore</div>
                  </Linked>
                </div>
              </Col>
              <Col md='5'>
                <div className='home-logo-container'>
                  <video width='350' height='300' autoPlay loop muted playsInline>
                    <source src='/static/home_video.mp4' type='video/mp4' />
                  </video>
                </div>
              </Col>
            </Row>
            <Row noGutters>
              <div className='home-blurb'>
                <div className='home-text'>
                  <Row noGutters>
                    <Col sm='2'>
                      <div className='home-icon'>
                        <i className='fas fa-brain fa-4x' />
                      </div>
                    </Col>
                    <Col sm='10'>
                      <p>
                        Mental models are a way of explaining how things work. Throughout our lives,
                        we build up a personal collection of mental models to understand the world
                        around us.
                      </p>
                    </Col>
                  </Row>
                  <Row noGutters>
                    <Col sm='2'>
                      <div className='home-icon'>
                        <i className='fas fa-toolbox fa-4x' />
                      </div>
                    </Col>
                    <Col sm='10'>
                      <p>
                        Mental models aren't perfect but developing a rich toolbox of them can be
                        useful in navigating the complexities of life. Learning to intuitively apply
                        the right models in the right situations is something we develop with
                        practice.
                      </p>
                    </Col>
                  </Row>
                  <Row noGutters>
                    <Col sm='2'>
                      <div className='home-icon'>
                        <i className='fas fa-cubes fa-4x' />
                      </div>
                    </Col>
                    <Col sm='10'>
                      <p>
                        This website is a curated collection of models with broad applicability in
                        everyday life. There’s a focus on brief descriptions and simple, real life
                        examples of the models in use.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
            <hr />
          </Container>
          <div className='center home-weekly-model'>
            <h4> Weekly Mental Model </h4>
          </div>
          {modelElement}
          <div className='home-see-all center'>
            <Button
              href='/explore'
              content='View All'
              icon='fas fa-arrow-circle-right'
              fontSize='20px'
            />
          </div>
        </div>
        <style jsx>
          {`
            .home-see-all {
              margin: 12px 0 16px 0;
            }

            .home-logo-container {
              display: flex;
              justify-content: center;
              overflow: none;
            }

            .home-logo {
              display: block;
              width: 300px;
              height: 300px;
              padding: 25px;
            }

            .home-header-test {
              margin-top: 64px;
              margin-bottom: 34px;
            }

            .home-icon {
              display: flex;
              justify-content: center;
              opacity: 0.9;
              margin-right: 16px;
              min-height: 88px;
            }

            @media only screen and (max-width: 767px) {
              .home-header-test {
                margin-top: 32px;
                text-align: center;
              }

              .home-cta {
                margin: auto;
              }

              .home-icon {
                min-height: 0;
                float: none;
                margin-bottom: 20px;
                text-align: center;
              }

              .home-logo-container {
                display: none;
              }
            }

            h3 {
              font-size: 40px;
            }

            h4 {
              font-size: 24px;
            }

            @media only screen and (max-width: 500px) {
              h4 {
                font-size: 20px;
              }

              h3 {
                font-size: 32px;
              }
            }

            @media only screen and (max-width: 350px) {
              h4 {
                font-size: 18px;
              }
            }

            .home-blurb {
              padding: 12px;
              font-size: 16px;
            }

            .home-cta {
              padding: 12px;
              font-size: 20px;
              font-weight: 500;
              text-align: center;
              margin-bottom: 12px;
              border: 2px solid black;
              border-radius: 8px;
              box-shadow: 5px 5px black;
              background: white;
              max-width: 300px;
              opacity: 1;

              transition: all .25s ease-in-out;
              -moz-transition: all .25s ease-in-out;
              -webkit-transition: all .25s;
            }

            .home-cta:hover {
              box-shadow: 8px 8px black;
            }

            hr {
              margin-top: -6px;
              margin-bottom: 0px;
              margin-left: 16px;
              margin-right: 16px;
            }

            .home-weekly-model {
              margin-top: 40px;
              margin-bottom: 32px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default HomePage;
