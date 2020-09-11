import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import CardFooter from "components/Card/CardFooter.js";
import { InputLabel } from "@material-ui/core";
import { Button} from 'react-bootstrap';
import './Item.css';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";


export default class ItemMaster extends React.Component{
    constructor(props) {  
        super(props)  
        this.state = {  
                TmItem: [{itemCode:'',itemName:''}],
                PItem:[{prtItem:'',itemName:''}],
                ITItem: [{itemtype:'',descn:''}],
                ItemC: [{category:'',catgyName:''}],
                ItemLU: [{uomBig:'',uomName:''}],
                ItemSU: [{suom:'',suomName:''}],
                ItemP: [{uomPur:'',puomName:''}],   
                Itemstk: [{uomStk:'',stkName:''}],
                Itemsec: [{GcmCode:'',GcmDesc:''}],
                ItemCont1: [{contCode1:'',contCode1Name:''}] ,   
                ItemCont2: [{contCode2:'',contCode2Name:''}],
                pmxCode1D: [{pmxCode1:'',pmxCode1Name:''}],
                pmxCode2D: [{pmxCode2:'',pmxCode2Name:''}],    
                itemSpec:'',partNo:'',shortName:'',itemtype:'',itemDescn:'',prtItemName:'',category:'',itemGroup:'',prtItem:'',uomBig:'',
                uomSmall:'',uomRelation:'',uomPur:'',uomStk:'',visInSpn:'',inSpn:'',cashPur:'',fsn:'',abc:'',catgyName:'',
                isActive:'',stProdCode:'',contCode1:'',contCode2:'',pmxCode1:'',pmxCode2:'',prodNature:'',contCode1Name:'',contCode2Name:'',
                stdWt:'',uomBigName:'',uomSmallName:'',uomPurName:'',uomStkName:'',pmxCode1Name:'',pmxCode2Name:'',sectionName:'',hsnCode:'',section:''

}  
this.SaveData=this.SaveData.bind(this);
this.partNo = this.partNo.bind(this);  
this.itemSpec = this.itemSpec.bind(this); 
this.shortName = this.shortName.bind(this); 
this.uomRelation = this.uomRelation.bind(this); 
this.stdWt = this.stdWt.bind(this); 
this.hsnCode = this.hsnCode.bind(this); 
}  
partNo(event) {  
    this.setState({ partNo: event.target.value })  
  } 
  itemSpec(event) {  
    this.setState({ itemSpec: event.target.value })  
  } 
  shortName(event) {  
    this.setState({ shortName: event.target.value })  
  } 
  uomRelation(event) {  
    this.setState({ uomRelation: event.target.value })  
  } 
  stdWt(event) {  
    this.setState({ stdWt: event.target.value })  
  } 
  hsnCode(event) {  
    this.setState({ hsnCode: event.target.value })  
  } 
itemCodeChange=(event,value)=>{
this.setState({itemCode:value.itemCode})
}
PrtitemCodeChange=(event,value)=>{
this.setState({prtItem:value.itemCode})
}
itemTypeChange=(event,value)=>{
this.setState({itemtype:value.itemtype})
}
catgyCodeChange=(event,value)=>{
 this.setState({category:value.catgyCode})
 }
uomChange=(event,value)=>{
 this.setState({uomBig:value.uom})
}
uomSLChange=(event,value)=>{
this.setState({uomSmall:value.uom})
 }
 uompChange=(event,value)=>{
    this.setState({uomPur:value.uom})
 }
 uomsecChange=(event,value)=>{
    this.setState({GcmCode:value.GcmCode})
}
uomstkChange=(event,value)=>{
        this.setState({uomStk:value.uom})
}
ItemCont1Change=(event,value)=>{
    this.setState({contCode1:value.contCode1})
}
ItemCont2Change=(event,value)=>{
    this.setState({contCode2:value.contCode2})
}
pmxCode1Change=(event,value)=>{
    this.setState({pmxCode1:value.pmxCode1})
}
pmxCode2Change=(event,value)=>{
    this.setState({pmxCode2:value.pmxCode2})
}

componentDidMount() {  
this.ItemCodeData();
this.PItemCodeData();
this.ITItemTypeData();
this.CategoryData();
this.UOMLargeData();
this.UOMSmallData();
this.UOMpurchaseData();
this.UOMStockData();
this.UOMSectionData();
this.ItemCont1Data();
this.ItemCont2Data();
this.pmxCode1Data();
this.pmxCode2Data();
this.Delete();
this.SaveData();
}
ItemCodeData(){
axios.post('https://localhost:44381/api/TmItems/ItemName').then(response => {  
console.log(response.data);  
this.setState({  
TmItem: response.data  
});  
});  
}  
PItemCodeData(){
axios.post('https://localhost:44381/api/TmItems/ParentItemCode').then(response => {  
 console.log(response.data);  
this.setState({  
    PItem: response.data  
 });  
 });  
 }  
 ITItemTypeData(){
    axios.post('https://localhost:44381/api/TmItems/ItemType').then(response => {  
     console.log(response.data);  
    this.setState({  
        
        ITItem: response.data  
     });  
     });  
 }  
CategoryData(){
        axios.post('https://localhost:44381/api/TmItems/ItemCategory').then(response => {  
         console.log(response.data);  
        this.setState({  
            ItemC: response.data  
         });  
         });  
         } 
         UOMLargeData(){
            axios.post('https://localhost:44381/api/TmItems/UOML').then(response => {  
             console.log(response.data);  
            this.setState({  
                ItemLU: response.data  
             });  
             });  
             } 
 UOMSmallData(){
                axios.post('https://localhost:44381/api/TmItems/UOMS').then(response => {  
                 console.log(response.data);  
                this.setState({  
                    ItemSU: response.data  
                 });  
                 });  
                }
                UOMpurchaseData(){
                    axios.post('https://localhost:44381/api/TmItems/UOMP').then(response => {  
                     console.log(response.data);  
                    this.setState({  
                        ItemP: response.data  
                     });  
                     });  
                     } 
                     UOMStockData(){
                        axios.post('https://localhost:44381/api/TmItems/UOMP').then(response => {  
                         console.log(response.data);  
                         
                        this.setState({  
                                Itemstk: response.data  
                         });  
                         });  
                         }  
                         UOMSectionData(){
                            axios.post('https://localhost:44381/api/TmItems/Section').then(response => {  
                             console.log(response.data);  
                             
                            this.setState({  
                                    Itemsec: response.data  
                             });  
                             });  
                             } 
                             ItemCont2Data(){
                                axios.post('https://localhost:44381/api/TmItems/ContainerCode2').then(response => {  
                                 console.log(response.data);  
                                 
                                this.setState({  
                                        ItemCont2: response.data  
                                 });  
                                 });  
                                 }  
                                 ItemCont1Data(){
                                    axios.post('https://localhost:44381/api/TmItems/ContainerCode1').then(response => {  
                                     console.log(response.data);  
                                     
                                    this.setState({  
                                            ItemCont1: response.data  
                                     });  
                                     });  
                                     } 
                                     pmxCode1Data(){
                                        axios.post('https://localhost:44381/api/TmItems/PREMIXCODE1').then(response => {  
                                         console.log(response.data);  
                                         
                                        this.setState({  
                                            pmxCode1D: response.data  
                                         });  
                                         });  
                                         }   
                                         pmxCode2Data(){
                                            axios.post('https://localhost:44381/api/TmItems/PREMIXCODE2').then(response => {  
                                             console.log(response.data);  
                                             
                                            this.setState({  
                                                pmxCode2D: response.data  
                                             });  
                                             });  
                                             }    
                         Delete(itemCode){
                            axios.delete('https://localhost:44381/api/TmItems/' + itemCode)
                            .then(json => {  
                                
                                alert('Record deleted successfully!!');  
                                this.props.history.push("/views/Reports/Const"); 
                                })  
                                
                         }
                     View(itemCode) {
                        axios.post('https://localhost:44381/api/TmItems/ViewItem?itemCode=' + itemCode)
                          .then(response => {
                              alert(response.data[0].hsnCode);
                            console.log(response.data);
                            this.setState({
                              
                              itemSpec: response.data[0].itemSpec,
                              partNo: response.data[0].partNo,
                              shortName: response.data[0].shortName,
                              itemtype: response.data[0].itemtype,
                              itemDescn: response.data[0].itemDescn,
                              category: response.data[0].category,
                              ItemGroup: response.data[0].ItemGroup,
                              prtItem: response.data[0].prtItem,
                              prtItemName:response.data[0].prtItemName,
                              uomBig: response.data[0].uomBig,
                              uomSmall: response.data[0].uomSmall,
                              uomRelation: response.data[0].uomRelation,
                              uomPur: response.data[0].uomPur,
                              uomStk: response.data[0].uomStk,
                              visInSpn: response.data[0].visInSpn,
                              inSpn: response.data[0].inSpn,
                              cashPur: response.data[0].cashPur,
                              fsn: response.data[0].fsn,
                              abc: response.data[0].abc,
                              isActive: response.data[0].isActive,
                              stProdCode: response.data[0].stProdCode,
                              contCode1: response.data[0].contCode1,
                              contCode1Name: response.data[0].contCode1Name,
                              contCode2: response.data[0].contCode2,
                              contCode2Name: response.data[0].contCode2Name,
                              pmxCode1: response.data[0].pmxCode1,
                              pmxCode2: response.data[0].pmxCode2,
                              prodNature: response.data[0].prodNature,
                              catgyName: response.data[0].catgyName,
                              uomBigName: response.data[0].uomBigName,
                              uomSmallName: response.data[0].uomSmallName,
                              uomPurName: response.data[0].uomPurName,
                              uomStkName: response.data[0].uomStkName,
                              pmxCode1Name: response.data[0].pmxCode1Name,
                              pmxCode2Name: response.data[0].pmxCode2Name,
                              sectionName: response.data[0].sectionName,
                              hsnCode: response.data[0].hsnCode,
                              section:response.data[0].section,
                              stdWt:response.data[0].stdWt
                            });debugger;
                          })
                      }  
                      SaveData(event) { 
                                let data = {
                            itemCode:this.state.itemCode,
                            itemName: this.state.itemName,
                            itemSpec: this.state.itemSpec,
                            partNo:this.state.partNo,
                            shortName: this.state.shortName,
                            itemtype: this.state.itemtype,
                            itemDescn: this.state.itemDescn,
                            category: this.state.category,
                            ItemGroup: this.state.ItemGroup,
                            prtItem: this.state.prtItem,
                            prtItemName:this.state.prtItemName,
                            uomBig: this.state.uomBig,
                            uomSmall: this.state.uomSmall,
                            uomRelation: parseFloat(this.state.uomRelation),
                            uomPur: this.state.uomPur,
                            uomStk: this.state.uomStk,
                            visInSpn: this.state.visInSpn,
                            inSpn: this.state.inSpn,
                            cashPur: this.state.cashPur,
                            fsn: this.state.fsn,
                            abc: this.state.abc,
                            isActive: this.state.isActive,
                            stProdCode: this.state.stProdCode,
                            contCode1: this.state.contCode1,
                            contCode1Name: this.state.contCode1Name,
                            contCode2: this.state.contCode2,
                            contCode2Name: this.state.contCode2Name,
                            pmxCode1: this.state.pmxCode1,
                            pmxCode2: this.state.pmxCode2,
                            prodNature: this.state.prodNature,
                            catgyName: this.state.catgyName,
                            uomBigName: this.state.uomBigName,
                            uomSmallName: this.state.uomSmallName,
                            uomPurName: this.state.uomPurName,
                            uomStkName: this.state.uomStkName,
                            pmxCode1Name: this.state.pmxCode1Name,
                            pmxCode2Name: this.state.pmxCode2Name,
                            sectionName:this.state.sectionName,
                            hsnCode: this.state.hsnCode,
                            section:this.state.section,
                            stdWt:parseInt(this.state.stdWt)  }
                         fetch('https://localhost:44381/api/TmItems/SaveUpdate', {  
                            crossDomain:true,
                            method: 'Post',     
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(data)
                        })
                           
                      .then(Response => Response.json())        
                      .then(result => {  alert("Save");
                             console.log(result);    
                          if (result.status === 'SUCCESSFULL')  
                          {
                           alert("SAVED SUCCESSFULLY")
                            this.props.history.push("/Save"); 
                          
                          }
                          else if(result.status ==='Conflict')
                          {
                            alert("Record Already Exist") 
                          }
                          else if(result.status ==='NotFound')
                          {
                            alert("Record Not Found") 
                          }
                          else if(result.status ==='Not Allowed')
                          {
                            alert("Update Not Allowed") 
                          }
                          else if(result.status ==='Updated')
                          {
                            alert("Record Updated Sucessfull") 
                          }
                          
                      
                      })   
                    }                


