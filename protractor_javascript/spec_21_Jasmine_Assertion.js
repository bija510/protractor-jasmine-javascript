/*************************************************************
 * Refer to this:- https://jasmine.github.io/2.0/introduction
 * for more Assertion
 *************************************************************/

describe('All type of assertion', function(){
	
	it('assertion type one', function(){
		var a = "apple";
		var b = 10;
		
		expect(a).toBe("apple");		
		expect(a).toEqual("apple")
				
	})
	
	it('assertion type two', function(){
		var d = 15;
		var e = null;
		
		expect(d).toBeLessThan(16);
		expect(d).toBeGreaterThan(14);
		expect(e).toBeNull();
	
	})
	
	it('assertion type three' , function(){
	var f = ["car", "jeep", "truck"];
		expect(f).toContain("car");
		
	var message = "foo bar baz";
	    expect(message).toMatch(/bar/);
	    expect(message).toMatch("bar");
	    expect(message).not.toMatch(/quux/);
		
	
	})


})

