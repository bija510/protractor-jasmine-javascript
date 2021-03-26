/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/angularpractice/
 * http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
 * browser.waitForAngularEnabled(false);
 * browser.get("http://google.com");//non angular apps
 **********************************************************************/
describe('TC_Action', function() {
	

	it('Action', function() 
	{
		
		browser.get('https://ng-bootstrap.github.io/#/components/tooltip/examples');
		browser.sleep(2000);
		
		browser.actions().mouseMove(element(by.css("button[ngbtooltip='Tooltip on top']"))).perform();
		browser.sleep(2000);

	})
	
	it('KeyboardEvent', function() 
	{
		browser.get('http://demo.automationtesting.in/Register.html');
		browser.sleep(2000);
		element(by.model('FirstName')).sendKeys(protractor.Key.ENTER);
		browser.sleep(2000);
	})

})