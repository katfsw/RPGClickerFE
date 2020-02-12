import React, {useState} from "react";
import axios from 'axios';

const RegisterForm = (props) => {

    const [register, setRegister] = useState({ username:"", password:""})

    const handleInputChange = (e) => {
       setRegister({ ...register, [e.target.name]: e.target.value });
        console.log(register)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login State", register)

        axios
        .post('https://cors-anywhere.herokuapp.com/https://rpgclicker.herokuapp.com/api/auth/register', register)
        .then(res=>{
            console.log(res)
            props.history.push('/login')
        })
        .catch(err=>{
            console.log(err)
        })
        }
    

   return(
     
    <div className="registerform" onSubmit={handleSubmit}>
        <form>
            <input type="text" placeHolder="Username" name="username" onChange={handleInputChange} />
            <input type="email" placeHolder="Email Address" onChange={handleInputChange}/>
            <input type="password" placeHolder="Password" name="password" onChange={handleInputChange}/>
            {/* <input type="password" placeHolder="Confirm Password" onChange={handleInputChange}/> */}
            <input type="submit" value="Register" className="submitbutton"/>
        </form>
  </div>
   )
};

export default RegisterForm;