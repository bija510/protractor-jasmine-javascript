/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * https://www.protractortest.org/#/
 **********************************************************************/
describe('TS_Practice', function(){
	
	function add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	
	it('PracticeAllEle',function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		add(2, 3);
		add(4, 5);
		add(5, 7);
		
		

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










