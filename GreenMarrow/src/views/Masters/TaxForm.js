import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import { Button} from 'react-bootstrap';



export default class TaxForm extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
          Tax: [{taxId:'',gcmDesc:''}] ,
          Form:[{formName:''}],
          State: [{stateCode:'',stateName:''}] ,
          gcmDesc:'', stateName:'',  formName:'', taxId:'', stateCode:'', consForm:'', isActive:'',
          
  }  
  this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  
this.formName = this.formName.bind(this);  
this.Cons = this.Cons.bind(this);  
this.SaveData = this.SaveData.bind(this);  
  }  
  onValueChange(event) {
    this.setState({
      isActive: event.target.value
    });
  }
  chn(event) {  
    this.setState({ formName: event.target.value })  
  } 
  formName(event) {  
    this.setState({ formName: event.target.value })  
  } 
  Cons(event) {  
    this.setState({ consForm: event.target.value })  
  } 
  StateChange=(event,value)=>{
    this.setState({stateCode:value.stateCode})
    this.setState({stateName:value.stateName})
    }
  TaxChange=(event,value)=>{
  this.setState({taxId:value.gcmCode})
  this.setState({gcmDesc:value.gcmDesc})
  }
  FormChange=(event,value)=>{
     this.setState({formName:value.formName})
      }
      
  
  
  componentDidMount() {  
  this.FormData();
  this.TaxData();
  this.StateData();
  
  }
  
  StateData(){
    axios.post('https://localhost:44381/api/TmTaxforms/State').then(response => {  
    console.log(response.data);  
    this.setState({  
        State: response.data  
    });  
    });  
    }
  FormData(){
  axios.post('https://localhost:44381/api/TmTaxforms/Form').then(response => {  
  console.log(response.data);  
  this.setState({  
      Form: response.data  
  });  
  });  
  }
  TaxData(){
      axios.post('https://localhost:44381/api/TmTaxforms/Tax').then(response => {  
      console.log(response.data);  
      this.setState({  
          Tax: response.data  
      });  
      });  
      }
      View(formName) {
        axios.post('https://localhost:44381/api/TmTaxforms/ViewData?formName=' + formName)
          .then(response => {
    
            console.log(response.data);
            this.setState({
                taxId: response.data[0].taxId,
                gcmDesc: response.data[0].gcmDesc,
                stateCode: response.data[0].stateCode,
                stateName: response.data[0].stateName,
                consForm:response.data[0].consForm,
                isActive:response.data[0].isActive,
            });
          })
      }
      SaveData(event) { debugger;
        
        let data = {
            formName:this.state.formName,
            taxId: this.state.taxId,  
            gcmDesc:this.state.gcmDesc,
            stateCode: this.state.stateCode,  
            stateName: this.state.stateName,  
            consForm: this.state.consForm,
          isActive: this.state.isActive   }
         fetch('https://localhost:44381/api/TmTaxforms/SaveUpdate', {  
            crossDomain:true,
            method: 'Post',     
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data),
            
        })
     
          
      .then(Response => Response.json(),
      console.log(JSON.stringify(data)))        
      .then(result => {  
             console.log(result);  
             
             console.log(this.state.isActive)
             if (result.status === 'SUCCESSFULL')  
             {
              alert("SAVED SUCCESSFULLY")
              
             }
             else if(result.status ==='Conflict')
             {
               alert("Record Already Exist") 
             }
             else if(result.status ==='NotFound')
             {
               alert("Record Not Found") 
             }
             else if(result.status ==='Not Allowed')
             {
               alert("Update Not Allowed") 
             }
             else if(result.status ==='Updated')
             {
               alert("Record Updated Sucessfull") 
             }
             
              debugger;
      })  
    }  

    render(){
        return(
            <div class="container" style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card >
              <CardHeader color="primary" style={{height:40}}>
                <h4>TAX FORM</h4>
                 </CardHeader>
                 <CardBody >
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Form Name</InputLabel></td>
                         
                           <td> <Autocomplete    freeSolo  options={this.state.Form} getOptionLabel={option => option.formName}  
 id="formName"  onChange={this.FormChange} renderInput={params => ( <TextField {...params}onChange={this.chn} label={this.state.formName}  fullWidth /> )}/> </td>
                              <td><TextField  type="hidden"  id="formName" value={this.state.formName}/></td>
                              <td> <Button type="button" onClick={e => this.View(this.state.formName)} >View</Button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tax ID</InputLabel> </td>
                        <td> <TextField id="taxId" value={this.state.taxId}/></td>
                           <td><TextField  type="hidden"  id="gcmDesc" value={this.state.gcmDesc}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Tax} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="gcmDesc"  onChange={this.TaxChange} renderInput={params => ( <TextField {...params} label={this.state.gcmDesc}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
                           <td><TextField  type="hidden"  id="stateName" value={this.state.stateName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
 id="taxIdName"  onChange={this.StateChange} renderInput={params => ( <TextField {...params} label={this.state.stateName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Consolidate Form</InputLabel> </td>
                        <td><TextField id="itemtype" value={this.state.consForm} onChange={this.Cons} /></td>
                        </tr>
                    </table>
                   
                   <table>
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
                   </tr>
                   </table>
                   </div>
                    </div></CardBody> 
                    <CardFooter >
             <div  style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success " onClick={this.SaveData}>Save</button>
 <button type="button" class="btn btn-success">Delete</button>
 <button type="button" class="btn btn-success">Clear</button>
 <button type="button" class="btn btn-success">Print</button>
 <button type="button" class="btn btn-success"  >Exit</button>
</div> </CardFooter>  
            
                    
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}