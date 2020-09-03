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

export default class CostCenter extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            CostCenter: [{ccCode:'',ccName:''}] ,   
            Parent: [{pccCode:'',ccName:''}] ,
            GrantParent: [{gpccCode:'',ccName:''}] ,
            CostCenterType: [{gcmType:'',descn:''}] ,
              
              
}  
}  
CostCenterChange=(event,value)=>{
    this.setState({ccCode:value.ccCode})
     }
     ParentChange=(event,value)=>{debugger;
        this.setState({pccCode:value.ccCode})
         }
         GrantParentChange=(event,value)=>{
            this.setState({gppccCode:value.ccCode})
             }
             CostCenterTypeChange=(event,value)=>{
                this.setState({gcmType:value.gcmType})
                 }
     componentDidMount() {  
        this.CostCenterData();
        this.ParentData();
        this.GrantParentData();
        this.CostCenterTypeData();
        this.Delete();
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
                            axios.delete('https://localhost:44381/api/TmCostcenters/' + ccCode)
                            .then(json => {  
                                 alert('Record deleted successfully!!');  
                                this.props.history.push(""); 
                                })  
                               }
    render(){
        return(
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
                            <td> <TextField id="ccCode" value={this.state.ccCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenter} getOptionLabel={option => option.ccName} className="txt2" 
 id="ccName"  onChange={this.CostCenterChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                            <td><button type="button"onClick={e => this.View(this.state.ccCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ParentCostCenter</InputLabel> </td>
                        <td> <TextField id="pccCode" value={this.state.pccCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Parent} getOptionLabel={option => option.ccName} className="txt2" 
 id="pccName"  onChange={this.ParentChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>GPCostCenter</InputLabel> </td>
                        <td> <TextField id="gccCode" value={this.state.gccCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GrantParent} getOptionLabel={option => option.ccName} className="txt2" 
 id="gccName"  onChange={this.GrantParentChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>CostCenterType</InputLabel> </td>
                        <td> <TextField id="gcmType" value={this.state.gcmType}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CostCenterType} getOptionLabel={option => option.descn} className="txt2" 
 id="descn"  onChange={this.CostCenterTypeChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                       </table>
                   
                  
                   <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:70}}>
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                           <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                           </RadioGroup></td>
                   </tr>
                   
                   </table> </div> </div>
                   
                
                    
                    </CardBody> 
                    <CardFooter >
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.ccCode)}>Delete</button>
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