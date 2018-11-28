let key = "have a key";

let user = {
	name:"Jhon",
	age:30,
	isAdmin:true,
	["likes bird"]:true,
	key:true
};


function simpleCall () {
	// body... 
	alert(user.name);
	alert(user.age);
	alert("is admin? " + user.isAdmin);
	alert("likes bird? " + user["likes bird"]);
	alert("Have a key? " + user.key);
}
// User type in promp and machine say how many letter have the word.
function iWonder() {
	// body...
	let fruit = prompt("Which fruit you like? ", "apple");
	let bag = {
		fruit: fruit.length,
	};

	alert("you type " + fruit.toUpperCase() + " and have " + bag.fruit + " letters");
}
// Make a user
function makeUser() {
	// body...
	let name = prompt("type name", "name");
	let age = prompt("type age", "age");

	alert("The user is... name: "+name+", age: "+age);
}

function oneForLoop() {
	// body...
	let user = {
		name: "Jhon",
		age: 27,
		isAdmin: true,
		beer: true
	}

	for (let key in user) {
		alert("The key is: " + key) // name, age, other
		// values for the key
		alert("The value is: " +user[key]); // value in key
	}
}

function secondForLoop() {
	// body...
	let user = {
		name: "Jhon",
		surname: "Smith"
	}
	user.age = 25;

	for (let prop in user) {
		alert(prop);
	}
}

function thirdForLoop() {
	// body...
	let codes = {
		"+49":"Germany",
		"+41":"Switzerland",
		"+44":"Great Bretain",
		"+1":"USA"
	};

	for (let code in codes) {
		alert(+code);
	}
}
// Cloning and margin object
function cloningMarginObject() {
	// body...
	let user = {
		name: "Jhon",
		age:30
	};
	let clone = {}; // the new empty clone 

	for (let key in user) {
		clone[key] = user[key];
	}
	clone.name = "Peter";
	alert("name in user is: "+user.name);
	alert("name in clone is: "+ clone.name);
}
// Using object.assign
function objectAssign() {
	// body...
	let user = {name : "Jhon" };
	let permission1 = {canView:true};
	let permission2 = {canEdit:true};

	//copies all properties from the permission and permission2 intro user
	Object.assign(user, permission1, permission2);
	// now user = { name: "John", canView: true, canEdit: true }

	for (let key in user){
		alert("user key is: " + key + "  --  "+" user value is: "+ user[key]);
	}
}
function addValuesConeObject() {
	// body...
	let user = {
	  name: "John",
	  sizes: {
	    height: 182,
	    width: 50
	  }
	};

	let clone = Object.assign({}, user);

	alert( user.sizes === clone.sizes ); // true, same object

	// user and clone share sizes
	user.sizes.width+=20;       // change a property from one place
	alert(clone.sizes.width); // 70, see the result from the other one
}