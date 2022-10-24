import React from 'react'

export default function Login() {
  return (
    <div className='container'>
      <form>
        <div>
          <label>Email:</label>
          <input type='email' />
        </div>

        <div>
          <label>Password:</label>
          <input type='password' />
        </div>

        <button>Login</button>
      </form>
    </div>
  )
}
