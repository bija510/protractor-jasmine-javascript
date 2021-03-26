/**********************************************************************
 * Refer to this site :-http://www.protractortest.org/#/api?view=ProtractorExpectedConditions
 * http://www.itgeared.com/demo/1506-ajax-loading.html
 * http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
  capabilities: {
 
 **********************************************************************/
describe('TS_Synch', function() {
	

	it('Synch', function() 
	{
		browser.waitForAngularEnabled(false);

		browser.driver.manage().window().maximize();
		
		
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		element(by.css("a[href*='loadAjax']")).click();
		
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		
	
		element(by.id("results")).getText().then(function(text)
		{

		console.log(text);
		})






	})


	})

		 

