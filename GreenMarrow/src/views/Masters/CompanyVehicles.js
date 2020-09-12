
import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 


export default class CompanyVehicles extends Component{

   constructor(props) {  
      super(props)  
      this.state = {  
         Vehicle:[{vehType:'',gcmDesc:''}] ,
         Division:[{divCode:'',divName:''}] ,
         Region:[{regionCode:'',regionName:''}] ,
         isActive:'',vehCode:'',vehNo:'',vehType:'',makeName:'',divCode:'',regionCode:'',vehName:''
}  
this.onValueChange = this.onValueChange.bind(this);
this.SaveData=this.SaveData.bind(this);
this.vehCode = this.vehCode.bind(this);  
this.vehNo = this.vehNo.bind(this);  
this.makeName = this.makeName.bind(this);  
}  
vehCode(event) {  
   this.setState({ vehCode: event.target.value })  
 } 
 vehNo(event) {  
   this.setState({ vehNo: event.target.value })  
 } 
 makeName(event) {  
   this.setState({ makeName: event.target.value })  
 } 
VehicleChange=(event,value)=>{
   this.setState({vehType:value.gcmCode})
   this.setState({gcmDesc:value.gcmDesc})
   }
   DivisionChange=(event,value)=>{
      this.setState({divCode:value.divCode})
      this.setState({divName:value.divName})
      }
      RegionChange=(event,value)=>{
         this.setState({regionCode:value.regionCode})
         this.setState({regionName:value.regionName})
         }
         onValueChange(event) {
            this.setState({
              isActive: event.target.value
            });
          }
         
             
   
   componentDidMount() {  
   this.VehicleData();
   this.DivisionData();
   this.RegionData();
   }
   VehicleData(){
   axios.post('https://localhost:44381/api/TmVehicles/VehicleType').then(response => {  
   console.log(response.data);  
   this.setState({  
     Vehicle: response.data  
   });  
   });  
   }
   DivisionData(){
      axios.post('https://localhost:44381/api/TmVehicles/DivCode').then(response => {  
      console.log(response.data);  
      this.setState({  
        Division: response.data  
      });  
      });  
      }
      RegionData(){
         axios.post('https://localhost:44381/api/TmVehicles/Region').then(response => {  
         console.log(response.data);  
         this.setState({  
           Region: response.data  
         });  
         });  
         }
         SaveData(event) { debugger;
            let data = {
               vehCode:this.state.vehCode,
               vehNo: this.state.vehNo,  
               vehType: this.state.vehType,  
              makeName: this.state.makeName,  
              divCode: this.state.divCode,  
              regionCode: this.state.regionCode,  
              isActive: this.state.isActive   }
             fetch('https://localhost:44381/api/TmVehicles/SaveUpdate', {  
                crossDomain:true,
                method: 'Post',     
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
              })
          .then(Response => Response.json())        
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
        View(vehCode) {
          axios.post('https://localhost:44381/api/TmVehicles/ViewData?Vehiclecode='+vehCode )
            .then(response => {
      
              console.log(response.data);
              this.setState({
                vehNo: response.data[0].vehNo,
                vehType: response.data[0].vehType,
                vehName: response.data[0].vehName,
                makeName: response.data[0].makeName,
                divCode: response.data[0].divCode,
                regionCode: response.data[0].regionCode,
                divName: response.data[0].divName,
                regionName: response.data[0].regionName,
                   isActive:response.data[0].isActive,
              });
            })
          }
    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>CompanyVehicles</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Vehicle Code</InputLabel></td>
                            <td><TextField id="vehCode" value={this.state.vehCode}onChange={this.vehCode}/></td>
                            <td><button type="button"onClick={e => this.View(this.state.vehCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Vehicle Number</InputLabel> </td>
                        <td><TextField id="vehNo" value={this.state.vehNo}onChange={this.vehNo}/></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Vehicle Type</InputLabel> </td>
                      
                          <td> <TextField id="vehType" value={this.state.vehType}/></td>
<td> <Autocomplete    freeSolo  options={this.state.Vehicle} getOptionLabel={option => option.gcmDesc} className="txt2" 
id="gcmDesc"  onChange={this.VehicleChange} renderInput={params => ( <TextField {...params}label={this.state.vehName}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Make Name</InputLabel> </td>
                        <td><TextField id="formname" value={this.state.makeName}onChange={this.makeName}/></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td> <TextField id="divCode" value={this.state.divCode}/></td>
<td> <Autocomplete    freeSolo  options={this.state.Division} getOptionLabel={option => option.divName} className="txt2" 
id="divName"  onChange={this.DivisionChange} renderInput={params => ( <TextField {...params} label={this.state.divName} fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region</InputLabel> </td>
                        <td> <TextField id="regionCode" value={this.state.regionCode}/></td>
<td> <Autocomplete    freeSolo  options={this.state.Region} getOptionLabel={option => option.regionName} className="txt2" 
id="regionName"  onChange={this.RegionChange} renderInput={params => ( <TextField {...params} label={this.state.regionName} fullWidth /> )}/> </td>
                         </tr>
                         
                       </table>
                       <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
                   </tr>
                   
                   </table></div>
                    </div>
                    
                    </CardBody> 
                    <CardFooter >
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}onClick={this.SaveData}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Delete</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
 <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
</div> </CardFooter>    
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}