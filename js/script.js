// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a message when the user inputs the temperature
 */
function displayMessage () {
	// get user input
	let age = parseInt(document.getElementById('age').value)

  	// If age is greater than or equal to 18, display "You can see an R-rated movie alone!"
	if (age >= 18) {
		document.getElementById('message').innerHTML = "You can see an R-rated movie alone!"
	} 
	// If age is greater than or equal to 13, display "You can see a PG-13 rated movie alone!"	
	else if (age >= 13) {
		document.getElementById('message').innerHTML = "You can see a PG-13 rated movie alone!"
		}
  	// If age is greater than or equal to 10, display "You can see a G or PG rated movie alone!"	
	else if (age >= 10) {
		document.getElementById('message').innerHTML = "You can see a G or PG rated movie alone!"
		}
  	// If age is less than 10, display "You are too young to see any movies alone."
	else if (age < 10) {
		document.getElementById('message').innerHTML = "You are too young to see any movies alone."
		}
  // display the message
}