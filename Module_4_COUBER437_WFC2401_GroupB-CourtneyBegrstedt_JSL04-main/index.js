// # [JSL04] Submission: Monster Ternary Operator



let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
let flavorSelection = userPreference ? userPreference : 'Regular';
console.log(flavorSelection);



let cansLeft = 3; // Any number of cans
console.log(cansLeft < 5 ? 'Time to restock' : 'We're stocked!');



let heartRate = 95; // Current heart rate in bpm
let message = (heartRate < 100) ? 'Boost needed!' : 'Energy levels are high!';
console.log(message);




let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!');


// Define the current hour in 24-hour format
let currentHour = 22; 
console.log(currentHour >= 7 && currentHour < 24 ? 'Unleash the beast!' : 'Better stick to water.')






