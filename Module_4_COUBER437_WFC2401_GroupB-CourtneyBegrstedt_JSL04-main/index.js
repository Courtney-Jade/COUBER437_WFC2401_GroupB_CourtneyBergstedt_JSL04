// # [JSL04] Submission: Monster Ternary Operator



let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
let flavorSelection = userPreference ? userPreference : 'Regular'; //If the user preference is not set console.log will output 'Regular' 
console.log(flavorSelection);



let cansLeft = 3; // Any number of cans
let restockMessage = (cansLeft < 5) ? 'Time to restock' : 'We stocked!'; // A message will be assigned depending on the condition
console.log(restockMessage); 



let heartRate = 95; // Current heart rate in bpm
let message = (heartRate < 100) ? 'Boost needed!' : 'Energy levels are high!';
console.log(message);




let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? 'Chilled to perfection!' : 'Needs a cooler!');


// Current hour in 24-hour format
let currentHour = 22; 
console.log(currentHour >= 7 && currentHour < 24 ? 'Unleash the beast!' : 'Better stick to water.')






