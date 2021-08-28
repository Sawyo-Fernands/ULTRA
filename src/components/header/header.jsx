import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Header=styled.header`

    height:11vh;
    background-color: transparent;
    width: 100%;
    margin: auto;
    color: white;
    position: fixed;
    top: 0;
    background-color:#101522;

    @media (max-width:350px){
        width: 100%;
        height: 12vh;
    }
    @media (max-width:280px){
        height: 13vh;
    }

`

export const Linkk=styled(Link)`
color:white;
text-decoration: none;

  
  
`
export const LinkStarted=styled(Link)`
color:white;
text-decoration: none;
padding:0.4rem 1.2rem;
background-color: #4b59f7;
border-radius: 9px;
text-align: center;

&:hover{
    color: #4b59f7;
    background-color: #ffffff;
}

`

export const Nav=styled.nav`

    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    @media (max-width:280px){
        height: 13vh;
        width: 100%;
    }
`

export const Div=styled.div`

    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;

        .Hide{
            cursor: none;
            opacity: 0;
            visibility: hidden;
            width: 0;
        }
       
        @media (max-width:780px){
            .Hide{
                cursor: pointer;
                opacity: 1;
                visibility: visible;
                width: 100%;
        }
    }

`

export const Logo=styled.h1`

    font-size: 1.9rem;
    text-transform: uppercase;
    margin-top: 0.3rem;
    font-family: 'Poppins', sans-serif;

    &:hover{
        color:#4b59f7 ;
        transition: .3s;
    }

`

export const UL=styled.ul`
 
    li{
        display: inline-block;
        padding-left: 1rem;
        margin-top: 0rem;
       

        a{
            padding-left: 1rem;

            &:hover{
        color:#4b59f7 ;
        transition: .3s;
       
    }
           
        }
    }
    @media (max-width:780px){
        cursor: none;
            opacity: 0;
            visibility: hidden;
            width: 0;
            height: 0;
            width: 0;
    }
`


export const Button=styled.div`
padding:0.7rem 1.5rem;
background-color: #4b59f7;
width: 50%;
border-radius: 9px;
text-align: center;
border:1px solid #4b59f7 ;

&:hover{
        color:#4b59f7 ;
        transition: .3s;
        background-color: #fffffff4;
        border:1px solid #4b59f7 ;
       
    }

@media (max-width:281px){
        
        width: 90%;
    }
    @media (max-width:765px){
        margin: auto;
    }
`

export const HideMenu=styled.div`
text-align: center;
margin-right: auto;
position: absolute;

     li{
        padding: 1.5rem;
        list-style: none;
       
    }
    @media (max-width:765px){
        width: 80%;
    }
    
    
`
