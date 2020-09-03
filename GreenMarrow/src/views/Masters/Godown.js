import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 

export default class Godown extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            Branch: [{branchCode:'',branchName:''}] ,
            Godown: [{goDownCode:'',goDownName:''}] ,
            GodownType: [{gcmType:'',gcmDesc:''}] ,
            Weighbridge: [{wgcmType:'',gcmDesc:''}] ,
            CostCenter: [{ccCode:'',ccName:''}] ,
            Country: [{countryCode:'',countryName:''}] ,
            State: [{stateCode:'',stateName:''}] ,
            District: [{distCode:'',distName:''}] ,
            Taluka: [{talukCode:'',talukName:''}] ,
            Town: [{cityCode:'',cityName:''}] ,
            pincode: [{pincode:''}] ,
}  
}  

BranchChange=(event,value)=>{
this.setState({branchCode:value.branchCode})
}
GodownChange=(event,value)=>{
this.setState({goDownCode:value.goDownCode})
 }
 GodownTypeChange=(event,value)=>{
    this.setState({gcmType:value.gcmType})
     }
     WeighbridgeChange=(event,value)=>{
        this.setState({wgcmType:value.gcmType})
         }
         CostCenterChange=(event,value)=>{
            this.setState({ccCode:value.ccCode})
             }
             CountryChange=(event,value)=>{
                this.setState({countryCode:value.countryCode})
                 }
                 StateChange=(event,value)=>{
                    this.setState({stateCode:value.stateCode})
                     }
                     DistrictChange=(event,value)=>{
                        this.setState({distCode:value.distCode})
                         }
                         TalukaChange=(event,value)=>{
                            this.setState({talukCode:value.talukCode})
                             }
                             TownChange=(event,value)=>{
                                this.setState({cityCode:value.cityCode})
                                 }

componentDidMount() {  
this.BranchData();
this.GodownData();
this.GodownTypeData();
this.WeighbridgeData();
this.CostCenterData();
this.CountryData();
 this.StateData();
 this.DistrictData();
 this.TalukaData();
 this.TownData();
 this.pincodeData();
 this.Delete();

}
BranchData(){
axios.post('https://localhost:44381/api/TmGodowns/Branch').then(response => {  
 console.log(response.data);  
 this.setState({  
    Branch: response.data  
 });  
 });  
 }
 GodownData(){
    axios.post('https://localhost:44381/api/TmGodowns/Godown').then(response => {  
     console.log(response.data);  
     this.setState({  
        Godown: response.data  
     });  
     });  
     }
     GodownTypeData(){
        axios.post('https://localhost:44381/api/TmGodowns/GodownType').then(response => {  
         console.log(response.data);  
         this.setState({  
            GodownType: response.data  
         });  
         });  
         }
         WeighbridgeData(){
            axios.post('https://localhost:44381/api/TmGodowns/Weighbridge').then(response => {  
             console.log(response.data);  
             this.setState({  
                Weighbridge: response.data  
             });  
             });  
             }
             CostCenterData(){
                axios.post('https://localhost:44381/api/TmGodowns/Branch').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Branch: response.data  
                 });  
                 });  
                 }
                 CountryData(){
                    axios.post('https://localhost:44381/api/TmGodowns/Country').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                        Country: response.data  
                     });  
                     });  
                     }
                     StateData(){
                        axios.post('https://localhost:44381/api/TmGodowns/State').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            State: response.data  
                         });  
                         });  
                         }
                         DistrictData(){
                            axios.post('https://localhost:44381/api/TmGodowns/District').then(response => {  
                             console.log(response.data);  
                             this.setState({  
                                District: response.data  
                             });  
                             });  
                             }
                             TalukaData(){
                                axios.post('https://localhost:44381/api/TmGodowns/Taluka').then(response => {  
                                 console.log(response.data);  
                                 this.setState({  
                                    Taluka: response.data  
                                 });  
                                 });  
                                 }
                                 TownData(){
                                    axios.post('https://localhost:44381/api/TmGodowns/Town').then(response => {  
                                     console.log(response.data);  
                                     this.setState({  
                                        Town: response.data  
                                     });  
                                     });  
                                     }
                                     pincodeData(){
                                        axios.post('https://localhost:44381/api/TmGodowns/pincode').then(response => {  
                                         console.log(response.data);  
                                         this.setState({  
                                            pincode: response.data  
                                         });  
                                         });  
                                         }
                                         Delete(goDownCode){
                                          axios.delete('https://localhost:44381/api/TmGodowns/' + goDownCode)
                                          .then(json => {  
                                               alert('Record deleted successfully!!');  
                                              this.props.history.push(""); 
                                              })  
                                             }


    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40}} >
                <h4>GODOWN</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                                       <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Godown</InputLabel> </td>
                        <td> <TextField id="goDownCode" value={this.state.goDownCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Godown} getOptionLabel={option => option.goDownName} className="txt2" 
 id="goDownName"  onChange={this.GodownChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        <td><button type="button"onClick={e => this.View(this.state.goDownCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td> <TextField id="branchCode" value={this.state.branchCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
 id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Godown Type</InputLabel> </td>
                        <td> <TextField id="gcmType" value={this.state.gcmType}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GodownType} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="gcmDesc"  onChange={this.GodownTypeChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Weigh Bridge</InputLabel> </td>
                        <td> <TextField id="wgcmType" value={this.state.wgcmType}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Weighbridge} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="wgcmDesc"  onChange={this.WeighbridgeChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Cost Center</InputLabel> </td>
                        <td> <TextField id="ccCode" value={this.state.ccCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenter} getOptionLabel={option => option.ccName} className="txt2" 
 id="ccName"  onChange={this.CostCenterChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                   </table>
                  
                   <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:55}}>
                            <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                            <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                            <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                            </RadioGroup></td>
                    </tr>
                    </table>
                    </div>
                    </div>
                    <div class="row" style={{borderStyle:"ridge"}}>
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>DoorNo</InputLabel> </td>
                        <td><TextField id="itemname" label="doorno" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Country</InputLabel> </td>
                        <td> <TextField id="countryCode" value={this.state.countryCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.countryName} className="txt2" 
 id="countryName"  onChange={this.CountryChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Street</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
 id="stateName"  onChange={this.StateChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PhoneNo</InputLabel> </td>
                        <td><TextField id="itemname" label="phoneno" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>District</InputLabel> </td>
                        <td> <TextField id="distCode" value={this.state.distCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.District} getOptionLabel={option => option.distName} className="txt2" 
 id="distName"  onChange={this.DistrictChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ContactPerson</InputLabel> </td>
                        <td><TextField id="itemname" label="contactperson" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tlk/Mandal</InputLabel> </td>
                        <td> <TextField id="talukCode" value={this.state.talukCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Taluka} getOptionLabel={option => option.talukName} className="txt2" 
 id="talukName"  onChange={this.TalukaChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Fax No</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>City/Town</InputLabel> </td>
                        <td> <TextField id="cityCode" value={this.state.cityCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Town} getOptionLabel={option => option.cityName} className="txt2" 
 id="cityName"  onChange={this.TownChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Mobile No</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PinCode</InputLabel> </td>
                        <td> <Autocomplete    freeSolo  options={this.state.pincode} getOptionLabel={option => option.pincode} 
 id="pincode"  renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        
                    </tr>
                    </table>
                       
                    </div> </CardBody> 
                    <CardFooter >
       <div class="btn-group " style={{position: "absolute",right: 0}}>
    <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.goDownCode)}>Delete</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
    <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
  </div>
            </CardFooter>
                   
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}