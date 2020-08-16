import React from 'react'
import ReactDOM from 'react-router-dom'
import Navigation from './components/navBar'
import AboutMe from './components/aboutMe'
import Projects from './component/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import { Card, CardImg, CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import './components/styles.css'
import Education from './components/Education.js'

export default function Parent(){
  return (
    <Route excat path='/'>
    {/* Hook Section */} 
    <Card color='primary'>      
      <CardImg src={require('./public/1.jpg')} style={{width:'95%', margin: '0 auto'}}/>
      <CardImgOverlay>
        <CardTitle>Hey, My Name is Trey Thomas</CardTitle>
        <CardSubtitle>I'm a Full Stack Web Developer/Front-End Specialized</CardSubtitle>
      </CardImgOverlay>
    </Card>
    </Route>
     {/* Navigation */}
    <Navigation />   
    {/*  */}
    <Projects />
    {/*  */}
    <AboutMe />
    {/*  */}
    <Education />
    {/* Contact */}
    <Contact />

      
  );
}

