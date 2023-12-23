import React, { useState } from 'react'


const MoreForms = () => {
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const [errorFirst, setErrorFirst]=useState("")
    const [errorLast, setErrorLast]=useState("")
    const [errorEmail, setErrorEmail]=useState("")
    const [errorPassword, setErrorPassword]=useState("")
    const [errorConfirmPassword, setErrorConfirmPassword]=useState("")
    

    return (
        <div>
            <form onSubmit={(e) => formHandler(e)}>
            <label>First Name</label>
            <input type="text" onChange={(e)=> {setFirstName(e.target.value) 
            if (firstName.length<2){
                setErrorFirst("First Name must be more than 2 charecters!")
            } else{
                setErrorFirst("")
            }
            }
            }/>
            <label>Last Name</label>
            <input type="text" onChange={(e)=> {setLastName(e.target.value)
            if (lastName.length<2){
                setErrorLast("Last Name should take a least 3 characters!")
            } else{
                setErrorLast("")
            }
            }
            } />
            <label>Email</label>
            <input type="text" onChange={(e)=> {setEmail(e.target.value)
            if (email.length<2){
                setErrorEmail("Email must take 2 characters")
            } else {
                setErrorEmail("")
            }
            }
            } />
            <label>Password</label>
            <input type="password" onChange={(e)=> {setPassword(e.target.value)
            if (password<8){
                setErrorPassword("Password must take at least 8 characters!")
            }else{
                setErrorPassword("")
            }
            }
            } />
            <label>Confirm Password</label>
            <input type="password" onChange={(e)=> {setConfirmPassword(e.target.value)
            if (confirmPassword != password){
                setErrorConfirmPassword("Confirm Password must match the password")
            } else {
                setErrorConfirmPassword("")
            }
            }
            }/>
            </form>

            <div>
                First Name: {errorFirst}
            </div> 
            <div>
                Last Name:{errorLast}
            </div>
            <div>
                Email:{errorEmail}
            </div>
            <div>
                Password:{errorPassword}
            </div>
            <div>
                Confirm Password:{errorConfirmPassword}
            </div>
        </div>
    )
}

export default MoreForms