
// INSTRUCTIONS: You will be working exclusively in the main.js file. Do not modify any code in the test.js file.
// DIYA'S NOTE: The are already instructions and specified places to write code and algorithim comments below. 

const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

    // Write your algorithm first, and then your code. Feel free to remove this comment

    // Go through each object or "flower" in the flowers array; use a for..of loop to do this. 
    // Find and look at each flower's price; use dot notation to target the "price" in each flower. 
    // I only want flower objects with prices less than 2.0; use if...else statement to "weed" these out. 
    // I want to put these flower objects in the filteredFlowers array; use the .push() method to do this. 

    for (flower of flowers) {
        if (flower.price < 2.00) {
            filteredFlowers.push(flower)
        }
    }

    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify

    // Write your algorithm first, and then your code. Feel free to remove this comment

    // Go through each object or "flower" in the flowers array; use a for..of loop to do this. 
    // I only want the flower object whose "usdazones" includes 3 AND 8; use if..else statement 
    // I will need the .includes() method to look through the usdazones arrays and find those that include 3 AND 8 
    // I want to put the flower objects in zones 3 AND 8 in the filteredFlowers array; use the .push() method to do this. 
    // PRO TIP: Put "console.log(flower)" inside the if statement under "filteredFlowers.push(flower)" to see what answer I get

    for (flower of flowers) {
        if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower) 
        }
    }

    return filteredFlowers  // Do not modify 

} 

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



    // Write your algorithm first, and then your code. Feel free to remove this comment

    // Go through each "flower" or object in the flowers array; use a for..of loop to do this. 
    // I only want the flower object whose "colors" includes "Orange"; use if..else statement. 
    // In each flower object, look at the "colors" property; use dot notation for this (flowers.colors). 
    // I can use the .includes() method to look at the colors proeprty for each flower and see which includes "Orange". 
    // I want to put the flower objects with a color of "Orange" in the filteredFlowers array; use the .push() method for this.
    // PRO TIP: Put "console.log(flower)" inside the if statement under "filteredFlowers.push(flower)" to see what answer I get.

for (flower of flowers) {
    if (flower.colors.includes("Orange")) {
        filteredFlowers.push(flower)
    }
}

    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify


    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */

    /*
    
        INSTRUCTIONS: In the next function named flowersAsHTML, you will write logic produces one, large string that contains an 
        <article> for each flower, a <section> for each flower's colors, and a <div> for each flower's USDA zones. 

    */ 

    // Loop through each "flower" or object in the flowers array; use a for...of loop here.
    // Get each flower's "type"; use dot notation to access this 
    // Add flowers.type to the flowersHTMLString variable; use += to do this. 
    // Put an "<article>" tag before the flower type, so it shows at the top like in the example; use string interpolation. 
    // Add <h1> and </h1> around the flower type like in the example. 

    // Loop through each flower's colors; use a for...of loop here. 
    // Get each color object from the "colors" property of each flower; use dot notation for this. 
    // Add flower.colors to the flowersHTMLString variable; use += to do this. 

    // Loop through each flower's usdazones; use a for...of loop here, but put the loop inside the 1st loop NOT the 2nd.
    // Get each usdazone object from the "usdaZones" property of each flower; use dot notation for this. 
    // Add flower.usdaZones to the flowersHTMLString variable; use += to do this. 

    // PRO TIP: Go back later and put \n and \t elements in the code, so it is formatted correctly... 
    // PRO TIP: You cannot have \t and \n directly next to each other. The \t won't take affect. 
    // PRO TIP: Add console.log(flowersHTMLString) to see what the answer looks like so far. 


for (flower of flowers) { // Start 1st loop
    flowersHTMLString += `\n<article>\n`
    flowersHTMLString += `\t`
    flowersHTMLString += `<h1>${flower.type}</h1>\n`
    flowersHTMLString +=  `\n`

    flowersHTMLString += `\t` 
    flowersHTMLString += `<h2>Colors</h2\n`
    for (color of flower.colors) { //Start 2nd loop 
        const section =  `<section>${color}</section>\n`
        flowersHTMLString += `\t`  
        flowersHTMLString += section
    } // End 2nd loop

    // flowersHTMLString += `\n`
    // flowersHTMLString += `\t`
    flowersHTMLString += `\n\t<h2>USDA Zones</h2>\n`
    for (usdaZone of flower.usdaZones) { // Start 3nd loop 
        const div = `<div>${usdaZone}</div>\n`
        flowersHTMLString += `\t`  
        flowersHTMLString += div 
        } // End 3rd loop 

    flowersHTMLString += `</article>\n`
    console.log(flowersHTMLString)
} // End 1st loop 

    return flowersHTMLString  // Do not modify
}



    /* 
    
       Self-Assessment Review /w Devin 

       Note: 
       Looking at lines 224-226. You can have \t and \n on the same line, but you just have to play with the order you use them.
       In some cases, if you have something like \t and then \n, \t actually shows up on the line before the line you want to indent. 
       This can make it look like some thing is getting cancelled out. In that scenario, you probably just need to put \n first. 

    */ 











































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

