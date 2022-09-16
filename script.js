var nameInput = document.getElementById("name-input");       // get input from user

// array of pokemon objects
let pokemon = [
    {name: "Bulbasaur", number: 1, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 4\nEvolution Stage: 1\nBase Attack Level: 118\n\n"},
    {name: "Ivysaur", number: 2, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 5\nEvolution Stage: 2\nBase Attack Level: 151\n\n" },
    {name: "Venasaur", number: 3, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 198\n\n"},
    {name: "Mega-Venasaur", number: 3, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 198\n\n"},
    {name: "Charmander", number: 4, description: "Type Combo: Fire\nWeather: Clear\nRarity: 4\nEvolution Stage: 1\nBase Attack level: 116\n\n"},
    {name: "Charmeleon", number: 5, description: "Type Combo: Fire\nWeather: Clear\nRarity: 5\nEvolution Stage: 2\nBase Attack level: 158\n\n"},
    {name: "Charizard", number: 6, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223\n\n"},
    {name: "Mega-X-Charizard", number: 6, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223\n\n"},
    {name: "Mega-Y-Charizard", number: 6, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223\n\n"},
    {name: "Squirtle", number: 7, description: "Type Combo: Water\nWeather: Rain\nRarity: 4\nEvolution Stage: 1\nBase Attack level: 94\n\n"},
    {name: "Wartortle", number: 8, description: "Type Combo: Water\nWeather: Rain\nRarity: 5\nEvolution Stage: 2\nBase Attack level: 126\n\n"},
    {name: "Blastoise", number: 9, description: "Type Combo: Water\nWeather: Rain\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 171\n\n"},
    {name: "Mega-Blastoise", number: 9, description: "Type Combo: Water\nWeather: Rain\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 171\n\n"},
    {name: "Caterpie", number: 10, description: "Type Combo: Bug\nWeather: Rain\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 55\n\n"},
    {name: "Metapod", number: 11, description: "Type Combo: Bug\nWeather: Rain\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 45\n\n"},
    {name: "Butterfree", number: 12, description: "Type Combo: Bug/Flying\nWeather: Rain/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 167\n\n"},
    {name: "Weedle", number: 13, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 63\n\n"},
    {name: "Kakuna", number: 14, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 46\n\n"},
    {name: "Beedrill", number: 15, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 169\n\n"},
    {name: "Mega-Beedrill", number: 15, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 169\n\n"},
    {name: "Pidgey", number: 16, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 85\n\n"},
    {name: "Pidgeotto", number: 17, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 117\n\n"},
    {name: "Pidgeot", number: 18, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 166\n\n"},
    {name: "Mega-Pidgeot", number: 18, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 166\n\n"},
    {name: "Ratatta", number: 19, description: "Type Combo: Normal\nWeather: Partly Cloudy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 103\n\n"},
    {name: "Raticatte", number: 20, description: "Type Combo: Normal\nWeather: Partly Cloudy\nRarity: 4\nEvolution Stage: 2\nBase Attack level: 161\n\n"},
]
 
// to validate input of the String Search Bar
function validateName(){
    var nameInput = document.getElementById('name-input').value;
    if(!isNaN(nameInput) || nameInput.length > 20){
        nameInput = "";
    }
}

// to validate input of the Numbers Search Bar
function validateNumber(){
    var numInput = document.getElementById('num-input').value;
    if(isNaN(numInput) || numInput > 20 || numInput < 1){
        alert("Plase try again");
    }
}
// Function to search by name
function byName() {
    var nameInput = document.getElementById("name-input");       // get input from user
    var sameCase = nameInput.value.toLowerCase();                // so the comparison is not case-senstive 
    var ul = document.getElementById("pokemon-list");            
    var h = ul.getElementsByTagName("h3");  
    var counter = 0;        // to keep track of how many matches are added  
    var matches = [];
    // go through number list and see if the values match the input                
    for (i = 0; i < h.length; i++) {
        // check if the input matches the inner text or text content
      value = h[i].textContent || h[i].innerText; 
       if (value.toLowerCase().indexOf(sameCase) > -1 && counter < 5) {
        counter ++;
        // only show the list value if it matches the input
        matches[i] = `#${pokemon[i].number} ${pokemon[i].name}\nDescription: ${pokemon[i].description}`;
      } 
    }

    alert(matches.join(''));
  }
 
function byNumber(){
    var numInput = document.getElementById('num-input').value;               // so the comparison is not case-senstive
    var ul = document.getElementById("pokemon-list");            
    var p = ul.getElementsByTagName("p");  
    var counter = 0;        // to keep track of how many matches are added  
    var matches = [];
    // go through number list and see if the values match the input                
    for (i = 0; i < p.length; i++) {
        value = p[i].textContent || p[i].innerText; 

        // check if the input matches the inner text or text content
      if (value.indexOf(numInput) > -1 && counter < 5) {
        console.log(p[i]);
        counter ++;
        // only show the list value if it matches the input
        matches[i] = `#${pokemon[i].number} ${pokemon[i].name}\nDescription: ${pokemon[i].description}`;
      } 
    }

    alert(matches.join(''));
}
 

function show(i){
    alert(`${pokemon[i-1].name}\n#${pokemon[i-1].number} \nType: ${pokemon[i-1].type}`);
}
