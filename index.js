var superman = {
 
    heroName: 'Superman',  
   
    sayHello: function() {
        console.log("Hello, I'm " + this.heroName );
    }  
  };
   
superman.sayHello(); 

var failThis = superman.sayHello;
 
//calling failThis in the global scope outputs "Hello, I'm undifined."
//This is because the variable failThis belongs to the global scope, which contains no member variable named heroName
failThis();

//In Javascript the value of the this keyword is completely overridable to be anything that we want!
//The code below override this with superman
failThis.call(superman);
