/**********************************************************
 * 
 *********************************************************/
describe('Element', function(){
	var PB = require("./Calculator2Page.js")
	
	it('allJS-Locators',function(){
		PB.openURL();
	
		PB.firstInput.sendKeys("2");
		PB.secondInput.sendKeys("8");
		PB.goButton.click();
  
		PB.result.getText().then(function(textResult)
		           //$(".ng-binding").getText().then(function(textResult) //we can use this just for the Css
				{
					console.log("Result total is==> "+textResult);
					expect(textResult).toBe("10");
				})
	  
	})
	
	
})










