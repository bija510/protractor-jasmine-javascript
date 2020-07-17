/**
 * 
 */
var HP = require("./ObjectRepositary.js");
var d = require("./Datas");
describe('test suite homePage', function() {

	beforeAll(function(){
		console.log("this is before all and execute only once");
	})
	
	afterAll(function(){
		console.log("this is AfterAll all and execute only once at the end");
	})
	
	
	beforeEach(function() {
		HP.maximize();
		HP.browserURL();

	})

	it('TC_home', function() {

				HP.name.sendKeys(d.data.name);
				HP.email.sendKeys(d.data.email);
				HP.password.sendKeys(d.data.passowrd);
		
				HP.chkBxIceCream.click();
				HP.ddlGender.click();
				HP.datePicker.sendKeys(d.data.DOB);
				HP.autoSuggest.sendKeys(protractor.Key.ENTER);
				HP.btnSubmit.click();
				HP.pageHeader.getText().then(function(text) {
					console.log(text);
				})
				// HP.scrollUp; //No need in JS
				HP.btnShop.click();
				
				HP.allphoneNames.each(function(item) {
					item.getText().then(function(text){
						if(text== "Blackberry"){  // iphone X, Samsung Note 8, Nokia Edge
							HP.iphoneCart.click();
						}
					}) 
					
				})
				
				 HP.checkOut.click();
				
			})

	afterEach(function() {
		browser.sleep(5000);
		console.log("spec_protoCommerce.js Passed Successfully");

	})

})
