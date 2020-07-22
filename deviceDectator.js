/*	deviceDectator.js	
	@v 0.0.1
	Author - "Aditya Prakash"

// Example: //

let x;
function setup () {
	x = deviceDectator();

	if (x === "MOBILE") {
		console.log("MOBILE");
	} else if (x === "PC"){
		console.log("PC");
	}
}
*/

const deviceDectator = () => {

	let device;
	let isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent);

	if (isMobile) {
		device = "MOBILE";
	} else {
		device = "PC";
	}

	return device;
	
}

// Note: Works More Smoothly With p5.js //