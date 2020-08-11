
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




export default class DocActionEmpMapping extends Component{



    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
                <CardHeader color="primary"style={{height:40,width:1000}} >
                <h4>DocActionEmpMapping</h4>
                 </CardHeader>
                 <CardBody>
                 <div class="row"style={{borderStyle:"ridge"}} >
                     <div >
                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Branch</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Transactions</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                        <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Action</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                         </tr>
                         <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>EmpolyeeCode</InputLabel> </td>
                        <td><TextField id="formname" label="Code"/></td>
                         </tr>
                       </table></div>
                    </div>
                    <div class="row" style={{borderStyle:"ridge",height:38}}>
                    <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:32}}>Emploee Branch/Action/DocType Mapping
                  <div class="btn-group "style={{position: "absolute",right: 20}}>
    <button type="button" class="btn btn-primary">Add</button>
    <button type="button" class="btn btn-primary">Clear</button>
    <button type="button" class="btn btn-primary">Delete</button>
  </div></h4>
                    <div class="divHead" id="divPanel2" style={{ LEFT: 13, OVERFLOW:"scroll", width: 1010, position:"absolute", height: 175}}
tabIndex="-1" runat="server" ms_positioning="GridLayout">
    <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width:1011,marginTop:30, position: "absolute",overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
    <table class="table table-dark table-striped"id="gdHead" cellSpacing="1">
<tr style={{fontWeight:"bolder",color:"white",backgroundColor:"rgb(46, 95, 110)"}}>
<td id="taxdesc" title="B" style={{width: 100, height: 20, align:"left"}}>BranchCode</td>
<td id="tax" title="C" style={{width: 100, height: 20, align:"center"}}>Trans.Code</td>
<td id="taxamount" title="D" style={{width: 100, height: 20, align:"center"}}>Trans.Name</td>
<td id="tax" title="C" style={{width: 100, height: 20, align:"center"}}>ActionCode</td>
<td id="taxamount" title="D" style={{width: 100, height: 20, align:"center"}}>ActionName</td>
<td id="tax" title="C" style={{width: 100, height: 20, align:"center"}}>EmplCode</td>
<td id="taxamount" title="D" style={{width: 100, height: 20, align:"center"}}>EmplName</td>

</tr>
<tr style={{VISIBILITY: "hidden"}}>
<td style={{width: 100,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
</tr>
<tr style={{VISIBILITY: "hidden"}}>
<td style={{width: 100,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
</tr>

</table>

</div>
              </div>
             </div>
              </div>
              </div>
                   
                    </CardBody> 
                    <CardFooter >
             <div class="btn-group " style={{position: "absolute",right: 0,marginTop:300}}>
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