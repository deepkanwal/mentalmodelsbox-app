import React, { Fragment } from 'react';

import Linked from './Linked.jsx';

const ButtonContent = ({ content, icon, placeIconOnLeft }) => (
  <Fragment>
    {placeIconOnLeft && (
      <div className='button-icon'>
        <i className={icon} />
      </div>
    )}
    {content}
    {!placeIconOnLeft && (
      <div className='button-icon'>
        <i className={icon} />
      </div>
    )}
    <style jsx>
      {`
        .button-icon {
          display: inline;
          margin-left: ${icon ? '10px' : '0'};
          margin-right: ${icon ? '10px' : '0'};
        }
      `}
    </style>
  </Fragment>
);

const Button = ({
  href,
  as,
  onClick,
  content,
  icon,
  placeIconOnLeft = false,
  fontSize = '15px'
}) => (
  <Fragment>
    <div className='button-container main-font' onClick={onClick}>
      {href ? (
        <div className='button-inner-container'>
          <Linked href={href} as={as}>
            <ButtonContent content={content} icon={icon} placeIconOnLeft={placeIconOnLeft} />
          </Linked>
        </div>
      ) : (
        <div className='button-inner-container button-without-link'>
          <ButtonContent content={content} icon={icon} placeIconOnLeft={placeIconOnLeft} />
        </div>
      )}
    </div>

    <style jsx>{`
      .button-container {
        padding: 6px 8px 6px 8px;
        display: inline-block;
        font-size: ${fontSize};
        font-weight: 500 !important;
      }

      .button-inner-container {
        display: inline;
        cursor: pointer;
      }

      .button-without-link:hover {
        opacity: 0.6 !important;
        transition: all .25s ease-in-out;
        -moz-transition: all .25s ease-in-out;
        -webkit-transition: all .25s;
      }
    `}</style>
  </Fragment>
);

export default Button;
