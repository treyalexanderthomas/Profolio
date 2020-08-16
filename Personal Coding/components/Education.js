import React from 'react'
import Navigation from './components/navBar'
import { Card, CardTitle, CardSubtitle } from 'reactstrap'
import { Route } from 'react-router-dom'
import './components/styles.css'

export default function Education(){

    return(
        <Route exact path="/Education">
        <Navigation />

        <Card>
            <CardTitle className="mainTitle">Education</CardTitle>
        </Card>

        <Card>
            <CardTitle className="secTitle">Lambda</CardTitle>
                <CardSubtitle className="subTitle">Aug 2020-Aug 2020</CardSubtitle>
                <p className="paragraph">suigfhriuhiurhg</p>
        </Card>

        <Card>
            <CardTitle className="secTitle">Front Range</CardTitle>
                <CardSubtitle className="subTitle"></CardSubtitle>
                <p className="paragraph">sfdiuhifudshbiuf</p>
        </Card>

        <Card>
            <CardTitle className="secTitle">Fossil Ridge High School</CardTitle>
            <CardSubtitle className="subTitle"></CardSubtitle>           
                <p className="paragraph">fsidhiughwiurh</p>
        </Card>
        </Route>
    )
}
