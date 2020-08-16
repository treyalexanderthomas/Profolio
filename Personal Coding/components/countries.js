import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup'

export default function Countries(){

const [countries,setCountries] = useState([])

useEffect(() => {
    axios
        .get(`https://restcountries.eu/rest/v2/all`)
        .then(response => {
            setCountries(response.data);
        })
        .catch(error => {
            console.log('No go', error.message);
        });
}, []);

}

