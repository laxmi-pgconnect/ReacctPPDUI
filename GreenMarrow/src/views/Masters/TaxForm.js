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




export default class TaxForm extends Component{



    render(){
        return(
            <div class="container" style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card >
              <CardHeader color="primary" style={{height:40}}>
                <h4>TAX FORM</h4>
                 </CardHeader>
                 <CardBody >
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div class="col">
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Form Name</InputLabel></td>
                            <td><TextField id="formname" label="Formname"/></td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Tax ID</InputLabel> </td>
                        <td><TextField id="itemtype" label="Taxid " /></td>
                        <td><TextField id="itemtypename" label="Taxid"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>State</InputLabel> </td>
                        <td><TextField id="itemtype" label="State " /></td>
                        <td><TextField id="itemtypename" label="State"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Consolidate Form</InputLabel> </td>
                        <td><TextField id="itemtype" label="State " /></td>
                        </tr>
                    </table>
                   
                   <table>
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                       <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:85}}>
                           <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                           <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                           <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                           </RadioGroup></td>
                   </tr>
                   </table>
                   </div>
                    </div></CardBody> 
                    <CardFooter >
             <div  style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success ">Save</button>
 <button type="button" class="btn btn-success">Delete</button>
 <button type="button" class="btn btn-success">Clear</button>
 <button type="button" class="btn btn-success">Print</button>
 <button type="button" class="btn btn-success"  >Exit</button>
</div> </CardFooter>  
            
                    
                    </Card>
                    </GridItem>
                    </GridContainer>
                    </div>


        )
    }
}