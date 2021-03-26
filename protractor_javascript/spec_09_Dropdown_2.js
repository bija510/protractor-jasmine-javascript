/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * https://www.protractortest.org/#/
 * browser.waitForAngularEnabled(false);
 * browser.get("http://google.com");//non angular apps
 **********************************************************************/
describe('TS_dropdown2', function() {
	

	it('Locators', function() 
	{
		browser.get('http://juliemr.github.io/protractor-demo/');
		//Way:-1
		element(by.model("operator")).element(by.css("option[value='MODULO']")).click();
		browser.sleep(4000);
		
		//Way:- 2
		element.all(by.options('value for (key, value) in operators')).get(4).click();
		browser.sleep(4000);
		
		//Way:-3
		element(by.cssContainingText('option','*')).click();
		browser.sleep(4000);
		
		
		


	})

})