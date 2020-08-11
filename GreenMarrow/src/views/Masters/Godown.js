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




export default class Godown extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40}} >
                <h4>GODOWN</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row" style={{borderStyle:"ridge"}}>
                     <div>
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Godown</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                        <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Godown Type</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Weigh Bridge</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Cost Center</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                   </table>
                  
                   <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:55}}>
                            <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                            <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                            <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                            </RadioGroup></td>
                    </tr>
                    </table>
                    </div>
                    </div>
                    <div class="row" style={{borderStyle:"ridge"}}>
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>DoorNo</InputLabel> </td>
                        <td><TextField id="itemname" label="doorno" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Country</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Street</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PhoneNo</InputLabel> </td>
                        <td><TextField id="itemname" label="phoneno" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>District</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ContactPerson</InputLabel> </td>
                        <td><TextField id="itemname" label="contactperson" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tlk/Mandal</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Fax No</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>City/Town</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Mobile No</InputLabel> </td>
                        <td><TextField id="itemname" label="street" style={{width:250}} /></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PinCode</InputLabel> </td>
                        <td><TextField  id="itemcode" label="Code" /></td>
                        <td><TextField id="itemname" label="Name" style={{width:250}} /></td>
                    </tr>
                    </table>
                       
                    </div> </CardBody> 
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