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

export default class PlaceMaster extends Component{
        constructor(props) {  
                super(props)  
                this.state = {  
                    Country: [{countryCode:'',countryName:'',currency:'',currencyName:''}] ,
                    Place: [{placeCode:'',placeName:''}] ,
                    State: [{stateCode:'',stateName:''}] ,
                    District: [{distCode:'',distName:''}] ,
                    Taluk: [{talukCode:'',talukName:''}] ,
                    City: [{cityCode:'',cityName:''}] ,
                    Pincode: [{pinCode:'',postOff:''}] ,
                    placeType:'', placeCode:'', placeName:'', countryCode:'', countryName:'', stateCode:'', stateName:'', distCode:'', distName:'',
                    talukCode:'',  talukName:'', cityCode:'', cityName:'', pinCode:'', postOff:'', slNo:'', currency:'', currencyName:'', isActive:'', stdCode:'',
        }  
        this.onValueChange = this.onValueChange.bind(this);
        this.placeTypeChange = this.placeTypeChange.bind(this);
        this.chn = this.chn.bind(this);  
        this.placeCode=this.placeCode.bind(this);
        this.stdCodechg=this.stdCodechg.bind(this);
        this.SaveData=this.SaveData.bind(this);
        }  
        placeTypeChange(event) {
                this.setState({
                  placeType: event.target.value
                });
              }
        onValueChange(event) {
                this.setState({
                  isActive: event.target.value
                });
              }
              chn(event){
                this.setState({placeName:event.target.value})
              } 
              placeCode(event){
               this.setState({placeCode:event.target.value})
             } 
             stdCodechg(event){
               this.setState({stdCode:event.target.value})
             } 
        