    render(){


    return(
            <div  style={{position:"absolute"}}> 
        <GridContainer  >
        <GridItem xs={12} sm={12} md={15}>
          <Card>
            <CardHeader color="primary"style={{height:40}} >
            <h4  >Item Master</h4>
             </CardHeader>
             <CardBody>
             <div class="row" >
             <div class="col" >
                        <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Item Code</InputLabel> </td>
                      <td><TextField value={this.state.itemCode} id="itemCode"/></td>
                      <td> <Autocomplete    freeSolo  options={this.state.TmItem} getOptionLabel={option => option.itemName} className="txt2" 
                        id="itemName"  onChange={this.itemCodeChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>
                       <td><Button type="button" onClick={e => this.View(this.state.itemCode)} >View</Button></td>
                    </tr>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Item Type</InputLabel> </td>
                       <td><TextField id="itemtype" value={this.state.itemtype}/></td>
                      
                       <td><Autocomplete freeSolo  options={this.state.ITItem} getOptionLabel={option => option.descn} className="txt2" 
        id="itemDescn"  onChange={this.itemTypeChange}renderInput={params => ( <TextField {...params} label={this.state.itemDescn}  fullWidth />   )}   /></td>
                                </tr>
                                
                        
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>ParentItemCode</InputLabel> </td>
                       <td> <TextField id="itemCode" value={this.state.prtItem}/></td>
                       <td> <Autocomplete    freeSolo  options={this.state.PItem} getOptionLabel={option => option.itemName} className="txt2" 
                        id="prtItemName" onChange={this.PrtitemCodeChange} renderInput={params => ( <TextField {...params} label={this.state.prtItemName}  fullWidth />   )}   /> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>ItemSpecification</InputLabel> </td>
                        <td><TextField id="itemspec"value={this.state.itemSpec}onChange={this.itemSpec}  /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Short Name</InputLabel> </td>
                        <td><TextField id="shortname"value={this.state.shortName}onChange={this.shortName} /></td>
                    </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Part Number</InputLabel> </td>
                        <td><TextField id="partno"value={this.state.partNo} onChange={this.partNo} /></td>
                    </tr>
                   
                   
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>HSN Code</InputLabel> </td>
                        <td><TextField id="hsnCode"value={this.state.hsnCode}onChange={this.hsnCode}  /></td>
                    </tr>
                    </table>
                   
                    <table>
                    <tr>
                        <td><InputLabel className="label"style={{color:"black"}}>Status</InputLabel></td>
                        <td>  <div class="form-check-inline">
                       <div className="radio"> <label>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
                    </tr>
                    </table>
                  
                 </div>
                 <div class="col" style={{borderStyle:"ridge"}}>
           
           <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white"}}>Item Details</h4>
           <table >
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Category</InputLabel> </td>
               <td><TextField id="catgyCode"style={{width:200}} value={this.state.category}/></td>
               <td> <Autocomplete freeSolo  options={this.state.ItemC} getOptionLabel={option => option.catgyName} className="txt2" 
        id="catgyName"  onChange={this.catgyCodeChange} renderInput={params => ( <TextField {...params} label={this.state.catgyName} fullWidth />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>VisualInspection&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                <td><input type="checkbox" class="form-check-input" id="visInSpn"value={this.state.visInSpn}/></td>
                <td> </td>
            </tr>
            <tr >
                <td><InputLabel  className="label"style={{color:"black"}}>UOM(LargestUnit)</InputLabel> </td>
              <td><TextField id="uom"style={{width:200}} value={this.state.uomBig}/></td>
              <td> <Autocomplete freeSolo  options={this.state.ItemLU} getOptionLabel={option => option.uomName} className="txt2" 
        id="uomName"  onChange={this.uomChange} renderInput={params => ( <TextField {...params}  fullWidth label={this.state.uomBigName} />   )}   /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Inspection</InputLabel></td>
                <td><input type="checkbox" class="form-check-input" id="inSpn"value={this.state.inSpn}/></td>
                <td> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM(SmallestUnit)</InputLabel> </td>
                <td> <TextField style={{width:200}} id="suom" value={this.state.uomSmall}/></td>
                <td> <Autocomplete    freeSolo  options={this.state.ItemSU} getOptionLabel={option => option.uomName} className="txt2" 
 id="prtitemName"  onChange={this.uomSLChange} renderInput={params => ( <TextField {...params}  fullWidth label={this.state.uomSmallName}/>   )}   /> </td>
                <td><InputLabel  className="label"style={{color:"black"}}>Cash Purchase</InputLabel></td>
                <td><input type="checkbox" class="form-check-input" id="cashPur"value={this.state.cashPur}/></td>
                <td> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Relation</InputLabel> </td>
                <td><TextField style={{width:200}} value={this.state.uomRelation}onChange={this.uomRelation} id="uomrelation" /></td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Purchase</InputLabel> </td>
                <td> <TextField id="puom" value={this.state.uomPur}style={{width:200}}/></td>
                <td> <Autocomplete    freeSolo  options={this.state.ItemP} getOptionLabel={option => option.uomName} className="txt2" 
 id="puomName"  onChange={this.uompChange} renderInput={params => ( <TextField {...params}  fullWidth label={this.state.uomPurName} />   )}   /> </td>
              
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>UOM Stock</InputLabel> </td>
                <td> <TextField id="pschno" value={this.state.uomStk}style={{width:200}}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Itemstk} getOptionLabel={option => option.uomName} className="txt2" 
 id="pschName"  onChange={this.uomstkChange} renderInput={params => ( <TextField {...params}label={this.state.uomStkName}  fullWidth />   )}   /> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Container Code1</InputLabel> </td>
                <td> <TextField defaultValue="NonE" id="contCode1" style={{width:200}}value={this.state.contCode1}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ItemCont1} getOptionLabel={option => option.contCode1Name} className="txt2" 
 id="contCode1Name"  onChange={this.contCode1Change} renderInput={params => ( <TextField {...params} label={this.state.contCode1Name} fullWidth />   )}   /> </td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Container Code2</InputLabel> </td>
                <td> <TextField id="contCode2" value={this.state.contCode2}style={{width:200}}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ItemCont2} getOptionLabel={option => option.contCode2Name} className="txt2" 
 id="contCode2Name"  onChange={this.contCode2Change} renderInput={params => ( <TextField {...params}label={this.state.contCode2Name}  fullWidth />   )}   /> </td>
            </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Premix Code1</InputLabel> </td>
                <td> <TextField id="pmxCode1" value={this.state.pmxCode1}style={{width:200}}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.pmxCode1} getOptionLabel={option => option.pmxCode1Name} className="txt2" 
 id="pmxCode1Name"  onChange={this.pmxCode1Change} renderInput={params => ( <TextField {...params}label={this.state.pmxCode1Name}  fullWidth />   )}   /> </td>
                </tr>
            <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Premix Code2</InputLabel> </td>
                <td> <TextField id="pmxCode1" value={this.state.pmxCode1}style={{width:200}}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.pmxCode1} getOptionLabel={option => option.pmxCode1Name} className="txt2" 
 id="pmxCode1Name"  onChange={this.pmxCode1Change} renderInput={params => ( <TextField {...params} label={this.state.pmxCode2Name} fullWidth />   )}   /> </td>
            </tr>
            <tr>
            <td><InputLabel  className="label"style={{color:"black"}}>Section</InputLabel> </td>
                <td><TextField id="GcmCode" value={this.state.section}style={{width:200}}/></td>
                <td><td> <Autocomplete    freeSolo  options={this.state.Itemsec} getOptionLabel={option => option.sectionName} className="txt2" 
 id="GcmDesc"  onChange={this.uomsecChange} renderInput={params => ( <TextField {...params}  fullWidth label={this.state.sectionName} />   )}   /> </td></td>
              
