import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import striptags from 'striptags';

import MentalModelCell from '../components/MentalModelCell';
import { SITE_TITLE } from '../misc/constants.js';
import modelsAPI from '../api/modelsAPI.js';

class ModelPage extends Component {
  static async getInitialProps(context) {
    const id = context.query.id;
    const model = await modelsAPI.get(id);
    return { model };
  }

  render() {
    const { model } = this.props;
    return (
      <Fragment>
        <Head>
          <title>
            {' '}
            {model.name} - {SITE_TITLE}
          </title>
          <meta charSet='UTF-8' />
          <meta name='description' content={striptags(model.oneliner)} />
          <meta name='keywords' content={`mental models,${model.name}`} />
        </Head>
        <MentalModelCell model={model} />
      </Fragment>
    );
  }
}

export default ModelPage;
