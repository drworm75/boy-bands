
var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Kale", "Zucchini", "Broccoli", "Squash"];
var longestArray;
var loopCount



// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// The number of loops to perform (what if the array changes?)
if (bands.length >= vegetables.length) {
	longestArray = bands.length;
} else {
	longestArray = vegetables.length;
}
loopCount = longestArray;


// Start looping
		for (loopTracker = 0; loopTracker <= loopCount; loopTracker += 1) {

			if (bands[loopTracker] === undefined) {
				currentBand += "";
			} else {

			// Add the band names into the correct <div>
			currentBand += bands[loopTracker] + "<br>";
			}

			if (vegetables[loopTracker] === undefined) {
				currentVeggie += "";
			} else {
			// Add the veggie names into the correct <div>
			currentVeggie += vegetables[loopTracker] + "<br>";
			}


	} 
// Loop through the two arrays provided (bands and vegetables) 
//and output each element in the arrays into their corresponding 
//HTML <div> element. Ensure that each item is in a block 
//element (e.g. li, div, p. etc...)

bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;