import React, { Component, Fragment } from 'react';

import Linked from './Linked.jsx';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className='footer'>
          <br />
          <Linked href='/about'>About</Linked>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Linked href='/contribute'>Contribute</Linked>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Linked href='/privacy'>Privacy</Linked>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Linked href='https://twitter.com/mentalmodelsbox'>Twitter</Linked>
          <br />
        </footer>

        <style jsx>{`
          .footer {
            clear: both;
            margin-top: 12px;
            margin-bottom: 28px;
            text-align: center;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Footer;
