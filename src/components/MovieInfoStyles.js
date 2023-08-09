import styled from 'styled-components';

export const Container = styled.div `
display:flex;
flex-direction:column;
padding:20px 30px;
justify-content:center;
`
export const CoverImage = styled.img`
object-fit:cover;
height:362px;
`
export const MovieName = styled.span`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
`

export const MovieColumn = styled.div`
display:flex;
flex-direction:row;
margin:20px;
`
export const MoviesInfo = styled.img`
font-size:15px;
font-weight:500;
color:black;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
text-transform:capitalize;
`