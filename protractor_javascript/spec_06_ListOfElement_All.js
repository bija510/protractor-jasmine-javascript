/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * https://www.protractortest.org/#/
 **********************************************************************/
describe('TS_ListElement', function(){
	
	
	it('listElement',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		for(var i=1; i<=5;i++){
			element(by.model("first")).sendKeys(i);
			element(by.model("second")).sendKeys(i);
			element(by.id("gobutton")).click();
	   }

		element.all(by.repeater("result in memory")).count().then(function(text){
				console.log(text);
				})
				
		element.all(by.repeater("result in memory")).each(function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
								console.log(text);
							})

				})

	     })

})










