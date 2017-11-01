import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CreateGarden extends Component {

  // TODO: Figure how to navigate to this component
  //      * Likely have to refactor VertTabs
  render() {
    return (
      <div className="createGarden">
        <h3>Create a New Garden</h3>
        <button>Sandbox</button>
        <button>Geolocate</button>
      </div>
    );
  }
}

CreateGarden.propTypes = {

};

export default connect(null, null)(CreateGarden);


