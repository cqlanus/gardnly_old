import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = ({children}) => {

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Main;

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
};