
// array of pokemon objects: includes name, number, and descriptions of Pokémon
let pokemon = [
    {name: "Bulbasaur", number: 1, description: "is a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 118\n\n"},
    {name: "Ivysaur", number: 2, description: "is a Grass/Poison with Clear/Cloudy and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 151\n\n" },
    {name: "Venasaur", number: 3, description: "is a Grass/Poison with Clear/Cloudy and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 198\n\n"},
    {name: "Mega-Venasaur", number: 3, description: "is the Mega version of Venasaur with extra strength and rarity\n\n"},
    {name: "Charmander", number: 4, description: "is a Fire with Clear and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 116\n\n"},
    {name: "Charmeleon", number: 5, description: "is a Fire with Clear and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 158\n\n"},
    {name: "Charizard", number: 6, description: "is a Fire/Flying with Clear/Windy and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 223\n\n"},
    {name: "Mega-X-Charizard", number: 6, description: "is a Mega version of Charizard with extra strength and rarity\n\n"},
    {name: "Mega-Y-Charizard", number: 6, description: "is a Mega version of Charizard with extra powers and rarity\n\n"},
    {name: "Squirtle", number: 7, description: "is a Water with Rain and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 94\n\n"},
    {name: "Wartortle", number: 8, description: "is a Water with Rain and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 126\n\n"},
    {name: "Blastoise", number: 9, description: "is a Water with Rain and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 171\n\n"},
    {name: "Mega-Blastoise", number: 9, description: "is a Mega version of Blastoise with extra strength and rarity\n\n"},
    {name: "Caterpie", number: 10, description: "is a Bug with Rain and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 55\n\n"},
    {name: "Metapod", number: 11, description: "is a Bug with Rain and a Rarity of Third. It is in its Second Evolutionary Stage with a Base Attack Level of 45\n\n"},
    {name: "Butterfree", number: 12, description: "is a Bug/Flying with Rain/Windy and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 167\n\n"},
    {name: "Weedle", number: 13, description: "is a Bug/Poison with Rain/Cloudy and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 63\n\n"},
    {name: "Kakuna", number: 14, description: "is a Bug/Poison with Rain/Cloudy and a Rarity of Third. It is in its Second Evolutionary Stage with a Base Attack Level of 46\n\n"},
    {name: "Beedrill", number: 15, description: "is a Bug/Poison with Rain/Cloudy and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 169\n\n"},
    {name: "Mega-Beedrill", number: 15, description: "is a Mega version of Beedrill with extra speed and rarity\n\n"},
    {name: "Pidgey", number: 16, description: "is a Normal/Flying with Partly Cloudy/Windy and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 85\n\n"},
    {name: "Pidgeotto", number: 17, description: "is a Normal/Flying with Partly Cloudy/Windy and a Rarity of Third. It is in its Second Evolutionary Stage with a Base Attack Level of 117\n\n"},
    {name: "Pidgeot", number: 18, description: "is a Normal/Flying with Partly Cloudy/Windy and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 166\n\n"},
    {name: "Mega-Pidgeot", number: 18, description: "is a Mega version of Pidgeot with extra speed and rarity\n\n"},
    {name: "Ratatta", number: 19, description: "is a Normal with Partly Cloudy and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 103\n\n"},
    {name: "Raticatte", number: 20, description: "is a Normal with Partly Cloudy and a Rarity of 4. It is in its Second Evolutionary Stage with a Base Attack Level of 161\n\n"},
]

// to validate input of the Numbers Search Bar
function validateNumber(){
  // get the input value from search bar
    var numInput = document.getElementById('num-input').value;  
    // check that the input is a number between 1 and 20
    if(isNaN(numInput) || numInput > 20 || numInput < 1){
        alert("Please try again");
    }
}

function entered(){
  var input = document.getElementById('num-input');
  input.addEventListener("keydown", function(e){
    var flag = false;
      if(e.key === "Enter" && flag == false){
        flag = true;
        e.preventDefault();
        byNumber();
      }
  });
  
}

function entered2(){
  var input2 = document.getElementById('name-input');
  input2.addEventListener("keydown", function(e){
    var flag = false;
      if(e.key === "Enter" && flag == false){
        flag = true;
        e.preventDefault();
        byName();
      }
  });
  
}

// to validate input of the String Search Bar
function validateName(){
  // get the input value from search bar
    var nameInput = document.getElementById('name-input').value;
    // to get aplhabet values
    var alpha = /^[A-Za-z]+$/;
    
    // if the input is too long or does not include only letter of the aplhabet, try again message
    if(nameInput.length > 25 || !nameInput.match(alpha)){
        alert("Please try again");
    }
}

function byNumber(){
    var numInput = document.getElementById('num-input').value;               // so the comparison is not case-senstive
    var ul = document.getElementById("pokemon-list");            
    var p = ul.getElementsByTagName("p");  
    var counter = 0;        // to keep track of how many matches are added  
    var matches = [];    
    validateNumber();
    // go through number list and see if the values match the input                
    for (i = 0; i < p.length; i++) {
        value = p[i].textContent || p[i].innerText; 

        // check if the input matches the inner text or text content
      if (value.indexOf(numInput) > -1 && counter < 5) {
        counter ++;
        // only show the list value if it matches the input
        matches[i] = `#${pokemon[i].number}. ${pokemon[i].name} ${pokemon[i].description}`;
      } 
    }
    if(matches.length != 0){
      alert(matches.join(''));
    }
}
 
// Function to search by name
function byName() {
  var nameInput = document.getElementById("name-input");       // get input from user
  var sameCase = nameInput.value.toLowerCase();                // so the comparison is not case-sensitive 
  var ul = document.getElementById("pokemon-list");            
  var h3 = ul.getElementsByTagName("h3");  
  var counter = 0;        // to keep track of how many matches are added  
  var matches = [];
  validateName();
  // go through number list and see if the values match the input                
  for (i = 0; i < h3.length; i++) {
      // check if the input matches the inner text or text content
    value = h3[i].textContent || h3[i].innerText; 
     if (value.toLowerCase().indexOf(sameCase) > -1 && counter < 5) {
      counter ++;
      // only show the list value if it matches the input
      matches[i] = `#${pokemon[i].number}. ${pokemon[i].name} ${pokemon[i].description}`;
    } 
  }
  alert(matches.join(''));
}

