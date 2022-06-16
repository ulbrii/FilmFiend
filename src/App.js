// Utilizing specified React hook
import { useEffect, useState } from 'react';

// Importing card component from separate jsx sheet
import MovieCard from './MovieCard';

// Fetching CSS stylesheet
import './App.css';

// Grabbing search icon
import SearchIcon from './search.svg';

// API KEY: 538e3c85

// Grabbing API url
const API_URL = 'http://www.omdbapi.com?apikey=538e3c85';

// Our application
const App = () => {
	const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

	// Movie search function
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies('lord of the rings');
	}, []);

	return (
		<div className="app">
            
			<h1>FilmFiend</h1>

			{/* Search Bar */}
			<div className="search">
				<input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				<img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
			</div>
			{/* Search Bar */}
			
			{/* Movie Card */}
            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
            )}
			{/* Movie Card */}
                
		</div>
	);
};

export default App;
