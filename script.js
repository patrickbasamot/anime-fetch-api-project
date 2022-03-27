// fetch('https://animechan.vercel.app/api/random')
//         .then(response => response.json())
//         .then(quote => console.log(quote))
const container = document.getElementById('container');
const anime = document.createElement('h3');
const character = document.createElement('h4');
const quote = document.createElement('p');


container.appendChild(quote);
container.appendChild(character);
container.appendChild(anime);

async function fetchText() {
    let response = await fetch('https://animechan.vercel.app/api/random');
            let data = await response.json();
            console.log(data);
                show(data);
        }

        

     
fetchText();
function show(data){

        anime.textContent = data.anime;
        character.textContent = data.character;
        quote.textContent = data.quote;
}

