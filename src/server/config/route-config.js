(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const coffeeRoutes = require('../routes/coffee');

    // *** register routes *** //
    app.use('/coffee', coffeeRoutes);

  };

})(module.exports);
