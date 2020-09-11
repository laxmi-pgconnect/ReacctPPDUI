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

export default class Godown extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            Branch: [{branchCode:'',branchName:''}] ,
            Godown: [{goDownCode:'',goDownName:''}] ,
            GodownType: [{gcmType:'',gcmDesc:''}] ,
            Weighbridge: [{weighBridge:'',gcmDesc:''}] ,
            CostCenter: [{ccCode:'',ccName:''}] ,
            Country: [{countryCode:'',countryName:''}] ,
            State: [{stateCode:'',stateName:''}] ,
            District: [{distCode:'',distName:''}] ,
            Taluka: [{talukCode:'',talukName:''}] ,
            Town: [{cityCode:'',cityName:''}] ,
            pincode: [{pinCode:'',placeName:''}] ,
            branchCode:'',branchName:'', goDownCode:'', goDownName:'',  goDownType:'', goDownDesc:'', weighBridge:'', weighBridgeName:'',
            ccCode:'',  ccName:'',  address1:'', address2:'', address3:'null', pinCode:'', cityCode:'', cityName:'', talukCode:'', talukName:'', distCode:'',
            mailId:'',distName:'', stateCode:'', stateName:'', countryCode:'', countryName:'',  phoneNo:'', faxNo:'', mobileNo:'', contactPer:'', isActive:'',
}  
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  
this.chn1 = this.chn1.bind(this); 
this.branchCode = this.branchCode.bind(this); 
this.SaveData = this.SaveData.bind(this); 
this.goDownCode=this.goDownCode.bind(this);
this.address1 = this.address1.bind(this);  
this.address2 = this.address2.bind(this);  
this.contactPer = this.contactPer.bind(this);  
this.mobileNo = this.mobileNo.bind(this);  
this.phoneNo = this.phoneNo.bind(this);  
this.faxNo = this.faxNo.bind(this);  
this.mailId = this.mailId.bind(this); 
}  
goDownCode(event) {  
  this.setState({ goDownCode: event.target.value })  
  } 
  mailId(event) {  
    this.setState({ mailId: event.target.value })  
    } 
  branchCode(event) {  
    this.setState({ branchCode: event.target.value })  
    } 
  address1(event) {  
    this.setState({ address1: event.target.value })  
    } 
    address2(event) {  
      this.setState({ address2: event.target.value })  
      } 
      phoneNo(event) {  
        this.setState({ phoneNo: event.target.value })  
        } 
        contactPer(event) {  
          this.setState({ contactPer: event.target.value })  
          } 
          faxNo(event) {  
            this.setState({ faxNo: event.target.value })  
            } 
            mobileNo(event) {  
              this.setState({ mobileNo: event.target.value })  
              } 
  chn(event){
    this.setState({goDownName:event.target.value})
  }
  chn1(event){
    this.setState({branchName:event.target.value})
  }
  onValueChange(event) {
    this.setState({
      isActive: event.target.value
    });
  }
