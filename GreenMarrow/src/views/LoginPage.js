import React, { Component } from'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { BsFillPersonFill,BsLockFill } from "react-icons/bs";



 class Loginpage extends Component{
    constructor(props) {  
        super(props);  
  
        this.state = {  
            UserId: '',  
            PassWord: '' ,
            hidden: true
         }  
         this.toggleShow = this.toggleShow.bind(this);
         this.PassWord = this.PassWord.bind(this);  
        this.UserId = this.UserId.bind(this);  
        this.login = this.login.bind(this);  
    }  
    toggleShow() {
      this.setState({ hidden: !this.state.hidden });
    }
  
    UserId(event) {  
        this.setState({ UserId: event.target.value })  
    }  
    PassWord(event) {  
        this.setState({ PassWord: event.target.value })  
    }  
    login(event) {  
        
        let data = {UserId: this.state.UserId,PassWord: this.state.PassWord }
         fetch('https://localhost:44381/api/TmUsers/Login', {  
            crossDomain:true,
            method: 'Post',     
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(Response => Response.json(),
        console.log(Response.json))        
            .then(result => {  
                   console.log(result);  
                if (result.status === 'Success')  
                {
                 
                  this.props.history.push("/admin/dashboard"); 
                
                }
                else if(result.message === 'Invalid UserId')
                {
                  alert("enter correct Loginname") 
                }
                else if(result.message === 'Invalid Password')
                {
                  alert("enter correct Password") 
                }
                
                    
                   
            })  
    }  
    
     render()
    {
        return(
  <div className="body"  >
            <div class="container-fluid">
		<div class="row">
			<div class="col-md-12 green-bar">
			</div>
		</div>
	</div>

              
<div class="container mt-5">
	<div class="row">
<div class="col-md-6 col-12 col-lg-4 col-sm-10 mx-auto">
<div class="card shadow-lg" style={{height:350}}>

<div class="green-bar">
<label style={{fontSize:20,position:"center",color:"white"}}>Login Page</label>
</div>

<div class="card-body">
	
<div class="col-md-9 col-sm-7 col-lg-10 col-9 mx-auto">
<label style={{fontFamily:"Arial",fontSize:25,fontStyle:"bolditalic",color:"darkgreen"}}>GreenMarrow</label>
</div>
				
<div class="row">
<div class="col-md-12">
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><BsFillPersonFill/></span></div>
<input type="text" id="userid"  class="form-control"onChange={this.UserId} placeholder="Enter UserId" />


</div></div>
</div>

<div class="row">
<div class="col-md-12">
<div class="input-group mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><BsLockFill/></span></div>
<input type={this.state.hidden ? "password" : "text"} onChange={this.PassWord} placeholder="Enter Password" class="form-control"/>
</div>
</div>
</div>


<div class="row">
<div class="col-md-12">
<div class="input-group mb-3">
<div class="form-check">
<label class="form-check-label"style={{cursor:"pointer",fontsize: 14}} >
<input type="checkbox"  onClick={this.toggleShow}/>Show Password
</label>
</div></div>
</div>
</div>


<div class="row">
<div class="col-md-12">
<Button id="btnLogin"  type="button" class="btn btn-md btn-outline-success btn-block" onClick={this.login}>Login</Button>

                                       
</div>
</div>



</div> 
</div>
</div>
</div>
</div></div>
               
        )
    }
 }
 export default withRouter(Loginpage);