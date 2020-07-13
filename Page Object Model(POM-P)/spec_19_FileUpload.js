
describe('TS file upload', function(){
	
	
	it('file upload using sendKeys', function(){
		browser.waitForAngularEnabled(false); 
		browser.driver.get("http://demo.automationtesting.in/FileUpload.html");
		
        //Work on chrome but not in Firefox
		element(by.css("input[name='input4[]']")).sendKeys("C://Users//Bijaya Chhetri//git//KatalonTest//Include//UploadFile//SamplePDF.pdf");
		
		browser.sleep(5000)
	
	
	
	})
	
	
	
	
	
	
})