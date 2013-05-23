var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      productsICanEat = products.filter(
		for (var i=0 ; i<products.length; i+=1)
           {if (all(products[i].ingredients)!='mushrooms' and !products[i].containsNuts) 
				{productsICanEat.push(products[i])}
			}
	  
	  /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
      expect(productsICanEat[0]).toBe(products[2]);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
	_.reduce(_.range(1000), function(memo, num) 
         {
		 if (num % 3 === 0 || num % 5 === 0) {return memo + num;}
		 else return memo;
		 }, 0)
    var sum = _.reduce(_.range(1000), function(memo, num) 
         {
		 if (num % 3 === 0 || num % 5 === 0) {return memo + num;}
		 else return memo;
		 }, 0);    /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    //var ingredientCount = { "{ingredient name}": 0 };
	var ingredientCount = _.reduce(_.flatten(_.map(products, function(p) {return p.ingredients})), function(memo, item) 
        {if (memo[item] > 0) {memo[item] += 1}
         else {
			memo[item] = 1;
			}
		return memo;
		 }, []);
	
    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  
  it("should find the largest prime factor of a composite number", function () { 
  var returnLargestPrimeFactor = function(num) {
	var primes = createPrimeList(num);
	var factors =_.flatten(createFactorsList(num)).sort(function(a,b) {return a - b});
	for (var i = factors.length; i>0; i--)
		{for (var j = 0; j < primes.length; j++) {if (factors[i]==primes[j]) {return factors[i];}}}
	return 1;
  };
  });
  
  var createPrimeList = function(top) {
    if (top == 0) {return [];}
    if (top == 1) {return [1];}
    primes = [1, 2]
    for (var i = 3; i<top+1; i++) {
      var prime = true;
      for (var j = 1; j<primes.length; j++) {
        if (i % primes[j] === 0)
        {
          prime = false;
          j = primes.length;
        }
    }
  if (prime) {primes.push(i);}
  }
    return primes;
  }
  
  var createFactorsList = function(num) {
	var factors = [];
	var top = num;
	for (var i = 1; i < top; i++)
	{
		if (num % i === 0) {
		factors.push([i, num/i]);
		top = num/i;
		}
	}
	return factors;
  };

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
  var largestPalindrome = function() 
  {
    for (var i = 999*999; i>=100*100; i--) 
    {
      var s = String(i);
      pal = true
      for (var j=0; j < s.length/2; j++)  //first check to see if number is a palindrome
      {
        if (s[j] != s[s.length-j-1]) 
        {
          pal = false;                 
        }
      }
      if (pal == true) //if it is a palindrome, need to check to make sure it's the product of 2 three digit numbers
      {
        console.log(i + "is a palindrome");
        factors = createFactorsList(i);
        for (var k = factors.length-1; k >= 0; k--)
          {
            if (factors[k][0] > 99 & factors[k][0] < 999 & factors[k][1] > 99 & factors[k][1] < 999)   //checks to make sure it's a 3 digit number
            {
              return i;  //returns answer of 906609
            }
          }
      }
    }
  };

);

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
  
var smallBy20 = function() 
{
  var u = createPrimeList(20);
  var ans = _.reduce(u, function(memo, num) {return memo*num}, 1);
  return ans; //answer is 9699690
}
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

it("should find the 10001st prime", function () {
 
var find10001Prime = function() {
  primes = [1, 2]
  var i = 3;
  while (primes.length <= 10001) 
  {
    var prime = true;
    for (var j = 1; j<primes.length; j++) 
    {
      if (i % primes[j] === 0)
      {
        prime = false;
        j = primes.length;
      }
    }
    if (prime) {primes.push(i);}
    i = i + 1;
  }
  return primes.pop();  //answer is 104743
};
  });
});
