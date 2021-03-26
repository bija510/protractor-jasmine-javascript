/********************************************************************************
 * We can use the same JavaScript code across all java or python or protractor
 *******************************************************************************/
describe('TS all javaScript command', function(){
	
	
	it('setTextJS', function(){
		
		browser.driver.get("http://demo.automationtesting.in/Datepicker.html");
		element(by.id("datepicker2")).sendKeys('07/06/2020');		
		browser.executeScript("document.getElementById('datepicker1').value='07/06/2020'");
		browser.sleep(3000);	
		
	})
	
	it('clickJS',function(){
		browser.driver.get("http://demo.automationtesting.in/Register.html");
		browser.executeScript("document.getElementById('checkbox1').click()");
		browser.sleep(3000);	
	})
	
	it('setTextJS using CSS',function(){ //==>using \ to use " inside "
		browser.driver.get("http://demo.automationtesting.in/Register.html");
		browser.executeScript("document.querySelector(\"input[placeholder='First Name']\").value='TestName'").then(function(){
			browser.sleep(3000);
		})
		browser.executeScript("history.go(0)");
		browser.sleep(3000);
	})
	
	it('getTextJS and getTitle', function(){
		browser.driver.get("http://demo.automationtesting.in/Index.html");
		browser.executeScript("return document.getElementById('btn2').innerHTML").then(function(text){
			console.log('Getting the text Using JS====>' + text);
		})
		browser.executeScript("return document.title").then(function(text2){
			console.log('Getting Title of the Page===>' + text2);
		})
		
		
	})
	
	it('scrollUp, scrollDown', function(){
		browser.driver.get("http://demo.automationtesting.in/Register.html");
		browser.executeScript("window.scrollBy(0,document.body.scrollHeight)");
		browser.sleep(3000);
		browser.executeScript("window.scrollBy(0,-1000)");
		browser.sleep(3000);
		browser.executeScript("window.scrollBy(0,700)");
		browser.sleep(3000);
		
	})
	
	it('scrollToElement ', function(){
		browser.driver.get("http://demo.automationtesting.in/Register.html");
		browser.executeScript("document.getElementById('Skills').scrollIntoView()");
		browser.sleep(3000);
	})
	
	
})
