import React, {useState}from 'react'
import Axios from 'axios'
import MovieApp from './components/MovieApp'
import MovieInfo from './components/MovieInfo'
import {Container,Header,MovieListContainer,AppName,PlaceHolder,SearchInput} from './StyledComponents'

export const API_KEY = "a9118a3a"

function App() {
    const [searchQuery,updateSearchQuery] = useState("");

    const [movieList,updateMovieList] = useState([]);
    const [selectedMovie,onMovieSelect] = useState();
    const [timeoutId,updateTimeoutId] = useState();

    const fetchData = async (searchString) => {
        const response = await Axios.get(
            `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
        );
        updateMovieList(response.data.Search)
    };

    const onTextChange = (e) => {
        onMovieSelect("")
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(()=> fetchData(e.target.value),500);
        updateTimeoutId(timeout)
    }

    return(
        <Container>
            <Header>
                <AppName>Movie App</AppName>
                <SearchInput placeholder="Search a movie" value = {searchQuery} onChange={onTextChange} />
            </Header>
            {selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect ={onMovieSelect} /> }
            <MovieListContainer>
                {movieList?.length ? (
                    movieList.map((movie,index) => (
                        <MovieApp key={index} movie={movie} onMovieSelect={onMovieSelect} />
                    ))
                ):(
                    <PlaceHolder />
                )}
            </MovieListContainer>
        </Container>

    )
};

export default App;