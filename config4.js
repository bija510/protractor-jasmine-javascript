
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  
  specs: ['Spec File//Spec_SetupTeardown2.js'],
  

  onPrepare :function()
  { 
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   },
 
  suites :
  {
       Smoke : [
		    	   'Spec File//Spec_Calculator.js',
		    	   'Spec File//spec_parameterization.js',
		    	   'Spec File/Spec_SetupTeardown.js'
    	       ],  
       
       Regression : 'Spec File/spec_08_Dropdown.js'	 
		   
  }, 
	jasmineNodeOpts: {
	 showColors: true, // Use colors in the command line report.
			  }
  
};

//npm run webdriver-update
//npm install will update all if you update any in json file
//npm run protractor 
//npm run smokeSuite
//npm run regressionSuite
/******************************************************************************************************
  1. spec_01_Start_Up.js            2. spec_02_Element.js                3. spec_03_jasmineAssertion.js   
  4. spec_04_Non-AngularWebsite.js  5. spec_05_WebTable_Chain_Locator.js 6. spec_06_ListOfElement_All.js    
********************************************************************************************************/

