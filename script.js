/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById('change_button');
let addButton = document.getElementById('add_button');
let deleteButton = document.getElementById('delete_button');
let imageDiv = document.getElementById('image_div');
let firstImage = document.getElementById('first_image');

// pokemon to select from
let pokemonArray = ['pikachu', 'bulbasaur', 'squirtle', 'charmander'];

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
let counter = 0;

changeButton.onclick = function () {
  // change the image
  // imageDiv.children[0].src = 'images/squirtle.png';
  imageDiv.children[0].src = `images/${pokemonArray[counter]}.png`;

  counter++;
  if (counter > 3) {
    counter = 0;
  }
};

/*  @TODO - Create a Function for our addButton to Add New Pokemon  */

let index = 0;

// set an onclick for our addButton
addButton.onclick = function () {
  // create an image
  let newPokemon = document.createElement('img');

  // make that image element's src
  newPokemon.src = 'images/' + pokemonArray[index] + '.png';

  // add pokemon image that we created
  imageDiv.appendChild(newPokemon);

  index++;

  if (index > 3) {
    index = 0;
  }
};

/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
deleteButton.onclick = function () {
  imageDiv.removeChild(imageDiv.children[0]);
};