            </tr>
            <tr>
            <td><InputLabel  className="label"style={{color:"black"}}>STD Wt</InputLabel></td>
                <td><TextField id="stdwt" value={this.state.stdWt}onChange={this.stdWt} style={{width:150}} /></td>
                <td><InputLabel  className="label"style={{color:"black"}}>Grade</InputLabel></td>
                <td> <Select labelId="demo-simple-select-label" id="demo-simple-select"value="A" style={{marginLeft:-40}} >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                    </Select></td>
                </tr>
             <tr>
                <td><InputLabel  className="label"style={{color:"black"}}>Item Group</InputLabel></td>
                <td><input type="radio" name="optradio" value={this.state.itemGroup} checked style={{marginTop:25}}/>
                <InputLabel class="radio-inline" style={{fontSize:15}}>Capital</InputLabel></td>
                 <td>   <InputLabel class="radio-inline"style={{fontSize:15}}>
                     <input type="radio"id="consumable" value={this.state.itemGroup}name="optradio"style={{marginTop:25}}/>Consumable</InputLabel></td>
            </tr>
           
            </table><br/>
         </div>

 
            </div>
         
                </CardBody>
                <CardFooter>
       <div class="btn-group " style={{position: "absolute",right: 0}}>
    <button type="button" class="btn btn-primary "onClick={e => this.SaveData }>Save</button>
    <button type="button" class="btn btn-primary" onClick={e => this.Delete(this.state.itemCode)}>Delete</button>
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
}


