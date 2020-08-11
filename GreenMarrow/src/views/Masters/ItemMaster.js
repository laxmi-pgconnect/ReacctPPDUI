import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import CardFooter from "components/Card/CardFooter.js";
import { InputLabel } from "@material-ui/core";
import './Item.css';

export default class ItemMaster extends Component{


render(){


    return(
            <div style={{position:"absolute"}}> 
        <GridContainer  >
        <GridItem xs={12} sm={12} md={15}>
          <Card>
            <CardHeader color="primary"style={{height:40}} >
            <h4  >Item Master</h4>
             </CardHeader>
             <CardBody>
             <div class="row" >
             <div class="col-sm-9 col-md-6 col-lg-5" >
                        <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Code</InputLabel> </td>
                        <td><TextField  id="itemcode" label="ItemCode" /></td>
                        <td><TextField id="itemname" label="ItemName" style={{width:250}} /></td>
                        <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Type</InputLabel> </td>
                        <td><TextField id="itemtype" label="ItemType " /></td>
                        <td><TextField id="itemtypename" label="ItemTypeName"style={{width:250}} /></td>
                        </tr>
                        
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ParentItemCode</InputLabel> </td>
                        <td><TextField id="prtitem" label="ParentItemCode" /></td>
                        <td><TextField id="prtitemname" label="ParentItemName"style={{width:250}} /></td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ItemSpecification</InputLabel> </td>
                        <td><TextField id="itemspec" label="Item Spec" /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Short Name</InputLabel> </td>
                        <td><TextField id="shortname" label="Shortname" /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Part Number</InputLabel> </td>
                        <td><TextField id="partno"  label="PartNumber" /></td>
                    </tr>
                   
                   
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>HSN Code</InputLabel> </td>
                        <td><TextField id="hsncode" label="HSNcode" /></td>
                    </tr>
                    </table>
                  <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status</InputLabel></td>
                        <td> <RadioGroup row aria-label="position" name="position"className="radio"style={{marginLeft:75}}>
                            <FormControlLabel id="ISACTIVE_0" value="A" control={<Radio color="primary" />} label="Active" />
                            <FormControlLabel id="ISACTIVE_1"value="I" control={<Radio color="primary" />} label="InActive" />
                            <FormControlLabel id="ISACTIVE_2"value="AP" control={<Radio color="primary" />} label="For Approval" />
                            </RadioGroup></td>
                    </tr>
                    </table>
                  
                 </div>
                 <div class="col-sm-9 col-md-5 col-lg-7" style={{borderStyle:"ridge"}}>
           
           <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white"}}>Item Details</h4>
           <table >
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Category</InputLabel> </td>
                <td><TextField id="category" label="Category" /></td>
                <td><TextField id="categoryname" label="CategoryName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>VisualInspection</InputLabel></td>
                <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
            </tr>
            <tr >
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM(LargestUnit)</InputLabel> </td>
                <td><TextField id="uombig" label="UOM big" /></td>
                <td><TextField id="uombigname" label="UOMbigName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Inspection</InputLabel></td>
                <td> <FormControlLabel id="inspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM(SmallestUnit)</InputLabel> </td>
                <td><TextField id="uomsmall" label="UOM small" /></td>
                <td><TextField id="uomsmallname" label="UOMsmallName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Cash Purchase</InputLabel></td>
                <td> <FormControlLabel id="cashpur" control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM Relation</InputLabel> </td>
                <td><TextField  label="UOM Relation" id="uomrelation" /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM Purchase</InputLabel> </td>
                <td><TextField id="uompur" label="UOMPurchase" /></td>
                <td><TextField id="uompurname" label="UOMPurchaseName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>STD Wt</InputLabel></td>
                <td><TextField id="stdwt" label="StdWt" style={{marginLeft:-25}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM Stock</InputLabel> </td>
                <td><TextField  label="UOMStock" id="uomstk" /></td>
                <td><TextField  label="UOMStockName" id="uomstkname"style={{width:250}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Container Code1</InputLabel> </td>
                <td><TextField  defaultValue="NONE" id="contcode1" /></td>
                <td><TextField  defaultValue="NONE"id="containercode1" style={{width:250}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Container Code2</InputLabel> </td>
                <td><TextField  defaultValue="NONE" id="contcode2" /></td>
                <td><TextField  defaultValue="NONE"id="containercode2" style={{width:250}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Premix Code1</InputLabel> </td>
                <td><TextField defaultValue="NONE" id="pmxcode1" /></td>
                <td><TextField defaultValue="NONE"id="premixcode1"style={{width:250}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Premix Code2</InputLabel> </td>
                <td><TextField  defaultValue="NONE"id="pmxcode1"/></td>
                <td><TextField  defaultValue="NONE"id="premixcode2"style={{width:250}} /></td>
            </tr>
             <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Item Group</InputLabel></td>
                <td><input type="radio" name="optradio" value="capital" checked style={{marginTop:25}}/>
                <InputLabel class="radio-inline" style={{fontSize:18}}>Capital</InputLabel></td>
                 <td>   <InputLabel class="radio-inline"style={{fontSize:18}}>
                     <input type="radio"id="consumable" name="optradio"style={{marginTop:25}}/>Consumable</InputLabel></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Section</InputLabel> </td>
                <td><TextField id="section" label="Section" /></td>
                <td><TextField id="sectionname"  label="SectionName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Grade</InputLabel></td>
                <td> <Select labelId="demo-simple-select-label" id="demo-simple-select"value="A" style={{marginLeft:-40}} >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    </Select></td>
                </tr>
            </table><br/>
         </div>

 
            </div>
         
                </CardBody>
                <CardFooter>
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