BranchChange=(event,value)=>{
this.setState({branchCode:value.branchCode})
this.setState({branchName:value.branchName})
}
GodownChange=(event,value)=>{
this.setState({goDownCode:value.goDownCode})
this.setState({goDownName:value.goDownName})
 }
 GodownTypeChange=(event,value)=>{
    this.setState({goDownType:value.gcmType})
    this.setState({goDownDesc:value.gcmDesc})
     }
     WeighbridgeChange=(event,value)=>{
        this.setState({weighBridge:value.gcmCode})
        this.setState({weighBridgeName:value.gcmDesc})
         }
         CostCenterChange=(event,value)=>{
            this.setState({ccCode:value.ccCode})
            this.setState({ccName:value.ccName})
             }
             CountryChange=(event,value)=>{
                this.setState({countryCode:value.countryCode})
                this.setState({countryName:value.countryName})
                 }
                 StateChange=(event,value)=>{
                    this.setState({stateCode:value.stateCode})
                    this.setState({stateName:value.stateName})
                     }
                     DistrictChange=(event,value)=>{
                        this.setState({distCode:value.distCode})
                        this.setState({distName:value.distName})
                         }
                         TalukaChange=(event,value)=>{
                            this.setState({talukCode:value.talukCode})
                            this.setState({talukName:value.talukName})
                             }
                             TownChange=(event,value)=>{
                                this.setState({cityCode:value.cityCode})
                                this.setState({cityName:value.cityName})
                                 }
                                 pinChange=(event,value)=>{
                                   this.setState({pinCode:value.pinCode})
                                   this.setState({placeName:value.placeName})
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
                axios.post('https://localhost:44381/api/TmGodowns/CostCenter').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                  CostCenter: response.data  
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
                     StateData(countryCode){
                        axios.post('https://localhost:44381/api/TmGodowns/State?countrycode='+countryCode).then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            State: response.data  
                         });  
                         });  
                         }
                         DistrictData(stateCode){
                            axios.post('https://localhost:44381/api/TmGodowns/District?statecode='+stateCode).then(response => {  
                             console.log(response.data);  
                             this.setState({  
                                District: response.data  
                             });  
                             });  
                             }
                             TalukaData(distCode){
                                axios.post('https://localhost:44381/api/TmGodowns/Taluka?districtcode='+distCode).then(response => {  
                                 console.log(response.data);  
                                 this.setState({  
                                    Taluka: response.data  
                                 });  
                                 });  
                                 }
                                 TownData(talukCode){
                                    axios.post('https://localhost:44381/api/TmGodowns/Town?talukaCode='+talukCode).then(response => {  
                                     console.log(response.data);  
                                     this.setState({  
                                        Town: response.data  
                                     });  
                                     });  
                                     }
                                     pincodeData(cityCode){
                                        axios.post('https://localhost:44381/api/TmGodowns/pincode?citycode='+cityCode).then(response => {  
                                         console.log(response.data);  
                                         this.setState({  
                                            pincode: response.data  
                                         });  
                                         });  
                                         }
                                         View(goDownCode) {
                                          axios.post('https://localhost:44381/api/TmGodowns/ViewData?gcCode='+goDownCode )
                                            .then(response => {
                                       console.log(response.data);
                                              this.setState({
                                                goDownName: response.data[0].goDownName,
                                                branchCode: response.data[0].branchCode,
                                                branchName: response.data[0].branchName,
                                                goDownType: response.data[0].goDownType,
                                                goDownDesc:response.data[0].goDownDesc,
                                                weighBridge: response.data[0].weighBridge,
                                                weighBridgeName: response.data[0].weighBridgeName,
                                                ccCode: response.data[0].ccCode,
                                                ccName:response.data[0].ccName,
                                                address1: response.data[0].address1,
                                                address2: response.data[0].address2,
                                                address3: response.data[0].address3,
                                                pinCode:response.data[0].pinCode,
                                                cityCode: response.data[0].cityCode,
                                                cityName: response.data[0].cityName,
                                                talukCode: response.data[0].talukCode,
                                                talukName:response.data[0].talukName,
                                                distCode: response.data[0].distCode,
                                                distName: response.data[0].distName,
                                                isActive: response.data[0].isActive,
                                                 stateCode:response.data[0].stateCode,
                                                 stateName: response.data[0].stateName,
                                                 countryCode: response.data[0].countryCode,
                                                 countryName: response.data[0].countryName,
                                                 postOff:response.data[0].postOff,
                                                 phoneNo: response.data[0].phoneNo,
                                                 faxNo: response.data[0].faxNo,
                                                 mobileNo: response.data[0].mobileNo,
                                                 mailId:response.data[0].mailId,
                                                 contactPer: response.data[0].contactPer,
                                               
                                              });
                                            })
                                        }  
                                        SaveData(event) { debugger;
                                          let data = {
                                            goDownCode:this.state.goDownCode,
                                            goDownName: this.state.goDownName,  
                                            branchCode: this.state.branchCode,  
                                           goDownType: this.state.goDownType,  
                                            ccCode:this.state.ccCode,
                                            weighBridge:this.state.weighBridge,
                                            address1: this.state.address1,
                                            address2:this.state.address2,
                                            address3:this.state.address3,
                                            pinCode: this.state.pinCode,  
                                            cityCode: this.state.cityCode,
                                            talukCode: this.state.talukCode,  
                                           distCode:this.state.distCode,
                                           stateCode: this.state.stateCode,
                                            countryCode: this.state.countryCode,  
                                            phoneNo: this.state.phoneNo,  
                                            faxNo: this.state.faxNo,
                                            mobileNo: this.state.mobileNo,  
                                            contactPer: this.state.contactPer,
                                            mailId: this.state.mailId,
                                             isActive: this.state.isActive   }
                                           fetch('https://localhost:44381/api/TmGodowns/SaveUpdate', {  
                                              crossDomain:true,
                                              method: 'Post',     
                                              headers: {'Content-Type':'application/json'},
                                              body: JSON.stringify(data)
                                            })
                                        .then(Response => Response.json())        
                                        .then(result => {  
                                               console.log(result);  
                                               console.log(JSON.stringify(data))
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
                        <td> <TextField id="goDownCode" value={this.state.goDownCode}onChange={this.goDownCode}/></td>
                        <td><TextField  type="hidden"  id="goDownName" value={this.state.goDownName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Godown} getOptionLabel={option => option.goDownName} className="txt2" 
 id="goDownName"  onChange={this.GodownChange} renderInput={params => ( <TextField {...params} label={this.state.goDownName}onChange={this.chn} fullWidth /> )}/> </td>
                        <td><button type="button"onClick={e => this.View(this.state.goDownCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td> <TextField id="branchCode"onChange={this.branchCode} value={this.state.branchCode}/></td>
                        <td><TextField type="hidden"   id="branchName" value={this.state.branchName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
 id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params}onChange={this.chn1}label={this.state.branchName}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Godown Type</InputLabel> </td>
                        <td> <TextField id="goDownType" value={this.state.goDownType}/></td>
                        <td><TextField  type="hidden"  id="gcmDesc" value={this.state.gcmDesc}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GodownType} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="gcmDesc"  onChange={this.GodownTypeChange} renderInput={params => ( <TextField {...params} label={this.state.goDownDesc} fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Weigh Bridge</InputLabel> </td>
                        <td> <TextField id="weighBridge" value={this.state.weighBridge}/></td>
                        <td><TextField  type="hidden"  id="gcmDesc" value={this.state.gcmDesc}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Weighbridge} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="wgcmDesc"  onChange={this.WeighbridgeChange} renderInput={params => ( <TextField {...params}label={this.state.weighBridgeName}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Cost Center</InputLabel> </td>
                        <td> <TextField id="ccCode" value={this.state.ccCode}/></td>
                        <td><TextField  type="hidden"  id="ccName" value={this.state.ccName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenter} getOptionLabel={option => option.ccName} className="txt2" 
 id="ccName"  onChange={this.CostCenterChange} renderInput={params => ( <TextField {...params}label={this.state.ccName}  fullWidth /> )}/> </td>
                    </tr>
                   </table>
                  
                   <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
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
                    </div>
                    <div class="row" style={{borderStyle:"ridge"}}>
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>DoorNo</InputLabel> </td>
                        <td><TextField id="address1" value={this.state.address1}onChange={this.address1} style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Country</InputLabel> </td>
                        <td> <TextField id="countryCode" value={this.state.countryCode}/></td>
                        <td><TextField  type="hidden"  id="countryName" value={this.state.countryName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.countryName} className="txt2" 
 id="countryName"  onChange={this.CountryChange} renderInput={params => ( <TextField {...params}label={this.state.countryName}   fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Street</InputLabel> </td>
                        <td><TextField id="address2" value={this.state.address2}onChange={this.address2} style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
                        <td><TextField  type="hidden"  id="stateName" value={this.state.stateName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
 id="stateName"  onChange={this.StateChange} renderInput={params => ( <TextField {...params}label={this.state.stateName}onClick={e => this.StateData(this.state.countryCode)}  fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PhoneNo</InputLabel> </td>
                        <td><TextField id="phoneNo" value={this.state.phoneNo}onChange={this.phoneNo}style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>District</InputLabel> </td>
                        <td> <TextField id="distCode" value={this.state.distCode}/></td>
                        <td><TextField  type="hidden"  id="distName" value={this.state.distName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.District} getOptionLabel={option => option.distName} className="txt2" 
 id="distName"  onChange={this.DistrictChange} renderInput={params => ( <TextField {...params}onClick={e => this.DistrictData(this.state.stateCode)} label={this.state.distName} fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ContactPerson</InputLabel> </td>
                        <td><TextField id="contactPer" value={this.state.contactPer}onChange={this.contactPer} style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tlk/Mandal</InputLabel> </td>
                        <td> <TextField id="talukCode" value={this.state.talukCode}/></td>
                        <td><TextField  type="hidden"  id="talukName" value={this.state.talukName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Taluka} getOptionLabel={option => option.talukName} className="txt2" 
 id="talukName"  onChange={this.TalukaChange} renderInput={params => ( <TextField {...params}label={this.state.talukName} onClick={e => this.TalukaData(this.state.distCode)} fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Fax No</InputLabel> </td>
                        <td><TextField id="faxNo" value={this.state.faxNo}onChange={this.faxNo} style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>City/Town</InputLabel> </td>
                        <td> <TextField id="cityCode" value={this.state.cityCode}/></td>
                        <td><TextField  type="hidden"  id="cityName" value={this.state.cityName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Town} getOptionLabel={option => option.cityName} className="txt2" 
 id="cityName"  onChange={this.TownChange} renderInput={params => ( <TextField {...params} onClick={e => this.TownData(this.state.talukCode)}label={this.state.cityName} fullWidth /> )}/> </td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Mobile No</InputLabel> </td>
                        <td><TextField id="mobileNo" value={this.state.mobileNo}onChange={this.mobileNo} style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PinCode</InputLabel> </td>
                        
                      <td> <Autocomplete    freeSolo  options={this.state.pincode} getOptionLabel={option => option.pinCode} 
 id="pincode" onChange={this.pinChange} renderInput={params => ( <TextField {...params}label={this.state.pinCode}onClick={e => this.pincodeData(this.state.cityCode)}  fullWidth /> )}/> </td>
                          <td><TextField  type="hidden"  id="pinCode" value={this.state.pinCode}/></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>MailId</InputLabel> </td>
                        <td><TextField id="mailId" value={this.state.mailId}onChange={this.mailId} style={{width:250}} /></td>
                      
                        </tr>
                        <tr>
                        <td><TextField id="address3"type="hidden" value={this.state.address3}  /></td>
                        </tr>
                    </table>
                       
                    </div> </CardBody> 
                    <CardFooter >
       <div class="btn-group " style={{position: "absolute",right: 0}}>
    <button type="button" class="btn btn-success "style={{borderRadius:7}}onClick={this.SaveData}>Save</button>
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