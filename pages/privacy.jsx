import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import { SITE_TITLE } from '../misc/constants.js';

class PrivacyPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title> Privacy Policy - {SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta name='description' content={`Privacy policy for ${SITE_TITLE}.`} />
          <meta name='keywords' content='mental models,privacy,policy' />
        </Head>
        <Container fluid>
          <Row noGutters>
            <h1>Privacy Policy</h1>
          </Row>
          <Row noGutters>
            <p>
              <em>Last Updated: June 27, 2019</em>
            </p>
            <p>
              <strong>tl;dr:</strong> We use Google Analytics to collect information about your
              session on the site. You can opt out of this here:{' '}
              <a href='https://tools.google.com/dlpage/gaoptout'>
                {' '}
                https://tools.google.com/dlpage/gaoptout
              </a>.
            </p>
            <p>
              This Privacy Policy describes how your personal information is collected, used, and
              shared when you visit or make a purchase from {SITE_TITLE} (the “Site”).
            </p>
          </Row>
          <Row noGutters>
            <h2>PERSONAL INFORMATION WE COLLECT</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your
              device, including information about your web browser, IP address, time zone, and some
              of the cookies that are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or products that you view,
              what websites or search terms referred you to the Site, and information about how you
              interact with the Site. We refer to this automatically-collected information as
              “Device Information.” This is done through Google Analytics.
            </p>

            <p>We collect Device Information using the following technologies:</p>

            <ul>
              <li>
                “Cookies” are data files that are placed on your device or computer and often
                include an anonymous unique identifier. For more information about cookies, and how
                to disable cookies, visit http://www.allaboutcookies.org.
              </li>
              <li>
                “Log files” track actions occurring on the Site, and collect data including your IP
                address, browser type, Internet service provider, referring/exit pages, and
                date/time stamps.
              </li>
              <li>
                “Web beacons,” “tags,” and “pixels” are electronic files used to record information
                about how you browse the Site.
              </li>
            </ul>
            <p>
              Additionally when you sign up for updates or submit a mental model, we collect the
              email address provided. We refer to this information as “User Submitted Information.”
            </p>

            <p>
              When we talk about “Personal Information” in this Privacy Policy, we are talking both
              about Device Information and User Submitted Information.
            </p>
          </Row>
          <Row noGutters>
            <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>

            <p>
              We use the User Submitted Information that we collect to provide email updates to you
              regarding new features and content in the app.
            </p>

            <p>
              We use the Device Information that we collect to help us screen to see how our
              customers browse and interact with the Site.
            </p>
          </Row>
          <Row noGutters>
            <h2>SHARING YOUR PERSONAL INFORMATION</h2>

            <p>
              We share your Personal Information with third parties to help us use your Personal
              Information, as described above. We use Google Analytics to help us understand how our
              customers use the Site--you can read more about how Google uses your Personal
              Information here: https://www.google.com/intl/en/policies/privacy/. You can also
              opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
            </p>

            <p>
              If you are a European resident, you have the right to access personal information we
              hold about you and to ask that your personal information be corrected, updated, or
              deleted. If you would like to exercise this right, please contact us through the
              contact information below.
            </p>
          </Row>
          <Row noGutters>
            <h2>DATA RETENTION</h2>

            <p>
              When you sign up via the Site, we will maintain your User Submitted Information for
              our records unless and until you ask us to delete this information.
            </p>
          </Row>
          <Row noGutters>
            <h2>CHANGES</h2>

            <p>
              We may update this privacy policy from time to time in order to reflect, for example,
              changes to our practices or for other operational, legal or regulatory reasons.
            </p>
          </Row>
          <Row noGutters>
            <h2>CONTACT US</h2>

            <p>
              For more information about our privacy practices, if you have questions, or if you
              would like to make a complaint, please contact us by e-mail at
              mentalmodelsapp@gmail.com.
            </p>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PrivacyPage;
