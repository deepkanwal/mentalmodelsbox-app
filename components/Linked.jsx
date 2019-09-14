import React, { Fragment } from 'react';
import Link from 'next/link';

const Linked = ({ href, as, ssr, children, color = 'black' }) => (
  <Fragment>
    {ssr ? (
      <a href={href ? href : as} className='linked'>
        {children}
      </a>
    ) : (
      <Link href={href} as={as}>
        <a className='linked'>{children}</a>
      </Link>
    )}
    <style jsx>{`
      .linked:hover {
        opacity: 0.6;
        text-decoration: none;
      }

      .linked {
        color: ${color};
        transition: all .25s ease-in-out;
        -moz-transition: all .25s ease-in-out;
        -webkit-transition: all .25s;
      }
    `}</style>
  </Fragment>
);

export default Linked;
