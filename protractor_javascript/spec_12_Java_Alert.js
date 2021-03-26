/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * http://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
 * browser.waitForAngularEnabled(false);
 * browser.get("http://google.com");//non angular apps
 **********************************************************************/
describe('TC_childWindow', function() {
	

	it('ChildWindow', function() 
	{
	
		browser.waitForAngularEnabled(false);
		browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
		browser.sleep(2000);
		
		element(by.id('alertbtn')).click();
		browser.switchTo().alert().accept().then(function() { //or dismiss()
			browser.sleep(3000);
		})
		
		
	})
	
	

})