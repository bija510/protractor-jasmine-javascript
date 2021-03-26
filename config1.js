exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub', //even we don't have to start server.it will run but some problem & not running in Firefox and IE
  specs: ['JS_Protractor_Selenium//spec_01_Start_UP.js'],

  capabilities: {

	  browserName: 'chrome',

	  'goog:chromeOptions': {

	  w3c: false

	  },

	  },
};

/******************************************************************************************************
  1. spec_01_Start_Up.js            2. spec_02_Element.js                3. spec_03_jasmineAssertion.js   
  4. spec_04_Non-AngularWebsite.js  5. spec_05_WebTable_Chain_Locator.js 6. spec_06_ListOfElement_All.js    
********************************************************************************************************/

/*********************************************************************************************************************
 * <!---https://www.protractortest.org/#/browser-setup--->
 * To use the other browser than Chrome
 * webdriver-manager updates ==> download all the driver 
 * path==> C:\Users\Bijaya Chhetri\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium
 * 'browserName': 'firefox' ==> ['chrome', 'internet explorer']
 * To download Internet Explorer driver ==>webdriver-manager update --ie
 * work best with chrome & firefox But with ====>IE <<Big headache>>
 **********************************************************************************************************************
 */

