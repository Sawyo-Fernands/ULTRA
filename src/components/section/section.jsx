import styled from  'styled-components'


export const Section=styled.div`

    width: 85%;
    margin: auto;
    background: transparent;
    display: flex;
    gap: 5rem;
    color: white;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    

    @media (max-width:765px){
        flex-direction: column;
        width: 100%;
        text-align: center;
        gap: 4rem;

        
    }

`

export const ReverseSection=styled.div`

width: 85%;
margin: auto;
background: transparent;
display: flex;
gap: 5rem;
color: white;
margin-top: 3.5rem;
margin-bottom: 3.5rem;
padding-top: 8rem;
padding-bottom: 8rem;
padding-left: 1rem;
padding-right: 1rem;


@media (max-width:765px){
    flex-direction: column-reverse;
    width: 100%;
    text-align: center;
    gap: 4rem;

    
}

`

export const SectionAll=styled.section`
    width: 100%;


    @media (max-width:320px){
        width: 107%;
    }
`

export const SectionInicial=styled.section`
  width: 85%;
    margin: auto;
    background: transparent;
    display: flex;
    gap: 1rem;
    color: white;
    margin-top: 27vh;
    margin-bottom: 3.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    
    @media (max-width:765px){
        flex-direction: column;
        width: 100%;
        text-align: center;
        gap: 4rem;
    }

`


export const Image=styled.img`

width: 100%;


`

export const Container=styled.div`

    width: 50%;
    
    @media (max-width:765px){
        
        width: 90%;
        margin: auto;
        text-align: center;
    }
   

`

export const Title=styled.h2`

    font-size:2.5rem;
    text-align: left;
    font-family: 'Poppins', sans-serif;

    @media (max-width:765px){
        
        font-size: 2rem;
        text-align: center;

        
    }
       
`
export const Text=styled.p`
font-size: 18px;
color: #ffffffa4;
text-align: left;
font-weight: 500;

@media (max-width:765px){
        
        font-size: 15px;
        text-align: center;

    }


`

