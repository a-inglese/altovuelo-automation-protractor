/*************************************
********** GET BROWSER NAME **********
**************************************/
browser.driver.getCapabilities().then(function(caps){
    browser.browserName = caps.get('browserName');
  });

/*************************************
********* JASMINE CONF ***************
**************************************/
// add jasmine JunitReporter
var jasmineReporters = require('jasmine-reporters');
jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
  consolidateAll: true,
  savePath: 'reports/junitReports',
  filePrefix: 'xmloutput'
}));

// add jasmine spec reporter
// Pinta los resultados formateados en vez de los puntos
var SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter(
  {
  displayStacktrace: 'specs',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
  displaySuccessesSummary: false, // display summary of all successes after execution 
  displayFailuresSummary: true,   // display summary of all failures after execution 
  displayPendingSummary: false,    // display summary of all pending specs after execution 
  displaySuccessfulSpec: true,    // display each successful spec 
  displayFailedSpec: true,        // display each failed spec 
  displayPendingSpec: false,      // display each pending spec 
  displaySpecDuration: false,     // display each spec duration 
  displaySuiteNumber: false,      // display each suite number (hierarchical) 
  colors: {
    success: 'green',
    failure: 'red',
    pending: 'yellow'
  },
  prefixes: {
    success: '✓ ',
    failure: '✗ FAIL! ',
    pending: '* '
  },
  customProcessors: []
  } 
  
));
