
// array of pokemon objects: includes name, number, and descriptions of Pokémon
let pokemon = [
    {name: "Bulbasaur", number: 1, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 118\n\n"},
    {name: "Ivysaur", number: 2, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 151\n\n" },
    {name: "Venasaur", number: 3, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 198\n\n"},
    {name: "Mega-Venasaur", number: 3.1, description: " the Mega version of Venasaur Type Pokémon with extra strength and rarity\n\n"},
    {name: "Charmander", number: 4, description: " a Fire Type Pokémon with Clear Weather and a Rarity of 4. It is in its First Evolutionary Stage Type Pokémon with a Base Attack Level of 116\n\n"},
    {name: "Charmeleon", number: 5, description: " a Fire Type Pokémon with Clear Weather and a Rarity of 5. It is in its Second Evolutionary Stage Type Pokémon with a Base Attack Level of 158\n\n"},
    {name: "Charizard", number: 6, description: " a Fire/Flying Type Pokémon with Clear/Windy Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 223\n\n"},
    {name: "Mega-X-Charizard", number: 6.1, description: " a Mega version of Charizard Type Pokémon with extra strength and rarity\n\n"},
    {name: "Mega-Y-Charizard", number: 6.2, description: " a Mega version of Charizard Type Pokémon with extra powers and rarity\n\n"},
    {name: "Squirtle", number: 7, description: " a Water Type Pokémon with Rain Weather and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 94\n\n"},
    {name: "Wartortle", number: 8, description: " a Water Type Pokémon with Rain Weather and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 126\n\n"},
    {name: "Blastoise", number: 9, description: " a Water Type Pokémon with Rain Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 171\n\n"},
    {name: "Mega-Blastoise", number: 9.1, description: " a Mega version of Blastoise with extra strength and rarity\n\n"},
    {name: "Caterpie", number: 10, description: " a Bug Type Pokémon with Rain Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 55\n\n"},
    {name: "Metapod", number: 11, description: " a Bug Type Pokémon with Rain Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 45\n\n"},
    {name: "Butterfree", number: 12, description: " a Bug/Flying Type Pokémon with Rain/Windy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 167\n\n"},
    {name: "Weedle", number: 13, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 63\n\n"},
    {name: "Kakuna", number: 14, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 46\n\n"},
    {name: "Beedrill", number: 15, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 169\n\n"},
    {name: "Mega-Beedrill", number: 15.1, description: " a Mega version of Beedrill with extra speed and rarity\n\n"},
    {name: "Pidgey", number: 16, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 85\n\n"},
    {name: "Pidgeotto", number: 17, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 117\n\n"},
    {name: "Pidgeot", number: 18, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 166\n\n"},
    {name: "Mega-Pidgeot", number: 18.1, description: " a Mega version of Pidgeot with extra speed and rarity\n\n"},
    {name: "Ratatta", number: 19, description: " a Normal Type Pokémon with Partly Cloudy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 103\n\n"},
    {name: "Raticatte", number: 20, description: " a Normal Type Pokémon with Partly Cloudy Weather and a Rarity of 4. It is in its Second Evolutionary Stage with a Base Attack Level of 161\n\n"},
]

// to validate input of the String Search Bar
function validateName(){
  // get the input value from search bar
    var nameInput = document.getElementById('name-input').value;
    // to get aplhabet values
    var alpha = /^[A-Za-z]+$/;
    
    // if the input is too long or does not include only letter of the aplhabet, try again message
    if(!nameInput.match(alpha) && !nameInput.match("")){
        alert("Please try again");
    }
}

// check if the enter key was pressed on the number input
function entered(){
  var input = document.getElementById('num-input');
  input.addEventListener("keydown", function(e){
    e.stopImmediatePropagation(); // prevents the event from being called too many times
      if(e.key === "Enter"){
        e.preventDefault();
        byNumber();
      }
      if(e.key === "e"){
        e.preventDefault();
      }
  });
}

// check if the enter key was pressed on the name input
function entered2(){
  var input2 = document.getElementById('name-input');
  input2.addEventListener("keydown", function(e){
    e.stopImmediatePropagation();
      if(e.key === "Enter"){
        flag2 = true;
        e.preventDefault();
        byName();
      }
  });
}


function byNumber(){
    let numInput = document.getElementById('num-input').value;               // so the comparison is not case-senstive
    let ul = document.getElementById("pokemon-list");            
    let p = ul.getElementsByTagName("p");  
    let counter = 0;        // to keep track of how many matches are added  
    let matches = [];    
    let inp = numInput.replace(/^0+/, '');    // to ignore leading zeros
    // go through number list and see if the values match the input                
    for (i = 0; i < p.length; i++) {
        value = p[i].textContent || p[i].innerText; 

        // check if the input matches the inner text or text content
      if (value.indexOf(inp) > -1 && counter < 5) {
        counter ++;
        // only show the list value if it matches the input
        matches[i] = `#${pokemon[i].number}. ${pokemon[i].name}${pokemon[i].description}`;
      } 
    }
    // print the array if there was at least one match
    if(matches.length != 0){
      alert(matches.join(''));
    }
}
 
// Function to search by name
function byName() {
  let nameInput = document.getElementById("name-input");       // get input from user
  let sameCase = nameInput.value.toLowerCase();                // so the comparison is not case-sensitive 
  let ul = document.getElementById("pokemon-list");            
  let h3 = ul.getElementsByTagName("h3");  
  let counter = 0;        // to keep track of how many matches are added  
  let matches = [];
  validateName();
  // go through number list and see if the values match the input                
  for (i = 0; i < h3.length; i++) {
      // check if the input matches the inner text or text content
    value = h3[i].textContent || h3[i].innerText; 
    // if the input matches a pokemon name exactly, move it to the top of the array
    if(sameCase === value.toLowerCase() && counter < 5){
      counter ++;
      matches.unshift(`#${pokemon[i].number}. ${pokemon[i].name}:${pokemon[i].description}`);
    }
    else if (value.toLowerCase().indexOf(sameCase) > -1 && counter < 5) {
      counter ++;
      matches[i] = `#${pokemon[i].number}. ${pokemon[i].name}:${pokemon[i].description}`;
    } 
  }
  // print the array if there was at least one match
  if(matches.length != 0){
    alert(matches.join(''));
  }else{
    alert("Please try again");
  }
}

