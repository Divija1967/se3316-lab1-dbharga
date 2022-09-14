// array of pokemon objects
let pokemon = [
    {name: "Bulbasaur", number: 001, type: "a"}, 
    {name: "Ivysaur", number: 002, type: "b"},
    {name: "Venasaur", number: 003, type: "c"},
    {name: "Mega-Venasaur", number: 003, type: "a"}, 
    {name: "Charmader", number: 004, type: "b"},
    {name: "Charmeleon", number: 005, type: "c"},
    {name: "Charizard", number: 006, type: "a"}, 
    {name: "Mega-X-Charizard", number: 006, type: "b"},
    {name: "Mega-Y-Charizard", number: 006, type: "c"},
    {name: "Squirtle", number: 007, type: "a"}, 
    {name: "Wartortle", number: 00, type: "b"},
    {name: "Blastoise", number: 00, type: "c"},
    {name: "Mega-Blastoise", number: 00, type: "a"}, 
    {name: "Caterpie", number: 002, type: "b"},
    {name: "Metapod", number: 003, type: "c"},
    {name: "Butterfree", number: 001, type: "a"}, 
    {name: "Weedle", number: 002, type: "b"},
    {name: "Kakuna", number: 003, type: "c"},
    {name: "Beedrill", number: 001, type: "a"}, 
    {name: "Mega-Beedrill", number: 014, type: "b"},
    {name: "Pidgey", number: 015, type: "c"},
    {name: "Pidgeotto", number: 016, type: "a"}, 
    {name: "Pidgeot", number: 017, type: "b"},
    {name: "Mega-Pidgeot", number: 01, type: "c"},
    {name: "Ratatta", number: 01, type: "a"}, 
    {name: "Raticatte", number: 020, type: "b"},
]

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
// function byNumber(){
//     for(let i = 0; i < pokemon.length; i++){
//         if(pokemon[i].number === document.getElementById('num-input').value){
//             alert(`${pokemon[i].name}\n#${pokemon[i].number} \nType: ${pokemon[i].type}`);
//             console.log(document.getElementById('num-input').value);
//         }
//     }
// }

function pokemonInfo(){
    alert("Info about Pokémon!");
}

// to validate input of the Name 
function byName(){
    // function byNumber(){
//     for(let i = 0; i < pokemon.length; i++){
//         if(pokemon[i].number === document.getElementById('num-input').value){
//             alert(`${pokemon[i].name}\n#${pokemon[i].number} \nType: ${pokemon[i].type}`);
//             console.log(document.getElementById('num-input').value);
//         }
//     }
// }
}
// to validate input of the String Search Bar
function validateName(){
    const numInput = document.getElementById('num-input').value;
    if(isNaN(numInput)){
        byName(numInput);
    }
    else{
        alert("Plase enter a name");
    }
}