/**********************************************
  using different locators
  ['name', 'cssContainingText', 'buttonText']
 *********************************************/
describe('TS fill the full form' , function(){
	
	
	it('fill the form', function(){
		    //browser.manage().window().maximize();
		    browser.driver.manage().window().maximize();
			browser.get("https://qaclickacademy.github.io/protocommerce/");
			
			element(by.name("name")).sendKeys("Mystudents");
			element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
			element(by.id("exampleInputPassword1")).sendKeys("password2");
			
			var chkbx =element(by.css("input[type='checkbox']")).isSelected().then(function(boolean) {
				console.log(boolean);
				if (!boolean ==true){
					element(by.css("input[type='checkbox']")).click();
				}
			})
			//			element(by.css("input[type='checkbox']")).click();
			
			

			element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		  //element.all(by.name("inlineRadioOptions")).first().click();//Way:-1
		  //element.all(by.name("inlineRadioOptions")).last().click();//Way:-2
			element.all(by.name("inlineRadioOptions")).get(0).click(); //Way:-3 //ie:-0, 1, 2..
			element(by.buttonText("Submit")).click().then(function()
			{
			element(by.css("div[class*='success']")).getText().then(function(text)
			{
			console.log(text);
			browser.sleep(5000);
			})
			})
		
		
		
		
		
		
	})
	
	

})







