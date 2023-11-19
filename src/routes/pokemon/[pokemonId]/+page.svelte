<script>
    import { arrPokemon } from '../../../stores/pokestore.js';
    
    export let data; // page.js 가 주는 load 함수 리턴 값
    const { pokemon } = data; // pokemon 키의 값을 가져온다.
    
    const name = $arrPokemon.filter(each => each.id === pokemon.id)[0].name;
</script>

<h1 class="text-4xl text-center my-8 font-bold underline">
    Pokemon Detail
</h1>


<div class="flex flex-col items-center text-2xl">
    <h1 class = "text-4xl text-center my-8">{name}</h1>
    <p>타입 : {pokemon.types[0].type.name}</p>
    <p>키 : {pokemon.height}</p>
    <p>무게 : {pokemon.weight}</p>
    <img class="h-40 w-40" src={pokemon.sprites.front_default} alt={pokemon.name} />
</div>