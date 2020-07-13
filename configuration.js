var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  
  specs: ['Page Object Model(POM-P)//spec_parameterization.js'],

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
       Smoke : ['Page Object Model(POM-P)//Script_PageObject.js','Page Object Model(POM-P)//SetUP_TearDown.js'],  
       Regression : 'Page Object Model(POM-P)//spec_19_FileUpload.js'	 
		   
  }, 
	jasmineNodeOpts: {
	 showColors: true, // Use colors in the command line report.
			  }
  
};


//make sure you do npm install if you update any in json file
//npm run protractor 
//npm run smokeSuite
//npm run regressionSuite
/******************************************************************************************************
  1. spec_01_Start_Up.js            2. spec_02_Element.js                3. spec_03_jasmineAssertion.js   
  4. spec_04_Non-AngularWebsite.js  5. spec_05_WebTable_Chain_Locator.js 6. spec_06_ListOfElement_All.js    
********************************************************************************************************/

