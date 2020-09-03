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



export default class AccountBranchMap extends Component{
    constructor(props) {  
        super(props)  
        this.state = {  
            Account: [{accountCode:'',accountName:''}] , 
            Branch: [{branchCode:'',branchName:''}] , 
            Company: [{companyCode:'',companyName:''}] , 
            Division: [{divCode:'',divName:''}] ,       
            Region: [{regionCode:'',regionName:''}] , 
            Territory: [{zoneCode:'',zoneName:''}] ,
            RegZone: [{regZoneCode:'',regZoneName:''}] ,  
        }
    }
    
 AccountChange=(event,value)=>{
    this.setState({accountCode:value.accountCode})
     }
     BranchChange=(event,value)=>{
        this.setState({branchCode:value.branchCode})
}
CompanyChange=(event,value)=>{
    this.setState({companyCode:value.companyCode})
     }
     DivisionChange=(event,value)=>{
        this.setState({divCode:value.divCode})
         }
         RegionChange=(event,value)=>{
            this.setState({regionCode:value.regionCode})
             }
             TerritoryChange=(event,value)=>{
                this.setState({zoneCode:value.zoneCode})
                 }
                 RegZoneChange=(event,value)=>{
                    this.setState({regZoneCode:value.regZoneCode})
                     }
    
         
    componentDidMount() {  
    this.AccountData();
    this.BranchData();
    this.CompanyData();
    this.DivisionData();
    this.RegionData();
    this.TerritoryData();
    this.RegZoneData();
    this.Delete();
    }
    AccountData(){
   axios.post('https://localhost:44381/api/TmAcbrmaps/Account').then(response => {  
    console.log(response.data);  
       this.setState({  
       Account: response.data  
    });  
    });  
    }  
    BranchData(){
        axios.post('https://localhost:44381/api/TmAcbrmaps/Branch').then(response => {  
         console.log(response.data);  
         this.setState({  
            Branch: response.data  
         });  
         });  
         } 
         CompanyData(){
            axios.post('https://localhost:44381/api/TmAcbrmaps/Company').then(response => {  
             console.log(response.data);  
             this.setState({  
                Company: response.data  
             });  
             });  
             } 
             DivisionData(){
                axios.post('https://localhost:44381/api/TmAcbrmaps/Division').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Division: response.data  
                 });  
                 });  
                 }   
                 RegionData(){
                    axios.post('https://localhost:44381/api/TmAcbrmaps/Region').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                        Region: response.data  
                     });  
                     });  
                     }  
                     TerritoryData(){
                        axios.post('https://localhost:44381/api/TmAcbrmaps/Territory').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            Territory: response.data  
                         });  
                         });  
                         } 
                         RegZoneData(){
                            axios.post('https://localhost:44381/api/TmAcbrmaps/RegZone').then(response => {  
                             console.log(response.data);  
                             this.setState({  
                                RegZone: response.data  
                             });  
                             });  
                             }  
                             Delete(accountCode){
                              axios.delete('https://localhost:44381/api/TmAcbrmaps/' + accountCode)
                              .then(json => {  
                                   alert('Record deleted successfully!!');  
                                  this.props.history.push(""); 
                                  })  
                                 }
    render(){
        return(
            <div style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card>
              <CardHeader color="primary" style={{width:900,height:40}}>
                <h4>ACCOUNT BRANCH MAP</h4>
                 </CardHeader>
                 <CardBody>
                 <div style={{borderStyle:"ridge"}} >
                       

                    <table>
                        <tr>
                            <td><InputLabel style={{fontSize:18,color:"black"}}className="label">Account Code</InputLabel></td>
                           <td> <TextField id="accountCode" value={this.state.accountCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Account} getOptionLabel={option => option.accountName} className="txt2" 
 id="accountName"  onChange={this.AccountChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>

                          
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Company</InputLabel> </td>
                        <td> <TextField id="companyCode" value={this.state.companyCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Company} getOptionLabel={option => option.companyName} className="txt2" 
 id="companyName"  onChange={this.CompanyChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Division</InputLabel> </td>
                        <td> <TextField id="divCode" value={this.state.divCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Division} getOptionLabel={option => option.divName} className="txt2" 
 id="divName"  onChange={this.DivisionChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region Zone</InputLabel> </td>
                        <td> <TextField id="regZoneCode" value={this.state.regZoneCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.RegZone} getOptionLabel={option => option.regZoneName} className="txt2" 
 id="regZoneName"  onChange={this.RegZoneChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                       
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Region</InputLabel> </td>
                        <td> <TextField id="regionCode" value={this.state.regionCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Region} getOptionLabel={option => option.regionName} className="txt2" 
 id="regionName"  onChange={this.RegionChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Territory</InputLabel> </td>
                        <td> <TextField id="zoneCode" value={this.state.zoneCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Territory} getOptionLabel={option => option.zoneName} className="txt2" 
 id="zoneName"  onChange={this.TerritoryChange} renderInput={params => ( <TextField {...params}  fullWidth /> )}/> </td>
                        
                        <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Branch</InputLabel> </td>
                        <td> <TextField id="branchCode" value={this.state.branchCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
 id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params}  fullWidth />   )}   /> </td>
                        </tr>
                       </table> 
                       <div >
                           <table>
                      <tr> <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Budget Applicable to All</InputLabel></td>
                      <td> <FormControlLabel id="cashpur" control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                       </tr> 
                       <tr>
                       <button type="button" class="btn btn-primary "style={{borderRadius:1}}>View Branches</button>
                       </tr>
                        </table> </div></div>
                        <div class="row"style={{borderStyle:"ridge",height:200}} >
                       
                        <div class="col" style={{height:35,backgroundColor:"purple",color:"white",fontSize:18}}>
                        <table>
                            <tr>
                                <td style={{width:150}}>Branch Code</td>
                                <td style={{width:150}}>Branch Name</td>
                                <td style={{width:150}}>Budget</td>
                                <td style={{width:150}}>Active</td>
                            </tr>
                        </table>

                            </div>



                            </div>     
                          
                   
                
                    
                    </CardBody> 
                    <CardFooter>
             <div class="btn-group " style={{position: "absolute",right: 0}}>
 <button type="button"class="btn btn-success "style={{borderRadius:7}}>Save</button>
 <button type="button" class="btn btn-success"style={{borderRadius:7}}onClick={e => this.Delete(this.state.accountCode)}>Delete</button>
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