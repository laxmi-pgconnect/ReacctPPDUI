import React, { Component,useState } from 'react';  
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
import ReactDOM from "react-dom";
import './Item.css';

export default class ItemMaster extends Component{
    constructor(props) {
        super(props);
        this.state = {
          item: {
            itemCode: "",
            itemName: "",
            },
            itemT: {
              itemType:"",
               descn:"",
              },
              itemC: {
                catgyCode: "",
                catgyName: "",
                },
                itemL: {
                  uom: "",
                  uomName: "",
                  },
                  cursor: 0,
                  cursor1: 0,
          searchItems: [],
          searchItems1: [],
          searchItems2: [],
          searchItems3: []
        };
        this.autocomplete = this.autocomplete.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.autocomplete1 = this.autocomplete1.bind(this);
        this.selectItem1 = this.selectItem1.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.autocomplete2 = this.autocomplete2.bind(this);
        this.selectItem2 = this.selectItem2.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.autocomplete3 = this.autocomplete3.bind(this);
        this.selectItem3 = this.selectItem3.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
      }
    
      autocomplete(evt) {
        let text = evt.target.value;
        fetch(`https://localhost:44381/api/TmItems/ItemName?itemname`,
        {  
          crossDomain:true,
          method: 'Post',     
          headers: {'Content-Type':'application/json'},
          
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ searchItems: data });
          });
      }
      autocomplete1(evt) {
    
        fetch(`https://localhost:44381/api/TmItems/ItemType`,
        {  
          crossDomain:true,
          method: 'Post',     
          headers: {'Content-Type':'application/json'},
          
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ searchItems1: data });
          });
      }
      autocomplete2(evt) {

        fetch(`https://localhost:44381/api/TmItems/ItemCategory`,
        {  
          crossDomain:true,
          method: 'Post',     
          headers: {'Content-Type':'application/json'},
          
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ searchItems2: data });
          });
        }
        autocomplete3(evt) {

          fetch(`https://localhost:44381/api/TmItems/UOMLARGESTUNIT`,
          {  
            crossDomain:true,
            method: 'Post',     
            headers: {'Content-Type':'application/json'},
            
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.setState({ searchItems3: data });
            });
        }
     
    
      selectItem(id) {
        const { searchItems } = this.state;
        let selectedItem = searchItems.find(item => item.itemCode === id);
        const { itemName, itemCode } = selectedItem;
        this.setState({ item: { itemName, itemCode } });
        this.setState({ searchItems: [] });
      }
      selectItem1(id) {
        const { searchItems1 } = this.state;
        let selectedItem1 = searchItems1.find(itemT => itemT.itemType === id);
        const { descn, itemType } = selectedItem1;
        this.setState({ itemT: { descn, itemType } });
        this.setState({ searchItems1: [] });
      }
      selectItem2(id) {
        const { searchItems2 } = this.state;
        let selectedItem2 = searchItems2.find(itemC => itemC.catgyCode === id);
        const { catgyCode,catgyName } = selectedItem2;
        this.setState({ itemC: { catgyCode,catgyName } });
        this.setState({ searchItems2: [] });
      }
      selectItem3(id) {
        const { searchItems3 } = this.state;
        let selectedItem3 = searchItems3.find(itemL => itemL.uom === id);
        const { uom,uomName } = selectedItem3;
        this.setState({ itemL: { uom,uomName} });
        this.setState({ searchItems3: [] });
      }
    
    
      handleChange(evt) {
        this.setState({ item: { [evt.target.itemName]: evt.target.value } });
      }
      handleChange1(evt) {
        this.setState({ itemT: { [evt.target.descn]: evt.target.value } });
      }
      handleChange2(evt) {
        this.setState({ itemC: { [evt.target.catgyName]: evt.target.value } });
      }
      handleChange3(evt) {
        this.setState({ itemL: { [evt.target.uomName]: evt.target.value } });
      }
    

render(){
    const { searchItems,  item,cursor, handleChange } = this.state;
    const { itemName, itemCode } = item;
    const { searchItems1, itemT,cursor1, handleChange1 } = this.state;
    const { descn, itemType } = itemT;
    const { searchItems2, itemC, handleChange2 } = this.state;
    const { catgyCode,catgyName } = itemC;
    const { searchItems3, itemL, handleChange3 } = this.state;
    const { uom,uomName } = itemL;

    return(
            <div class="container-fluid"style={{position:"absolute"}}> 
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
                        <td> <TextField  type="text"label="itemCode" id="itemCode" value={itemCode} onChange={handleChange} /></td>
                        <td><TextField type="text"label="itemName" id="autocomplete" onChange={this.autocomplete} onKeyUp={this.hanldeKeyup} onKeyDown={this.hanldeKeydown}style={{width:250}} 
            value={itemName} />{searchItems.length > 0 && (
                <ul >
                  {searchItems.map((item, idx) => (
                <li style={{width:250}}
                  className={
                    cursor === idx ? "active list-group-item" : "list-group-item"
                  }key={idx}  onClick={() => this.selectItem(item.itemCode)}   >
                      {item.itemName}
                    </li>
                  ))}
                </ul>
              )}</td>
                        
                        <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Item Type</InputLabel> </td>
                        <td> <TextField  type="text"label="ItemType" id="itemCode" value={itemType} onChange={handleChange1} /></td>
                        <td><TextField type="text"label="Descn" id="autocomplete" onChange={this.autocomplete1}style={{width:250}} value={descn} />
                            {searchItems1.length > 0 && ( <ul > {searchItems1.map((itemT, idx) => (
                <li style={{width:250}}
                  className={
                    cursor1 === idx ? "active list-group-item" : "list-group-item"
                  } key={idx}  onClick={() => this.selectItem1(itemT.itemType)}   >
                      {itemT.descn} </li> ))}</ul> )}</td>
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
                <td> <TextField  type="text"label="CategoryCode" id="itemCode" value={catgyCode} onChange={handleChange2} /></td>
                <td><TextField type="text"label="CategoryName" id="autocomplete" onChange={this.autocomplete2}style={{width:250}} value={catgyName} />
                     {searchItems2.length > 0 && ( <ul > {searchItems2.map((itemC, idx) => (
                    <li  key={idx}  onClick={() => this.selectItem2(itemC.catgyCode )}   >
                    {itemC.catgyName } </li> ))}</ul> )}</td>
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>VisualInspection</InputLabel></td>
                <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
            </tr>
            <tr >
                <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>UOM(LargestUnit)</InputLabel> </td>
                <td> <TextField  type="text"label="Code" id="itemCode" value={uom} onChange={handleChange3} /></td>
                <td><TextField type="text"label="Name" id="autocomplete" onChange={this.autocomplete3}style={{width:250}} value={uomName} />
                     {searchItems3.length > 0 && ( <ul > {searchItems3.map((itemL, idx) => (
                    <li  key={idx}  onClick={() => this.selectItem3(itemL.uom )}   >
                    {itemL.uomName } </li> ))}</ul> )}</td>
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