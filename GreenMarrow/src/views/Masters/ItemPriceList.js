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

export default class ItemPriceList extends Component{


render(){
 return(
    <div style={{position:"absolute"}}> 
    <GridContainer  >
        <GridItem >
          <Card>
            <CardHeader color="primary"style={{height:40}} >
            <h4>ITEM PRICE LIST</h4>
             </CardHeader>
             <CardBody>
        <div style={{borderStyle:"ridge"}} >
            <div >

             <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>DocNo</InputLabel> </td>
                        <td><TextField  id="itemcode" label="docno" /></td>
                        <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>DocDate</InputLabel> </td>
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
          <table >
          <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Company</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>ItemType</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
           <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Item</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
           <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Zone</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Nature</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
           <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Region</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Party</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
          
           <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Territory</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
           <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Sub Branch</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Pric.Type</InputLabel> </td>
               <td><TextField  label="code" id="code" /></td>
               <td><TextField  label="name" id="name"style={{width:250}} /></td>
           </tr>
           
           </table>
           <table>
                             <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Stock UOM</InputLabel> </td>
               <td><TextField  label="stock" id="code" /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Age</InputLabel> </td>
               <td><TextField  label="Age" id="code" /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Price</InputLabel> </td>
               <td><TextField  label="stock" id="code" /></td>
               </tr>
               <tr>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Discount%</InputLabel> </td>
               <td><TextField  label="Age" id="code" /></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Eff.From</InputLabel> </td>
               <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
               <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Effect.To</InputLabel> </td>
               <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
            </tr>
           </table>
          </div>
                   
          <div class="divHead" id="divPanel2" style={{ LEFT: 13, OVERFLOW:"scroll", width: 1010, position:"absolute", height: 175}}
tabIndex="-1" runat="server" ms_positioning="GridLayout">
    <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, position: "absolute",overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
    <table class="table table-dark table-striped"id="gdHead" cellSpacing="1">
<tr style={{fontWeight:"bolder",color:"white",backgroundColor:"rgb(46, 95, 110)"}}>
<td id="taxtype" title="A" style={{width: 100, height: 20, align:"center"}}>PricingType</td>
<td id="taxdesc" title="B" style={{width: 100, height: 20, align:"left"}}>ItemCode</td>
<td id="tax" title="C" style={{width: 150, height: 20, align:"center"}}>ItemName</td>
<td id="taxamount" title="D" style={{width: 100, height: 20, align:"center"}}>Nature</td>
<td id="tax" title="C" style={{width: 100, height: 20, align:"center"}}>Rate</td>
<td id="taxamount" title="D" style={{width: 200, height: 20, align:"center"}}>EffectFrom</td>
<td id="tax" title="C" style={{width: 100, height: 20, align:"center"}}>EffectTo</td>
<td id="taxamount" title="D" style={{width: 100, height: 20, align:"center"}}>Discount%</td>
<td id="incl" title="E" style={{width:100, height: 20, align:"center"}}>PartyCode</td>
<td id="incl" title="E" style={{width:100, height: 20, align:"center"}}>Age</td>
<td id="incl" title="E" style={{width:100, height: 20, align:"center"}}>RegionCode</td>
<td id="incl" title="E" style={{width:100, height: 20, align:"center"}}>RegionName</td>
</tr>
<tr style={{VISIBILITY: "hidden"}}>
<td style={{width: 105,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 150,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 200,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
</tr>
<tr style={{VISIBILITY: "hidden"}}>
<td style={{width: 105,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 150,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 120,  align:"left"}}>aa</td>
<td style={{width: 100, align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
<td style={{width: 100,  align:"right"}}>aa</td>
</tr>
</table>


              </div>
             </div>
              </div>
              </div>
             
             </CardBody>
             
             </Card>
             
           
             </GridItem>
             </GridContainer>
             <CardFooter style={{marginTop:120}}>
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button" class="btn btn-success "style={{borderRadius:7}}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Delete</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
 <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
</div> </CardFooter>
    </div>


 )
}
}