/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import oneStatement from './one-statemant';

// fix me
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer className="w3-container w3-teal w3-center w3-margin-top">
        <p>{oneStatement}</p>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a> and <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a></p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
