var superman = {
 
    heroName: 'Superman',  
   
    sayHello: function() {
        console.log("Hello, I'm " + this.heroName );
    }  
  };
   
superman.sayHello(); 

var failThis = superman.sayHello;
 
//This is because the variable failThis belongs to the global scope, which contains no member variable named heroName
failThis();

//In Javascript the value of the this keyword is completely overridable to be anything that we want!
failThis.call(superman);
