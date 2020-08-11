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
import Checkbox from '@material-ui/core/Checkbox';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';



  


export default class AccountMaster extends Component{
    constructor( props ){
        super( props )
        this.state = {show: [false,false,false,true]};
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
                 <div class="row"style={{borderStyle:"ridge"}} >
                 <div style={{borderStyle:"ridge"}} >
                    
                    <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">AccountCode</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><button type="button" class="btn btn-info"style={{marginTop:20}}>View</button></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">AccountType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">GroupType</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                       </table>
                   </div>
                <div >
                    
                         <div >
                            
                            <button onClick={()=>this.showHide(0)} className="btn btn-primary">Account Master</button>
                            { this.state.show[0] && <div>
                                <div class="col"style={{borderStyle:"ridge"}}>
                                     <table>
                        <tr>
                          <td><InputLabel style={{color:"black"}}className="label">ConstCreditGroup</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                           </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">DebitGroup</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            </tr><tr>
                            <td><InputLabel style={{color:"black"}}className="label">ConstDebitGroup</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
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
                                <div class="col" style={{borderStyle:"ridge"}}>
                                    <table>
                                        <tr><td>
                                        <h5 style={{color:"black"}}>Tax Detail</h5></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <td><h5 style={{color:"black"}}>Group</h5></td>
                                        </tr>
                          <tr>
                            <td><InputLabel style={{color:"black"}}className="label">CST NO</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">CST Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">LST NO</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">LST Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">VAT NO</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">VAT Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">PAN NO</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PAN Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">GST NO</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">GST Date</InputLabel></td>
                            <td><TextField id="date" type="date" InputLabelProps={{shrink: true,}}/></td>
                         </tr>


                        </table>
                                    </div></div>
                                
                            }
                        </div>
                        <div >
                            
                            <button onClick={()=>this.showHide(1)} className="btn btn-primary"style={{width:140}}>Account Detail</button>
                            { this.state.show[1] && 
                                <div>
                                <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">ControlAccountCode</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Sub.Lead Category</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Currency</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Payment</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Bill Allocation Type</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Party Region</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                       </table>
                      
                                </div>
                                <div class="col"style={{borderStyle:"ridge"}}>
                                    <table>
                                      
                          <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Credit Days</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           </tr>
                         <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Budget Applicable</InputLabel></td>
                         </tr>
                         <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Cost Center Applicable</InputLabel></td>
                         <td> <FormControlLabel id="cashpur" control={<Checkbox name="checkedC" checked />} style={{marginTop:20}} /></td>
                         </tr>


                        </table>
                                    </div></div>
                            }
                        </div>
                        <div >
                           
                            <button onClick={()=>this.showHide(2)} className="btn btn-primary">Communication</button>
                            { this.state.show[2] && 
                                <div >
                                <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                             <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Address</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="formname" style={{width:430}}label="Address"/></td>
                            </tr>
                           </table>
                            <table>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Country</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                           </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">State</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">District</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Taluk/Mandal</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">City/Town</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Pincode</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                        </tr>
                        
                       </table>
                       <table>
                       <tr>
                            <td><InputLabel style={{color:"black"}}className="label">LandMark</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="formname"style={{width:440}} label="Code"/></td>
                            
                        </tr>
                   </table>
                                </div>
                                <div class="col"style={{borderStyle:"ridge"}}>
                                    <table>
                                
                          <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Contact Person</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           <td><InputLabel style={{color:"black"}}className="label">Phone</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           </tr>
                           <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Mobile</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           <td><InputLabel style={{color:"black"}}className="label">Fax</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           </tr>
                           <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Email</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Website</InputLabel></td>
                            <td><TextField id="formname" label="Code"/></td>
                           </tr>


                        </table>
                                    </div></div>
                            }
                        </div>
                        <div >
                           
                            <button onClick={()=>this.showHide(3)} className="btn btn-primary"style={{width:140}}>Analysis</button>
                            { this.state.show[3] && 
                               <div><InputLabel style={{color:"black",fontSize:20}}className="label">Analysis</InputLabel>
                               <div style={{borderStyle:"ridge"}}>
                                    <table>
                                       
                       <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis1</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis2</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                          </tr>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Analysis3</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">Analysis4</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                         </tr>
                         <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis5</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                           <td><InputLabel style={{color:"black"}}className="label">Area</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                           </tr>
                       
                      </table>
                      </div>
                      <InputLabel style={{color:"black",fontSize:20}}className="label">Bank Details</InputLabel>
                      <div style={{borderStyle:"ridge"}}>
                                    <table>
                                       
                       <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Bank</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                          </tr>
                          <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Payable At</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                          </tr>
                          <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Tds</InputLabel></td>
                           <td><TextField id="formname" label="Code"/></td>
                           <td><TextField id="itemtypename" label="Name"style={{width:250}} /></td>
                          </tr>  </table>
                          <table>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Address</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <td><TextField id="formname"style={{width:420}} label="Code"/></td> 
                       </tr>
                       
                      </table>
                      </div>
                      
                               
                               </div>
                            }
                        </div>
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