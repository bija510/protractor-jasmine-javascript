describe('protractor baby steps', function() {
	
	it('basic programme' ,function(){
		
		/*****************************************************************
		 [describe] block= Class, [it] block = method
		 * Each it block will be called as Spec
		 * all other describe, it and spec are from Jasmine framework
		 * http://www.protractortest.org/#/
		 * Failed to write credentials for 'https://github.com/bija510/ProtractorJS-Tutorial.git' to secure store Salt must be 8 bytes long
         1. There is another solution password could not saved- in Eclipse simply navigate to: 
         2. Preferences > General > Security > Secure Storage > Contents
         3. Delete everything and it will restart
		 ******************************************************************
		 */
		browser.manage().window().maximize();
		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/').then(function() //then()function() need to use so that it will run order

				{

					browser.sleep(9000)
					console.log('log the last step to execute') //without using then it will execute randomly

				});
		});

});
