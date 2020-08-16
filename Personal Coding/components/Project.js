import React from 'react'
import { Card, CardImg, CardTitle, CardSubtitle} from 'reactstrap'
import './components/styles.css'
import { Route } from 'react-router-dom'
import Navigation from './components/navBar'


export default function Project(){
    
    return(
        <Route excat path="/Projects">
        <Navigation />
        <Card>
            <CardImg></CardImg>
            <CardTitle className="proTitle">
                <a href>Project 1</a>
            </CardTitle>
            <p>Things about this project</p>
        </Card>

        <Card>
            <CardImg></CardImg>
            <CardTitle className="proTitle">
                <a href>Project 2</a>
            </CardTitle>            
            <p>Things about this project</p>
        </Card>
        
        <Card>
            <CardImg></CardImg>
            <CardTitle className="proTitle">
                <a href>Project 3</a>
            </CardTitle>           
            <p>Things about this project</p>
        </Card>

        <Card>
            <CardImg></CardImg>
            <CardTitle className="proTitle">
                <a href>Project 4</a>
            </CardTitle>           
            <p>Things about this project</p>
        </Card>

         <Card>
             <CardImg></CardImg>
         <CardTitle className="proTitle">
             <a href>Project 5</a>
         </CardTitle>         
         <p>Things about this project</p>
     </Card>
     
        <Card>
            <CardTitle className="">
                <a href="https://github.com/treyalexanderthomas">Github</a>
            </CardTitle>
        </Card>
        </Route>
    )
}