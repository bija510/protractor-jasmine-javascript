/**
 * 
 */

/**********************************************************
 * setup method  beforeEach===>  BeforeTest(in java)
 * tearDown = afterEach ===> AfterTest(in java)
 *********************************************************/
describe('Element', function(){
	var PB = require("./PageObjects.js");
    var d = require("./Data_Parameterization.js"); //d.dataDrive.firstInput
    var using = require('jasmine-data-provider');
	beforeEach(function() { //setUP this is pre-requestics or loading
		PB.openURL();
	})

	 using(d.dataDriven, function (data, description) {
		 
		 it('Testing calculator functionality' + ':-' +description , function() { //this is the Business logic
		        
				PB.firstInput.sendKeys(data.firstInput);
				PB.secondInput.sendKeys(data.secondInput);
				PB.goButton.click();

				PB.result.getText().then(function(textResult)
				//$(".ng-binding").getText().then(function(textResult) //we can use this just for the Css
				{
					console.log("Result total is==> " + textResult);
					expect(textResult).toBe(data.result);
				})

			})
			
	 })
	 
	
	afterEach(function() {
		console.log("Deleting the cookie");
		console.log("taking the sceenshot");
		console.log("Test--name-- and Passed Successfully");
		console.log("Closing the Browser");
		
		
	})

})










