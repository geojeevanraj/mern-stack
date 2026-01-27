import React from 'react'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Profile from '../components/Profile'
const Home = () => {
  return (
    <>
    <Parent />
    <State/>
    <Form />
    <Profile name = "Geo" age = {20} skills = {["HTML","CSS","JS","ML"]} /> 
    </>
  )
}

export default Home