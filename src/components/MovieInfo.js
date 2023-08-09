import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Container,CoverImage,MovieName,MovieColumn,MoviesInfo} from './MovieInfoStyles'
import { API_KEY } from '../App'

const MovieInfo = (props) => {
    const [movieInfo,setMovieInfo] = useState();
    const {selectedMovie} = props;

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?s=${selectedMovie}&apikey=${API_KEY}`)
        .then((response) => setMovieInfo(response.data))
    },[selectedMovie])
    return (
        <Container>
            {movieInfo ? (
                <>
                <CoverImage src = {movieInfo?.Poster} alt = {movieInfo?.Title} />
                <MovieColumn>
                    <MovieName>
                        {movieInfo?.Type}.<span>{movieInfo?.Title}</span>
                    </MovieName>
                    <MoviesInfo>
                        Year: <span>{movieInfo?.Year}</span>
                    </MoviesInfo>
                    <MoviesInfo>
                        Language: <span>{movieInfo?.Language}</span>
                    </MoviesInfo>
                    <MoviesInfo>
                        Released: <span>{movieInfo?.Released}</span>
                    </MoviesInfo>
                    <MoviesInfo>
                        Director: <span>{movieInfo?.Director}</span>
                    </MoviesInfo>
                </MovieColumn>
                </>
            ):(
                "Loading..."
            )}
        </Container>
    )
}

export default MovieInfo