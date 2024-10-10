/* Q1. Suppose You have an array of object
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items;*/

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

let totalPriceOfAllItems = 0;

itemsArray.forEach(item => {
    // Convert price and quantity from string to number
    const price = Number(item.price);
    const quantity = Number(item.quantity);

    // Calculate total price for the current item
    const totalPriceForItem = price * quantity;

    // Add to total price of all items
    totalPriceOfAllItems += totalPriceForItem;

    // Log total price for the current item
    console.log(`Total price for ${item.name}: ${totalPriceForItem}`);
});

console.log(`Total price of all items: ${totalPriceOfAllItems}`);


/*2. Create an object with properties name, email, password, age,
gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object.*/

// Create an object with the specified properties
let user = {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
};

// Check if age and country properties exist
const hasAge = "age" in user;
const hasCountry = "country" in user;

// Check if firstName and lastName properties exist
const hasFirstName = "firstName" in user;
const hasLastName = "lastName" in user;

// Output the results
console.log(`Age property exists: ${hasAge}`);
console.log(`Country property exists: ${hasCountry}`);
console.log(`First Name property exists: ${hasFirstName}`);
console.log(`Last Name property exists: ${hasLastName}`);


/*3. Create a constructor function with some properties. Now
create multiple records using the constructor.*/

// Constructor function
function User(name, email, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
}

// Create multiple records using the constructor
let user1 = new User("Alice Smith", "alice@example.com", 28, "female", "Los Angeles", "USA");
let user2 = new User("Bob Johnson", "bob@example.com", 35, "male", "Chicago", "USA");
let user3 = new User("Charlie Brown", "charlie@example.com", 22, "male", "New York", "USA");

// Store users in an array for easier management
let users = [user1, user2, user3];

// Output the user records
console.log(users);

/*4. Suppose you want to check population of your area, their
educations and professions.
Create a constructor function which holds following
properties:
Name, gender, address, education, profession,
Enter all records one by one.
Hint:
 use select box for education and profession,
 use radio box for gender
Bonus : use can use localStorage to save records. */

// Constructor function
function Record(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save records to localStorage
function saveRecords(records) {
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Function to load records from localStorage
function loadRecords() {
    const records = localStorage.getItem('populationRecords');
    return records ? JSON.parse(records) : [];
}

// Function to display records
function displayRecords(records) {
    const recordsDiv = document.getElementById('records');
    recordsDiv.innerHTML = ''; // Clear previous records

    records.forEach(record => {
        const div = document.createElement('div');
        div.textContent = `${record.name}, ${record.gender}, ${record.address}, ${record.education}, ${record.profession}`;
        recordsDiv.appendChild(div);
    });
}

// Load existing records on page load
const existingRecords = loadRecords();
displayRecords(existingRecords);

// Form submission handler
document.getElementById('recordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    // Create a new record
    const newRecord = new Record(name, gender, address, education, profession);

    // Save to localStorage
    const records = loadRecords();
    records.push(newRecord);
    saveRecords(records);

    // Display updated records
    displayRecords(records);

    // Clear the form
    this.reset();
});