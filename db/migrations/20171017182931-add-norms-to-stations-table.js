'use strict';
const Promise = require('bluebird');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      let actions = [];

      const first_frost_50 = queryInterface.addColumn('stations', 'first_frost_50', Sequelize.STRING);
      const first_frost_90 = queryInterface.addColumn('stations', 'first_frost_90', Sequelize.STRING);
      const last_frost_50 = queryInterface.addColumn('stations', 'last_frost_50', Sequelize.STRING);
      const last_frost_90 = queryInterface.addColumn('stations', 'last_frost_90', Sequelize.STRING);
      const season_length_50 = queryInterface.addColumn('stations', 'season_length_50', Sequelize.INTEGER);
      const season_length_90 = queryInterface.addColumn('stations', 'season_length_90', Sequelize.INTEGER);
      const gdd_50 = queryInterface.addColumn('stations', 'ann_gdd_50', Sequelize.INTEGER);
      const gdd_90 = queryInterface.addColumn('stations', 'ann_gdd_90', Sequelize.INTEGER);

      actions.push({exec: function(){return first_frost_50}});
      actions.push({exec: () => first_frost_90});
      actions.push({exec: () => last_frost_50});
      actions.push({exec: () => last_frost_90});
      actions.push({exec: () => season_length_50});
      actions.push({exec: () => season_length_90});
      actions.push({exec: () => gdd_50});
      actions.push({exec: () => gdd_90});

      return Promise.each(actions, function(item) { return item.exec()})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      let actions = [];

      const first_frost_50 = queryInterface.removeColumn('stations', 'first_frost_50');
      const first_frost_90 = queryInterface.removeColumn('stations', 'first_frost_90');
      const last_frost_50 = queryInterface.removeColumn('stations', 'last_frost_50');
      const last_frost_90 = queryInterface.removeColumn('stations', 'last_frost_90');
      const season_length_50 = queryInterface.removeColumn('stations', 'season_length_50');
      const season_length_90 = queryInterface.removeColumn('stations', 'season_length_90');
      const gdd_50 = queryInterface.removeColumn('stations', 'ann_gdd_50');
      const gdd_90 = queryInterface.removeColumn('stations', 'ann_gdd_90');

      actions.push({exec: () => first_frost_50});
      actions.push({exec: () => first_frost_90});
      actions.push({exec: () => last_frost_50});
      actions.push({exec: () => last_frost_90});
      actions.push({exec: () => season_length_50});
      actions.push({exec: () => season_length_90});
      actions.push({exec: () => gdd_50});
      actions.push({exec: () => gdd_90});

      return Promise.each(actions, function(item) { return item.exec()})
  }
};
