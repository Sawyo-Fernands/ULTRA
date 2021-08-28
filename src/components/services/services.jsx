import styled from  'styled-components'


export const ServiceAll=styled.section`
    width: 100%;
    background-color:#4b59f7 ;


    @media (max-width:320px){
        width: 107%;
    }
`

export const Service=styled.div`

    width: 85%;
    margin: auto;
    display: flex;
    gap: 2rem;
    color: white;
    margin-top: 0rem;
    margin-bottom: 3.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #4b59f7;
    


    @media (max-width:765px){
        flex-direction: column-reverse;
        width: 100%;
        text-align: center;
        gap: 4rem;
    }

`

export const Card=styled.div`

    background-color:#101522 ;
    border-radius: 2px;
    text-align: center;
    width: 30%;
    padding: 1.5rem;
    color: #ffffffdd;

    &:hover{
        border:1px solid transparent;
        transition: 0.3s;
    }

    @media (max-width:765px){
        width: 90%;
        margin: auto;
    }

`

export const CardTittle=styled.h3`
font-family: "Poppins";
font-size: 18px;
margin-top: 1rem;
`
export const Money=styled.h3`
font-family: "Poppins";
font-size: 20px;
margin-top: 1rem;
`

export const CardText=styled.p`
font-size:14px;

`

export const Icon=styled.span`
    font-size: 5rem;
    color: #ffffffdd;`