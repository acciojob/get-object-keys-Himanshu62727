//your JS code here. If required.

// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]


const student2 = {
  name: "Jane",
  age: 22,
  city: "New York"
};

console.log(getKeys(student2));

const student3 = {
  country: "USA"
};

console.log(getKeys(student3));