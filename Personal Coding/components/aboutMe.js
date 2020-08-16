import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle, CardImgOverlay } from 'reactstrap'
import './components/styles.css'
import Navigation from './component/navBar'
import { Route, Link } from 'react-router-dom'

export default function AboutMe(){
    return(
        <Route excat path="/aboutMe">
        <Navigation />
        <CardImg className="proPic"></CardImg>      
        <Card>
            <CardTitle className="mainTitle">About Me</CardTitle>    
            <CardSubtitle className="subTitle">Trey Thomas</CardSubtitle>
            <CardSubtitle className="subTitle">Wanna-be Front End Developer</CardSubtitle>
            <p className="paragraph">idhgiurhgiuerhiueghieurhg</p>
        <Button className="resume">Download printable resume</Button>               
        </Card>
        </Route>
    )
}