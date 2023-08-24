// let passenger_count = document.querySelector(".count");

// passenger_count.innerHTML = 5;

// let myAge = 25;
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log("My Dog age is:" + myDogAge);

// let bonusPoints = 50;
// bonusPoints += 50;

// console.log(bonusPoints);

// bonusPoints -= 75;

// console.log(bonusPoints);

// bonusPoints += 45;

// console.log(bonusPoints);

let incrementBtn = document.querySelector(".increment");
let saveBtn = document.querySelector(".save");
let passengerCount = document.querySelector(".count");
let previousEntries = document.querySelector(".entries");

let count = 0;

incrementBtn.onclick = () => {
    // console.log("Button Clicked")
    count += 1; 
    passengerCount.innerHTML = count;
}

saveBtn.onclick = () => {
    console.log(count);
    let countStr = count + " - ";
    previousEntries.innerHTML += countStr;
    passengerCount.innerHTML = 0;
    count = 0;
}

let name = "alok";
let greeting = "Hi, my name is ";

let firstName = "Alok ";
let lastName = "Ranjan ";
let fullName = firstName + lastName;
console.log(fullName)


function wish() {
    let welcome = greeting + name;
    console.log(welcome)
}

wish()

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints)