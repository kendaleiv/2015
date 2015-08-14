var wd = require('wd');
var app = require('sample-apps')('TestApp');

var remotes = {
  local: {
    hostname: "localhost",
    port: 4723
  },

  sauce: {
    hostname: "ondemand.saucelabs.com",
    port: 80,
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY
  }
}

var environment = remotes.sauce;

var desiredCapabilities = {
  platformName: 'iOS',
  platformVersion: '8.4',
  deviceName: 'iPhone 6',
  app: 'sauce-storage:TestApp.app.zip',

  browserName: '',
  appiumVersion: '1.4.7'
}



driver = wd.promiseChainRemote(environment)

driver.init(desiredCapabilities, function(err){
  driver.quit();
});
