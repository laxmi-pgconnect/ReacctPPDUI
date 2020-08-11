import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardFooter from "components/Card/CardFooter.js";

import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './Item.css';
import { purple } from '@material-ui/core/colors';


export default class AccountBranchMap extends Component{
  
    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>ACCOUNT BRANCH MAP</h4>
                 </CardHeader>
                 <CardBody>
                 <div style={{borderStyle:"ridge"}} >
                       

                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Account Code</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                          
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Company</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region Zone</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Territory</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                       </table> 
                       <div >
                           <table>
                      <tr> <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Budget Applicable to All</InputLabel></td>
                      <td> <FormControlLabel id="cashpur" control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                       </tr> 
                       <tr>
                       <button type="button" class="btn btn-primary "style={{borderRadius:1}}>View Branches</button>
                       </tr>
                        </table> </div></div>
                        <div class="row"style={{borderStyle:"ridge",height:200}} >
                       
                        <div class="col" style={{height:35,backgroundColor:"purple",color:"white",fontSize:18}}>
                        <table>
                            <tr>
                                <td style={{width:150}}>Branch Code</td>
                                <td style={{width:150}}>Branch Name</td>
                                <td style={{width:150}}>Budget</td>
                                <td style={{width:150}}>Active</td>
                            </tr>
                        </table>

                            </div>



                            </div>     
                          
                   
                
                    
                    </CardBody> 
                    <CardFooter>
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button"class="btn btn-success "style={{borderRadius:7}}>Save</button>

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