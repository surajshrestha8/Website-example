import React, { useState } from 'react';
import {

Container,
Row,Col,Button
  
} from 'react-bootstrap';
import { Facebook,Twitter,Instagram, ArrowRight, Snapchat,List as Hamburger} from 'react-bootstrap-icons';

import Infos from '../Info/info';
import List from '../List/list';
import Stories from '../Stories/stories';
import './navbar.css';
import Course from '../Courses/courses';
import BlogCard from '../Blog/blog';
import Pricing from '../Pricing/pricing';
import NewsLetter from '../Newsletter/newsletter';
import Footer from '../Footer/footer';

const NavBar = () => {
  return (
    <div>
    <div className='topnavbar'>
 
      <Container>
      <Row>  
        <Col className='topnavitems'>
        <h3 style={{marginLeft:'5px',marginTop:'15px' ,color:'white',fontWeight:'bolder'}}>ACADEMIA</h3>
        <h5 style={{color:'white'}}>ONLINE EDUCATION AND LEARNING</h5>
  
        </Col>
        <Col>
        <div className='topinfo'>
       <Infos/>
       <div className='socialicons'>
      <Facebook className='icons'></Facebook>
      <Twitter className='icons'></Twitter>
      <Instagram className='icons'></Instagram>
      <Snapchat className='icons'></Snapchat>
        
          </div>
        </div>
      
        </Col>
   
      </Row>
      
      <Row style={{marginTop:'5px'}}><div className='rows'>

          <h6 className='rowscontent'>Home</h6>
          <h6 className='rowscontent'>All Courses</h6>
          <h6 className='rowscontent'>About</h6>
          <h6 className='rowscontent'>Team</h6>
          <h6 className='rowscontent'>Pricing</h6>
          <h6 className='rowscontent'>Journal</h6>
          <h6 className='rowscontent'>Contact</h6>
          <Hamburger className='buttonn'></Hamburger>
        </div></Row>
        <Row>

        </Row>
        <Row></Row>
        <Row className='infocolumn'>
          <Col>
          <br/>
          <p className='welcometext'>Welcome to Academia</p>
          </Col>
          <Col>
          </Col>
          <Col></Col>
        </Row>
        <Row>
        <Col>
          <h1 style={{color:'white',textAlign:'left',fontWeight:'bold'}}>Best Online Education Expertise</h1>
          <br>
        </br>
          <p style={{color:'white',textAlign:'left',fontWeight:'bolder'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.

</p>
<div className='groupbutton'>
<button className='infobuttons'>GET STARTED NOW</button><button className='infobuttons'>View Course </button>
</div>
          </Col>
          <Col>
          </Col>
          <Col></Col>
        </Row>
      </Container>
     
    </div>
    <div style={{height:'500px'}}>
    <Container>
      
        
        <List/>
 
    </Container>
    
      <Stories/>
      <Container>
      <Course/>
      
      </Container>
      <Container>
        <BlogCard/>
      </Container>
      <Container style={{paddingTop:'50px'}}>
        <Pricing/>
      </Container>
      <NewsLetter/>
      <Footer/>
      <div>
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    

    </div>
    </div>
  )
 
}

export default NavBar;