import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel,  TextField } from '@material-ui/core';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 

export default class ApprovedVendor extends Component{
   constructor(props) {  
      super(props)  
      this.state = {  
        Vendor:[{accountCode:'',accountName:''}] ,
          Parent: [{prtCode:'',prtName:''}] ,
          ItemCode:[{itemCode:'',itemName:''}] ,
          accountCode:'',itemCode:'',isActive:'',purType:''
         
}  
this.onValueChange = this.onValueChange.bind(this);

this.chn = this.chn.bind(this);  
this.SaveData=this.SaveData.bind(this);
this.ValueChange = this.ValueChange.bind(this);
}  
accountCode(event) {  
this.setState({ accountCode: event.target.value })  
} 
accountName(event) {  
  this.setState({ accountName: event.target.value })  
  } 
  itemName(event) {  
    this.setState({ itemName: event.target.value })  
    } 
VendorCodeChange=(event,value)=>{
this.setState({accountCode:value.accountCode})
this.setState({accountName:value.accountName})
}
ItemCodeChange=(event,value)=>{
   this.setState({itemCode:value.itemCode})
   this.setState({itemName:value.itemName})
   }
   onValueChange(event) {
      this.setState({
        isActive: event.target.value
      });
    }
    ValueChange(event) {
      this.setState({
        purType: event.target.value
      });
    }
    chn(event){
      this.setState({accountName:event.target.value})
    }
            

componentDidMount() {  
this.VendorCodeData();
this.ItemCodeData();

}
VendorCodeData(){
axios.post('https://localhost:44381/api/TmVendors/VendorCode').then(response => {  
console.log(response.data);  
this.setState({  
  Vendor: response.data  
});  
});  
}
ItemCodeData(){
   axios.post('https://localhost:44381/api/TmVendors/ItemCode').then(response => {  
   console.log(response.data);  
   this.setState({  
     ItemCode: response.data  
   });  
   });  
   }
   View(accountCode,itemCode) {
      axios.post('https://localhost:44381/api/TmVendors/ViewData?accountCode='+accountCode+'&itemCode='+itemCode)
        .then(response => {
  
          console.log(response.data);
          this.setState({
            itemCode: response.data[0].itemCode,
            itemName: response.data[0].itemName,
              isActive: response.data[0].isActive,
              purType:response.data[0].purType,
          });
        })
    }
    SaveData(event) { debugger;
      let data = {
        accountCode:this.state.accountCode,
        itemCode: this.state.itemCode,  
         purType: this.state.purType,  
         isActive: this.state.isActive   }
       fetch('https://localhost:44381/api/TmVendors/SaveData', {  
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
            debugger;
    })  
  }  

    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>APPROVED VENDOR</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Vendor Code&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td> <TextField id="accountCode" value={this.state.accountCode}onChange={this.accountCode}/></td>
                            <td><TextField  type="hidden"  id="accountName" onChange={this.accountName}value={this.state.accountName}/></td>
<td> <Autocomplete    freeSolo  options={this.state.Vendor} getOptionLabel={option => option.accountName} className="txt2" 
id="accountName"  onChange={this.VendorCodeChange} renderInput={params => ( <TextField {...params}  fullWidth onChange={this.chn}/> )}/> </td>
                          <td><button type="button"onClick={e => this.View(this.state.accountCode,this.state.itemCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Code</InputLabel> </td>
                        <td> <TextField id="itemCode" value={this.state.itemCode}/></td>
                        <td><TextField  type="hidden"  id="itemName" onChange={this.itemName}value={this.state.itemName}/></td>
<td> <Autocomplete    freeSolo  options={this.state.ItemCode} getOptionLabel={option => option.itemName} className="txt2" 
id="itemName"  onChange={this.ItemCodeChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                       </table>
                    <table >
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Purchase Type</InputLabel></td>
                       <td> <div class="form-check-inline">
                       <div className="radio"> <label>
            <input   type="radio"   value="NP"  checked={this.state.purType === "NP"}  onChange={this.ValueChange}/>Normal&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="CP"  checked={this.state.purType === "CP"}  onChange={this.ValueChange}/>Consigment&nbsp;&nbsp;&nbsp;</label> </div>
            </div>  </td>
                     
                   </tr>
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
                   
                   </table>
                   </div>
                   </div>
                    
                    </CardBody> 
                    <CardFooter>
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