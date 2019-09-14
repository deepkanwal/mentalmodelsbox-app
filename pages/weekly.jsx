import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import striptags from 'striptags';

import MentalModelCell from '../components/MentalModelCell';
import Button from '../components/Button';
import modelsAPI from '../api/modelsAPI.js';
import { SITE_TITLE } from '../misc/constants.js';

class ModelPage extends Component {
  static async getInitialProps() {
    const model = await modelsAPI.weekly();
    return { model };
  }

  startOfWeek() {
    let dt = new Date();
    let diff = dt.getUTCDate() - dt.getUTCDay();
    let startDate = new Date(dt.setDate(diff));
    var options = { month: 'long', day: 'numeric' };
    return startDate.toLocaleDateString('en-US', options);
  }

  endOfWeek() {
    let dt = new Date();
    let diff = dt.getUTCDate() - dt.getUTCDay() + 6;
    let startDate = new Date(dt.setDate(diff));
    var options = { month: 'long', day: 'numeric' };
    return startDate.toLocaleDateString('en-US', options);
  }

  render() {
    const { model } = this.props;
    return (
      <Fragment>
        <Head>
          <title> Weekly Mental Model - {SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta name='description' content={striptags(model.oneliner)} />
          <meta name='keywords' content={`mental models,${model.name}`} />
        </Head>
        <Container fluid>
          <div className='center'>
            <h1>weekly mental model</h1>
          </div>
          <div className='center'>
            <h2>
              for {this.startOfWeek()} to {this.endOfWeek()}
            </h2>
          </div>
          <br />
          <MentalModelCell model={model} />
          <div className='w-signup-twitter'>
            <div>
              <Button
                icon='fab fa-twitter'
                content='Follow us on Twitter for updates.'
                fontSize='16px'
                placeIconOnLeft
                href='https://twitter.com/mentalmodelsbox'
              />
            </div>
          </div>
        </Container>
        <style jsx>
          {`
            .w-signup-twitter {
              padding-top: 28px;
              display: block;
              margin-left: auto;
              margin-right: auto;
              vertical-align: middle;
              text-align: center;
              flex: center;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default ModelPage;
