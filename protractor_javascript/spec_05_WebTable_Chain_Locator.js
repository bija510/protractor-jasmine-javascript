/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * ==> Repeater= ng-repeat , chain locators, And css for identical tags
 * bijasu42@gmail.com
 * password:-abcd1234
 * <!---and can be use for [DDL]-dropdown list also-->
 *Example:- element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
 **********************************************************************/
describe('TS_chainLocator', function(){
	
	
	it('chainLocator',function(){
		
		
		browser.get("http://juliemr.github.io/protractor-demo/");
//		element(by.model("first")).sendKeys("2");
//		element(by.model("second")).sendKeys("8");
//		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("10");
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		

		//parent.child 
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
				{
				console.log(text);
				})

//		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text2)
//						{
//						console.log(text2);
//						})

	 
	})
	
	
})










