import React from 'react'
import { useState } from "react";
import { navigate } from "gatsby";
import "./login.css"

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let submit = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      let res = await fetch("http://20.114.244.229:1337/auth/local", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          identifier: email,
          password: password
        }),
      });
      let resJson = await res.json();
      console.log("response==>", resJson);
      console.log("response token==>", resJson.jwt);
      if (resJson.jwt && resJson.jwt.length > 0) {
        console.log("token-->", resJson.jwt)
        window.localStorage.setItem('gatsbyUser', JSON.stringify(resJson.jwt))
        navigate('/app/home')
        setEmail('');
        setPassword('');

      } else {
        alert("wrong input")
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (

    <div className="main_login">
      <div className='reg'>
        <button type="submit">Register</button>
      </div>
      <form className="frm" onSubmit={submit}>
        <div className='frm_data'>
          <div className='field'>
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='butn'>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>

  )
}
