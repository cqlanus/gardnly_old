import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';
import {Login} from '../auth-form';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      formShown: false,
    };
  }

  showLogin() {
    this.setState({
      formShown: !this.state.formShown,
    });
  }

  render() {
    console.log(this.state);
    const children = this.props.children;
    return (
      <div className="main">
        <NavBar showLogin={this.showLogin.bind(this)}/>
        <Login formShown={this.state.formShown}/>
        {children}
      </div>
    );
  }
}

export default Main;

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
};

