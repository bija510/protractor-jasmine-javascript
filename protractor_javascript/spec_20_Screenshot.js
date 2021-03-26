/**
 * 
 */
var fs = require('fs')
describe('takescreenshot', function() {

	
	it('testcaseTS', function() {
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		browser.takeScreenshot().then(function(fullPage){
			var stream =fs.createWriteStream("./Screenshots/fullpage.png");
			stream.write(new Buffer(fullPage, 'base64'));
			stream.end();
			
		})
		browser.sleep(5000);
		
	})
	
	
	
	
})











