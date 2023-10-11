// Start by welcoming user to the program
console.log("Welcome to the compliment generator!");

// Initialize a list of compliments (complimentList)
const complimentList = [
    "You're amazing",
    "You're a star",
    "You're bossu",
    "You're chamming",
    "You're brilliant",
    "You're the best"
]
// Initialize a random number generator function (randomGenerator)
const randomGenerator = () => {
    const randomIndex = Math.floor(Math.random() * complimentList.length);

const randomCompliment = complimentList[randomIndex];

return randomCompliment;

}


const userName = prompt("Please enter your name");

const randomCompliment = randomGenerator();
const personalizedCompliment = `${userName}, ${randomCompliment}`;
alert(personalizedCompliment);





