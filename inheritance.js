/*
In Javascript, there is no class inheritance, instead objects can inherit directly from other objects. 
The way this works is that each object has an implicit property that points to a 'parent' object.

That property is called __proto__, and the parent object is called the object's prototype, 
hence the name Prototypal Inheritance. */

var avengersHero = {  
    editor: 'Marvel'
};
 
var ironMan = {};
 
ironMan.__proto__ = avengersHero;
 
console.log('Iron Man is copyrighted by ' + ironMan.editor);

avengersHero.editor = 'DC Comics';

//If we call ironMan.editor again, we now get Iron Man is copyrighted by DC Comics. 
//All the existing object instances with the avengersHero prototype now see DC Comics without having to be recreated.
console.log('Iron Man is copyrighted by ' + ironMan.editor);