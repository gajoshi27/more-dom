// get reference
let changeButton = document.getElementById("change_button");
let firstImage = document.getElementById("first_image");
let addButton = document.getElementById("add_button");
let imageDiv = document.getElementById("image_div");
let deleteButtonRef = document.getElementById("delete_button");

// declare an array
let pokemonArray = ["pikachu", "bulbasaur", "charmander", "squirtle"];

// declare a variable
let counter = 0;

// set up onclick for changeButton
changeButton.onclick = function () {
    // change the image
    firstImage.src = "images/squirtle.png";
}

// set up onclick for addButton
addButton.onclick = function () {
    // // generate a random number between 0 and 3 (inclusive)
    // let randNum = Math.random() * pokemonArray.length;
    // let randInt = parseInt(randNum); // possible values: 0, 1, 2, 3

    // get a pokemon
    let randPokemon = pokemonArray[counter];

    // create an element
    let newElement = document.createElement('img');
    newElement.src = "images/" + randPokemon + ".png";

    // add newElement to imageDiv
    imageDiv.appendChild(newElement);

    // increase counter by 1
    counter++;

    // reset counter if counter reaches 4
    if (counter == 4) {
        counter = 0;
    }
}

// set up onclick for deleteButtonRef
deleteButtonRef.onclick = function () {
    // remove the first image
    imageDiv.removeChild(imageDiv.children[0]);
}