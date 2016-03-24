var gulp = require('gulp');
var karmaServer = require('karma').Server;

module.exports = function (done) {
    new karmaServer({
      configFile: '../../../karma.conf.js',
      singleRun: true
    }, done).start();
/*    karmaServer.start({
        configFile: '../../../karma.conf.js'
    });*/
};