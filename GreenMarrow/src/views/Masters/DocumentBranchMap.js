
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




export default class DocumentBranchMap extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>Document Branch Map</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Inventory Accounts</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Zone</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                          <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Territory</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr></table>
                         <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch Map Type</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:15}}>
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="New" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="Existing" />
                            </RadioGroup></td>
                   </tr></table>
                   <table>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Doc Type</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Doc Class</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Doc Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        </tr>                        
                       </table>
                       <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Denomination Req&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio">
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="No" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="Yes" />
                            </RadioGroup></td>
                   </tr>
                   <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio">
                            <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                            <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                            <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                            </RadioGroup></td>
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