/**
 * This is object based language but not object oriented
 */
function car(){ // this is class
	
	this.openURL = function() { //this is Method 
		browser.get("http://juliemr.github.io/protractor-demo/");
	
	
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.result = element(by.css(".ng-binding"));
	
	
		
	};
};
          
          //if we do this then any other javaScripts file can call this function= class
          // this is available Globally now
          module.exports = new car();