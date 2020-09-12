import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import CardFooter from "components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import axios from 'axios'; 
export default class Save extends React.Component{
    constructor(props) {  
        super(props)
        this.SaveData=this.SaveData.bind(this);
        this.state = {  
          
            schNo:'',
            schName:'',isActive:'',
            prtSchNo:'',prtName:'',
                ItemP: [{schNo:'',schName:''}],
                ItemPS: [{prtSchNo:'',prtName:''}]              
               
              
} 
this.schNo = this.schNo.bind(this);  
this.schName = this.schName.bind(this);  
this.prtSchNo = this.prtSchNo.bind(this);  
this.isActive = this.isActive.bind(this);  
this.onValueChange = this.onValueChange.bind(this);
this.chn = this.chn.bind(this);  

}  
onValueChange(event) {
  this.setState({
    isActive: event.target.value
  });
}
schNo(event) {  
  this.setState({ schNo: event.target.value })  
} 
schName(event) {  
  this.setState({ schName: event.target.value })  
} 
prtName(event) {  
  this.setState({ prtName: event.target.value })  
} 

isActive(event) {  
  this.setState({ isActive: event.target.value })  
} 
  prtSchNo(event) {  
    this.setState({ prtSchNo: event.target.value })  
  } 
 
  schNoChange=(event,value)=>{
    this.setState({schNo:value.schNo})
    this.setState({schName:value.schName})
    }
    pschNoChange=(event,value)=>{
        this.setState({prtSchNo:value.schNo})
        this.setState({prtName:value.schName})
         }
         chn(event){
            this.setState({schName:event.target.value})
          }

componentDidMount() {  
this.schNoData();
this.parentschNoData();
this.SaveData();
this.Delete();


}
schNoData(){
axios.post('https://localhost:44381/api/TmGrpschedules/GrpSchedule').then(response => {  
console.log(response.data);  

this.setState({  
ItemP: response.data  
});  
});  
}  
parentschNoData(){
    axios.post('https://localhost:44381/api/TmGrpschedules/ParentSchedule').then(response => {  
     console.log(response.data);  
     
    this.setState({  
        ItemPS: response.data  
     });  
     });  
     }  
     SaveData(event) { debugger;
        
      let data = {
        schNo:parseInt(this.state.schNo),
        schName: this.state.schName,  
        prtSchNo: parseInt(this.state.prtSchNo),  
        prtName: this.state.prtName,  
        isActive: this.state.isActive   }
       fetch('https://localhost:44381/api/TmGrpschedules/SaveUpdate', {  
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
  View(schNo) {
    axios.post('https://localhost:44381/api/TmGrpschedules/ViewGrpSchedule?schno=' + schNo)
      .then(response => {

        console.log(response.data);
        this.setState({
            prtSchNo: response.data[0].prtSchNo,
            prtName: response.data[0].prtName,
            isActive:response.data[0].isActive,
        });
      })
  }
  Delete(schNo){
    axios.delete('https://localhost:44381/api/TmGrpschedules/' + schNo)
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
                <h4>GroupSchedule</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">GroupScheduleNo</InputLabel></td>
                            <td> <TextField  id="schNo" value={this.state.schNo}onChange={this.schNo}/></td>
                            <td> <TextField type="hidden"  id="schName"onChange={this.schName} value={this.state.schName}/></td>
                            <td><Autocomplete    freeSolo  options={this.state.ItemP} getOptionLabel={option => option.schName} className="txt2" 
 id="schName" onChange={this.schNoChange} renderInput={params => ( <TextField {...params} onChange={this.chn} fullWidth />   )}   /></td>
                          
                            <td> <Button type="button" onClick={e => this.View(this.state.schNo)} >View</Button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ParentSchedule</InputLabel> </td>
                        <td><TextField   id="prtSchNo" value={this.state.prtSchNo}/></td>
                        <td><TextField  type="hidden" id="prtSchName" value={this.state.prtName}/></td>
                        <td> <Autocomplete    freeSolo  options={this.state.ItemPS} getOptionLabel={option => option.schName} className="txt2" 
 id="PrtSchName"  onChange={this.pschNoChange} renderInput={params => ( <TextField {...params} label={this.state.prtName}  fullWidth />   )}   /> </td>
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
                   
                   </table>
                   </div></div>
                
                    
                    </CardBody> 
                    <CardFooter >
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}} onClick={this.SaveData}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.schNo)}>Delete</button>
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
