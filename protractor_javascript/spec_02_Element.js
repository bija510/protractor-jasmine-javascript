/**********************************************************
 * Locators Recommended are:- CSS, ID, Name, Model, Binding
 * Also support all 8 selenium locator
 * X-path Not recommended to uses, coz bit slow
 * Only use the Angular Website don't use Random Website if then it work for couple time and after that it will not work
 * It wait for the result while process to get==>10 in this it is so intellegance that it automatically wait.
 * if promise not resolve it will give==>100 line of result
 * Refer to this:- http://www.protractortest.org/#/locators
 *********************************************************/
describe('Element', function(){
	
	
	it('allJS-Locators',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("8")
		
		element(by.id("gobutton")).click();
		element(by.css(".ng-binding")).getText().then(function(textResult)
		           //$(".ng-binding").getText().then(function(textResult) //we can use this just for the Css
				{
			
					console.log("Result total is==> "+textResult);
				})
		
		
	
	})
	
	
})










