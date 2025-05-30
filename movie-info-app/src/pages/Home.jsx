import "../css/Home.css"
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../apiFile.js"
import MovieCard from "../MovieCard.jsx";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                console.log(error)
                setError("Falied to load the data... ")
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, []);

    const handleSearch = async(e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            console.log(error);
            setError("Failed to search movies...")
        }
        finally {
            setLoading(false)
        }

        setSearchQuery("")
    }

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Submit</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Loading...</div> : (<div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>)}
        </div>
    );
}

export default Home