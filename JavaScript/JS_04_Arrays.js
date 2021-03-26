/***********************************************************************
 * Lecture:- 29
 * This is the array in JS can pass string and integer doesnot matter
 * In JS we don't have return type
 ************************************************************************/
var a =4;
//Static Array
var b= ["hello", "world", "4", "goodbuy"];//start from 0,1,2,3

console.log(b[0]);
console.log(b[1]);
console.log(b[2]);
console.log(b[3]);
console.log("================")

console.log(b.length+" <==This is the size of array b");

for(var i=0; i<b.length; i++){ //b.length = size =4
	console.log(b[i]);
}
/****************************************************
 * This is we need to feeding the data at run time
 * Dynamic Array
 * count from 1....
 ***************************************************/
var c = new Array(); 
	c[0] ="I";
	c[1] ="Love";
	c[2] ="USA"	;

console.log("Array 'c' size is ==>" + c.length)

/****************************************************
 * Execute the String in the Reverse order
 *****************************************************/
console.log("Execute the String in the Reverse order")
for(var j=c.length-1; j>=0; j--)
	{
	console.log(c[j])
	}

/****************************************************
 * Two dimensional Array
 *****************************************************/
a=[[1,2,"apple",4,5],[6,7,8,9,10]];

console.log(a[1][2]);



