import styled from 'styled-components'


export const CardFooter=styled.div`

`

export const Footer=styled.footer`
background-color: transparent;
color:  #ffffffdd;
border-top:1px solid #ffffff26;



`

export const Baseboard=styled.div`

    width:85%;
    margin: auto;
    display: flex;
    padding-top:3rem;
    padding-bottom:3rem;
    text-align: center;
    justify-content: space-around;

    @media (max-width:800px){
        flex-direction: column;
        text-align: center;
        gap: 4rem;
    }

`

export const Icons=styled.div`
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    gap: 1rem;
    align-self: center;

    span{
        font-size: 1.5rem;

        &:hover{
            color:#4b59f7 ;
            transition: 0.3s;
            transform: translateY(-08px);
        }
    }
`