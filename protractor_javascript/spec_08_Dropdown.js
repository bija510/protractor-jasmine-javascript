/**********************************************************************
 * Refer to this site :-https://www.rahulshettyacademy.com/#/index
 * https://www.protractortest.org/#/
 * browser.waitForAngularEnabled(false);
 * browser.get("http://google.com");//non angular apps
 **********************************************************************/
describe('Protractor Element Demo', function() {
	function Calc(a, b, c) 
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		//
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values)

			{

				if (values == c) {
					item.click();
				}

			})
		})

		element(by.id("gobutton")).click();
	}

	it('Locators', function() 
	{
		browser.get('http://juliemr.github.io/protractor-demo/');

		Calc(3, 5, "MULTIPLICATION");
		Calc(3, 5, "DIVISION");
		Calc(3, 5, "DIVISION");
		Calc(10, 6, "ADDITION");

		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(text) {

								console.log(text);
							})

				})

	})

})