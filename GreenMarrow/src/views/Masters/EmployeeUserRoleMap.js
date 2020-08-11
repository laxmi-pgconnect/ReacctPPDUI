
import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from '@material-ui/core/TextField';
import CardFooter from "components/Card/CardFooter.js";
import { InputLabel } from "@material-ui/core";
import './Item.css';
import { table} from 'react-bootstrap';

export default class EmployeeUserRoleMap extends Component{


render(){
 return(
    <div style={{position:"absolute"}}> 
    <GridContainer  >
        <GridItem >
          <Card>
            <CardHeader color="primary"style={{height:40,width:900}} >
            <h4 >EmployeeUserRoleMap</h4>
             </CardHeader>
             <CardBody>
        <div style={{borderStyle:"ridge"}} >
            <div >

             <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>UserId</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Category&Desgn</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>User Role</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><TextField  label="name" id="name"style={{width:250}} /></td>
                        </tr>
                     </table>
                     <table>
                         <tr>
                         <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Effect From&nbsp;</InputLabel> </td>
               <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Effect To</InputLabel> </td>
               <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         </table></div></div>
           
           <div   style={{borderStyle:"ridge"}}>
            
           <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:38}}>Item Details
                  <div class="btn-group "style={{position: "absolute",right: 20}}>
    <button type="button" class="btn btn-primary">Add</button>
    <button type="button" class="btn btn-primary">Clear</button>
    <button type="button" class="btn btn-primary">Delete</button>
  </div></h4>
          
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