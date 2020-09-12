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
export default class ItemCategory extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            Category: [{catgyCode:'',catgyName:''}] ,
            Parent: [{prtCode:'',prtName:''}] ,
            GrantParent: [{gprtCode:'',gprtName:''}] ,
            catgyCode:'',catgyName:'',prtCode:'',prtName:'',gprtCode:'',gprtName:'',isActive:''
           
}  
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  
this.catgyName = this.catgyName.bind(this);  
this.SaveData=this.SaveData.bind(this);
this.View=this.View.bind(this);
this.catgyCode = this.catgyCode.bind(this);  
}  
catgyCode(event) {  
  this.setState({ catgyCode: event.target.value })  
} 
catgyName(event) {  
  this.setState({ catgyName: event.target.value })  
} 
onValueChange(event) {
  this.setState({
    isActive: event.target.value
  });
}
chn(event){
  this.setState({catgyName:event.target.value})
}

CategoryChange=(event,value)=>{
this.setState({catgyCode:value.catgyCode})
this.setState({catgyName:value.catgyName})
}
ParentChange=(event,value)=>{debugger;
this.setState({prtCode:value.prtCode})
this.setState({prtName:value.catgyName})
 }
 GrantParentChange=(event,value)=>{
    this.setState({gprtCode:value.gprtCode})
    this.setState({gprtName:value.catgyName})
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
               SaveData(event) { debugger;
                let data = {
                  catgyCode:this.state.catgyCode,
                  catgyName: this.state.catgyName,  
                  prtCode: this.state.prtCode,  
                  prtName: this.state.prtName,  
                  gprtCode: this.state.gprtCode,  
                  gprtName: this.state.gprtName,  
                  isActive: this.state.isActive   }
                 fetch('https://localhost:44381/api/TmItemcategories/SaveUpdate', {  
                    crossDomain:true,
                    method: 'Post',     
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(data)
                  })
              .then(Response => Response.json())        
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
            View(catgyCode) {
              axios.post('https://localhost:44381/api/TmItemcategories/ViewItemCategory?catgyCode='+catgyCode )
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
            Delete(catgyCode){
              axios.delete('https://localhost:44381/api/TmGrpschedules/' + catgyCode)
              .then(json => {  
                   alert('Record deleted successfully!!');  
                
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
                            <td> <TextField id="catgyCode" value={this.state.catgyCode}onChange={this.catgyCode}/></td>
                            <td><TextField  type="hidden"  id="catgyName" onChange={this.catgyName}value={this.state.catgyName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Category} getOptionLabel={option => option.catgyName} className="txt2" 
 id="catgyName"  onChange={this.CategoryChange} renderInput={params => ( <TextField {...params}  fullWidth onChange={this.chn}/> )}/> </td>
                            <td><button type="button"onClick={e => this.View(this.state.catgyCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Parent Code</InputLabel> </td>
                        <td> <TextField id="prtCode" value={this.state.prtCode}/></td>
                        <td><TextField  type="hidden" id="prtName" value={this.state.prtName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Parent} getOptionLabel={option => option.catgyName} className="txt2" 
 id="prtName"  onChange={this.ParentChange} renderInput={params => ( <TextField {...params}label={this.state.prtName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Grant Parent Code</InputLabel> </td>
                        <td> <TextField id="gprtCode" value={this.state.gprtCode}/></td>
                        <td><TextField  type="hidden" id="gprtName" value={this.state.gprtName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.GrantParent} getOptionLabel={option => option.catgyName} className="txt2" 
 id="gprtName"  onChange={this.GrantParentChange} renderInput={params => ( <TextField {...params}label={this.state.gprtName}  fullWidth /> )}/> </td>
                        </tr>
                        
                    </table>
                   
                   <table>
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