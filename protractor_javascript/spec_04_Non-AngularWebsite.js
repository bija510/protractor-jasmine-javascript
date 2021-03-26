/**********************************************************************
 * Refer to this site :-http://www.protractortest.org/#/tutorial
 * 
 **********************************************************************/
describe('TS_NonAngular', function(){
	
	
	it('Non_angular',function(){
		
//		browser.waitForAngularEnabled(false); //Way:-1
//		browser.ignoreSynchronization = true; //Way:-2
		browser.driver.get("http://demo.automationtesting.in/Datepicker.html"); //Way:-3
		
//		browser.get("http://demo.automationtesting.in/Datepicker.html");
		browser.sleep(4000);
		
		element(by.id('datepicker1')).click();
		browser.sleep(4000);
	
		
		
		
	 
	})
	
	
})










