// array of pokemon objects
let pokemon = [
    {name: "Bulbasaur", number: 001, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 4\nEvolution Stage: 1\nBase Attack Level: 118"},
    {name: "Ivysaur", number: 002, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 5\nEvolution Stage: 2\nBase Attack Level: 151" },
    {name: "Venasaur", number: 003, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 198"},
    {name: "Mega-Venasaur", number: 003, description: "Type Combo: Grass/Poison\nWeather: Clear/Cloudy\nRarity: 6\nEvolution Stage: 3", atk: "198"},
    {name: "Charmander", number: 004, description: "Type Combo: Fire\nWeather: Clear\nRarity: 4\nEvolution Stage: 1\nBase Attack level: 116"},
    {name: "Charmeleon", number: 005, description: "Type Combo: Fire\nWeather: Clear\nRarity: 5\nEvolution Stage: 2\nBase Attack level: 158"},
    {name: "Charizard", number: 006, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223"},
    {name: "Mega-X-Charizard", number: 006, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223"},
    {name: "Mega-Y-Charizard", number: 006, description: "Type Combo: Fire/Flying\nWeather: Clear/Windy\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 223"},
    {name: "Squirtle", number: 007, description: "Type Combo: Water\nWeather: Rain\nRarity: 4\nEvolution Stage: 1\nBase Attack level: 94"},
    {name: "Wartortle", number: 00, description: "Type Combo: Water\nWeather: Rain\nRarity: 5\nEvolution Stage: 2\nBase Attack level: 126"},
    {name: "Blastoise", number: 00, description: "Type Combo: Water\nWeather: Rain\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 171"},
    {name: "Mega-Blastoise", number: 00, description: "Type Combo: Water\nWeather: Rain\nRarity: 6\nEvolution Stage: 3\nBase Attack level: 171"},
    {name: "Caterpie", number: 002, description: "Type Combo: Bug\nWeather: Rain\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 55"},
    {name: "Metapod", number: 003, description: "Type Combo: Bug\nWeather: Rain\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 45"},
    {name: "Butterfree", number: 001, description: "Type Combo: Bug/Flying\nWeather: Rain/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 167"},
    {name: "Weedle", number: 002, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 63"},
    {name: "Kakuna", number: 003, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 46"},
    {name: "Beedrill", number: 001, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 169"},
    {name: "Mega-Beedrill", number: 014, description: "Type Combo: Bug/Poison\nWeather: Rain/Cloudy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 169"},
    {name: "Pidgey", number: 015, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 85"},
    {name: "Pidgeotto", number: 016, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 3\nEvolution Stage: 2\nBase Attack level: 117"},
    {name: "Pidgeot", number: 017, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 166"},
    {name: "Mega-Pidgeot", number: 01, description: "Type Combo: Normal/Flying\nWeather: Partly Cloudy/Windy\nRarity: 4\nEvolution Stage: 3\nBase Attack level: 166"},
    {name: "Ratatta", number: 01, description: "Type Combo: Normal\nWeather: Partly Cloudy\nRarity: 1\nEvolution Stage: 1\nBase Attack level: 103"},
    {name: "Raticatte", number: 020, description: "Type Combo: Normal\nWeather: Partly Cloudy\nRarity: 4\nEvolution Stage: 2\nBase Attack level: 161"},
]
 
// to validate input of the String Search Bar
function validateName(){
    const nameInput = document.getElementById('name-input').value;
    if(!isNaN(nameInput)){
        alert("Plase enter a name");
    }
}

// to validate input of the Numbers Search Bar
function validateNumber(){
    const numInput = document.getElementById('num-input').value;
    if(isNaN(numInput)){
        alert("Plase enter a number");
    }
}
// Function to search by name
function byName() {
    var nameInput = document.getElementById("name-input");       // get input from user
    var sameCase = nameInput.value.toLowerCase();
    var div = document.getElementById("pokemon-info");      
    var a = div.getElementsByTagName("a");  
    // go through number list and see if the values match the input                
    for (i = 0; i < a.length; i++) {
        // check if the input matches the inner text or text content
      value = a[i].textContent || a[i].innerText;  
      if (value.toLowerCase().indexOf(sameCase) > -1) {
        // only show the list value if it matches the input
        console.log(a[i]);
        alert(`${pokemon[i].name}\n#${pokemon[i].number} \nDescription: ${pokemon[i].description}`);
      } 
    }
  }
//____________________________________________________________________________________________

// to display the pokemon descriptions
function showPokemon(){
    // find pokemons that match the description

    // display the pokemon descriptions that match the descriptions
    

}
 


 
function byNumber(){
    const numInput = document.getElementById('num-input').value;
}
 

function show(i){
    alert(`${pokemon[i-1].name}\n#${pokemon[i-1].number} \nType: ${pokemon[i-1].type}`);
}
