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
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';

export default class AccountMaster extends Component{
    constructor( props ){
        super( props )
        this.state = {show: [false,,false,true,false]};
    }
   
    showHide(num){
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
    }

    render(){



        return(
            <div class="container-fluid" style={{position:"absolute"}}> 
            <GridContainer  >
            <GridItem xs={12} sm={12} md={15}>
              <Card >
              <CardHeader color="primary" style={{height:40}}>
                <h4>Account Master</h4>
                 </CardHeader>
                 <CardBody >
                <div class="row">
                <div >
                    
                    <div >
                       
                       <button onClick={()=>this.showHide(0)} className="btn btn-primary">Account Master</button>
                       { this.state.show[0] && <div>
                           <div class="col"style={{borderStyle:"ridge"}}>
                        <table>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Employee Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><button type="button" class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                      </tr>
                   </table>
                   <table>
                      <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Int Emp.Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><InputLabel style={{color:"black"}}className="label">Personal A/C Code</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Working</InputLabel></td>
                <td> <FormControlLabel id="visinspn" checked control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                       </tr>
                       <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Date of Join</InputLabel></td>
                         <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         <td><InputLabel style={{color:"black"}}className="label">Date of leaving</InputLabel></td>
                         <td> <TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                       <td><InputLabel style={{color:"black"}}className="label">Sex</InputLabel></td>
                       <td> <Select labelId="demo-simple-select-label" id="demo-simple-select"  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                     </Select></td>
                       </tr>
                   </table>
                   <table>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Branch/Unit</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">Company</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Sub Branch</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">Division</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Grade</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">Zone</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">DesignationGroup</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">Region</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Designation</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">Territory</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Department</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">MailIdOfficial</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Department Head</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">MobilenoOfficial</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Category</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       <td><InputLabel style={{color:"black"}}className="label">ServiceProvider</InputLabel></td>
                       <td><TextField id="formname"style={{width:250}} label="Code"/></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Joined As</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">FunctionalReporting</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">AdministrativeReporting</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Alternate</InputLabel></td>
                       <td><TextField id="formname" label="Code"/></td>
                       <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                       </tr>
                   </table>
                          
                 </div></div>
                           
                       }
                   </div>
                   </div>
                   <div >
                            
                            <button onClick={()=>this.showHide(1)} className="btn btn-primary"style={{width:140}}>Account Detail</button>
                            { this.state.show[1] && 
                                <div>
                                <div class="col" style={{borderStyle:"ridge"}}>
                    <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">EmpType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Weekly Off</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Shift Type</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            
                        </tr>
                     </table>
                     <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Probation Form</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Probation To</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Confirmation Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">PAN No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PF No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PF Contribution</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Gratuity No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">ESI No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">ESI Contribution</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Superannuation No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Passport No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Passport Exp</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">DrivingLicense No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">VehicleType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Dri.Lic.Exp</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">VehicleDetails</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">VehicleType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Veh.RegNo</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Voters ID</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                         </tr>
                     </table>
                     <table>
                         <tr>
                         <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>StaffWelfareContribution</InputLabel></td>
                          <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                          <td><InputLabel style={{color:"black"}}className="label">St.Wel.Cont.No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                         </tr>
                         <tr>
                         <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>LabourWelfareContribution</InputLabel></td>
                          <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                          <td><InputLabel style={{color:"black"}}className="label">La.Wel.Cont.No</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                         </tr>
                     </table>
                                </div>
                                </div>
                            }
                        </div>
                        <div >
                           
                            <button onClick={()=>this.showHide(2)} className="btn btn-primary">Communication</button>
                            { this.state.show[2] && 
                                <div >
                                <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                                    <tr>
                            <td><InputLabel style={{color:"black"}}className="label">AddressType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>Comm.Addr</InputLabel></td>
                          <td> <FormControlLabel id="visinspn"  control={<Checkbox name="checkedC" />} style={{marginTop:20}} /></td>
                          <td><InputLabel  className="label"style={{color:"black",fontSize:18}}>SameAsPermanentAddress</InputLabel></td>
                           </tr>
                           </table>
                            <table>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Country</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Address1</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                           </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">State</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Address2</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                            </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">District</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Address3</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Taluk/Mandal</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Std Code</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">City/Town</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Resi.Ph.No</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Pincode</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Mobile No</InputLabel></td>
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                        </tr>
                       </table>
                      
                                </div>
                              
                                <div class="divHead" id="divPanel2" style={{ LEFT: 13, OVERFLOW:"scroll", width: 1010, position:"absolute", height: 175}}
tabIndex="-1" runat="server" ms_positioning="GridLayout">
    <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1100, position: "absolute",overflow:"scroll", top: 4,height:250}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1100, height: 54,backgroundColor:"white"}}>
    <table class="table table-dark table-striped"id="gdHead" cellSpacing="1">
<tr style={{fontWeight:"bolder",color:"white",backgroundColor:"rgb(46, 95, 110)"}}>
<td id="taxtype" title="A" style={{width: 100, height: 20, align:"left"}}>AddressType</td>
<td id="taxdesc" title="B" style={{width: 100, height: 20, align:"left"}}>AddressTypeDesc</td>
<td id="taxtype" title="C" style={{width: 100, height: 20, align:"left"}}>CountryCode</td>
<td id="taxdesc" title="D" style={{width: 100, height: 20, align:"left"}}>CountryName</td>
<td id="taxtype" title="E" style={{width: 100, height: 20, align:"left"}}>StateCode</td>
<td id="taxdesc" title="F" style={{width: 100, height: 20, align:"left"}}>StateName</td>
<td id="taxtype" title="G" style={{width: 100, height: 20, align:"left"}}>DistrictCode</td>
<td id="taxdesc" title="H" style={{width: 100, height: 20, align:"left"}}>DistrictName</td>
<td id="taxtype" title="I" style={{width: 100, height: 20, align:"left"}}>TalukCode</td>
<td id="taxdesc" title="J" style={{width: 100, height: 20, align:"left"}}>TalukName</td>
<td id="taxtype" title="K" style={{width: 100, height: 20, align:"left"}}>CityCode</td>
<td id="taxdesc" title="L" style={{width: 100, height: 20, align:"left"}}>CityName</td>
<td id="taxtype" title="M" style={{width: 100, height: 20, align:"left"}}>PinCode</td>
<td id="taxdesc" title="N" style={{width: 100, height: 20, align:"left"}}>PostOffice</td>
<td id="taxtype" title="O" style={{width: 100, height: 20, align:"left"}}>Address1</td>
<td id="taxdesc" title="P" style={{width: 100, height: 20, align:"left"}}>Address2</td>
<td id="taxtype" title="Q" style={{width: 100, height: 20, align:"left"}}>Address3</td>
<td id="taxdesc" title="R" style={{width: 100, height: 20, align:"left"}}>STDCode</td>
<td id="taxtype" title="S" style={{width: 100, height: 20, align:"left"}}>Resi.Ph.No</td>
<td id="taxdesc" title="T" style={{width: 100, height: 20, align:"left"}}>MobileNo</td>

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
               </div>
                            }
                        </div>
                        

                </div>
                 
                
                   
                   
                   
                
                   </CardBody> 
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