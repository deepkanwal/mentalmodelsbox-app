import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Collapse } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import Button from './Button';
import { SITE_DOMAIN } from '../misc/constants';

class MentalModelCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.collapsable && !props.collapsed
    };
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  getModelLink = (model) => {
    return `${SITE_DOMAIN}/model/${model.id}`;
  };

  render() {
    const { model, collapsable } = this.props;
    const { collapsed } = this.state;

    const CellButtons = () => {
      const expandIcon = collapsed ? 'fas fa-caret-down' : 'fas fa-caret-up';
      const expandText = collapsed ? 'Show More' : 'Show Less';
      return (
        <Fragment>
          <div className='cell-buttons'>
            <div className='cell-button'>
              <Button onClick={this.toggle} content={expandText} icon={expandIcon} />
            </div>
            <div className='cell-button'>
              <Button
                content='Direct Link'
                icon='fas fa-arrow-right'
                as={`/model/${model.id}`}
                href={`/model?id=${model.id}`}
              />
            </div>
          </div>
          <style jsx>
            {`
              .cell-buttons {
                margin-top: 12px;
                text-align: right;
              }

              .cell-button {
                height: 38px;
                display: block;
              }

              @media only screen and (max-width: 767px) {
                .cell-buttons {
                  margin-top: 20px;
                  text-align: center;
                }

                .cell-button {
                  display: inline;
                  margin-right: 12px;
                }
              }
            `}
          </style>
        </Fragment>
      );
    };

    return (
      <Fragment>
        <Container fluid>
          <div className='cell-segment'>
            <Row noGutters>
              <Col md={collapsable ? 9 : 12}>
                {collapsable ? (
                  <h2 className='cell-model-title'>{model.name}</h2>
                ) : (
                  <h1 className='cell-model-title'>{model.name}</h1>
                )}
                <ReactMarkdown source={model.oneliner} disallowedTypes={['paragraph']} unwrapDisallowed />
              </Col>
              {collapsable && (
                <Col md={3}>
                  <CellButtons collapsed={collapsed} modelId={model.id} />
                </Col>
              )}
            </Row>
            <Collapse isOpen={!collapsed}>
              <div className='cell-details'>
                <h4>Description</h4>
                <div>
                  <ReactMarkdown source={model.description} />
                </div>
                <h4>Examples</h4>
                <ul>
                  {model.examples.map((example, index) => {
                    return (
                      <li key={index}>
                        <ReactMarkdown source={example} />
                      </li>
                    );
                  })}
                </ul>
                <div className='mmc-more-info-container'>
                  <div className='mmc-more-info mmc-left'>
                    <Button
                      left
                      icon='fab fa-wikipedia-w'
                      content='Wikipedia'
                      href={model.wikipedia}
                    />
                  </div>
                  <div className='mmc-more-info mmc-right'>
                    <Button
                      left
                      icon='fab fa-twitter'
                      content=''
                      href={`https://twitter.com/home?status=Learn about ${model.name} at ${this.getModelLink(
                        model
                      )}!`}
                    />
                    <Button
                      left
                      icon='fab fa-facebook'
                      content=''
                      href={`https://www.facebook.com/sharer/sharer.php?u=www.${this.getModelLink(
                        model
                      )}`}
                    />
                    <Button
                      left
                      icon='fab fa-linkedin'
                      content=''
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.${this.getModelLink(
                        model
                      )}&title=${encodeURI(model.name)}`}
                    />
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </Container>
        <style jsx>
          {`
            .cell-segment h4 {
              display: block;
              clear: both;
              font-weight: 500 !important;
              font-size: 20px;
            }

            .cell-segment ul {
              margin-bottom: 0;
            }

            .cell-segment .row {
              padding-top: 12px;
              padding-bottom: 12px;
            }

            .cell-model-title {
              font-size: 22px;
              font-weight: 500;
              margin-bottom: 12px;
            }

            .mmc-more-info-container {
              display: block;
              height: 26px;
              margin-top: 16px;
              margin-bottom: 12px;
            }

            .mmc-more-info {
              display: flex;
            }

            .mmc-left {
              float: left;
            }

            .mmc-right {
              float: right;
            }

            @media only screen and (max-width: 350px) {
              .mmc-more-info-container {
                height: 56px;
              }

              .mmc-left {
                float: none;
                justify-content: center;
              }

              .mmc-right {
                float: none;
                justify-content: center;
              }
            }

            .cell-details {
              padding: 6px 12px 12px 12px;
            }

            .cell-segment {
              background-color: white;
              padding: 12px 12px ${collapsed ? '12px' : '0px'} 12px;
              border: 2px solid black;
              border-radius: 2px;
              box-shadow: 5px 5px black;
              font-size: 16px;

              transition: all .25s ease-in-out;
              -moz-transition: all .25s ease-in-out;
              -webkit-transition: all .25s;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default MentalModelCell;
