import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel,  TextField } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import CardFooter from "components/Card/CardFooter.js";
import './Rep.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 

export default class ApprovedVendor extends Component{
   constructor(props) {  
      super(props)  
      this.state = {  
        Vendor:[{accountCode:'',accountName:''}] ,
          Parent: [{prtCode:'',prtName:''}] ,
          ItemCode:[{itemCode:'',itemName:''}] ,
         
}  
this.onValueChange = this.onValueChange.bind(this);
this.ValueChange = this.ValueChange.bind(this);
this.chn = this.chn.bind(this);  
}  
accountCode(event) {  
this.setState({ accountCode: event.target.value })  
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
   View(accountCode) {
      axios.post('https://localhost:44381/api/TmItemcategories/ViewItemCategory?catgyCode='+accountCode )
        .then(response => {
  
          console.log(response.data);
          this.setState({
            prtCode: response.data[0].prtCode,
              prtName: response.data[0].prtName,
              gprtCode: response.data[0].gprtCode,
              gprtName: response.data[0].gprtName,
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
                <h4>APPROVED VENDOR</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Vendor Code&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td> <TextField id="accountCode" value={this.state.accountCode}onChange={this.accountCode}/></td>
<td> <Autocomplete    freeSolo  options={this.state.Vendor} getOptionLabel={option => option.accountName} className="txt2" 
id="accountName"  onChange={this.VendorCodeChange} renderInput={params => ( <TextField {...params}  fullWidth onChange={this.chn}/> )}/> </td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Code</InputLabel> </td>
                        <td> <TextField id="itemCode" value={this.state.itemCode}/></td>
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
                    
                    </CardBody> 
                    <CardFooter>
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
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