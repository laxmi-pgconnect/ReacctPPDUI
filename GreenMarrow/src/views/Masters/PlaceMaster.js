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




export default class PlaceMaster extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40}} >
                <h4>Place Master</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Place Type&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio">
                            <FormControlLabel id="country" value="country" control={<Radio color="primary" />} label="Country" />
                            <FormControlLabel id="State"value="State" control={<Radio color="primary" />} label="State" />
                            <FormControlLabel id="District"value="District" control={<Radio color="primary" />} label="District" />
                            <FormControlLabel id="Taluk/Mandal" value="Taluk/Mandal" control={<Radio color="primary" />} label="Taluk/Mandal" />
                            <FormControlLabel id="City/Town"value="City/Town" control={<Radio color="primary" />} label="City/Town" />
                            <FormControlLabel id="Pincode"value="Pincode" control={<Radio color="primary" />} label="Pincode" />
                            <FormControlLabel id="STD"value="STD" control={<Radio color="primary" />} label="STD" />
                            </RadioGroup></td>
                    </tr></table>
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Place Code&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        
                       </table></div>
                    </div>
                    <div class="row"style={{borderStyle:"ridge"}} >
                      <div class="col">
                            <table>
                            <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Country</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Currency</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>District</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Taluk/Mandal</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>City/Town</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PinCode</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>STDCode</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        </tr>
                            </table>
                       <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:60}}>
                            <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                            <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                            <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
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
</div> </CardFooter>    
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}