import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestGarden, removeGarden} from '../../redux';


const VertTabs = ({tabs, fetchGarden, backToSplash, hasGarden}) => (
  <div className="vertTabs">
    {
      tabs && tabs.map(tab =>
        <button
          key={tab.id}
          className="tabLinks"
          id={tab.id}
          onClick={() => fetchGarden(tab.id)}
        >{tab.name}</button>)
    }
    {hasGarden && <button className="tabLinks" onClick={backToSplash}>Go Back</button>}
  </div>
);

VertTabs.propTypes = {
  tabs: PropTypes.array,
  fetchGarden: PropTypes.func.isRequired,
  backToSplash: PropTypes.func.isRequired,
  hasGarden: PropTypes.bool
};


const mapState = state => {
  return {
    hasGarden: !!state.garden.id,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchGarden(id) {
      dispatch(requestGarden(id));
    },
    backToSplash() {
      dispatch(removeGarden());
    }
  };
};

export default connect(mapState, mapDispatch)(VertTabs);