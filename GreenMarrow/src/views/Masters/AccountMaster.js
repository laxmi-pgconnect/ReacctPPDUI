import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel,  TextField } from '@material-ui/core';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button} from 'react-bootstrap';

export default class AccountMaster extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
            key: 'home',
            Account: [{accountCode:'',accountName:''}] ,
            Accounttype: [{acType:'',acTypeDesc:''}] ,    
            Grouptype: [{grpType:'',grpTypeName:''}] , 
            CreditGroup: [{grpCode:'',grpName:''}] , 
            Debit: [{dbgrpCode:'',grpName:''}] ,   
            ConsCredit: [{consGrpCodeCr:'',consGrpCodeCrName:''}] ,
            ConsDebit: [{consGrpCodeDr:'',consGrpCodeDrName:''}] ,  
            ControlAcType: [{controlAc :'',controlAcName:''}] ,   
            SubLegCategory: [{subLedCategory  :'',subLedCategoryName :''}] ,
            Currency: [{currency:'',currencyDesc :''}] ,
            Payment: [{expPymt :'',expPymtName:''}] ,
            BillAllocate: [{billAlloc :'',billAllocName:''}] ,
            Country: [{countryCode :'',countryName:''}] ,
            State: [{stateCode :'',stateName:''}] ,
            District: [{distCode :'',distName:''}] ,
            Taluk: [{talukCode :'',talukName:''}] ,
            City: [{cityCode :'',cityName:''}] ,
            Pincode: [{pinCode :'',cityName:''}] ,
            Analysis1: [{analCode1:'',analName1:''}] ,
            Analysis2: [{analCode2 :'',analName2:''}] ,
            Analysis3: [{analCode3 :'',analName3:''}] ,
            Analysis4: [{analCode4:'',analName4:''}] ,
            Analysis5: [{analCode5 :'',analName5:''}] ,
            Area: [{areaCode:'',areaDesc:''}] ,
            Bank: [{bankCode:'',bankName :''}] ,
            PayableAt: [{payableAt:'',payableAtName :''}] ,
            PartyRegion: [{partyCode:'',partyName :''}] ,
            TdNature: [{tdsNature:'',tdsNatureDesc :''}] ,
            accountCode:'', accountName:'', grpCodeCr:'', grpCodeCrName:'', grpCodeDr:'', grpCodeDrName:'', acType:'', acTypeDesc:'', grpType:'', grpTypeName:'',
            controlAc:'', billAlloc:'',  analCode1:'', analName1:'', analCode2:'', analName2:'', analCode3:'', analName3:'', analCode4:'',  analName4:'', analCode5:'', analName5:'',
            ccReq:'',  subLedCategory:'',  subLedCategoryName:'',  currency:'', currencyDesc:'',  transControl:'', creditDays:'',  expPymt:'',  areaCode:'',  areaDesc:'',
            consGrpCodeCr:'',  consGrpCodeCrName:'', consGrpCodeDr:'', consGrpCodeDrName:'', isActive:'',  beAcOnSl:'', beAcOnGl:'', beAcOnSlType:'', beAcOnDesc:'',
            tdsNature:'',  tdsNatureDesc:'', payFavour:'',  partyCode:'',  partyName:'',  address1:'', address2:'',  address3:'', landMark:'',  pinCode:'',  postOff:'',
            cityCode:'',  cityName:'',  talukCode:'',  talukName:'', distCode:'',  distName:'',  stateCode:'',  stateName:'',  countryCode :'', countryName:'',
            phoneNo:'',  faxNo :'', mobileNo:'',  mailId:'', website:'',  contactPer:'',  acRefNo:'',  cstNo:'',  cstDate:'',  lstNo:'',  lstDate :'', vatNo:'',  vatDate:'',
            panNo :'', panDate:'',  bankCode :'', bankName:'',  bankAdd1:'', bankAdd2:'', bankAdd3:'', payableAt:'',  payableAtName:'',  gstNo:'', gstDate:'',
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.ValueChange = this.ValueChange.bind(this);
        this.chn = this.chn.bind(this);  
        this.cstDate = this.cstDate.bind(this);  
        this.lstDate = this.lstDate.bind(this);  
        this.vatDate = this.vatDate.bind(this);  
        this.panDate = this.panDate.bind(this);  
        this.gstDate = this.gstDate.bind(this);  
        this.cstNo = this.cstNo.bind(this);  
        this.lstNo = this.lstNo.bind(this);  
        this.vatNo = this.vatNo.bind(this);  
        this.panNo = this.panNo.bind(this);  
        this.gstNo = this.gstNo.bind(this); 
        this.SaveData=this.SaveData.bind(this);
        this.creditDays = this.creditDays.bind(this); 
        this.bankAdd1 = this.bankAdd1.bind(this); 
        this.bankAdd2 = this.bankAdd2.bind(this); 
        this.bankAdd3 = this.bankAdd3.bind(this); 
        this.address1 = this.address1.bind(this); 
        this.address2 = this.address2.bind(this);
        this.address3 = this.address3.bind(this);
        this.landMark = this.landMark.bind(this); 
        this.contactPer = this.contactPer.bind(this); 
        this.phoneNo = this.phoneNo.bind(this); 
        this.mobileNo = this.mobileNo.bind(this); 
        this.faxNo = this.faxNo.bind(this); 
        this.mailId = this.mailId.bind(this); 
        this.website = this.website.bind(this); 
	}
    ValueChange(event) {
        this.setState({
          ccReq: event.target.value
        });
      }
      onValueChange(event) {
        this.setState({
          isActive: event.target.value
        });
      }
      accountName(event) {  
        this.setState({ accountName: event.target.value })  
        } 
      chn(event){
        this.setState({accountCode:event.target.value})
      }
      cstNo(event){
        this.setState({cstNo:event.target.value})
      }
      lstNo(event){
        this.setState({lstNo:event.target.value})
      }
      vatNo(event){
        this.setState({vatNo:event.target.value})
      }
      panNo(event){
        this.setState({panNo:event.target.value})
      }
      gstNo(event){
        this.setState({gstNo:event.target.value})
      }
      cstDate(event){
        this.setState({cstDate:event.target.value})
      }
      panDate(event){
        this.setState({panDate:event.target.value})
      }
      vatDate(event){
        this.setState({vatDate:event.target.value})
      }
      lstDate(event){
        this.setState({lstDate:event.target.value})
      }
      gstDate(event){
        this.setState({gstDate:event.target.value})
      }
      creditDays(event){
        this.setState({creditDays:event.target.value})
      }
      landMark(event){
        this.setState({landMark:event.target.value})
      }
      contactPer(event){
        this.setState({contactPer:event.target.value})
      }
      phoneNo(event){
        this.setState({phoneNo:event.target.value})
      }
      mobileNo(event){
        this.setState({mobileNo:event.target.value})
      }
      faxNo(event){
        this.setState({faxNo:event.target.value})
      }
      mailId(event){
        this.setState({mailId:event.target.value})
      }
      website(event){
        this.setState({website:event.target.value})
      }
      address1(event){
        this.setState({address1:event.target.value})
      }
      address2(event){
        this.setState({address2:event.target.value})
      }
      address3(event){
        this.setState({address3:event.target.value})
      }
      bankAdd1(event){
        this.setState({bankAdd1:event.target.value})
      }
      bankAdd2(event){
        this.setState({bankAdd2:event.target.value})
      }
      bankAdd3(event){
        this.setState({bankAdd3:event.target.value})
      }
      TdNatureChange=(event,value)=>{
        this.setState({tdsNature:value.natureCode})
        this.setState({tdsNatureDesc:value.natureDesc})
         }
      PartyRegionChange=(event,value)=>{
        this.setState({partyCode:value.gcmCode})
        this.setState({partyName:value.gcmDesc})
         }
      PayableAtChange=(event,value)=>{
        this.setState({payableAt:value.placeCode})
        this.setState({payableAtName:value.placeName})
         }
      BankChange=(event,value)=>{
        this.setState({bankCode:value.gcmCode})
        this.setState({bankName:value.gcmDesc})
         }
      AreaChange=(event,value)=>{
        this.setState({areaCode:value.gcmCode})
        this.setState({areaDesc:value.gcmDesc})
         }
       
      Analysis1Change=(event,value)=>{
        this.setState({analCode1 :value.analCode})
        this.setState({analName1 :value.analName})
         }
         Analysis2Change=(event,value)=>{
            this.setState({analCode2 :value.analCode})
            this.setState({analName2 :value.analName})
             }
             Analysis3Change=(event,value)=>{
                this.setState({analCode3 :value.analCode})
                this.setState({analName3 :value.analName})
                 }
                 Analysis4Change=(event,value)=>{
                    this.setState({analCode4 :value.analCode})
                    this.setState({analName4 :value.analName})
                     }
                     Analysis5Change=(event,value)=>{
                        this.setState({analCode5 :value.analCode})
                        this.setState({analName5 :value.analName})
                         }
      PincodeChange=(event,value)=>{
        this.setState({pinCode :value.pinCode})
        this.setState({cityName :value.cityName})
         }
      CityChange=(event,value)=>{
        this.setState({cityCode :value.cityCode})
        this.setState({cityName :value.cityName})
         }
      TalukChange=(event,value)=>{
        this.setState({talukCode :value.talukCode})
        this.setState({talukName :value.talukName})
         }
      DistrictChange=(event,value)=>{
        this.setState({distCode:value.districtCode})
        this.setState({distName :value.districtName})
         }
      StateChange=(event,value)=>{
        this.setState({stateCode :value.stateCode})
        this.setState({stateName :value.stateName})
         }
      CountryChange=(event,value)=>{
        this.setState({countryCode :value.countryCode})
        this.setState({countryName :value.countryName})
         }
      BillAllocateChange=(event,value)=>{
        this.setState({billAlloc :value.gcmCode})
        this.setState({billAllocName :value.gcmDesc})
         }
      PaymentChange=(event,value)=>{
        this.setState({expPymt :value.gcmCode})
        this.setState({expPymtName :value.gcmDesc})
         }
         CurrencyChange=(event,value)=>{
            this.setState({currency:value.currency})
            this.setState({currencyDesc:value.currencyDesc})
             }
      AccountChange=(event,value)=>{
        this.setState({accountCode:value.accountCode})
        this.setState({accountName:value.accountName})
         }
         AccounttypeChange=(event,value)=>{
            this.setState({acType:value.gcmCode})
            this.setState({acTypeDesc:value.gcmDesc})
             }
             GrouptypeChange=(event,value)=>{ 
                this.setState({grpType:value.gcmCode})
                this.setState({grpTypeName :value.gcmDesc})
                 }
                 CreditGroupChange=(event,value)=>{
                    this.setState({grpCodeCr:value.grpCode})
                    this.setState({grpCodeCrName :value.grpName})
                     }
                     DebitGroupChange=(event,value)=>{
                        this.setState({grpCodeDr:value.grpCode})
                        this.setState({grpCodeDrName :value.grpName})
                         }
                         ConsCreditGroupChange=(event,value)=>{
                           this.setState({consGrpCodeCr:value.grpCode})
                           this.setState({consGrpCodeCrName :value.grpName})
                            }
                            ConsDebitGroupChange=(event,value)=>{
                               this.setState({consGrpCodeDr:value.grpCode})
                               this.setState({consGrpCodeDrName :value.grpName})
                                }
                                ControlAcTypeChange=(event,value)=>{
                                    this.setState({controlAc :value.accountCode})
                                    this.setState({controlAcName:value.accountName})
                                     }
                                     SubLegCategoryChange=(event,value)=>{
                                        this.setState({subLedCategory:value.gcmCode})
                                        this.setState({subLedCategoryName :value.gcmDesc})
                                         }
            
         componentDidMount() {  
            this.AccountData();
            this.AccounttypeData();
            this.GrouptypeData();
            this.CreditGroupData();
            this.DebitGroupData();
            this.ConsCreditGroupData();
            this.ConsDebitGroupData();
            this.ControlAcTypeData();
            this.SubLegCategoryData();
            this.CurrencyData();
            this.PaymentData();
            this.BillAllocateData();
            this.CountryData();
            this.StateData();
            this.DistrictData();
            this.TalukData();
            this.CityData();
            this.PincodeData();
            this.Analysis1Data();
            this.Analysis2Data();
            this.Analysis3Data();
            this.Analysis4Data();
            this.Analysis5Data();
            this.AreaData();
            this.BankData();
            this.PayableAtData();
            this.PartyRegionData();
            this.TdNatureData();
            }
            SaveData(event) { debugger;
                let data = {
                  accountCode:this.state.accountCode,
                  accountName:this.state.accountName,
                  grpCodeCr:this.state.grpCodeCr,
                        grpCodeDr:this.state.grpCodeDr,
                        acType:this.state.acType,
                        grpType:this.state.grpType,
                        controlAc:this.state.controlAc,
                        billAlloc:this.state.billAlloc,
                        analCode1:this.state.analCode1,
                       analCode2:this.state.analCode2,
                        analCode3:this.state.analCode3,
                        analCode4:this.state.analCode4,
                        analCode5:this.state.analCode5,
                        ccReq:this.state.ccReq,
                        subLedCategory:this.state.subLedCategory,
                       currency:this.state.currency,
                        creditDays:parseInt(this.state.creditDays),
                        expPymt:this.state.expPymt,
                        areaCode:this.state.areaCode,
                        consGrpCodeCr:this.state.consGrpCodeCr,
                        consGrpCodeDr:this.state.consGrpCodeDr,
                       isActive:this.state.isActive,
                       tdsNature:this.state.tdsNature,
                        partyCode:this.state.partyCode,
                        partyName:this.state.partyName,
                        address1:this.state.address1,
                        address2:this.state.address2,
                        address3:this.state.address3,
                        landMark:this.state.landMark,
                        pinCode:this.state.pinCode,
                       cityCode:this.state.cityCode,
                        talukCode:this.state.talukCode,
                        distCode: this.state.distCode,
                        stateCode:this.state.stateCode,
                         countryCode:this.state.countryCode,
                        phoneNo: this.state.phoneNo,
                        faxNo: this.state.faxNo,
                        mobileNo: this.state.mobileNo,
                        mailId:this.state.mailId,
                        website: this.state.website,
                        contactPer: this.state.contactPer,
                         cstNo:this.state.cstNo,
                        cstDate: this.state.cstDate,
                        lstNo: this.state.lstNo,
                        lstDate:this.state.lstDate,
                        vatNo:this.state.vatNo,
                        vatDate: this.state.vatDate,
                        panNo: this.state.panNo,
                        panDate: this.state.panDate,
                        bankCode:this.state.bankCode,
                        bankName: this.state.bankName,
                        bankAdd1: this.state.bankAdd1,
                        bankAdd2: this.state.bankAdd2,
                        bankAdd3:this.state.bankAdd3,
                        payableAt:this.state.payableAt,
                        payableAtName: this.state.payableAtName,
                        gstNo: this.state.gstNo,
                        gstDate:this.state.gstDate,  }
                 fetch('https://localhost:44381/api/TmAccounts/SaveUpdate', {  
                    crossDomain:true,
                    method: 'Post',     
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(data)
                  })
              .then(Response => Response.json())        
              .then(result => {  
                     console.log(result);  
                  if (result.status === 'SUCCESSFULL')  
                     {
                      alert("SAVED SUCCESSFULLY")
                      
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
                     }  console.log(result);  
                      debugger;
              })  
            }  
            View(accountCode) {
                axios.post('https://localhost:44381/api/TmAccounts/ViewData?AccountCode='+accountCode)
                  .then(response => {
            
                    console.log(response.data);
                    this.setState({
                        grpCodeCr: response.data[0].grpCodeCr,
                        grpCodeCrName: response.data[0].grpCodeCrName ,
                        grpCodeDr: response.data[0].grpCodeDr,
                        grpCodeDrName:response.data[0].grpCodeDrName,
                        acType: response.data[0].acType,
                        acTypeDesc: response.data[0].acTypeDesc,
                        grpType: response.data[0].grpType,
                        grpTypeName:response.data[0].grpTypeName,
                        controlAc: response.data[0].controlAc,
                        billAlloc: response.data[0].billAlloc,
                        analCode1: response.data[0].analCode1,
                        analName1:response.data[0].analName1,
                        analCode2: response.data[0].analCode2,
                        analName2:response.data[0].analName2,
                        analCode3: response.data[0].analCode3,
                        analName3:response.data[0].analName3,
                        analCode4: response.data[0].analCode4,
                        analName4:response.data[0].analName4,
                        analCode5: response.data[0].analCode5,
                        analName5:response.data[0].analName5,
                        ccReq: response.data[0].ccReq,
                        subLedCategory: response.data[0].subLedCategory,
                        subLedCategoryName: response.data[0].subLedCategoryName,
                        currency:response.data[0].currency,
                        currencyDesc: response.data[0].currencyDesc,
                        transControl: response.data[0].transControl,
                        creditDays: response.data[0].creditDays,
                        expPymt:response.data[0].expPymt,
                        areaCode: response.data[0].areaCode,
                        areaDesc: response.data[0].areaDesc,
                        consGrpCodeCr: response.data[0].consGrpCodeCr,
                        consGrpCodeCrName:response.data[0].consGrpCodeCrName,
                        consGrpCodeDr: response.data[0].consGrpCodeDr,
                        consGrpCodeDrName: response.data[0].consGrpCodeDrName,
                        isActive: response.data[0].isActive,
                        beAcOnSl:response.data[0].beAcOnSl,
                        beAcOnGl: response.data[0].beAcOnGl,
                        beAcOnSlType: response.data[0].beAcOnSlType,
                        beAcOnDesc: response.data[0].beAcOnDesc,
                        tdsNature:response.data[0].tdsNature,
                        tdsNatureDesc: response.data[0].tdsNatureDesc,
                        payFavour: response.data[0].payFavour,
                        partyCode: response.data[0].partyCode,
                        partyName:response.data[0].partyName,
                        address1: response.data[0].address1,
                        address2: response.data[0].address2,
                        address3: response.data[0].address3,
                        landMark:response.data[0].landMark,
                        pinCode: response.data[0].pinCode,
                        postOff: response.data[0].postOff,
                        cityCode: response.data[0].cityCode,
                        cityName:response.data[0].cityName,
                        talukCode: response.data[0].talukCode,
                        talukName: response.data[0].talukName,
                        distCode: response.data[0].distCode,
                        distName:response.data[0].distName,
                        stateCode: response.data[0].stateCode,
                        stateName: response.data[0].stateName,
                        countryCode: response.data[0].countryCode,
                        countryName:response.data[0].countryName,
                        phoneNo: response.data[0].phoneNo,
                        faxNo: response.data[0].faxNo,
                        mobileNo: response.data[0].mobileNo,
                        mailId:response.data[0].mailId,
                        website: response.data[0].website,
                        contactPer: response.data[0].contactPer,
                        acRefNo: response.data[0].acRefNo,
                        cstNo:response.data[0].cstNo,
                        cstDate: response.data[0].cstDate,
                        lstNo: response.data[0].lstNo,
                        lstDate: response.data[0].lstDate,
                        vatNo:response.data[0].vatNo,
                        vatDate: response.data[0].vatDate,
                        panNo: response.data[0].panNo,
                        panDate: response.data[0].panDate,
                        bankCode:response.data[0].bankCode,
                        bankName: response.data[0].bankName,
                        bankAdd1: response.data[0].bankAdd1,
                        bankAdd2: response.data[0].bankAdd2,
                        bankAdd3:response.data[0].bankAdd3,
                        payableAt: response.data[0].payableAt,
                        payableAtName: response.data[0].payableAtName,
                        gstNo: response.data[0].gstNo,
                        gstDate:response.data[0].gstDate,
                                                                
                    });
                  
                  })
              }
            TdNatureData(){
                axios.post('https://localhost:44381/api/TmAccounts/TdNature').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     TdNature: response.data  
                 });  
                 });  
                 }  
            PartyRegionData(){
                axios.post('https://localhost:44381/api/TmAccounts/PartyRegion').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     PartyRegion: response.data  
                 });  
                 });  
                 }  
            PayableAtData(){
                axios.post('https://localhost:44381/api/TmAccounts/PayableAt').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     PayableAt: response.data  
                 });  
                 });  
                 }  
            BankData(){
                axios.post('https://localhost:44381/api/TmAccounts/Bank').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Bank: response.data  
                 });  
                 });  
                 }  
            AreaData(){
                axios.post('https://localhost:44381/api/TmAccounts/Area').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Area: response.data  
                 });  
                 });  
                 } 
            Analysis1Data(){
                axios.post('https://localhost:44381/api/TmAccounts/Analysis1').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Analysis1: response.data  
                 });  
                 });  
                 }  
                 Analysis2Data(){
                    axios.post('https://localhost:44381/api/TmAccounts/Analysis2').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                         Analysis2: response.data  
                     });  
                     });  
                     } 
                     Analysis3Data(){
                        axios.post('https://localhost:44381/api/TmAccounts/Analysis3').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                             Analysis3: response.data  
                         });  
                         });  
                         } 
                         Analysis4Data(){
                            axios.post('https://localhost:44381/api/TmAccounts/Analysis4').then(response => {  
                             console.log(response.data);  
                             this.setState({  
                                 Analysis4: response.data  
                             });  
                             });  
                             } 
                             Analysis5Data(){
                                axios.post('https://localhost:44381/api/TmAccounts/Analysis5').then(response => {  
                                 console.log(response.data);  
                                 this.setState({  
                                     Analysis5: response.data  
                                 });  
                                 });  
                                 } 
            PincodeData(){
                axios.post('https://localhost:44381/api/TmAccounts/Pincode').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Pincode: response.data  
                 });  
                 });  
                 }  
            CityData(){
                axios.post('https://localhost:44381/api/TmAccounts/City').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     City: response.data  
                 });  
                 });  
                 }  
            TalukData(){
                axios.post('https://localhost:44381/api/TmAccounts/Taluk').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Taluk: response.data  
                 });  
                 });  
                 }  
            DistrictData(){
           axios.post('https://localhost:44381/api/TmAccounts/District').then(response => {  
            console.log(response.data);  
            this.setState({  
                District: response.data  
            });  
            });  
            }  
            StateData(){
                axios.post('https://localhost:44381/api/TmAccounts/State').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     State: response.data  
                 });  
                 });  
                 }  
            BillAllocateData(){
                axios.post('https://localhost:44381/api/TmAccounts/BillAllocate').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     BillAllocate: response.data  
                 });  
                 });  
                 } 
                 CountryData(){
                    axios.post('https://localhost:44381/api/TmAccounts/Country').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                         Country: response.data  
                     });  
                     });  
                     }   
            PaymentData(){
                axios.post('https://localhost:44381/api/TmAccounts/Payment').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                     Payment: response.data  
                 });  
                 });  
                 }  
            AccountData(){
           axios.post('https://localhost:44381/api/TmAccounts/AccountCode').then(response => {  
            console.log(response.data);  
            this.setState({  
               Account: response.data  
            });  
            });  
            } 
            CurrencyData(){
                axios.post('https://localhost:44381/api/TmAccounts/Currency').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Currency: response.data  
                 });  
                 });  
                 }  
            AccounttypeData(){
                axios.post('https://localhost:44381/api/TmAccounts/Accounttype').then(response => {  
                 console.log(response.data);  
                 this.setState({  
                    Accounttype: response.data  
                 });  
                 });  
                 } 
                 GrouptypeData(){
                    axios.post('https://localhost:44381/api/TmAccounts/Grouptype').then(response => {  
                     console.log(response.data);  
                     this.setState({  
                        Grouptype: response.data  
                     });  
                     });  
                     }  
                     CreditGroupData(){
                        axios.post('https://localhost:44381/api/TmAccounts/CreditGroup').then(response => {  
                         console.log(response.data);  
                         this.setState({  
                            CreditGroup: response.data  
                         });  
                         });  
                         }  
                         DebitGroupData(){
                            axios.post('https://localhost:44381/api/TmAccounts/DebitGroup').then(response => {  
                             console.log(response.data);  
                             this.setState({  
                                Debit: response.data  
                             });  
                             });  
                             }  
                             ConsCreditGroupData(){
                                axios.post('https://localhost:44381/api/TmAccounts/DebitGroup').then(response => {  
                                 console.log(response.data);  
                                 this.setState({  
                                    ConsCredit: response.data  
                                 });  
                                 });  
                                 }
                                 ConsDebitGroupData(){
                                    axios.post('https://localhost:44381/api/TmAccounts/ConsDebitGroup').then(response => {  
                                     console.log(response.data);  
                                     this.setState({  
                                        ConsDebit: response.data  
                                     });  
                                     });  
                                     }
                                     ControlAcTypeData(){
                                        axios.post('https://localhost:44381/api/TmAccounts/ControlAcType').then(response => {  
                                         console.log(response.data);  
                                         this.setState({  
                                             ControlAcType: response.data  
                                         });  
                                         });  
                                         } 
                                         SubLegCategoryData(){
                                            axios.post('https://localhost:44381/api/TmAccounts/SubLegCategory').then(response => {  
                                             console.log(response.data);  
                                             this.setState({  
                                                 SubLegCategory: response.data  
                                             });  
                                             });  
                                             }   
	render() {
		return (
            <div style={{position:"absolute"}}> 
            <GridContainer  >
                <GridItem >
                  <Card>
                    <CardHeader color="primary"style={{height:40,width:900}} >
                    <h4 >Account Master</h4>
                     </CardHeader>
                     <CardBody>
                       <div>
                <div class="col" style={{borderStyle:"ridge"}} >
                <table>
                             <tr>
                                 <td><InputLabel style={{color:"black"}}className="label">AccountCode</InputLabel></td>
                                 <td> <TextField id="accountCode" value={this.state.accountCode}/></td>
                                 <td><TextField  type="hidden"  id="accountName" onChange={this.accountName}value={this.state.accountName}/></td>
      <td> <Autocomplete    freeSolo  options={this.state.Account} getOptionLabel={option => option.accountName} className="txt2" 
      id="accountName"  onChange={this.AccountChange} renderInput={params => ( <TextField {...params}label={this.state.accountName}onChange={this.chn}  fullWidth /> )}/> </td>
                                 <td><Button type="button" onClick={e => this.View(this.state.accountCode)} >View</Button></td>
                             </tr>
                             <tr>
                                 <td><InputLabel style={{color:"black"}}className="label">AccountType</InputLabel></td>
                                 <td> <TextField id="acType" value={this.state.acType}/></td>
                                 <td><TextField  type="hidden"  id="acTypeDesc" value={this.state.acTypeDesc}/></td>
      <td> <Autocomplete    freeSolo  options={this.state.Accounttype} getOptionLabel={option => option.gcmDesc} className="txt2" 
      id="acTypeDesc"  onChange={this.AccounttypeChange} renderInput={params => ( <TextField {...params}label={this.state.acTypeDesc}  fullWidth /> )}/> </td>
                            
                                 <td><InputLabel style={{color:"black"}}className="label">GroupType</InputLabel></td>
                                 <td> <TextField id="grpType" value={this.state.grpType}/></td>
                                 <td><TextField  type="hidden"  id="grpTypeName" value={this.state.grpTypeName}/></td>
      <td> <Autocomplete    freeSolo  options={this.state.Grouptype} getOptionLabel={option => option.gcmDesc} className="txt2" 
      id="grpTypeName"  onChange={this.GrouptypeChange} renderInput={params => ( <TextField {...params}label={this.state.grpTypeName}  fullWidth /> )}/> </td>
                             </tr>
                            </table>
                        </div>
                            
                    <div style={{borderStyle:"ridge"}}>   
            <Tabs style={{color:"black"}} onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Account Master">
            <div class="col"style={{borderStyle:"ridge"}}>
                                     <table>
                        <tr>
                          <td><InputLabel style={{color:"black"}}className="label">CreditGroup</InputLabel></td>
                          <td> <TextField id="grpCodeCr" value={this.state.grpCodeCr}/></td>
                          <td><TextField  type="hidden"  id="grpCodeCrName" value={this.state.grpCodeCrName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.CreditGroup} getOptionLabel={option => option.grpName} className="txt2" 
 id="grpCodeCrName"  onChange={this.CreditGroupChange} renderInput={params => ( <TextField {...params}label={this.state.grpCodeCrName}  fullWidth /> )}/> </td>
                         
                        <td><InputLabel style={{color:"black"}}className="label">DebitGroup</InputLabel></td>
                        <td> <TextField id="grpCodeDr" value={this.state.grpCodeDr}/></td>
                        <td><TextField  type="hidden"  id="grpCodeDrName" value={this.state.grpCodeDrName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Debit} getOptionLabel={option => option.grpName} className="txt2" 
 id="grpCodeDrName"  onChange={this.DebitGroupChange} renderInput={params => ( <TextField {...params}label={this.state.grpCodeDrName}  fullWidth /> )}/> </td>
                            </tr>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">ConstCreditGroup</InputLabel></td>
                            <td> <TextField id="consGrpCodeCr" value={this.state.consGrpCodeCr}/></td>
                            <td><TextField  type="hidden"  id="consGrpCodeCrName" value={this.state.consGrpCodeCrName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ConsCredit} getOptionLabel={option => option.grpName} className="txt2" 
 id="consGrpCodeCrName"  onChange={this.ConsCreditGroupChange} renderInput={params => ( <TextField {...params}label={this.state.consGrpCodeCrName}  fullWidth /> )}/> </td>
                           
                            <td><InputLabel style={{color:"black"}}className="label">ConstDebitGroup</InputLabel></td>
                            <td> <TextField id="consGrpCodeDr" value={this.state.consGrpCodeDr}/></td>
                            <td><TextField  type="hidden"  id="consGrpCodeDrName" value={this.state.consGrpCodeDrName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ConsDebit} getOptionLabel={option => option.grpName} className="txt2" 
 id="consGrpCodeDrName"  onChange={this.ConsDebitGroupChange} renderInput={params => ( <TextField {...params}label={this.state.consGrpCodeDrName}  fullWidth /> )}/> </td>
                            </tr>
                        
                       </table>
                       <table>
                   <tr>
                     <td><InputLabel className="label"style={{color:"black",fontSize:18}}>Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label style={{color:"black"}}>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Active&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{color:"black"}}>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>INActive&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label style={{color:"black"}}>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>ForApproval</label> </div>
            </div></td>
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
                            <td><TextField id="cstNo" value={this.state.cstNo}onChange={this.cstNo} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">CST Date</InputLabel></td>
                      <td> <TextField id="datetime-local" type="datetime-local" value={this.state.cstDate}onChange={this.cstDate}
    InputLabelProps={{ shrink: true,}} /></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">LST NO</InputLabel></td>
                            <td><TextField id="lstNo" value={this.state.lstNo}onChange={this.lstNo} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">LST Date</InputLabel></td>
                         <td> <TextField id="datetime-local" type="datetime-local"onChange={this.lstDate} value={this.state.lstDate}
    InputLabelProps={{ shrink: true,}} /></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">VAT NO</InputLabel></td>
                            <td><TextField id="vatNo"  value={this.state.vatNo}onChange={this.vatNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">VAT Date</InputLabel></td>
                           <td> <TextField id="datetime-local" type="datetime-local"onChange={this.vatDate} value={this.state.vatDate}
    InputLabelProps={{ shrink: true,}} /></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">PAN NO</InputLabel></td>
                            <td><TextField id="panNo"value={this.state.panNo}onChange={this.panNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PAN Date</InputLabel></td>
                            <td> <TextField id="datetime-local" type="datetime-local"onChange={this.panDate} value={this.state.panDate}
    InputLabelProps={{ shrink: true,}} /></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">GST NO</InputLabel></td>
                            <td><TextField id="gstNo"value={this.state.gstNo}onChange={this.gstNo} /></td>
                            <td><InputLabel style={{color:"black"}}className="label">GST Date</InputLabel></td>
                            <td> <TextField id="datetime-local" type="datetime-local"onChange={this.gstDate} value={this.state.gstDate}
    InputLabelProps={{ shrink: true,}} /></td>
                         </tr>


                        </table>
                                    </div>
                </Tab>
            <Tab label="Account Detail">
            <div>
                                <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">ControlAccountCode</InputLabel></td>
                            <td> <TextField id="controlAc " value={this.state.controlAc }/></td>
                            <td><TextField  type="hidden"  id="controlAcName" value={this.state.controlAcName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ControlAcType} getOptionLabel={option => option.accountName} className="txt2" 
  id="controlAcName"  onChange={this.ControlAcTypeChange} renderInput={params => ( <TextField {...params}label={this.state.controlAcName} fullWidth /> )}/> </td>
                       
                            <td><InputLabel style={{color:"black"}}className="label">Sub.Lead Category</InputLabel></td>
                            <td> <TextField id="subLedCategory  " value={this.state.subLedCategory  }/></td>
                            <td><TextField  type="hidden"  id="subLedCategoryName" value={this.state.subLedCategoryName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.SubLegCategory} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="subLedCategoryName "  onChange={this.SubLegCategoryChange} renderInput={params => ( <TextField {...params}label={this.state.subLedCategoryName }  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Currency</InputLabel></td>
                            <td> <TextField id="currency" value={this.state.currency}/></td>
                            <td><TextField  type="hidden"  id="currencyDesc" value={this.state.currencyDesc}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Currency} getOptionLabel={option => option.currencyDesc} className="txt2" 
  id="currencyDesc "  onChange={this.CurrencyChange} renderInput={params => ( <TextField {...params}label={this.state.currencyDesc}  fullWidth /> )}/> </td>
                        
                            <td><InputLabel style={{color:"black"}}className="label">Payment</InputLabel></td>
                            <td> <TextField id="expPymt" value={this.state.expPymt}/></td>
                            <td><TextField  type="hidden"  id="expPymtName" value={this.state.expPymtName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Payment} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="expPymtName"  onChange={this.PaymentChange} renderInput={params => ( <TextField {...params}label={this.state.expPymtName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Bill Allocation Type</InputLabel></td>
                            <td> <TextField id="billAlloc" value={this.state.billAlloc}/></td>
                            <td><TextField  type="hidden"  id="billAllocName" value={this.state.billAllocName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.BillAllocate} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="billAllocName  "  onChange={this.BillAllocateChange} renderInput={params => ( <TextField {...params}label={this.state.billAllocName }  fullWidth /> )}/> </td>
                       
                            <td><InputLabel style={{color:"black"}}className="label">Party Region</InputLabel></td>
                            <td> <TextField id="partyCode" value={this.state.partyCode}/></td>
                            <td><TextField  type="hidden"  id="partyName" value={this.state.partyName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.PartyRegion} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="partyName "  onChange={this.PartyRegionChange} renderInput={params => ( <TextField {...params}label={this.state.partyName}  fullWidth /> )}/> </td>
                        </tr>
                       </table>
                      
                                </div>
                                <div class="col"style={{borderStyle:"ridge"}}>
                                    <table>
                                      
                          <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Credit Days</InputLabel></td>
                            <td><TextField id="creditDays"value={this.state.creditDays}onChange={this.creditDays} /></td>
                           </tr>
                         <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Budget Applicable</InputLabel></td>
                         </tr>
                         <tr>
                         <td><InputLabel for="ccReq" style={{color:"black"}}className="label">Cost Center Applicable</InputLabel></td>
                         <td>
                        <div class="form-check">
                    <input class="form-check-input"checked={this.state.ccReq === "Y"}onChange={this.ValueChange} type="checkbox" value="Y" id="ccReq"/>
  </div>
  </td>
                        
                         </tr>


                        </table>
                                    </div></div>
                
              </Tab>
            <Tab label="Communication">
            <div >
                                <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                             <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Address</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="address1"onChange={this.address1} value={this.state.address1} style={{width:430}}/></td>
                            </tr>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Address2</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="address2"onChange={this.address2} value={this.state.address2} style={{width:430}}/></td>
                            </tr>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Address3</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="address3"onChange={this.address3} value={this.state.address3} style={{width:430}}/></td>
                            </tr>
                           </table>
                            <table>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Country</InputLabel></td>
                            <td> <TextField id="countryCode" value={this.state.countryCode}/></td>
                            <td><TextField  type="hidden"  id="countryName" value={this.state.countryName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.countryName} className="txt2" 
  id="countryName  "  onChange={this.CountryChange} renderInput={params => ( <TextField {...params}label={this.state.countryName }  fullWidth /> )}/> </td>
                           </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">State</InputLabel></td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
                        <td><TextField  type="hidden"  id="stateName" value={this.state.stateName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
  id="stateName"  onChange={this.StateChange} renderInput={params => ( <TextField {...params}label={this.state.stateName }  fullWidth /> )}/> </td>
                            </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">District</InputLabel></td>
                            <td> <TextField id="distCode" value={this.state.distCode}/></td>
                            <td><TextField  type="hidden"  id="distName" value={this.state.distName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.District} getOptionLabel={option => option.districtName} className="txt2" 
  id="distName"  onChange={this.DistrictChange} renderInput={params => ( <TextField {...params}label={this.state.distName }  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Taluk/Mandal</InputLabel></td>
                            <td> <TextField id="talukCode" value={this.state.talukCode}/></td>
                            <td><TextField  type="hidden"  id="talukName" value={this.state.talukName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Taluk} getOptionLabel={option => option.talukName} className="txt2" 
  id="talukName"  onChange={this.TalukChange} renderInput={params => ( <TextField {...params}label={this.state.talukName }  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">City/Town</InputLabel></td>
                            <td> <TextField id="cityCode" value={this.state.cityCode}/></td>
                            <td><TextField  type="hidden"  id="cityName" value={this.state.cityName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.City} getOptionLabel={option => option.cityName} className="txt2" 
  id="cityName"  onChange={this.CityChange} renderInput={params => ( <TextField {...params}label={this.state.cityName }  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Pincode</InputLabel></td>
                            <td> <TextField id="pinCode" value={this.state.pinCode}/></td>
                            <td><TextField  type="hidden"  id="postOff" value={this.state.postOff}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Pincode} getOptionLabel={option => option.postOff} className="txt2" 
  id="postOff"  onChange={this.PincodeChange} renderInput={params => ( <TextField {...params}label={this.state.postOff }  fullWidth /> )}/> </td>
                        </tr>
                        
                       </table>
                       <table>
                       <tr>
                            <td><InputLabel style={{color:"black"}}className="label">LandMark</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <td><TextField id="landMark"value={this.state.landMark}style={{width:440}} onChange={this.landMark}/></td>
                            
                        </tr>
                   </table>
                                </div>
                                <div class="col"style={{borderStyle:"ridge"}}>
                                    <table>
                                
                          <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Contact Person</InputLabel></td>
                            <td><TextField id="contactPer"onChange={this.contactPer} value={this.state.contactPer}/></td>
                           <td><InputLabel style={{color:"black"}}className="label">Phone</InputLabel></td>
                            <td><TextField id="phoneNo"onChange={this.phoneNo} value={this.state.phoneNo}/></td>
                           </tr>
                           <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Mobile</InputLabel></td>
                            <td><TextField id="mobileNo"onChange={this.mobileNo} value={this.state.mobileNo}/></td>
                           <td><InputLabel style={{color:"black"}}className="label">Fax</InputLabel></td>
                            <td><TextField id="faxNo"onChange={this.faxNo} value={this.state.faxNo}/></td>
                           </tr>
                           <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Email</InputLabel></td>
                            <td><TextField id="mailId"onChange={this.mailId} value={this.state.mailId}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Website</InputLabel></td>
                            <td><TextField id="website"onChange={this.website} value={this.state.website}/></td>
                           </tr>


                        </table>
                                    </div></div></Tab>
            <Tab label="Analysis" style={{fontsize:20}}>
            <div><InputLabel style={{color:"black",fontSize:20}}className="label">Analysis</InputLabel>
                               <div class="col" style={{borderStyle:"ridge"}}>
                                    <table>
                                       
                       <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis1</InputLabel></td>
                           <td> <TextField id="analCode1" value={this.state.analCode1}/></td>
                           <td><TextField  type="hidden"  id="analName1" value={this.state.analName1}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Analysis1} getOptionLabel={option => option.analName} className="txt2" 
  id="analName1"  onChange={this.Analysis1Change} renderInput={params => ( <TextField {...params}label={this.state.analName1 }  fullWidth /> )}/> </td>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis2</InputLabel></td>
                           <td> <TextField id="analCode2" value={this.state.analCode2}/></td>
                           <td><TextField  type="hidden"  id="analName2" value={this.state.analName2}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Analysis2} getOptionLabel={option => option.analName} className="txt2" 
  id="analName2"  onChange={this.Analysis2Change} renderInput={params => ( <TextField {...params}label={this.state.analName2 }  fullWidth /> )}/> </td>
                          </tr>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Analysis3</InputLabel></td>
                       <td> <TextField id="analCode3" value={this.state.analCode3}/></td>
                       <td><TextField  type="hidden"  id="analName3" value={this.state.analName3}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Analysis3} getOptionLabel={option => option.analName} className="txt2" 
  id="analName3"  onChange={this.Analysis3Change} renderInput={params => ( <TextField {...params}label={this.state.analName3 }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Analysis4</InputLabel></td>
                            <td> <TextField id="analCode4" value={this.state.analCode4}/></td>
                            <td><TextField  type="hidden"  id="analName4" value={this.state.analName4}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Analysis4} getOptionLabel={option => option.analName} className="txt2" 
  id="analName4"  onChange={this.Analysis4Change} renderInput={params => ( <TextField {...params}label={this.state.analName4 }  fullWidth /> )}/> </td>
                         </tr>
                         <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Analysis5</InputLabel></td>
                           <td> <TextField id="analCode5" value={this.state.analCode5}/></td>
                           <td><TextField  type="hidden"  id="analName5" value={this.state.analName5}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Analysis5} getOptionLabel={option => option.analName} className="txt2" 
  id="analName5"  onChange={this.Analysis5Change} renderInput={params => ( <TextField {...params}label={this.state.analName5 }  fullWidth /> )}/> </td>
                           <td><InputLabel style={{color:"black"}}className="label">Area</InputLabel></td>
                           <td> <TextField id="areaCode " value={this.state.areaCode }/></td>
                           <td><TextField  type="hidden"  id="areaDesc" value={this.state.areaDesc}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Area} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="areaDesc "  onChange={this.AreaChange} renderInput={params => ( <TextField {...params}label={this.state.areaDesc  }  fullWidth /> )}/> </td>
                           </tr>
                       
                      </table>
                      </div>
                      <InputLabel style={{color:"black",fontSize:20}}className="label">Bank Details</InputLabel>
                      <div class="col" style={{borderStyle:"ridge"}}>
                                    <table>
                                       
                       <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Bank</InputLabel></td>
                           <td> <TextField id="bankCode " value={this.state.bankCode  }/></td>
                           <td><TextField  type="hidden"  id="bankName" value={this.state.bankName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Bank} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="bankName "  onChange={this.BankChange} renderInput={params => ( <TextField {...params}label={this.state.bankName   }  fullWidth /> )}/> </td>
                          </tr>
                          <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Payable At</InputLabel></td>
                           <td> <TextField id="payableAt " value={this.state.payableAt }/></td>
                           <td><TextField  type="hidden"  id="payableAtName" value={this.state.payableAtName}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.PayableAt} getOptionLabel={option => option.placeName} className="txt2" 
  id="payableAtName "  onChange={this.PayableAtChange} renderInput={params => ( <TextField {...params}label={this.state.payableAtName}  fullWidth /> )}/> </td>
                          </tr>
                          <tr>
                           <td><InputLabel style={{color:"black"}}className="label">Tds</InputLabel></td>
                           <td> <TextField id="tdsNature " value={this.state.tdsNature }/></td>
                           <td><TextField  type="hidden"  id="tdsNatureDesc" value={this.state.tdsNatureDesc}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.TdNature} getOptionLabel={option => option.natureDesc} className="txt2" 
  id="tdsNatureDesc "  onChange={this.TdNatureChange} renderInput={params => ( <TextField {...params}label={this.state.tdsNatureDesc}  fullWidth /> )}/> </td>
                          </tr>  </table>
                          <table>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Address</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <td><TextField id="bankAdd1"style={{width:420}}onChange={this.bankAdd1} value={this.state.bankAdd1}/></td> 
                       </tr>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Address2</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td><TextField id="bankAdd2"style={{width:420}}onChange={this.bankAdd2} value={this.state.bankAdd2}/></td> 
                       </tr>
                       <tr>
                       <td><InputLabel style={{color:"black"}}className="label">Address3</InputLabel></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td><TextField id="bankAdd3"style={{width:420}}onChange={this.bankAdd3} value={this.state.bankAdd3}/></td> 
                       </tr>
                       
                      </table>
                      </div>
                      
                               
                               </div></Tab>
        </Tabs>
        </div>
             </div>
                </CardBody>
                
                <CardFooter >
                <div class="btn-group " style={{position: "absolute",right: 0}}>
    <button type="button" class="btn btn-success "style={{borderRadius:7}}onClick={this.SaveData}>Save</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Delete</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Clear</button>
    <button type="button" class="btn btn-success"style={{borderRadius:7}}>Print</button>
    <button type="button" class="btn btn-success" style={{borderRadius:7}} >Exit</button>
   </div> </CardFooter>
   </Card>
                </GridItem>
                </GridContainer>
       </div>
   
		);
	}
}

