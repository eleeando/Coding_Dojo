import React, { useState } from 'react'
import Display from './Display'

const Form = () => {
    const [firstName, firstNameState] = useState("")
    const [lastName, lastNameState] = useState("")
    const [email, emailState] = useState("")
    const [passWord, passWordState] = useState("")
    const [confirmPassWord, confirmPassWordState] = useState("")
    const [user, setUser] = useState({})



    const createUser = (e) => {
        e.preventDefault();
        const mynewUser = { firstName, lastName, email, passWord, confirmPassWord };
        setUser(mynewUser)
        console.log("Welcome", mynewUser);
    }
    return (
        <div className='first'>
            <form onSubmit={createUser}>
                <label >First Name</label>
                <input type="text" onChange={(e) => firstNameState(e.target.value)} value={firstName} />
                <label >Last Name</label>
                <input type="text" onChange={(e) => lastNameState(e.target.value)} value={lastName} />
                <label>Email</label>
                <input type="text" onChange={(e) => emailState(e.target.value)} value={email} />
                <label>Password</label>
                <input type="password" onChange={(e) => passWordState(e.target.value)} value={passWord} />
                <label >Confirm Password</label>
                <input type="password" onChange={(e) => confirmPassWordState(e.target.value)} value={confirmPassWord} />
                <button>Submit</button>
            </form>

            <legend>
                <div>
                    <h1>Displays my form</h1>
                    <Display user={user} />

                </div>

            </legend>
        </div>



    )
}

export default Form