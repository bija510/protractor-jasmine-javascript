/**********************************************************
 * setup method  beforeEach===>  BeforeTest(in java)
 * tearDown = afterEach ===> AfterTest(in java)
 *********************************************************/
describe('Element', function(){
	var PB = require("./PageObjects.js");
    var d = require("./Data.js"); //d.dataDrive.firstInput
		
	beforeEach(function() { //setUP this is pre-requestics or loading
		PB.openURL();
	})

	it('Testing calculator functionality', function() { //this is the Business logic
        
		PB.firstInput.sendKeys(d.dataDrive.firstInput);
		PB.secondInput.sendKeys(d.dataDrive.secondInput);
		PB.goButton.click();

		PB.result.getText().then(function(textResult)
		//$(".ng-binding").getText().then(function(textResult) //we can use this just for the Css
		{
			console.log("Result total is==> " + textResult);
			expect(textResult).toBe(d.dataDrive.result);
		})

	})
	
	afterEach(function() {
		console.log("Deleting the cookie");
		console.log("taking the sceenshot");
		console.log("Test--name-- and Passed Successfully");
		console.log("Closing the Browser");
		
		
	})

})










