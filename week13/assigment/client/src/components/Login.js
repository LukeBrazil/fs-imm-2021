import React, { useState } from 'react'

export default function Login() {

    const [credentials, setCredentails] = useState({})

    const handleChange = (e) => {
        setCredentails({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {
        fetch("http://localhost:8080/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                localStorage.setItem('jsonwebtoken', result.token)
            }
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type='text' name = 'username'onChange = {handleChange} placeholder='username'></input>
            <input type='password' name = 'password' onChange = {handleChange} placeholder='password'></input>
            <button onClick = {login}>Login</button>
        </div>
    )
}
