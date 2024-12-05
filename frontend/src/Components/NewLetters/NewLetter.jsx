import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive Ofeers On Your Email</h1>
      <p>Subscrise to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email '/>
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default NewLetter
