import styled from 'styled-components'
import { Field } from 'formik'


export const InputText = styled(Field)`
    width:${(props) => props.width ? props.width : '100%'};
    height:${(props) => props.height ? props.height : '45px'};
    background-color:white;
    border:1px solid lightgray !important;
    margin-bottom:20px;
    padding-left:17px;
    border-radius:4px;
    font-size:12px;
    letter-spacing:1px;
    outline:none ;
    transition:all .5s;
     &:focus {
        border:2px solid black !important;
     }
`

export const WiderInput = styled.div`

     @media screen and (min-width:768px){
        display:flex;
        justify-content:space-between;
        > ${InputText} {
            width:48%;
        }
     }
   
`


