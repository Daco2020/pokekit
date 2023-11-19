export async function load( {fetch, params} ) { // 스벨트가 제공하는 fetch 함수를 사용한다.
    const id = params.pokemonId;        
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return {
        pokemon
    }
}