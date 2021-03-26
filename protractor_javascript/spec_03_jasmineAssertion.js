/**********************************************************************
 * Refer to this site :-https://jasmine.github.io/2.0/introduction.html
 * expect(a).toBe(true); "this is "Jasmine concept" & take care promise resolve
 * more than one element found for locator By(css selector, .ng-binding) - the first result will be used
 **********************************************************************/
describe('TS_Assertion', function(){
	
	
	it('Assertion',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("8")
		
		element(by.id("gobutton")).click().then(function(){
			browser.sleep(4000)
		})
		element(by.css("h2[class*='ng-binding']")).getText().then(function(textResult)
				{		
					console.log("Result total is==> "+textResult);
				})
				
		//Assertion --> Verify actValue vs expValue-->Not Protector take care of this
		expect(element(by.css("h2[class*='ng-binding']")).getText()).toBe("10").then(function(){
			var a= 5;
			console.log("==>"+expect(a).toEqual(5));
		})
		
		
	 
	})
	
	
})










