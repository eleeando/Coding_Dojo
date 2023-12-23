import React from 'react'
import Form from './Form'

const Display = ({user}) => {
  return (
    <div>
        <div>
            <p>First Name: {user.firstName} </p>
        </div>
        <div>
            <p>Last Name: {user.lastName} </p>
        </div>
        <div>
            <p>Email: {user.email} </p>
        </div>
        <div>
            <p>Password: {user.passWord} </p>
        </div>
        <div>
            <p>Confirm Password: {user.confirmPassWord} </p>
        </div>

    </div>
  )
}

export default Display