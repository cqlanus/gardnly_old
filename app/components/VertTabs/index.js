import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const VertTabs = ({tabs}) => (
  <div className="vertTabs">
  {
    // tabs.forEach(tab => <button key={tab.name} className="tabLink">{tab.name}</button>)
  }

    <button className="tablinks" >London</button>
    <button className="tablinks" >Paris</button>
    <button className="tablinks" >Tokyo</button>
  </div>
);

VertTabs.propTypes = {
  tabs = PropTypes.array,
};

export default VertTabs;