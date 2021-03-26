/*
 * try, catch, throw, finally
 */

try
	{
		var a = x/0; 	
	}

catch(e)
	{
		console.log(e.message);// String:-A human-readable description of the error.
	}
finally
	{
		console.log("This block always executed")
	//throw "cannot do that it's not allowed";
	}