import styled from 'styled-components';

export const Container = styled.div `
display:flex;
flex-direction:column;
`
export const AppName = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`
export const Header = styled.div`
background-color:black;
font-size:15px;
font-weight:bold;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
color:white;
padding:10px;
box-shadow:0 3px 6px 0 #555;
`
export const MovieListContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:30px;
gap:25px;
`
export const SearchInput = styled.input`
color:black;
font-size:16px;
font-weight:bold;;
border:none;
outline:none;
margin-left:15px;
`

export const PlaceHolder = styled.div`
width:0px;
height:0px;
`