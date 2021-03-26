
describe('TS file upload', function(){
	
	
	it('file upload using sendKeys', function(){
		browser.waitForAngularEnabled(false); 
		browser.driver.get("http://demo.automationtesting.in/FileUpload.html");
		
        //Work on chrome but not in Firefox
		element(by.css("input[name='input4[]']")).sendKeys(process.cwd()+"\\Data\\Upload.png");
		
		browser.sleep(5000)
		element(by.xpath("//span[contains(text(),'Remove')]")).getText().then(function(value) {
			
			expect("Remove").toBe(value);
		})
		
	})
	
})