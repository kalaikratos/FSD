// In this we are going to compare two objects to determine if the first object contains equivalent property values to the second object,
//In JavaScript, comparing the values of two objects involves checking if they have the same properties with corresponding values.
// Given two objects obj1 and obj2 and the task are to check that obj1 contains all the property values of obj2 in JavaScript.

--**Using for..in loop**--
// Define the first object
let obj1 = {
	name: "Person 1", age:5 
}

// Define the second object

//let obj2 = {
 age:5, name: "Person 1" 
}

// Define the function check
function check(obj1, obj2) {

	// Iterate the obj2 using for..in
	for (key in obj2) {

		// Check if both objects do 
		// not have the equal values
		// of same key
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true
}

// Call the function
console.log(check(obj1, obj2))
//


--**Using JSON.stringify()**--
The areObjectsEqual function compares two objects obj1 and obj2 by converting them to JSON strings. The output is true because both objects have equivalent properties and values.
// Define the first object

function areObjectsEqual(obj1, obj2) {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);
    return stringifiedObj1 === stringifiedObj2;
let obj1 = {
	name: "Person 1", age:5 
}

// Define the second object
let obj2 = {
 age:5, name: "Person 1" 
}
};
console.log(areObjectsEqual(obj1, obj2));