
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
import './Rep.css';


export default class ReasonMaster extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            DocType: [{docType:'',docName:''}] ,
            Branch: [{branchCode:'',branchName:''}] ,
            Reason: [{reasonCode:'',reasonName:''}] ,
            AcGroup: [{grpCode:'',grpName:''}] ,
            Expense: [{accountCode:'',accountName:''}] ,
            branchCode:'', branchName:'', reasonCode:'', reasonName:'', docType:'', docName:'', grpCode:'',
             grpName:'', accountCode:'', accountName:'', isActive:'',
                            
}  
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  
this.SaveData=this.SaveData.bind(this);
this.reasonCode=this.reasonCode.bind(this);
}  
onValueChange(event) {
   this.setState({
     isActive: event.target.value
   });
 }
 chn(event){
   this.setState({reasonName:event.target.value})
 }
 reasonCode(event){
   this.setState({reasonCode:event.target.value})
 }
DocTypeChange=(event,value)=>{
this.setState({docType:value.docType})
this.setState({docName:value.docName})
}
BranchChange=(event,value)=>{
this.setState({branchCode:value.branchCode})
this.setState({branchName:value.branchName})
 }
 ReasonChange=(event,value)=>{
    this.setState({reasonCode:value.reasonCode})
    this.setState({reasonName:value.reasonName})
     }
     AcGroupChange=(event,value)=>{
        this.setState({grpCode:value.grpCode})
        this.setState({grpName:value.grpName})
         }
         ExpenseChange=(event,value)=>{
            this.setState({accountCode:value.accountCode})
            this.setState({accountName:value.accountName})
             }

     
            

componentDidMount() {  
this.DocTypeData();
this.BranchData();
this.ReasonData();
this.AcGroupData();
this.ExpenseData();
this.Delete();


}
DocTypeData(){
axios.post('https://localhost:44381/api/TmReasons/DocType').then(response => {  
 console.log(response.data);  
 this.setState({  
    DocType: response.data  
 });  
 });  
 }
 BranchData(){
    axios.post('https://localhost:44381/api/TmReasons/Branch').then(response => {  
     console.log(response.data);  
     this.setState({  
        Branch: response.data  
     });  
     });  
     }
     ReasonData(){
        axios.post('https://localhost:44381/api/TmReasons/Reason').then(response => {  
         console.log(response.data);  
         this.setState({  
            Reason: response.data  
         });  
         });  
         }
         AcGroupData(){
            axios.post('https://localhost:44381/api/TmReasons/AcGroup').then(response => {  
             console.log(response.data);  
             this.setState({  
                AcGroup: response.data  
             });  
             });  
             }
             ExpenseData(){
                axios.post('https://localhost:44381/api/TmReasons/Expense').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Expense: response.data  
                 });  
                 });  
                 }
                 Delete(itemCode){
                  axios.delete('https://localhost:44381/api/TmItems/' + itemCode)
                  .then(json => {  
                       alert('Record deleted successfully!!');  
                      this.props.history.push(""); 
                      })  
                     }
                     View(reasonCode) {
                        axios.post('https://localhost:44381/api/TmReasons/ViewReason?ReasonCode='+reasonCode )
                          .then(response => {
                    
                            console.log(response.data);
                            this.setState({
                              branchCode: response.data[0].branchCode,
                              branchName: response.data[0].branchName,
                              reasonCode: response.data[0].reasonCode,
                              reasonName: response.data[0].reasonName,
                              docType: response.data[0].docType,
                              docName: response.data[0].docName,
                              grpCode: response.data[0].grpCode,
                              grpName: response.data[0].grpName,
                              accountCode: response.data[0].accountCode,
                              accountName: response.data[0].accountName,
                                isActive: response.data[0].isActive,
                                
                            });
                          })
                      }
                      SaveData(event) { debugger;
                        let data = {
                          accountCode:this.state.accountCode,
                          grpName: this.state.grpName, 
                          accountName:this.state.accountName,
                          grpCode: this.state.grpCode, 
                          docName:this.state.docName,
                          docType: this.state.docType, 
                          reasonName:this.state.reasonName,
                          reasonCode: this.state.reasonCode, 
                          branchName:this.state.branchName,
                          branchCode: this.state.branchCode,  
                          isActive: this.state.isActive   }
                         fetch('https://localhost:44381/api/TmReasons/SaveUpdate', {  
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
                <h4>ReasonMaster</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Reason Code</InputLabel> </td>
                        <td> <TextField id="reasonCode"onChange={this.reasonCode} value={this.state.reasonCode}/></td>
                        <td><TextField  type="hidden"  id="reasonName" value={this.state.reasonName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Reason} getOptionLabel={option => option.reasonName} className="txt2" 
 id="reasonName"  onChange={this.ReasonChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        <td><button type="button" onClick={e => this.View(this.state.reasonCode)}onChange={this.chn} label={this.state.reasonName}  class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Document Type</InputLabel> </td>
                        <td> <TextField id="docType" value={this.state.docType}/></td>
                        <td><TextField  type="hidden"  id="docName" value={this.state.docName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.DocType} getOptionLabel={option => option.docName} className="txt2" 
 id="docName"  onChange={this.DocTypeChange} renderInput={params => ( <TextField {...params}label={this.state.docType}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td> <TextField id="branchCode" value={this.state.branchCode}/></td>
                        <td><TextField  type="hidden"  id="branchName" value={this.state.branchName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
 id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params}label={this.state.branchName}  fullWidth /> )}/> </td>
                         </tr>
                        
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Ac Group Code</InputLabel> </td>
                        <td> <TextField id="grpCode" value={this.state.grpCode}/></td>
                        <td><TextField  type="hidden"  id="grpName" value={this.state.grpName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.AcGroup} getOptionLabel={option => option.grpName} className="txt2" 
 id="grpName"  onChange={this.AcGroupChange} renderInput={params => ( <TextField {...params}label={this.state.grpName}  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Expense Accode</InputLabel> </td>
                        <td> <TextField id="accountCode" value={this.state.accountCode}/></td>
                        <td><TextField  type="hidden"  id="accountName" value={this.state.accountName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Expense} getOptionLabel={option => option.accountName} className="txt2" 
 id="accountName"  onChange={this.ExpenseChange} renderInput={params => ( <TextField {...params}label={this.state.accountName}  fullWidth /> )}/> </td>
                         </tr>
                         
                       </table>
                       <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
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
 <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.catgyCode)}>Delete</button>
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