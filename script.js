//your JS code here. If required.

// Create the student object
const student = {
  name: "John",
  age: 23,
  city: "USA"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]