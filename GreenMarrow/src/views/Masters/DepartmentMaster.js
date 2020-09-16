
import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';

import CardFooter from "components/Card/CardFooter.js";
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 
import './Item.css';

export default class DepartmentMaster extends Component{
   constructor(props) {  
      super(props)  
      this.state = {  
          Dept: [{deptCode:'',deptName:''}] ,
          PrtDept: [{prtDept:'',prtDeptName:''}] ,
          Branch: [{branchCode:'',branchName:''}] ,
          CostCenter: [{ccCode:'',ccName:''}] ,
          Accounts: [{expAcCode:'',expAcName:''}] ,
          Employee:[{hodCode:'',hodName:''}] ,
          deptCode:'', deptName:'', prtDept:'', prtDeptName:'', branchCode:'', branchName:'', ccCode:'', ccName:'',
          expAcCode:'',  expAcName:'', hodCode:'', hodName:'', isActive:'',
}  
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  
this.SaveData=this.SaveData.bind(this);
this.deptCode=this.deptCode.bind(this);
}  
onValueChange(event) {
   this.setState({
     isActive: event.target.value
   });
 }
 chn(event){
   this.setState({deptName:event.target.value})
 }
 deptCode(event){
   this.setState({deptCode:event.target.value})
 }
DeptChange=(event,value)=>{
this.setState({deptCode:value.deptCode})
this.setState({deptName:value.deptName})
}
prtDeptChange=(event,value)=>{
  this.setState({prtDept:value.deptCode})
  this.setState({prtDeptName:value.deptName})
  }
BranchChange=(event,value)=>{
   this.setState({branchCode:value.branchCode})
   this.setState({branchName:value.branchName})
}
 CostCenterChange=(event,value)=>{
      this.setState({ccCode:value.ccCode})
      this.setState({ccName:value.ccName})
}
AccountsChange=(event,value)=>{
   this.setState({expAcCode:value.accountCode})
   this.setState({expAcName:value.accountName})
}     
HeadChange=(event,value)=>{
  this.setState({hodCode:value.empCode})
  this.setState({hodName:value.empName})
}  

componentDidMount() {  
this.DeptData();
this.prtDeptData();
this.BranchData();
this.CostCenterData();
this.AccountsData();
this.HeadData();

}
DeptData(){
axios.post('https://localhost:44381/api/TmDepts/Dept').then(response => {  
console.log(response.data);  
this.setState({  
  Dept: response.data  
});  
});  
}
prtDeptData(){
  axios.post('https://localhost:44381/api/TmDepts/Dept').then(response => {  
  console.log(response.data);  
  this.setState({  
    PrtDept: response.data  
  });  
  });  
  }
BranchData(){
   axios.post('https://localhost:44381/api/TmDepts/Branch').then(response => {  
    console.log(response.data);  
    this.setState({  
       Branch: response.data  
    });  
    });  
}
CostCenterData(){
   axios.post('https://localhost:44381/api/TmDepts/CostCenter').then(response => {  
    console.log(response.data);  
    this.setState({  
       CostCenter: response.data  
    });  
    });  
    }
    AccountsData(){
      axios.post('https://localhost:44381/api/TmDepts/Accounts').then(response => {  
       console.log(response.data);  
       this.setState({  
          Accounts: response.data  
       });  
       });  
      }
      HeadData(){
        axios.post('https://localhost:44381/api/TmDepts/Employee').then(response => {  
         console.log(response.data);  
         this.setState({  
          Employee: response.data  
         });  
         });  
        }
      View(deptCode) {
         axios.post('https://localhost:44381/api/TmDepts/ViewData?deptcode='+deptCode )
           .then(response => {
     
             console.log(response.data);
             this.setState({
               prtDept: response.data[0].prtDept,
               prtDeptName: response.data[0].prtDeptName,
               branchCode: response.data[0].branchCode,
               branchName: response.data[0].branchName,
               ccCode: response.data[0].ccCode,
               ccName: response.data[0].ccName,
               expAcCode: response.data[0].expAcCode,
               expAcName: response.data[0].expAcName,
               hodCode: response.data[0].hodCode,
               hodName: response.data[0].hodName,
                 isActive: response.data[0].isActive,
                 
             });
           })
       }
       SaveData(event) { debugger;
         let data = {
            deptCode:this.state.deptCode,
            deptName: this.state.deptName, 
            prtDept:this.state.prtDept,
            branchCode: this.state.branchCode, 
            ccCode:this.state.ccCode,
            expAcCode: this.state.expAcCode, 
            hodCode:this.state.hodCode,
           isActive: this.state.isActive   }
          fetch('https://localhost:44381/api/TmDepts/SaveUpdate', {  
             crossDomain:true,
             method: 'Post',     
             headers: {'Content-Type':'application/json'},
             body: JSON.stringify(data)
           })
       .then(Response => Response.json())        
       .then(result => {  
              console.log(result);  
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
              
       })  
     }  
    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>DepartmentMaster</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Dept Code</InputLabel></td>
                            <td> <TextField id="deptCode"onChange={this.deptCode} value={this.state.deptCode}/></td>
                            <td><TextField  type="hidden"  id="reasonName" value={this.state.deptName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Dept} getOptionLabel={option => option.deptName} className="txt2" 
 id="deptCode"  onChange={this.DeptChange} renderInput={params => ( <TextField {...params}onChange={this.chn} label={this.state.deptName}  fullWidth /> )}/> </td>
                           <td><button type="button" onClick={e => this.View(this.state.deptCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Partent Dept</InputLabel> </td>
                        <td> <TextField id="prtDept" value={this.state.prtDept}/></td>
                            <td><TextField  type="hidden"  id="prtDeptName" value={this.state.prtDeptName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.PrtDept} getOptionLabel={option => option.deptName} className="txt2" 
 id="prtDeptName"  onChange={this.prtDeptChange} renderInput={params => ( <TextField {...params} label={this.state.prtDeptName}  fullWidth /> )}/> </td>
                         </tr>
                          <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td> <TextField id="branchCode" value={this.state.branchCode}/></td>
                        <td><TextField  type="hidden"  id="reasonName" value={this.state.branchName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
 id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params} label={this.state.branchName}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Cost Center</InputLabel> </td>
                        <td> <TextField id="ccCode" value={this.state.ccCode}/></td>
                        <td><TextField  type="hidden"  id="reasonName" value={this.state.ccName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.CostCenter} getOptionLabel={option => option.ccName} className="txt2" 
 id="ccName"  onChange={this.CostCenterChange} renderInput={params => ( <TextField {...params} label={this.state.ccName}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Exp A/C Code</InputLabel> </td>
                        <td> <TextField id="expAcCode" value={this.state.expAcCode}/></td>
                        <td><TextField  type="hidden"  id="reasonName" value={this.state.expAcName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Accounts} getOptionLabel={option => option.accountName} className="txt2" 
 id="expAcName"  onChange={this.AccountsChange} renderInput={params => ( <TextField {...params} label={this.state.expAcName}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Head of Dept</InputLabel> </td>
                        <td> <TextField id="hodCode" value={this.state.hodCode}/></td>
                        <td><TextField  type="hidden"  id="reasonName" value={this.state.expAcName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Employee} getOptionLabel={option => option.empName} className="txt2" 
 id="hodName"  onChange={this.HeadChange} renderInput={params => ( <TextField {...params} label={this.state.hodName}  fullWidth /> )}/> </td>
                         </tr>
                                                  
                       </table>
                       <table >
                   
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