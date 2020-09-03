import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardFooter from "components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button} from 'react-bootstrap';
import './Item.css';
import axios from 'axios'; 
export default class Save extends React.Component{
    constructor(props) {  
        super(props)
        this.SaveData=this.SaveData.bind(this);
        this.state = {  
            schNo:'',
            schName:'',isActive:'',
            prtSchNo:'',prtSchName:'',
                ItemP: [{schNo:'',schName:''}],
                ItemPS: [{prtSchNo:'',prtSchName:''}]              
               
              
} 
this.schNo = this.schNo.bind(this);  
this.schName = this.schName.bind(this);  
this.prtSchNo = this.prtSchNo.bind(this);  
this.prtSchName = this.prtSchName.bind(this);  
this.isActive = this.isActive.bind(this);  

}  
schNo(event) {  
  this.setState({ schName: event.target.value })  
} 
isActive(event) {  
  this.setState({ isActive: event.target.value })  
} 
schName(event) {  
    this.setState({ schName: event.target.value })  
  } 
  prtSchNo(event) {  
    this.setState({ prtSchNo: event.target.value })  
  } 
  prtSchName(event) {  
    this.setState({ prtSchName: event.target.value })  
  } 
  
schNoChange=(event,value)=>{
this.setState({schNo:value.schNo})
}
pschNoChange=(event,value)=>{
    this.setState({prtSchNo:value.schNo})
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
     SaveData(event) {  
        
      let data = { schName: this.state.schName,  
        prtSchNo: this.state.prtSchNo,  
        prtSchName: this.state.prtSchName,  
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
        if (result.status === 'SUCCESSFULL')  
        {
         alert("SAVED SUCCESSFULLY")
          this.props.history.push("/Save"); 
        
        }
        else if(result.status === 'Conflict')
        {
          alert("Record Already Exist") 
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
            prtSchName: response.data[0].prtSchName,
        });
      })
  }
  Delete(schNo){
    axios.delete('https://localhost:44381/api/TmGrpschedules/' + schNo)
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
                <h4>GroupSchedule</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">GroupScheduleNo</InputLabel></td>
                            <td> <TextField id="schNo" value={this.state.schNo}/></td>
                            <td><Autocomplete    freeSolo  options={this.state.ItemP} getOptionLabel={option => option.schName} className="txt2" 
 id="schName" value={this.state.schName} onChange={this.schNoChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
                            <td> <Button type="button" onClick={e => this.View(this.state.schNo)} >View</Button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ParentSchedule</InputLabel> </td>
                        <td><TextField id="pschno" value={this.state.prtSchNo}/></td>
                        <td> <Autocomplete    freeSolo  options={this.state.ItemPS} getOptionLabel={option => option.schName} className="txt2" 
 id="PrtSchName"value={this.state.prtSchName}   onChange={this.pschNoChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>
                        </tr>
                        
                       </table>
                   
                  
                   <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:70}}>
                           <FormControlLabel id="isActive" value="A" control={<Radio color="primary" />} label="Active" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                           <FormControlLabel id="ISACTIVE_2"value="W"control={<Radio color="primary" />} label="For Approval" />
                           </RadioGroup></td>
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
