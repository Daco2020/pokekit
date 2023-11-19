import { writable } from 'svelte/store';

export const arrPokemon = writable([]);

const limit = 150;
const offset = 500;

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const res = await fetch(url);
  const data = await res.json();

  const loadedPokemon = data.results.map((pokemon, index) => {
    return {
      name: koreanNames[index],
      id: index + offset,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + offset
      }.png`,
    };
  });
  arrPokemon.set(loadedPokemon);
}


const koreanNames = [];
const urls = [];

for (let i=offset; i<offset+limit; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
}

let requests = urls.map(url => fetch(url));

Promise.all(requests) // 여러개의 요청을 순서를 지키고 모든 결과를 받을 때까지 기다린다.
    .then(responses => Promise.all(responses.map(r => r.json()))) // 값을 가져오려면 then 을 사용해야 한다.
    .then(results => {
        results.forEach((result) => {
            koreanNames.push(result.names[2].name);
        });
        fetchPokemon();
    });

