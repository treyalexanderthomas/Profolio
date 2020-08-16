import React from 'react'
import Search from './components/searchBar.js'
import { Button, Card, Navbar } from 'reactstrap'
import { Link } from 'react-router-dom'
import './components/styles.css'

export default function Navigation(){
    return
    <Navbar>
        <Card>
        <Search /> 
        <Link to="/">
        <Button className="navBtns">Home</Button>
        </Link>
        <Link to="/aboutMe">
        <Button className="navBtns">About me</Button>
        </Link>
        <Link to="/Education">
        <Button className="navBtns">Education</Button>
        </Link>
        <Link to="/Projects">
        <Button className="navBtns">Projects</Button>
        </Link>
        <Link to="/Contact">
        <Button className="navBtns">Contact</Button>
        </Link>
        <Link to="/signUpForm">
        <Button className="signUp">Become a Fan!</Button>
        </Link>
        </Card>
    </Navbar>
}