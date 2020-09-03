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

export default class ApprovedVendor extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            VendorCode: [{accountCode:'',accountName:''}] ,
            Item: [{itemCode:'',itemName:''}] ,
          
                            
}  
}  
VendorCodeChange=(event,value)=>{
    this.setState({accountCode:value.accountCode})
     }
     ItemChange=(event,value)=>{
        this.setState({itemCode:value.itemCode})
         }
    
 componentDidMount() {  
 this.VendorCodeData();
 this.ItemData();
 this.Delete();

  }
  VendorCodeData(){
        axios.post('https://localhost:44381/api/TmVendors/VendorCode').then(response => {  
         console.log(response.data);  
         this.setState({  
            VendorCode: response.data  
         });  
         });  
         }
         ItemData(){
            axios.post('https://localhost:44381/api/TmVendors/ItemCode').then(response => {  
             console.log(response.data);  
             this.setState({  
                Item: response.data  
             });  
             });  
             }
             Delete(accountCode){
                axios.delete('https://localhost:44381/api/TmVendors/' + accountCode)
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
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>APPROVED VENDOR</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Vendor Code</InputLabel></td>
                            <td> <TextField id="accountCode" value={this.state.accountCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.VendorCode} getOptionLabel={option => option.accountName} className="txt2" 
 id="accountName"  onChange={this.VendorCodeChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                            <td><button type="button"onClick={e => this.View(this.state.accountCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Code</InputLabel> </td>
                        <td> <TextField id="itemCode" value={this.state.itemCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Item} getOptionLabel={option => option.itemName} className="txt2" 
 id="itemName"  onChange={this.ItemChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                       </table>
                    <table >
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Purchase Type</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio">
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Normal" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="Consigment" />
                           </RadioGroup></td>
                   </tr>
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio">
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                           <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                           </RadioGroup></td>
                   </tr>
                   
                   </table>
                   </div>
                   </div>
                    
                    </CardBody> 
                    <CardFooter>
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
 <button type="button" class="btn btn-primary" onClick={e => this.Delete(this.state.accountCode)}>Delete</button>    
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