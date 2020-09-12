import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios';  

export default class CostCenter extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            CostCenter: [{ccCode:'',ccName:''}] ,   
            Parent: [{prtCcCode:'',prtccName:''}] ,
            GrantParent: [{gprtCode:'',gprtName:''}] ,
            CostCenterType: [{ccType:'',descn:''}] ,
            ccCode:'',ccName:'',prtCcCode:'',prtccName:'',gprtCcCode:'',gprtCcName:'',isActive:'',ccType:'',descn:'',
            regionCode:'', 
} 
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);   
this.ccName = this.ccName.bind(this);  
this.SaveData=this.SaveData.bind(this);
this.View=this.View.bind(this);
this.ccCode = this.ccCode.bind(this);  
}  
CostCenterChange=(event,value)=>{
    this.setState({ccCode:value.ccCode})
    this.setState({ccName:value.ccName})
     }
     ParentChange=(event,value)=>{
        this.setState({prtCcCode:value.prtCcCode})
        this.setState({prtccName:value.ccName})
         }
         GrantParentChange=(event,value)=>{
            this.setState({gprtCcCode:value.gprtCcCode})
            this.setState({gprtCcName:value.ccName})   
          }

             CostCenterTypeChange=(event,value)=>{
                this.setState({ccType:value.gcmType})
                this.setState({descn:value.descn})
                 }
                 ccCode(event) {  
                  this.setState({ ccCode: event.target.value })  
                } 
                ccName(event) {  
                  this.setState({ ccName: event.target.value })  
                } 
                onValueChange(event) {
                  this.setState({
                    isActive: event.target.value
                  });
                }
                chn(event){
                  this.setState({ccName:event.target.value})
                }
     componentDidMount() {  
        this.CostCenterData();
        this.ParentData();
        this.GrantParentData();
        this.CostCenterTypeData();
        this.Delete();
        this.defaultValues();
        }
        CostCenterData(){
            axios.post('https://localhost:44381/api/TmCostcenters/CostCenterName').then(response => {  
             console.log(response.data);  
             this.setState({  
                CostCenter: response.data  
             });  
             });  
             }  
             ParentData(){
                axios.post('https://localhost:44381/api/TmCostcenters/ParentName').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Parent: response.data  
                 });  
                 });  
                 }
                 GrantParentData(){
                    axios.post('https://localhost:44381/api/TmCostcenters/GrantParentName').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                        GrantParent: response.data  
                     });  
                     });  
                     }
                     CostCenterTypeData(){
                        axios.post('https://localhost:44381/api/TmCostcenters/CostCenterType').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            CostCenterType: response.data  
                         });  
                         });  
                         }
                         Delete(ccCode){
                            axios.delete('https://localhost:44381/api/TmCostcenters/'+ ccCode)
                            .then(json => {  
                                 alert('Record deleted successfully!!');  
                                
                                })  
                               }
                               SaveData(event) { debugger;
                                event.preventDefault();
                                let data = {
                                  ccCode:this.state.ccCode,
                                  ccName: this.state.ccName,  
                                  prtCcCode: this.state.prtCcCode,  
                                  gprtCcCode: this.state.gprtCcCode,
                                  ccType:this.state.ccType,
                                  regionCode:this.state.regionCode,
                                  isActive: this.state.isActive   }
                                 fetch('https://localhost:44381/api/TmCostcenters/SaveUpdate', {  
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
                            View(ccCode) {
                              axios.post('https://localhost:44381/api/TmCostcenters/ViewCostCenter?ccCode='+ccCode )
                                .then(response => {
                               
                                  console.log(response.data);
                                  this.setState({
                                    prtCcCode: response.data[0].prtCcCode,
                                    prtccName: response.data[0].prtccName,
                                      gprtCcCode: response.data[0].gprtCcCode,
                                      gprtCcName: response.data[0].gprtCcName,
                                      ccType: response.data[0].ccType,
                                      descn: response.data[0].descn,
                                       isActive:response.data[0].isActive,
                                  });
                                })
                            }
                            defaultValues(){
                              axios.get('https://localhost:44381/api/TmUsers').then(response => {  
                               console.log(response.data); 
                              
                               this.setState({  
                                 
                                regionCode: response.data[2].reigionCode,
                               
                               });  
                              
                               });  
                               }

    render(){
        return(
          <body onload="defaultValues()" MS_POSITIONING="GridLayout">
            <div  style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>COST CENTER</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                      
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">CostCenterCode</InputLabel></td>
                            <td> <TextField id="ccCode"onChange={this.ccCode} value={this.state.ccCode}/></td>
                            <td><TextField  type="hidden"  id="ccName" onChange={this.ccName}value={this.state.ccName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenter} getOptionLabel={option => option.ccName} className="txt2" 
 id="ccName"  onChange={this.CostCenterChange} renderInput={params => ( <TextField {...params}onChange={this.chn} label={this.state.ccName}  fullWidth /> )}/> </td>
                            <td><button type="button"onClick={e => this.View(this.state.ccCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ParentCostCenter</InputLabel> </td>
                        <td> <TextField id="prtCcCode" value={this.state.prtCcCode}/></td>
                        <td><TextField  type="hidden"  id="prtccName" value={this.state.prtccName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Parent} getOptionLabel={option => option.ccName} className="txt2" 
 id="prtccName"  onChange={this.ParentChange} renderInput={params => ( <TextField {...params} label={this.state.prtccName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>GPCostCenter</InputLabel> </td>
                        <td> <TextField id="gprtCcCode" value={this.state.gprtCcCode}/></td>
                        <td><TextField  type="hidden"  id="gprtCcName" value={this.state.gprtCcName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GrantParent} getOptionLabel={option => option.ccName} className="txt2" 
 id="gprtCcName"  onChange={this.GrantParentChange} renderInput={params => ( <TextField {...params}label={this.state.gprtCcName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>CostCenterType</InputLabel> </td>
                        <td> <TextField id="ccType" value={this.state.ccType}/></td>
                        <td><TextField  type="hidden"  id="descn" value={this.state.descn}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenterType} getOptionLabel={option => option.descn} className="txt2" 
 id="descn"  onChange={this.CostCenterTypeChange} renderInput={params => ( <TextField {...params}label={this.state.descn}  fullWidth /> )}/> </td>
                        </tr>
                       </table>
                     
                  
                   <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{fontSize:15,color:"black"}}>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
                   </tr>
                   <TextField type="hidden" id="regionCode" value={this.state.regionCode}/>
                   
                   </table> </div> </div>
                   
                
                    
                    </CardBody> 
                    <CardFooter >
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}onClick={this.SaveData}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.ccCode)}>Delete</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
 <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
</div> </CardFooter>    
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>

                    </body>
        )
    }
}