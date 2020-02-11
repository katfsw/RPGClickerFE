import React from 'react'
import { validateAll } from 'indicative';

class LoginForm extends React.Component{
  constructor() {
    super()
    
      this.state = {
      name:'',
      email:'',
      password:'',
      password_confirmation:''
  }
}
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("State", this.state)

    const data = this.state;

    const rules = {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string|min:6|confirmed'
    }

    validateAll(data, rules)
    .then(()=>{
      console.log("Success!")
    })
    .catch(err=>{
      console.log(err)
    })
  }

render(){
  return(
      <div className="registerform" onSubmit={this.handleSubmit}>
        <input type="text" placeHolder="Username" name="name" onChange={this.handleInputChange} />
        <input type="password" placeHolder="Password" name="password" onChange={this.handleInputChange}/>
        <input type="submit" value="Login" className="submitbutton"/>
      </div>
    )
  }
}

export default LoginForm