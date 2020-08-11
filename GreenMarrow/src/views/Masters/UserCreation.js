
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
import './Item.css';




export default class UserCreation extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>User Creation</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">User ID</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>User Category</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Additional RightsFor</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                        <tr>
                        <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Admin User</InputLabel></td>
                          <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                         </tr>  
                         <tr >
                        <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>AdditionalRights</InputLabel></td>
                          <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                         </tr>                       
                      
                   </table></div>
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