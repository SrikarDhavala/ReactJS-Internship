import { useEffect, useState } from "react";
import "./index.css"
import PokemonCards from "./PokemonCards.jsx";

function Pokemon() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);

            const detailedPokemonData = data.results.map(async (currPokemon) => {
                // console.log(currPokemon.url);
                const res = await fetch(currPokemon.url);
                const data = await res.json();

                return data;
            })

            const detailedResponses = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponses);
            setLoading(false);

        } catch (error) {
            // console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    if(loading) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(error) {
        return(
            <div>
                <h1>{error}</h1>
            </div>
        );
    }

    return(
        <div className="container">
            <header>
                <h1>Gotta Catch 'Em All</h1>
            </header>
            <div>
                <ul className="cards">
                    {
                        pokemon.map((currPokemon) => {
                            return <PokemonCards key={currPokemon.id} pokemonData={currPokemon}/>;
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Pokemon