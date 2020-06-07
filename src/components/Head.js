import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

export default function Head(props) {
  const { title, children } = props;


  return (
    <NextHead>
      {/* Use minimum-scale=1 to enable GPU rasterization. */}
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <title>{title}</title>
      {children}
    </NextHead>
  );
}

Head.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string,
};
