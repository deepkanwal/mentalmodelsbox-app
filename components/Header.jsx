import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Linked from './Linked.jsx';
import Button from './Button.jsx';

import { SITE_TITLE } from '../misc/constants.js';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Logo = () => (
      <Fragment>
        <div className='header-branding'>
          <Linked href='/'>
            <img className='header-logo' src='/static/logo.png' alt={`Logo of mentalmodels.app`} />
            <h2 className='header-title align-middle'>{SITE_TITLE.toLowerCase()}</h2>
          </Linked>
        </div>
        <style jsx>{`
          .header-branding {
            cursor: pointer;
            display: inline;
          }

          @media only screen and (max-width: 575px) {
            .header-branding {
              display: block;
              text-align: center;
              padding-right: 16px;
            }
          }

          .header-logo {
            height: 44px;
            width: 44px;
            margin-right: 16px;

            transition: all .25s ease-in-out;
            -moz-transition: all .25s ease-in-out;
            -webkit-transition: all .25s;
          }

          .header-title {
            font-weight: 500;
            line-height: 1em;
            font-size: 20px;
            display: inline;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </Fragment>
    );

    const Links = () => (
      <Fragment>
        <div className='header-links'>
          <Button content='weekly' href='/weekly' fontSize={'18px'} />
          <Button content='explore' href='/explore' fontSize={'18px'} />
          <Button content='contribute' href='/contribute' fontSize={'18px'} />
        </div>
        <style jsx>{`
          .header-links {
            margin-top: 3px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
          }

          @media only screen and (max-width: 575px) {
            .header-links {
              justify-content: center;
            }
          }
        `}</style>
      </Fragment>
    );

    return (
      <Fragment>
        <header className='header'>
          <Container fluid>
            <Row>
              <Col sm={6}>
                <Logo />
              </Col>
              <Col sm={6} className='links'>
                <Links />
              </Col>
            </Row>
            <br />
          </Container>
        </header>
        <style jsx>{`
          .header {
            clear: both;
            margin-top: 12px;
            margin-bottom: 0px;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Header;
