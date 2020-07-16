/**
 * 
 */
function allObjects(){
	
	this.browserURL = function(){
		browser.get("https://qaclickacademy.github.io/protocommerce/");
	}
	this.maximize = function(){
		browser.manage().window().maximize();
	}
	
	this.name = element(by.name("name"));
	
	this.email =element(by.css("input[class='form-control ng-untouched ng-pristine ng-invalid']"));
	
	this.password =element(by.css("input[id='exampleInputPassword1']"));
	
	this.chkBxIceCream =element(by.css("input[id='exampleCheck1']"));
	
	this.ddlGender =element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Male"));//("select[id='exampleFormControlSelect1']"));
	
	this.radStudent =element(by.css("input[id='inlineRadio1']"));
	
	this.datePicker =element(by.xpath("//input[@name='bday']"));
	
	this.btnSubmit =element(by.css(".btn.btn-success"));
	
	this.autoSuggest =element(by.css("input[class='ng-untouched ng-pristine ng-valid']"));
	
	this.btnShop = element(by.linkText("Shop"));
	
	this.scrollUp = browser.executeScript("window.scrollBy(0,-600)");
	
}

module.exports = new allObjects();