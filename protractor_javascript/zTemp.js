/**
 * 
 */

describe('TS_ListElement', function(){
	
function add(num1, num2){	
	element(by.model("first")).sendKeys(num1);
	element(by.model("second")).sendKeys(num2);
	element(by.id("gobutton")).click();
	      }
	
	
	
it('listElement',function(){
	browser.get("http://juliemr.github.io/protractor-demo/");
	add(5, 4);
	add(10, 20);

	element.all(by.repeater("result in memory")).count().then(function(text)
	{
		console.log(text);
	})
				
	element.all(by.repeater("result in memory")).each(function(item) 
	{
		item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
		console.log(text);
	})

	})

	})
	
    })