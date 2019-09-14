import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import { Container, Row, Col } from 'reactstrap';
import Fuse from 'fuse.js';

import MentalModelCell from '../components/MentalModelCell.jsx';

import * as _ from '../misc/_.js';
import { SITE_TITLE } from '../misc/constants.js';
import modelsAPI from '../api/modelsAPI.js';

const ALL_TAG = 'all';

class ExplorePage extends Component {

  static async getInitialProps(context) {
    const models = await modelsAPI.getAll();
    let tags = _.toSet(_.flatten(models.map((model) => model.categories)));
    tags.unshift(ALL_TAG);
    return { models, tags, queryTag: context.query.tag };
  }

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedTag: props.queryTag ? props.queryTag : ALL_TAG,
      searchResults: []
    };
  }

  // handle back
  componentDidUpdate(prevProps) {
    const { query } = this.props.router;
    const { searchQuery } = this.state;

    if (query.tag !== prevProps.router.query.tag) {
      // replace undefined tag => all
      const tag = !query.tag ? ALL_TAG : query.tag;
      if (searchQuery.length > 0 && tag == ALL_TAG) {
        this.handleSearch(searchQuery);
      } else {
        this.handleTag(tag);
      }
    }
  }

  componentDidMount() {
    const { models } = this.props;
    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 1000,
      maxPatternLength: 32,
      minMatchCharLength: 4,
      keys: [
        { name: 'title', weight: 0.3 },
        { name: 'oneliner', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'examples', weight: 0.1 },
        { name: 'categories', weight: 0.1 }
      ]
    };
    this.fuse = new Fuse(models, options);
  }

  handleSearch = (searchQuery) => {
    const searchResults = this.fuse.search(searchQuery);
    this.updateURL(ALL_TAG);
    this.setState({ selectedTag: ALL_TAG, searchResults, searchQuery });
  };

  handleTag = (selectedTag) => {
    this.updateURL(selectedTag);
    this.setState({ selectedTag, searchResults: [], searchQuery: '' });
  };

  updateURL = (tag) => {
    const showAll = tag === ALL_TAG;
    const href = '/explore'.concat(showAll ? '' : `?tag=${tag}`);
    const as = '/explore'.concat(showAll ? '' : `/${tag}`);
    Router.push(href, as, { shallow: true });
  };

  render() {
    const Tag = ({ value, isSelected }) => (
      <Fragment>
        <div className='browse-tag main-font' onClick={() => this.handleTag(value)}>
          #{value}
        </div>
        <style jsx>
          {`
            .browse-tag {
              margin: 6px 8px 6px 8px;

              border-radius: 2px;
              font-size: 16px;
              font-weight: 500;
              display: inline-block;

              border-bottom: solid 2px ${isSelected ? 'black' : 'transparent'};

              transition: all .25s ease-in-out;
              -moz-transition: all .25s ease-in-out;
              -webkit-transition: all .25s;
            }

            .browse-tag:hover {
              opacity: 0.6;
              cursor: pointer;

              border-bottom: solid 2px black;
            }
          `}
        </style>
      </Fragment>
    );

    const { searchQuery, searchResults, selectedTag } = this.state;
    const { tags, models } = this.props;
    const showSearchResults = searchResults.length > 0 || searchQuery.length > 0;
    const showAll = selectedTag === ALL_TAG;

    const modelsForTag = () => {
      return !showAll ? models.filter((model) => model.categories.includes(selectedTag)) : models;
    };

    const modelsToShow = showSearchResults ? searchResults : modelsForTag();

    const modelElements = modelsToShow.map((model) => {
      return (
        <Fragment key={model.id}>
          <MentalModelCell key={model.id} model={model} collapsable />
          <br />
        </Fragment>
      );
    });

    const tagsElements = tags.filter((tag) => tag.length > 0).sort().map((tag) => {
      return <Tag key={tag} value={tag} isSelected={selectedTag === tag} />;
    });

    const title = showAll ? `Explore` : `Explore: ${selectedTag.replace('-', ' ')}`;

    return (
      <Fragment>
        <Head>
          <title>
            {title} - {SITE_TITLE}
          </title>
          <meta charSet='UTF-8' />
          <meta name='description' content='Explore mental models using search or tags.' />
          <meta name='keywords' content='browse,explore,mental models,bias,cognitive bias' />
        </Head>
        <div>
          <Container fluid>
            <Row noGutters>
              <Col sm='7'>
                <h1>explore mental models</h1>
                <h2>browse by tag or search</h2>
              </Col>
              <Col sm='5'>
                <input
                  className='box-effect'
                  value={searchQuery}
                  placeholder='Search...'
                  onChange={(event) => this.handleSearch(event.target.value)}
                />
              </Col>
              <div className='browse-header' />
            </Row>
            <Row noGutters>
              <div>
                <i className='fas fa-tags' /> &nbsp;{tagsElements}
              </div>
            </Row>
            <Row noGutters />
          </Container>
          {modelElements}
        </div>
        <style jsx>
          {`
            input {
              padding: 6px 12px 6px 12px;
              margin-right: 16px;
              margin-bottom: 16px;
              max-width: 350px;
              width: 100%;
            }

            input:focus {
              box-shadow: 5px 5px black;
            }

            .browse-header {
              display: block;
            }

            @media only screen and (max-width: 575px) {
              input {
                float: none;
                width: 80%;
                margin-top: 12px;
              }

              .browse-header {
                text-align: center;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default withRouter(ExplorePage);
