/**
 * This is object based language but not object oriented
 */
function car(){ // this is class
	
	this.color = "Black";
	this.engine = "Turbo";
	this.brand = "BMW";
	
	this.getModel = function() { //this is Method 
		console.log("this is 2020 model");
		
	};
};
/***************************************************************
 ====>This is we are creating object and calling inside the same class
   var a = new car();
   a.getModel();
   console.log(a.color);
***************************************************************/
          
          //if we do this then any other javaScripts file can call this function= class
          // this is available Globally now
          module.exports = new car();