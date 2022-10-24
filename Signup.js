import { Axios } from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Signup() {

  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })

  function handleChange(e) {
    console.log(formData)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  async function submitData(e) {
    e.preventDefault();

    const response = await fetch('/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const body = await response.json() 
    console.log(body.response)
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <div>
          <label>First Name:</label>
          <input
            type='text'
            placeholder='Zeeshan'
            name='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type='text'
            placeholder='Ahmad'
            name='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type='email'
            placeholder='ahmadzee161@gmail.com'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type='password'
            placeholder='YourPassword'
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <button>Signup</button>
      </form>
    </div>
  )
}
