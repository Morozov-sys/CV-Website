import React from 'react'
import '../Footer.css'
import '../../App.css'
import Button from '../Button'
import {BrowserRouter, Link} from 'react-router-dom'

const Skills = () => {
    return (
        <div className='skills'>
        <h1>HELLO</h1>
           <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
        </div>
            
    
    )
}

export default Skills
