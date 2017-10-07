import styled from 'styled-components'


export const ButtonStyled = styled.div`
    letter-spacing:1px;
    width:100%;
    color:white ; 
    background:#333 ;
    font-size:12px ;
    border-radius:0px ;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:.5s;
    &:hover{
        background-color:#555;
    } 
`