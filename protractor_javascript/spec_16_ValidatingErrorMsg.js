/**********************************************
  using different locators
  ['name', 'cssContainingText', 'buttonText']
 *********************************************/
describe('TS fill the full form' , function(){
	
	
	it('fill the form', function(){
		    
		    browser.driver.manage().window().maximize();
			browser.get("https://qaclickacademy.github.io/protocommerce/");
			
			element(by.name("name")).sendKeys("Mystudents");
			element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
			element(by.id("exampleInputPassword1")).sendKeys("password2");
			
			element(by.css("input[type='checkbox']")).click();
			
			element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
			element.all(by.name("inlineRadioOptions")).get(0).click(); 
			element(by.buttonText("Submit")).click().then(function()
			{
				element(by.css("div[class*='success']")).getText().then(function(text)
						{
					console.log("Positive MSG===>"+ text);
					browser.sleep(2000);
						})
			})
			element(by.name("name")).clear();
			element(by.name("name")).sendKeys("M").then(function()
					{
				element(by.css("[class='alert alert-danger']")).getText().then(function(text)
						{
					console.log("Negative Message===>"+text);
					browser.sleep(5000);
						})
					})

	})

	

})







