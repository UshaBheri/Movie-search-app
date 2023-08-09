import React from 'react'
import {MovieContainer,MovieName,Images,MovieColumn,MovieInfo} from './MovieStyles'

const MovieApp = (props) => {
    const {Title,Year,imdbId,Poster} = props.movie;

    return (
        <MovieContainer
        onClick = {() => {
            props.onMovieSelect(imdbId);
        }}
        >
            <Images src ={Poster} alt={Title} />
            <MovieName>{Title}</MovieName>
            <MovieColumn>
                <MovieInfo>Year:{Year}</MovieInfo>
            </MovieColumn>
        </MovieContainer>
    )
}

export  default MovieApp