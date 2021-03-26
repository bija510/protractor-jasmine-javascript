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
		browser.get('http://demo.automationtesting.in/Windows.html');
		browser.sleep(2000);
		var tabbtn = element(by.xpath("//div[@id='Tabbed']//button[@class='btn btn-info'][contains(text(),'click')]"));
		tabbtn.click();
		
		browser.getTitle().then(function(titlebef) {
			console.log("Parent window===>" + titlebef)
			
		})
		
		browser.getAllWindowHandles().then(function(handles) {
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(titleAft) {
				console.log("child window===>" + titleAft)
				browser.sleep(2000);
			})
			
		})
	

	})
	
	

})