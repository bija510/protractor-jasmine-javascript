/**
 * 
 */
var HP = require("./ObjectRepositary.js");
var d =require("./Datas");
describe('test suite homePage', function() {
	
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
		//HP.scrollUp; //No need in JS
		HP.btnShop.click();
		
	
	})
	
	
	afterEach(function() {
		browser.sleep(5000);
		console.log("spec_protoCommerce.js Passed Successfully");
		
	})
	
	})
