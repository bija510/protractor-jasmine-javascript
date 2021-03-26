/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/angularpractice/
 * http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
  capabilities: {
  -------------------------------
  ====> from this to bottom 
  capabilities: {
	'browserName': 'chrome'
     }
----------------------------------
	  browserName: 'chrome',

	  'goog:chromeOptions': {

	  w3c: false

	  },

	  },
---------------------------
 ===>this has been added other wise it wasn't working
 **********************************************************************/
describe('TC_frames', function() {
	

	it('frames', function() 
	{
		browser.waitForAngularEnabled(false);

		browser.driver.manage().window().maximize();

		browser.get("http://qaclickacademy.com/practice.php");
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(text)
		{

		console.log(text);
		})


	})


	})

		 

