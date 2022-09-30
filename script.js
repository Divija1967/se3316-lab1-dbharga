
// array of pokemon objects: includes name, number, and descriptions of Pokémon
let pokemon = [
    {name: "Bulbasaur", number: 1, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 118\n\n", img: new Image().src = 'pokemon/1.png'},
    {name: "Ivysaur", number: 2, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 151\n\n", img: new Image().src = 'pokemon/2.png'},
    {name: "Venasaur", number: 3, description: " a Grass/Poison Type Pokémon with Clear/Cloudy Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 198\n\n", img: new Image().src = 'pokemon/3.png'},
    {name: "Mega-Venasaur", number: 3.1, description: " the Mega version of Venasaur Type Pokémon with extra strength and rarity\n\n", img: new Image().src = 'pokemon/3-mega.png'},
    {name: "Charmander", number: 4, description: " a Fire Type Pokémon with Clear Weather and a Rarity of 4. It is in its First Evolutionary Stage Type Pokémon with a Base Attack Level of 116\n\n", img: new Image().src = 'pokemon/4.png'},
    {name: "Charmeleon", number: 5, description: " a Fire Type Pokémon with Clear Weather and a Rarity of 5. It is in its Second Evolutionary Stage Type Pokémon with a Base Attack Level of 158\n\n", img: new Image().src = 'pokemon/5.png'},
    {name: "Charizard", number: 6, description: " a Fire/Flying Type Pokémon with Clear/Windy Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 223\n\n", img: new Image().src = 'pokemon/6.png'},
    {name: "Mega-X-Charizard", number: 6.1, description: " a Mega version of Charizard Type Pokémon with extra strength and rarity\n\n", img: new Image().src = 'pokemon/6-mega-x.png'},
    {name: "Mega-Y-Charizard", number: 6.2, description: " a Mega version of Charizard Type Pokémon with extra powers and rarity\n\n", img: new Image().src = 'pokemon/6-mega-y.png'},
    {name: "Squirtle", number: 7, description: " a Water Type Pokémon with Rain Weather and a Rarity of 4. It is in its First Evolutionary Stage with a Base Attack Level of 94\n\n", img: new Image().src = 'pokemon/7.png'},
    {name: "Wartortle", number: 8, description: " a Water Type Pokémon with Rain Weather and a Rarity of 5. It is in its Second Evolutionary Stage with a Base Attack Level of 126\n\n", img: new Image().src = 'pokemon/8.png'},
    {name: "Blastoise", number: 9, description: " a Water Type Pokémon with Rain Weather and a Rarity of 6. It is in its Third Evolutionary Stage with a Base Attack Level of 171\n\n", img: new Image().src = 'pokemon/9.png'},
    {name: "Mega-Blastoise", number: 9.1, description: " a Mega version of Blastoise with extra strength and rarity\n\n", img: new Image().src = 'pokemon/9-mega.png'},
    {name: "Caterpie", number: 10, description: " a Bug Type Pokémon with Rain Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 55\n\n", img: new Image().src = 'pokemon/10.png'},
    {name: "Metapod", number: 11, description: " a Bug Type Pokémon with Rain Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 45\n\n", img: new Image().src = 'pokemon/11.png'},
    {name: "Butterfree", number: 12, description: " a Bug/Flying Type Pokémon with Rain/Windy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 167\n\n", img: new Image().src = 'pokemon/12.png'},
    {name: "Weedle", number: 13, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 63\n\n", img: new Image().src = 'pokemon/13.png'},
    {name: "Kakuna", number: 14, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 46\n\n", img: new Image().src = 'pokemon/14.png'},
    {name: "Beedrill", number: 15, description: " a Bug/Poison Type Pokémon with Rain/Cloudy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 169\n\n", img: new Image().src = 'pokemon/15.png'},
    {name: "Mega-Beedrill", number: 15.1, description: " a Mega version of Beedrill with extra speed and rarity\n\n", img: new Image().src = 'pokemon/15-mega.png'},
    {name: "Pidgey", number: 16, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 85\n\n", img: new Image().src = 'pokemon/16.png'},
    {name: "Pidgeotto", number: 17, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 3. It is in its Second Evolutionary Stage with a Base Attack Level of 117\n\n", img: new Image().src = 'pokemon/17.png'},
    {name: "Pidgeot", number: 18, description: " a Normal/Flying Type Pokémon with Partly Cloudy/Windy Weather and a Rarity of 4. It is in its Third Evolutionary Stage with a Base Attack Level of 166\n\n", img: new Image().src = 'pokemon/18.png'},
    {name: "Mega-Pidgeot", number: 18.1, description: " a Mega version of Pidgeot with extra speed and rarity\n\n", img: new Image().src = 'pokemon/18-mega.png'},
    {name: "Ratatta", number: 19, description: " a Normal Type Pokémon with Partly Cloudy Weather and a Rarity of 1. It is in its First Evolutionary Stage with a Base Attack Level of 103\n\n", img: new Image().src = 'pokemon/19.png'},
    {name: "Raticatte", number: 20, description: " a Normal Type Pokémon with Partly Cloudy Weather and a Rarity of 4. It is in its Second Evolutionary Stage with a Base Attack Level of 161\n\n", img: new Image().src = 'pokemon/20.png'},
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

function byNumber(){
    let numInput = document.getElementById('num-input').value;               // so the comparison is not case-senstive
    let ul = document.getElementById("pokemon-list");   
    
    let newUl = document.getElementById("results-list");

    let p = ul.getElementsByTagName("p");  
    let counter = 0;        // to keep track of how many matches are added  
    let matches = [];    
    let inp = numInput.replace(/^0+/, '');    // to ignore leading zeros
    // go through number list and see if the values match the input        
    clear(newUl);        

    for (i = 0; i < p.length; i++) {
        value = p[i].textContent;    
        // check if the input matches the inner tex t or text content
      if (value.indexOf(inp) > -1 && counter < 5) {
        counter ++;
        // only show the list value if it matches the input
        matches[i] = pokemon[i].number;

        // create new list element for every match
        // for the list 
        var newListElement = document.createElement('li');
        newListElement.classList.add('new-poke');
        newUl.appendChild(newListElement);
        // for the image
        var im = document.createElement('img');
        im.src = pokemon[i].img;
        newListElement.appendChild(im);
        // for the numbers
        var num = document.createElement('p');
        var pokeNum = document.createTextNode(pokemon[i].number);
        num.classList.add('new-text');
        num.appendChild(pokeNum);
        newListElement.appendChild(num);
        // for the name
        var pokeName = document.createTextNode(pokemon[i].name);
        var h = document.createElement('h3');
        h.classList.add('new-text');
        h.appendChild(pokeName);
        newListElement.appendChild(h);
        // for the description
        var pokeDesc = document.createTextNode(pokemon[i].description);
        var s = document.createElement('span');
        s.appendChild(pokeDesc);
        newListElement.appendChild(s); 

        // to clear the list
        if(inp === ""){
          clear(newUl);
        }

        console.log(pokeName);
      } 
      
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
  let newUl = document.getElementById("results-list");
  // go through number list and see if the values match the input                
  for (i = 0; i < h3.length; i++) {
      // check if the input matches the inner text or text content
    value = h3[i].textContent || h3[i].innerText; 
    // if the input matches a pokemon name exactly, move it to the top of the array
    if(sameCase === value.toLowerCase() && counter < 5){
      counter ++;
      matches.unshift(pokemon[i].number);
    }
    else if (value.toLowerCase().indexOf(sameCase) > -1 && counter < 5) {
      counter ++;
      matches[i] = pokemon[i].number;      
    } 
  }
}


// start of lab 2 branch javascript
// Use JavaScript to pick an element using document.getElementById() or document.querySelector() method, 
      //pick element from html depending on if it matches the searched input 
// creating new elements and content using .createElement() or .createTextNode() method 
      // create a copy of that elemtent in the search results box up top
// and then adding the newly created elements to the selected node using appendChild() method.
      // add newly created elemnts to the new div in a list

function displayResults(i, newUl){
        // create new list element for every match
        // for the list 
        var newListElement = document.createElement('li');
        newUl.appendChild(newListElement);
        // for the numbers
        var num = document.createElement('p');
        var pokeNum = document.createTextNode(pokemon[i].number);
        num.appendChild(pokeNum);
        newListElement.appendChild(num);
        // for the name
        var pokeName = document.createTextNode(pokemon[i].name);
        var h = document.createElement('h3');
        h.appendChild(pokeName);
        newListElement.appendChild(h);
        // for the image
        var im = document.createElement('img');
        im.src = pokemon[i].img;
        newListElement.appendChild(im);
        // for the description
        var pokeDesc = document.createTextNode(pokemon[i].description);
        var s = document.createElement('span');
        s.classList.add('new-text');
        s.appendChild(pokeDesc);
        newListElement.appendChild(s);
}

function clear(element){
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}


// JUST ADD THINGS FROM THE ARRAY
// LIKE ADD THE IMAGE AND THE APAN AND THE TITLE AND STUFF