        CountryChange=(event,value)=>{
        this.setState({countryCode:value.countryCode})
        this.setState({countryName:value.countryName})
        }
        currencyChange=(event,value)=>{
            this.setState({currency:value.currency})
            this.setState({currencyName:value.currencyDesc})
            }
            PlaceChange=(event,value)=>{
                this.setState({placeCode:value.placeCode})
                this.setState({placeName:value.placeName})
                }
                StateChange=(event,value)=>{
                        this.setState({stateCode:value.stateCode})
                        this.setState({stateName:value.stateName})
                        }
                        DistrictChange=(event,value)=>{
                                this.setState({distCode:value.districtCode})
                                this.setState({distName:value.districtName})
                                }
                                TalukChange=(event,value)=>{
                                        this.setState({talukCode:value.talukCode})
                                        this.setState({talukName:value.talukName})
                                        }
                                        CityChange=(event,value)=>{
                                                this.setState({cityCode:value.cityCode})
                                                this.setState({cityName:value.cityName})
                                                }
                                                PincodeChange=(event,value)=>{
                                                        this.setState({pinCode:value.pinCode})
                                                        this.setState({postOff:value.postOff})
                                                        }
        componentDidMount() {  
        this.CountryData();
        this.PlaceData();
        this.StateData();
        this.DistrictData();
        this.TalukData();
        this.CityData();
        this.PincodeData();
        }
        CountryData(){
        axios.post('https://localhost:44381/api/TmPlaces/CountryCurrency').then(response => {  
         console.log(response.data);  
         this.setState({  
            Country: response.data  
         });  
         });  
         }
         PlaceData(){
                axios.post('https://localhost:44381/api/TmPlaces/Place').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Place: response.data  
                 });  
                 });  
                 }
                 StateData(){
                        axios.post('https://localhost:44381/api/TmPlaces/State').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            State: response.data  
                         });  
                         });  
                         }
                         DistrictData(){
                                axios.post('https://localhost:44381/api/TmPlaces/District').then(response => {  
                                 console.log(response.data);  
                                 this.setState({  
                                    District: response.data  
                                 });  
                                 });  
                                }
                                TalukData(){
                                        axios.post('https://localhost:44381/api/TmPlaces/Taluk').then(response => {  
                                         console.log(response.data);  
                                         this.setState({  
                                            Taluk: response.data  
                                         });  
                                         });  
                                         }
                                         CityData(){
                                                axios.post('https://localhost:44381/api/TmPlaces/City').then(response => {  
                                                 console.log(response.data);  
                                                 this.setState({  
                                                    City: response.data  
                                                 });  
                                                 });  
                                                 }
                                                 PincodeData(){
                                                        axios.post('https://localhost:44381/api/TmPlaces/Pincode').then(response => {  
                                                         console.log(response.data);  
                                                         this.setState({  
                                                            Pincode: response.data  
                                                         });  
                                                         });  
                                                         }
                                                         View(placeCode) {
                                                                axios.post('https://localhost:44381/api/TmPlaces/ViewData?placecode='+placeCode )
                                                                  .then(response => {
                                                                 
                                                                    console.log(response.data);
                                                                    this.setState({
                                                                        placeType: response.data[0].placeType,
                                                                        countryCode: response.data[0].countryCode,
                                                                        countryName: response.data[0].countryName,
                                                                        stateCode: response.data[0].stateCode,
                                                                        stateName: response.data[0].stateName,
                                                                        distCode: response.data[0].distCode,
                                                                        distName: response.data[0].distName,
                                                                        prtccName: response.data[0].prtccName,
                                                                        talukCode: response.data[0].talukCode,
                                                                        talukName: response.data[0].talukName,
                                                                        cityCode: response.data[0].cityCode,
                                                                        cityName: response.data[0].cityName,
                                                                        pinCode: response.data[0].pinCode,
                                                                        postOff: response.data[0].postOff,
                                                                        currency: response.data[0].currency,
                                                                        currencyName: response.data[0].currencyName,
                                                                        stdCode: response.data[0].stdCode,
                                                                        slNo: response.data[0].slNo,
                                                                         isActive:response.data[0].isActive,
                                                                    });
                                                                  })
                                                              }
                                                              SaveData(event) { debugger;
                                                               event.preventDefault();
                                                               let data = {
                                                                  placeType:this.state.placeType,
                                                                  placeCode: this.state.placeCode,  
                                                                  placeName: this.state.placeName,  
                                                                  countryCode: this.state.countryCode,
                                                                  countryName:this.state.countryName,
                                                                  stateCode:this.state.stateCode,
                                                                  stateName:this.state.stateName,
                                                                  distCode: this.state.distCode,  
                                                                  distName: this.state.distName,  
                                                                  talukCode: this.state.talukCode,
                                                                  talukName:this.state.talukName,
                                                                  cityCode:this.state.cityCode,
                                                               cityName:this.state.cityName,
                                                                 pinCode: this.state.pinCode,  
                                                                 postOff: this.state.postOff,  
                                                                 currency: this.state.currency,
                                                                 stdCode:this.state.stdCode,

                                                                 isActive: this.state.isActive   }
                                                                fetch('https://localhost:44381/api/TmPlaces/SaveUpdate', {  
                                                                   crossDomain:true,
                                                                   method: 'POST',     
                                                                   headers: {'Content-Type':'application/json',
                                                                   'Accept': 'application/json'},
                                                                   body: JSON.stringify(data)
                                                                 
                                                                 }
                                                                   )
                                                               
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
            <div class="container"style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40}} >
                <h4>Place Master</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Place Type&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                        <td>  <div class="form-check-inline">
                       <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="O"  checked={this.state.placeType === "O"}  onChange={this.placeTypeChange}/>Country&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="S"  checked={this.state.placeType === "S"}  onChange={this.placeTypeChange}/>State&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="D"  checked={this.state.placeType === "D"}  onChange={this.placeTypeChange}/>District&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="M"  checked={this.state.placeType === "M"}  onChange={this.placeTypeChange}/>Taluk/Mandal&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="T"  checked={this.state.placeType === "T"}  onChange={this.placeTypeChange}/>City/Town&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="Z"  checked={this.state.placeType === "Z"}  onChange={this.placeTypeChange}/>Pincode&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="J"  checked={this.state.placeType === "J"}  onChange={this.placeTypeChange}/>STD</label> </div>
            </div></td>
                    </tr></table>
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Place Code&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td> <TextField id="placeCode"onChange={this.placeCode} value={this.state.placeCode}/></td>
                            <td><TextField  type="hidden"  id="placeName" onChange={this.placeName}value={this.state.placeName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Place} getOptionLabel={option => option.placeName} className="txt2" 
 id="placeName"  onChange={this.PlaceChange} renderInput={params => ( <TextField {...params}onChange={this.chn}  fullWidth /> )}/> </td>
                             <td><button type="button"onClick={e => this.View(this.state.placeCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        
                       </table></div>
                    </div>
                    <div class="row"style={{borderStyle:"ridge"}} >
                      <div class="col">
                            <table>
                            <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Country</InputLabel> </td>
                        <td> <TextField id="countryCode" value={this.state.countryCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.countryName} className="txt2" 
 id="countryName"  onChange={this.CountryChange} renderInput={params => ( <TextField {...params}label={this.state.countryName}  fullWidth /> )}/> </td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Currency</InputLabel> </td>
                        <td> <TextField id="currency" value={this.state.currency}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.currencyDesc} className="txt2" 
 id="currencyDesc"  onChange={this.currencyChange} renderInput={params => ( <TextField {...params} label={this.state.currencyName} fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
 id="stateName"  onChange={this.StateChange} renderInput={params => ( <TextField {...params}label={this.state.stateName}  fullWidth /> )}/> </td>
                        
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>District</InputLabel> </td>
                        <td> <TextField id="distCode" value={this.state.distCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.District} getOptionLabel={option => option.districtName} className="txt2" 
 id="districtName"  onChange={this.DistrictChange} renderInput={params => ( <TextField {...params}label={this.state.distName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Taluk/Mandal</InputLabel> </td>
                        <td> <TextField id="talukCode" value={this.state.talukCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Taluk} getOptionLabel={option => option.talukName} className="txt2" 
 id="talukName"  onChange={this.TalukChange} renderInput={params => ( <TextField {...params}label={this.state.talukName}  fullWidth /> )}/> </td>
                      
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>City/Town</InputLabel> </td>
                        <td> <TextField id="cityCode" value={this.state.cityCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.City} getOptionLabel={option => option.cityName} className="txt2" 
 id="cityName"  onChange={this.CityChange} renderInput={params => ( <TextField {...params}label={this.state.cityName}  fullWidth /> )}/> </td>
                           
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PinCode</InputLabel> </td>
                        <td> <TextField id="pinCode" value={this.state.pinCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Pincode} getOptionLabel={option => option.postOff} className="txt2" 
 id="postOff"  onChange={this.PincodeChange} renderInput={params => ( <TextField {...params}label={this.state.postOff}  fullWidth /> )}/> </td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>STDCode</InputLabel> </td>
                        <td><TextField value={this.state.stdCode} onChange={this.stdCodechg}/></td>
                        </tr>
                            </table>
                       <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                        <td>  <div class="form-check-inline">
                       <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
                    </tr>
                    </table>
                    </div>
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