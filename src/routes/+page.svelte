<script>
	import { arrPokemon } from './../stores/pokestore.js';
    console.log($arrPokemon);
    import PokemonCard from './../components/pokemonCard.svelte';

    let searchTerm = ''
    let filteredPokemon = [];

    $: {
        console.log(searchTerm);
        if (searchTerm) {
            filteredPokemon = $arrPokemon.filter(pokemon => 
                pokemon.name.includes(searchTerm)
            );
        } else {
            filteredPokemon = [...$arrPokemon];
        }
    }

</script>

<svelte:head>
    <title>PokeKit</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 font-bold underline">
    PokeKit
  </h1>

<input 
    class="w-full rounded-md text-lg p-4 mb-8 border-2 border-gray-200" 
    type="text" 
    bind:value={searchTerm} 
    placeholder="포켓몬 검색"
/>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1">
{#each filteredPokemon as pokemon}
  <PokemonCard pokemon={pokemon}></PokemonCard>
{/each}
</div>

