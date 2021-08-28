import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './assets/icones/style.css'
import './components/reset/index.css'
import {Header,Nav,Div,Logo,UL,Linkk,Button,LinkStarted,HideMenu} from './components/header/header'
import {Section,SectionInicial,Image,Container,Title,Text,SectionAll,ReverseSection} from './components/section/section'
import {Service,ServiceAll,Card,CardTittle,Money,CardText,Icon} from './components/services/services'
import {Footer,Baseboard,Icons} from './components/footer/footer'

import svg1 from './assets/images/svg-1.svg'
import profile from './assets/images/profile.jpg'
import svg2 from './assets/images/svg-2.svg'
import svg3 from './assets/images/svg-3.svg'



function App() {

  const [menu,setMenu]=useState('true')
  const visible=menu?'false' :''

  return (
    <>
      <Header>
        <Nav>
          <Div>
          <Linkk to="/">
            <Logo>
              <span className="icon-fit"></span> ultra
              </Logo>
            </Linkk>
            </Div>
            
        <Div>
          <Div>
            <UL>
              <li><Linkk to="/"> Services</Linkk></li>
              <li><Linkk to="/">Contact</Linkk></li>
              <li><Linkk to="/">About us</Linkk></li>
              <li><LinkStarted to="/">Started</LinkStarted></li>
            </UL>
          </Div>
          <Div className="Hide" onClick={()=>{
           setMenu(!visible)
          }}><span class="icon-menu"></span></Div>

      </Div>
        </Nav>

        <div className={`HiddeMenu ${menu}`}>
        <ul>
       <li><Linkk to="/"> Services</Linkk></li>
        <li><Linkk to="/">Contact</Linkk></li>
        <li><Linkk to="/">About us</Linkk></li>
        <li><Linkk to="/"><Button style={{margin:'auto',fontSize:'20px'}}>Get Started</Button></Linkk></li>
       </ul>
        </div>
        
      </Header>
        
      <SectionInicial >

      <Container >
        <Text>Margeting Agency</Text>
          <Title>Lead Generation Specialist for Online Business</Title>
        <Text>We hel business owners increase their revenue.Our team of unique specialist can help you acheive your business goals.</Text>
        <br/>
        <Linkk to="/" >
          <Button>Get Started</Button>
          </Linkk>
        
      </Container>

      <Container >
         <Image src={svg1}/>
      </Container>
      
      </SectionInicial>
      
      <SectionAll style={{backgroundColor:"white"}}>
      <ReverseSection style={{backgroundColor:"white"}} >
        <Container style={{backgroundColor:"white"}}>
          <Image src={profile}/>
        </Container>
        <Container style={{backgroundColor:"white"}}>

        <Text style={{backgroundColor:"white",color:"#4b59f7"}}>Sara Jeni</Text>
          <Title style={{backgroundColor:"white",color:"black"}}>Ultra helped me increase my revenue by over 3X in less than 3 months!</Title>
        <Text style={{backgroundColor:"white",color:"black"}}>Their team is wonderful! I can't believe i didn't start working whit them earlier.</Text>
        <br/>
        <Linkk to="/"  style={{backgroundColor:"white"}}>
          <Button>Get Started</Button>
          </Linkk>
        </Container>

      </ReverseSection>
      </SectionAll>

      <Section>
      <Container >
        <Text>Instant Setup</Text>
          <Title style={{color:'White'}}>Extremely quirck onboarding process</Title>
        <Text>Once you've joined,our team of specialist will reach out to you and get you set up in minutes.</Text>
        <br/>
        <Linkk to="/" >
          <Button>Get Started</Button>
          </Linkk>
        
      </Container>

      <Container >
         <Image src={svg2}/>
      </Container>
      </Section>

      <ServiceAll>
      <Title style={{color:"white",backgroundColor:"transparent",textAlign:"center",paddingTop:"3.5rem"}}>Our Services</Title>
        <Service >
        

        <Card>
        <Icon  className="icon-diamonds"/>
          <CardTittle>Starter Pack</CardTittle>
          <Money>$99.99</Money>
          <CardText>per mounth</CardText>
          <br/>
          <CardText>100 new users</CardText>
          <CardText>$10,000 budget</CardText>
          <CardText>Retargeting analyticst</CardText>
          <br/>
          <Linkk to="/"><Button style={{margin:"auto"}}>Buy Now</Button></Linkk>

        </Card>

        <Card>
        < Icon  className="icon-rocket"/>
          <CardTittle>Rocket Rush</CardTittle>
          <Money>$299.99</Money>
          <CardText>per mounth</CardText>
          <br/>
          <CardText>1000 new users</CardText>
          <CardText>$50,000 budget</CardText>
          <CardText>Lead Gen analyticst</CardText>
          <br/>
          <Linkk to="/"><Button style={{margin:"auto"}}>Buy Now</Button></Linkk>

        </Card>

        <Card>
       <Icon   className="icon-diamond"/>
          <CardTittle>Diamond Kings</CardTittle>
          <Money>$999.99</Money>
          <CardText>per mounth</CardText>
          <br/>
          <CardText>Unlimited users</CardText>
          <CardText>Unlimited budget</CardText>
          <CardText>24/7 Support</CardText>
          <br/>
          <Linkk to="/"><Button style={{margin:"auto"}}>Buy Now</Button></Linkk>
        </Card>

        </Service>


      </ServiceAll>


      <Section>
      <Container >
         <Image src={svg3}/>
      </Container>

      <Container >
        <Text>Secure Database</Text>
          <Title style={{color:'White'}}>All your data is stored on our secure server </Title>
        <Text>You will never have to worry about your information getting leaked.Our team of security experts will ensure yur records are kept safe</Text>
        <br/>
        <Linkk to="/" >
          <Button>Get Started</Button>
        </Linkk>
        
      </Container>
      </Section>

  <Footer>
    <Baseboard>
        <Linkk to="/">
            <Logo>
                <span className="icon-fit"></span> ultra
            </Logo>
        </Linkk>

        <Div style={{alignSelf:"center"}}>
            <strong>ULTRA@2021</strong>
        </Div>
        <Icons>
                
              <Linkk to="/"><span className="icon-instagram"></span></Linkk>
              <Linkk to="/"><span className="icon-whatsapp"></span></Linkk>
              <Linkk to="/"><span className="icon-twitter"></span></Linkk>
              <Linkk to="/"><span className="icon-youtube"></span></Linkk>
              <Linkk to="/"><span className="icon-linkedin"></span></Linkk>
       </Icons>
        
    </Baseboard>
  </Footer>
     
    </>
  );
}

export default App;
