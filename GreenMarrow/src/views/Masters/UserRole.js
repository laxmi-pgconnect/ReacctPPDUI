
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
import Checkbox from '@material-ui/core/Checkbox';
import './Item.css';




export default class UserRole extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>User Role</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>User Role&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>Fill Rights</button></td>
                         </tr>
                         </table>
                        <table >
                    <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Menu Category&nbsp;</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio">
                           <FormControlLabel id="master" value="master" control={<Radio color="primary" />} label="Master" />
                           <FormControlLabel id="transaction"value="transaction" control={<Radio color="primary" />} label="Transaction" />
                           <FormControlLabel id="report"value="report" control={<Radio color="primary" />} label="Report" />
                           <FormControlLabel id="MIS"value="MIS" control={<Radio color="primary" />} label="MIS" />
                           <FormControlLabel id="info"value="info" control={<Radio color="primary" />} label="Info" />
                           </RadioGroup></td>
                   </tr>
                   </table>
                   <table>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Menu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                         </table><br/>
                         <table>
                             <h4 style={{color:"blue"}}>Select Option</h4>
                             <tr>
                       
                       <td> <RadioGroup row aria-label="position" name="position"className="radio">
                           <FormControlLabel id="all" value="all" control={<Radio color="primary" />} label="All" />
                           <FormControlLabel id="none"value="none" control={<Radio color="primary" />} label="None" />
                           <FormControlLabel id="invert"value="invert" control={<Radio color="primary" />} label="Invert" />
                           <FormControlLabel id="clearall"value="clearall" control={<Radio color="primary" />} label="Clear All" />
                          </RadioGroup></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <td><div style={{marginTop:20,}}>  
                              <FormControlLabel control={<Checkbox name="checkedC" />} label="Save" />
                          <FormControlLabel control={<Checkbox name="checkedC" />} label="Edit" />
                          <FormControlLabel control={<Checkbox name="checkedC" />} label="View" />
                          <FormControlLabel control={<Checkbox name="checkedC" />} label="Print" />
                          <FormControlLabel control={<Checkbox name="checkedC" />} label="Delete" />
                          <FormControlLabel control={<Checkbox name="checkedC" />} label="Workflow" />
                          </div>
                          </td>
                   </tr></table>
                   <table>
                   <tr><td>
                  <div style={{marginLeft:750}}>
                        <button type="button" class="btn btn-primary "style={{borderRadius:7}}>Add</button>
                        <button type="button" class="btn btn-primary"style={{borderRadius:7}}>Delete</button>
                        </div>
                    </td>
                   </tr>
                         </table>
                   </div>
                   
                    </div>
                    <div class="row"style={{borderStyle:"ridge",height:200}} >





                   </div>
                    
                    </CardBody> 
                    <CardFooter >
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