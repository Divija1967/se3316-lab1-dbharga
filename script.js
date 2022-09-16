// array of pokemon objects
let pokemon = [
    {name: "Bulbasaur", number: 001, type: "Grass/Poison", weather: "Clear/Cloudy",rarity: "4", evolutionStage: "1", atk: "118"},
    {name: "Ivysaur", number: 002, type: "Grass/Poison", weather: "Clear/Cloudy",rarity: "5", evolutionStage: "2", atk: "151" },
    {name: "Venasaur", number: 003, type: "Grass/Poison", weather: "Clear/Cloudy",rarity: "6", evolutionStage: "3", atk: "198"},
    {name: "Mega-Venasaur", number: 003, type: "Grass/Poison", weather: "Clear/Cloudy",rarity: "6", evolutionStage: "3", atk: "198"},
    {name: "Charmander", number: 004, type: "Fire", weather: "Clear",rarity: "4", evolutionStage: "1", atk: "116"},
    {name: "Charmeleon", number: 005, type: "Fire", weather: "Clear",rarity: "5", evolutionStage: "2", atk: "158"},
    {name: "Charizard", number: 006, type: "Fire/Flying", weather: "Clear/Windy",rarity: "6", evolutionStage: "3", atk: "223"},
    {name: "Mega-X-Charizard", number: 006, type: "Fire/Flying", weather: "Clear/Windy",rarity: "6", evolutionStage: "3", atk: "223"},
    {name: "Mega-Y-Charizard", number: 006, type: "Fire/Flying", weather: "Clear/Windy",rarity: "6", evolutionStage: "3", atk: "223"},
    {name: "Squirtle", number: 007, type: "Water", weather: "Rain",rarity: "4", evolutionStage: "1", atk: "94"},
    {name: "Wartortle", number: 00, type: "Water", weather: "Rain",rarity: "5", evolutionStage: "2", atk: "126"},
    {name: "Blastoise", number: 00, type: "Water", weather: "Rain",rarity: "6", evolutionStage: "3", atk: "171"},
    {name: "Mega-Blastoise", number: 00, type: "Water", weather: "Rain",rarity: "6", evolutionStage: "3", atk: "171"},
    {name: "Caterpie", number: 002, type: "Bug", weather: "Rain",rarity: "1", evolutionStage: "1", atk: "55"},
    {name: "Metapod", number: 003, type: "Bug", weather: "Rain",rarity: "3", evolutionStage: "2", atk: "45"},
    {name: "Butterfree", number: 001, type: "Bug/Flying", weather: "Rain/Windy",rarity: "4", evolutionStage: "3", atk: "167"},
    {name: "Weedle", number: 002, type: "Bug/Poison", weather: "Rain/Cloudy",rarity: "1", evolutionStage: "1", atk: "63"},
    {name: "Kakuna", number: 003, type: "Bug/Poison", weather: "Rain/Cloudy",rarity: "3", evolutionStage: "2", atk: "46"},
    {name: "Beedrill", number: 001, type: "Bug/Poison", weather: "Rain/Cloudy",rarity: "4", evolutionStage: "3", atk: "169"},
    {name: "Mega-Beedrill", number: 014, type: "Bug/Poison", weather: "Rain/Cloudy",rarity: "4", evolutionStage: "3", atk: "169"},
    {name: "Pidgey", number: 015, type: "Normal/Flying", weather: "Partly Cloudy/Windy",rarity: "1", evolutionStage: "1", atk: "85"},
    {name: "Pidgeotto", number: 016, type: "Normal/Flying", weather: "Partly Cloudy/Windy",rarity: "3", evolutionStage: "2", atk: "117"},
    {name: "Pidgeot", number: 017, type: "Normal/Flying", weather: "Partly Cloudy/Windy",rarity: "4", evolutionStage: "3", atk: "166"},
    {name: "Mega-Pidgeot", number: 01, type: "Normal/Flying", weather: "Partly Cloudy/Windy",rarity: "4", evolutionStage: "3", atk: "166"},
    {name: "Ratatta", number: 01, type: "Normal", weather: "Partly Cloudy",rarity: "1", evolutionStage: "1", atk: "103"},
    {name: "Raticatte", number: 020, type: "Normal", weather: "Partly Cloudy",rarity: "4", evolutionStage: "2", atk: "161"},
]
 
// function toggle(){
//     document.getElementById("num-dropdown").classList.toggle("show");
// }
 
// dropdown menu
// function searchPokemon() {
//     var input = document.getElementById("num-input");       // get input from user
//     var div = document.getElementById("num-dropdown");      
//     var a = div.getElementsByTagName("a");  
//     // go through number list and see if the values match the input                
//     for (i = 0; i < a.length; i++) {
//         // check if the input matches the inner text
//       value = a[i].textContent || a[i].innerText;  
//       if (value.indexOf(input) > -1) {
//         // only show the list value if it matches the input
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }
// ______________________________________________________________________________________
 
 
// to validate input of the Numbers Search Bar
function validateNumber(){
    const numInput = document.getElementById('num-input').value;
    if(!isNaN(numInput)){
        byNumber(numInput);
    }
    else{
        alert("Plase enter a number");
    }
}
 
function byNumber(){
    // for(let i = 0; i < pokemon.length; i++){
    //     if(pokemon[i].number === document.getElementById('num-input').value){
    //         alert(`${pokemon[i].name}\n#${pokemon[i].number} \nType: ${pokemon[i].type}`);
    //         console.log(document.getElementById('num-input').value);
    //     }
    // }
}
 
 
function pokemonInfo(){
//     for(let i = 0; i < pokemon.length; i++){
//         var $img = document.getElementsByTagName("img")[i];   // get alt name of the image clicked on
//                 if(pokemon[i].name.toLowerCase() === $img.alt ){
//                     console.log("clicked");
//                 }
//             }
}
 
function show(i){
    alert(`${pokemon[i-1].name}\n#${pokemon[i-1].number} \nType: ${pokemon[i-1].type}`);
}
 
// to validate input of the Name
function byName(){
    // for(let i = 0; i < pokemon.length; i++){
    //     if(pokemon[i].name === document.getElementById('name-input').value){
    //         alert(`${pokemon[i].name}\n#${pokemon[i].number} \nType: ${pokemon[i].type}`);
    //         console.log(document.getElementById('name-input').value);
    //     }
    // }
}
// to validate input of the String Search Bar
function validateName(){
    const nameInput = document.getElementById('name-input').value;
    if(isNaN(nameInput)){
        byName(nameInput);
    }
    else{
        alert("Plase enter a name");
    }
}
