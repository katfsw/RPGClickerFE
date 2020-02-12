import React, {useState} from "react";
import axios from 'axios';

const LoginForm = (props) => {

    const [login, setLogin] = useState({ username:"", password:""})

    const handleInputChange = (e) => {
       setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login State", login)

        axios
        .post('https://cors-anywhere.herokuapp.com/https://rpgclicker.herokuapp.com/api/auth/login', login)
        .then(res=>{
          console.log(res)
          props.history.push('/dashboard')
        })
        .catch(err=>{
          console.log(err)
        })
        }
    

   return(
     
    <div className="registerform" >
      <form onSubmit={handleSubmit}>
      <input type="text" placeHolder="Username" name="username" onChange={handleInputChange} />
      <input type="password" placeHolder="Password" name="password" onChange={handleInputChange}/>
      <input type="submit" value="Login" className="submitbutton"/>
      </form>
    </div>
   )
};

export default LoginForm;