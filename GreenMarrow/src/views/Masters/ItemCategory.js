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
export default class ItemCategory extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            Category: [{catgyCode:'',catgyName:''}] ,
            Parent: [{pcatgyCode:'',catgyName:''}] ,
            GrantParent: [{gcatgyCode:'',catgyName:''}] ,
           
           
}  
}  

CategoryChange=(event,value)=>{
this.setState({catgyCode:value.catgyCode})
}
ParentChange=(event,value)=>{
this.setState({pcatgyCode:value.catgyCode})
 }
 GrantParentChange=(event,value)=>{debugger;
    this.setState({gcatgyCode:value.catgyCode})
     }
     
            

componentDidMount() {  
this.CategoryData();
this.ParentData();
this.GrantParentData();
this.Delete();
}
CategoryData(){
axios.post('https://localhost:44381/api/TmItemcategories/CategoryCode').then(response => {  
 console.log(response.data);  
 this.setState({  
    Category: response.data  
 });  
 });  
 }
 ParentData(){
    axios.post('https://localhost:44381/api/TmItemcategories/ParentCode').then(response => {  
     console.log(response.data);  
     this.setState({  
        Parent: response.data  
     });  
     });  
     }
     GrantParentData(){
        axios.post('https://localhost:44381/api/TmItemcategories/GrantParentCode').then(response => {  
         console.log(response.data);  
         this.setState({  
            GrantParent: response.data  
         });  
         });  
         }
         Delete(catgyCode){
            axios.delete('https://localhost:44381/api/TmItemcategories/' + catgyCode)
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
                <h4>ITEM CATEGORY</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Category Code</InputLabel></td>
                            <td> <TextField id="catgyCode" value={this.state.catgyCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Category} getOptionLabel={option => option.catgyName} className="txt2" 
 id="catgyName"  onChange={this.CategoryChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                            <td><button type="button"onClick={e => this.View(this.state.catgyCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Parent Code</InputLabel> </td>
                        <td> <TextField id="pcatgyCode" value={this.state.pcatgyCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Parent} getOptionLabel={option => option.catgyName} className="txt2" 
 id="pcatgyName"  onChange={this.ParentChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Grant Parent Code</InputLabel> </td>
                        <td> <TextField id="gcatgyCode" value={this.state.gcatgyCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GrantParent} getOptionLabel={option => option.catgyName} className="txt2" 
 id="gcatgyName"  onChange={this.GrantParentChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        
                    </table>
                   
                   <table>
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:75}}>
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