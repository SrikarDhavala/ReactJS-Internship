import { useState, useContext, useEffect} from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, useFavorites] = useState([])

    
    
    return(
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    );
}