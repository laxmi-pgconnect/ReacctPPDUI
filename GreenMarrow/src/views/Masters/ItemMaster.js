import React from 'react';
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
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";


export default function ItemMaster(){
  

  const [itemCode, setItemCode] = React.useState('');
    let [TmItem, setTmIem] = React.useState('');
    const ItemCodeData = React.useCallback(() => {
    axios({"method": "post",
      "url": "https://localhost:44381/api/TmItems/ItemName?itemname",
      "headers": {'Content-Type':'application/json'},
     })
    .then((response) => { setTmIem(response.data)
      console.log(response.data)
    })
    .catch((error) => { console.log(error) })
  }, [])
  React.useEffect(() => { ItemCodeData() }, [ItemCodeData])

  const [parentItemCode, setParentItemCode] = React.useState('');
    let [PItem, setPItem] = React.useState('');
    const ParentItemCodeData = React.useCallback(() => {
    axios({"method": "post",
      "url": "https://localhost:44381/api/TmItems/ItemName?itemname",
      "headers": {'Content-Type':'application/json'},
     })
    .then((response) => { setPItem(response.data)
      console.log(response.data)
    })
    .catch((error) => { console.log(error) })
  }, [])
  React.useEffect(() => { ParentItemCodeData() }, [ParentItemCodeData])

  const [itemType, setItemType] = React.useState('');
    let [ITItem, setITItem] = React.useState('');
    const ItemTypeData = React.useCallback(() => {
    axios({"method": "post",
      "url": "https://localhost:44381/api/TmItems/ItemType",
      "headers": {'Content-Type':'application/json'},
     })
    .then((response) => { setITItem(response.data)
      console.log(response.data)
    })
    .catch((error) => { console.log(error) })
  }, [])
  React.useEffect(() => { ItemTypeData() }, [ItemTypeData])

  const [catgyCode, setcatgyCode] = React.useState('');
  let [Category, setCategory] = React.useState('');
  const CategoryData = React.useCallback(() => {
  axios({"method": "post",
    "url": "https://localhost:44381/api/TmItems/ItemCategory",
    "headers": {'Content-Type':'application/json'},
   })
  .then((response) => { setCategory(response.data)
    console.log(response.data)
  })
  .catch((error) => { console.log(error) })
}, [])
React.useEffect(() => { CategoryData() }, [CategoryData])

const [uom, setuom] = React.useState('');
    let [UomLU, setUomLU] = React.useState('');
    const UomLUData = React.useCallback(() => {
    axios({"method": "post",
      "url": "https://localhost:44381/api/TmItems/UOMLARGESTUNIT",
      "headers": {'Content-Type':'application/json'},
     })
    .then((response) => { setUomLU(response.data)
      console.log(response.data)
    })
    .catch((error) => { console.log(error) })
  }, [])
  React.useEffect(() => { UomLUData() }, [UomLUData])

  const [uoms, setuoms] = React.useState('');
  let [UomSU, setUomSU] = React.useState('');
  const UomSUData = React.useCallback(() => {
  axios({"method": "post",
    "url": "https://localhost:44381/api/TmItems/UOMSMALLESTUNIT",
    "headers": {'Content-Type':'application/json'},
   })
  .then((response) => { setUomSU(response.data)
    console.log(response.data)
  })
  .catch((error) => { console.log(error) })
}, [])
React.useEffect(() => { UomSUData() }, [UomSUData])

const [uomp, setuomp] = React.useState('');
    let [UomPurchase, setUomPurchase] = React.useState('');
    const UomPurchaseData = React.useCallback(() => {
    axios({"method": "post",
      "url": "https://localhost:44381/api/TmItems/UOMPURCHASE",
      "headers": {'Content-Type':'application/json'},
     })
    .then((response) => { setUomPurchase(response.data)
      console.log(response.data)
    })
    .catch((error) => { console.log(error) })
  }, [])
  React.useEffect(() => { UomPurchaseData() }, [UomPurchaseData])

  const [uomstk, setuomstk] = React.useState('');
  let [UomStock, setUomStock] = React.useState('');
  const UomStockData = React.useCallback(() => {
    axios({"method": "post",
    "url": "https://localhost:44381/api/TmItems/UOMLARGESTUNIT",
    "headers": {'Content-Type':'application/json'},
   })
  .then((response) => { setUomStock(response.data)
    console.log(response.data)
  })
  .catch((error) => { console.log(error) })
}, [])
React.useEffect(() => { UomStockData() }, [UomStockData])



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
                        <td><InputLabel className="label"style={{color:"black"}}>Item Code</InputLabel> </td>
                      <td><TextField value={` ${itemCode}`} id="itemCode"/></td>
                      <td>   <Autocomplete    freeSolo  options={TmItem} getOptionLabel={option => option.itemName} className="txt2"   id="itemName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setItemCode(newitemCode.itemCode);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>
                       <td><button type="button"  class="btn btn-info"style={{marginTop:20}}>View</button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Item Type</InputLabel> </td>
                        <td>  <TextField value={` ${itemType}`} id="itemType"/></td>
                        <td>   <Autocomplete    freeSolo  options={ITItem} getOptionLabel={option => option.descn}className="txt2"   id="descn" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setItemType(newitemCode.itemType);  }}}
  renderInput={params => ( <TextField {...params}   fullWidth />   )}   /> </td>
                        </tr>
                        
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>ParentItemCode</InputLabel> </td>
                        <td><TextField value={` ${parentItemCode}`} id="parentItemCode"/></td>
                        <td><Autocomplete    freeSolo  options={PItem} getOptionLabel={option => option.itemName}  className="txt2"  id="parentitemName" 
 onChange={(event, newitemCode) => {console.log(newitemCode);if (newitemCode) { setParentItemCode(newitemCode.itemCode); }}}
   renderInput={params => ( <TextField {...params}   fullWidth />   )}   /> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>ItemSpecification</InputLabel> </td>
                        <td><TextField id="itemspec" label="Item Spec" /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Short Name</InputLabel> </td>
                        <td><TextField id="shortname" label="Shortname" /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Part Number</InputLabel> </td>
                        <td><TextField id="partno"  label="PartNumber" /></td>
                    </tr>
                   
                   
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>HSN Code</InputLabel> </td>
                        <td><TextField id="hsncode" label="HSNcode" /></td>
                    </tr>
                    </table>
                   
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Status</InputLabel></td>
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
                <td><InputLabel  className="label"style={{color:"black"}}>Category</InputLabel> </td>
                <td> <TextField value={` ${catgyCode}`} id="catgyCode"/></td>
                <td> <Autocomplete    freeSolo  options={Category} getOptionLabel={option => option.catgyName} className="txt2"   id="catgyName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setcatgyCode(newitemCode.catgyCode);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>VisualInspection</InputLabel></td>
                <td> </td>
            </tr>
            <tr >
                <td><InputLabel  className="label"style={{color:"black"}}>UOM(LargestUnit)</InputLabel> </td>
                <td><TextField value={` ${uom}`} id="uom"/></td>
                <td><Autocomplete    freeSolo  options={UomLU} getOptionLabel={option => option.uomName} className="txt2"   id="uomName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setuom(newitemCode.uom);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Inspection</InputLabel></td>
                <td> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM(SmallestUnit)</InputLabel> </td>
                <td><TextField value={` ${uoms}`} id="uom"/></td>
                <td><Autocomplete    freeSolo  options={UomSU} getOptionLabel={option => option.uomName} className="txt2"   id="uomName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setuoms(newitemCode.uom);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Cash Purchase</InputLabel></td>
                <td> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Relation</InputLabel> </td>
                <td><TextField  label="UOM Relation" id="uomrelation" /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Purchase</InputLabel> </td>
                <td><TextField value={` ${uomp}`} id="UomPurchaseCode"/></td>
                <td>   <Autocomplete    freeSolo  options={UomPurchase} getOptionLabel={option => option.uomName} className="txt2"   id="uomPurchaseName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setuomp(newitemCode.uom);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>STD Wt</InputLabel></td>
                <td><TextField id="stdwt" label="StdWt" style={{marginLeft:-25}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Stock</InputLabel> </td>
                <td><TextField value={` ${uomstk}`} id="UomStkCode"/></td>
                <td><Autocomplete    freeSolo  options={UomStock} getOptionLabel={option => option.name} className="txt2"   id="uomPurchaseName" 
 onChange={(event, newitemCode) => {console.log(newitemCode); if (newitemCode) { setuomstk(newitemCode.code);  }}}
  renderInput={params => ( <TextField {...params}  fullWidth />   )}   /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Container Code1</InputLabel> </td>
                <td><TextField  defaultValue="NONE" id="contcode1" /></td>
                <td><TextField  defaultValue="NONE"id="containercode1" style={{width:250}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Container Code2</InputLabel> </td>
                <td><TextField  defaultValue="NONE" id="contcode2" /></td>
                <td><TextField  defaultValue="NONE"id="containercode2" style={{width:250}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Premix Code1</InputLabel> </td>
                <td><TextField defaultValue="NONE" id="pmxcode1" /></td>
                <td><TextField defaultValue="NONE"id="premixcode1"style={{width:250}} /></td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Premix Code2</InputLabel> </td>
                <td><TextField  defaultValue="NONE"id="pmxcode1"/></td>
                <td><TextField  defaultValue="NONE"id="premixcode2"style={{width:250}} /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Section</InputLabel> </td>
                <td><TextField  defaultValue="NONE"id="pmxcode1"/></td>
                <td><TextField  defaultValue="NONE"id="premixcode2"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Section</InputLabel> </td>
                <td> <Select id="grade" value=''    >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>B</MenuItem>
          <MenuItem value={30}>C </MenuItem>
        </Select></td>
                
            </tr>
             <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Item Group</InputLabel></td>
                <td><input type="radio" name="optradio" value="capital" checked style={{marginTop:25}}/>
                <InputLabel class="radio-inline" style={{fontSize:15}}>Capital</InputLabel></td>
                 <td>   <InputLabel class="radio-inline"style={{fontSize:15}}>
                     <input type="radio"id="consumable" name="optradio"style={{marginTop:25}}/>Consumable</InputLabel></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Section</InputLabel> </td>
                <td><TextField id="section" label="Section" /></td>
                <td><TextField id="sectionname"  label="SectionName"style={{width:250}} /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Grade</InputLabel></td>
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
    <button type="button" class="btn btn-primary ">Save</button>
    <button type="button" class="btn btn-primary">Delete</button>
    <button type="button" class="btn btn-primary">Clear</button>
    <button type="button" class="btn btn-primary">Print</button>
    <button type="button" class="btn btn-primary "  >Exit</button>
  </div>
            </CardFooter>
                </Card>
                </GridItem>
                </GridContainer>
                </div>


    )
}



