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
import Checkbox from '@material-ui/core/Checkbox';




export default class ItemBranchMap extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40}} >
                <h4>ItemBranchMap</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div class="col">
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>item Code</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch Code</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr><br/>
                    </table>
                   </div>
                   </div>
                   <div class="row"style={{borderStyle:"ridge"}}>
                    <div class="col">
                    <table>
                    <tr>
                        <h4 style={{color:"blue",fontFamily:"arial",fontStyle:"bold"}}>Stock Level</h4>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Minimum</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Maximum</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Recorder</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                    <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>IsTaxable</InputLabel></td>
                    <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                    </tr>
                    </table>
                    </div>
                    <div class="row">
                    <div class="col">
                        <table>
                    <tr>
                        <h4 style={{color:"blue",fontFamily:"arial",fontStyle:"bold"}}>Last Purchase</h4>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>LastPur.Rate</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>LastPur.Date</InputLabel> </td>
                        <td><TextField  id="itemcode" /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Last Supplier</InputLabel> </td>
                        <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                    </tr>
                   
                    </table>
                    </div>
                    </div>
                    <div>
                    <table>
                    <tr>
                        <h4 style={{color:"blue",fontFamily:"arial",fontStyle:"bold"}}>Rate</h4>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Minimum</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Maximum</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Average</InputLabel> </td>
                        <td><TextField  id="itemcode"  /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tax Rate</InputLabel> </td>
                        <td><TextField  id="itemcode" /></td>
                    </tr>
                    </table>
                   
                   <table>
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:50}}>
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                           <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="Approval" />
                           </RadioGroup></td>
                   </tr>
                    
                  
                   </table>
                </div>
                
                  </div>
                  </CardBody> 
                  <CardFooter >
       <div class="btn-group " style={{position: "absolute",right: 0}}>
    <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Delete</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
    <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
  </div>
            </CardFooter>
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}