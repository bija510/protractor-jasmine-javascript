exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub', //even we don't have to start server.it will run but some problem & not running in Firefox and IE
  specs: ['Page Object Model(POM-P)//spec_parameterization.js'],

  onPrepare :function(){ //this is Global prequerties before test
	  //define non angular-call before test :-browser.waitForAngularEnabled(false);
	  //reporting also
	  
	  browser.driver.manage().window().maximize();
  },
  /*
  
  capabilities: {
	  browserName: 'chrome',
      'goog:chromeOptions': {
	   w3c: false
	  },

	  },*/
};



//npm run protractor
/******************************************************************************************************
  1. spec_01_Start_Up.js            2. spec_02_Element.js                3. spec_03_jasmineAssertion.js   
  4. spec_04_Non-AngularWebsite.js  5. spec_05_WebTable_Chain_Locator.js 6. spec_06_ListOfElement_All.js    
********************************************************************************************************/

