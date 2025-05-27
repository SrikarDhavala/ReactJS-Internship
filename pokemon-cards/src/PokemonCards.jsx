
function PokemonCards({pokemonData}) {

    return(
        <li className="pokemon-card">
            <figure>
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className="pokemon-image"></img>
            </figure>
        </li>
    );
}

export default PokemonCards