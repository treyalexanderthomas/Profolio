import React, {useState, useEffect} from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
import { Route } from 'react-router'
import Countries from './components/countries.js'
import Navigation from './components/navBr'

export default function form(){

const [formData,setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    conEmail: "",
    password: "",
    conPass: "",
    terms: false,
    id:Date.now()
})

const [errors,setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    conEmail: "",
    password: "",
    conPass: "",
    terms: ""
})

const [buttonDisable, setButtonDisable] = useState(true)

const handleChange = (e) => {
    e.persist()
        setformData({
            ...formData,
             [e.target.name]: e.target.value
            })
    }

    const yupRules = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Please enter a valid email").required(),
        conEmail: yup.string().email("Please enter a valid email").required(),
        password: yup.string().required("Password is required").min(10, "Must be at least 10 characters"),
        conPass: yup.string().required("Password is required").min(10, "Must be at least 10 characters"),
        country: yup.string().oneOf([countries]).required("Please select a country"),
        terms: yup.boolean().oneOf([true], "Please agree to the terms")
    })

    const Validation = (e) => {
        yup
        .reach(yupRules, e.target.name)
        .validate(e.target.name === "terms" ? e.target.checked : e.target.name)
        .then((valid) =>{
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        })
        .catch((err) => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            })
        })

        useEffect(() => {
            Validation.isValid(formData)
            .then((isValid) =>{
                setButtonDisable(!isValid)
            })
        }, [formData])

    const submit = () => {
        e.prevent.default()
        validatation.validate(formData).then(() => {
                axios.post('https://reqres.in/api/users', formData).then((res) => {
                    console.log("This is your data", res.data)
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        conEmail: "",
                        password: "",
                        conPass: "",
                        terms: false,
                        id:Date.now()  
                    })
              })
              .catch(err => console.log('This is your post error', err.message))
        })
    }

    return(
        <>
        <Route excat path='/signUp'>
            <Navigation />
        <Form style={{margin: '5%'}} onSubmit={submit}>

            <h2>Become a fan!</h2>

            <FormGroup>
                What's your first name?
                <Input 
                type='text' 
                name='firstName' 
                placeholder="What's your first name..." 
                value={formData.firstName} 
                onChange={handleChange}/>
                {errors.name.length > 0 ? (
                <p className="errors">{errrors.firstName}</p>
                ): null }
            </FormGroup>

            <FormGroup>
                What's your last Name?
                <Input 
                type='text' 
                name='lastName' 
                placeholder="What's your last name..." 
                value={formData.lastName} 
                onChange={handleChange}/>
                {errors.lastName.length > 0 ? (
                    <p className="errors">{errors.lastName}</p>
                ): null}
            </FormGroup>

                    <FormGroup>
                        What's your email?
                        <Input 
                        type='email' 
                        name='email' 
                        placeholder="What's your email..." 
                        value={formData.email} 
                        onChange={handleChange}/>
                        {errors.email.length > 0 ? (
                            <p className="errors">{errors.email}</p>
                        ): null}
                    </FormGroup>

                    <FormGroup>
                        Confirm your email
                        <Input 
                        type='email' 
                        name='email' 
                        placeholder="Confirm your email..." 
                        value={formData.conEmail} 
                        onChange={handleChange}/>
                        {errors.conEmail.length > 0 ? (
                            <p className="errors">{errors.conEmail}</p>
                        ): null}
                    </FormGroup>

                    <FormGroup>
                        Create a password
                        <Input 
                        type='password' 
                        name='password'
                        placeholder="Please create a password..." 
                        value={formData.password} 
                        onChange={handleChange}/>
                         {errors.password.length > 0 ? (
                            <p className="errors">{errors.password}</p>
                        ): null}                       
                    </FormGroup>

                    <FormGroup>
                        Confirm your password
                        <Input 
                        type='password' 
                        name='password'
                        placeholder="Confirm your email..." 
                        value={formData.conPass} 
                        onChange={handleChange}/>
                         {errors.conPass.length > 0 ? (
                            <p className="errors">{errors.conPass}</p>
                        ): null}                       
                    </FormGroup>

                
                <FormGroup>
                    <Countries>
                <legend>Country</legend>
                <Input type='select' name="country" value={formData.country} onChange={handleChange} >
                    {country.map((country, i) => {
                        return <option key={i} value={country.name}>{country.name}</option>
                        })}
                </Input>
                    </Countries>
                </FormGroup>

                <FormGroup>
                        Terms & Conditions
                        <Input 
                        name= "terms"
                        type="checkbox"
                        value={formData.terms}
                        onChange={handleChanges}
                        />
                        {errors.terms.length > 0 ? (
                            <p className="errors">{errors.terms}</p>
                        ): null}                            
                </FormGroup>
                
            

            <Button buttonDisable={buttonDisable}>
                Submit
            </Button>   
        </Form>
        </Route>
        </>
        )
    }
}
