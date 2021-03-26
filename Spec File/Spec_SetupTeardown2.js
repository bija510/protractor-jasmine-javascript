/**********************************************************
 * setup method  beforeEach===>  BeforeTest(in java)
 * tearDown = afterEach ===> AfterTest(in java)
 *********************************************************/
describe('Element', function(){
	var PB = require("./Calculator2Page.js")

		
	beforeEach(function() { //setUP this is pre-requestics or loading
		PB.openURL();
	})

	it('Testing calculator functionality', function() { //this is the Business logic

		PB.firstInput.sendKeys("2");
		PB.secondInput.sendKeys("8");
		PB.goButton.click();

		PB.result.getText().then(function(textResult)
		//$(".ng-binding").getText().then(function(textResult) //we can use this just for the Css
		{
			console.log("Result total is==> " + textResult);
			expect(textResult).toBe("10");
		})

	})
	
	afterEach(function() {
		console.log("Deleting the cookie");
		console.log("taking the sceenshot");
		console.log("Test--name-- and Passed Successfully");
		console.log("Closing the Browser");
		
		
	})

})










