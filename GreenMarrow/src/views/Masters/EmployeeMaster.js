import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { InputLabel,  TextField ,Select,MenuItem} from '@material-ui/core';
import CardFooter from "components/Card/CardFooter.js";
import './Item.css';
import Autocomplete from '@material-ui/lab/Autocomplete';  
import axios from 'axios'; 


export default class EmPloyeeMaster extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
            key: 'home',
            Employ:[],
            Quali: [] , Salary: [] ,
            Prior: [] ,   Relat: [] ,
             Employee: [{empCode:'',empName :''}] ,
            Branch: [{branchCode:'',branchName :''}] ,
            SubBranch: [{subBrCode:'',subBrName :''}] ,
            Grade: [{grade:'',gradeDescn :''}] ,
            DesgnGroup: [{desgnGrpCode:'',desgnGrpName :''}] ,
            Desgn: [{desgnCode:'',desgName :''}] ,
            Dept: [{deptCode:'',deptName :''}] ,
            DeptHead: [{deptHead:'',dHeadName :''}] ,
            Category: [{empCategory:'',empCateName :''}] ,
            JoinedAs: [{joinAs:'',joinAsName :''}] ,
            FnReport: [{funcRepHead:'',funcRepHeadName :''}] ,
            ADMReport: [{admRepHead:'',admRepHeadName :''}] ,
            Alternate: [{substitude:'',substitudeName :''}] ,
            ServiceProvider: [{mobileNet:''}] ,
            Country: [{countryCode:'',countryName:''}] ,
            State: [{stateCode:'',stateName:''}] ,
            District: [{distCode:'',distName:''}] ,
            Taluk: [{talukCode:'',talukName:''}] ,
            City: [{cityCode:'',cityName:''}] ,
            Pincode: [{pinCode:'',cityName:''}] ,
            SalaryHead: [{salHead:'',salHeadName:''}] ,
            Emptype: [{empType:'',empTypeName:''}] ,
            Shtype: [{shiftType:'',shiftTypeName:''}] ,
            Week: [{woff:'',weekDayName:''}] ,
            AddrType: [{addrType:'',addrTypeNam:''}] ,
            Nationality: [{nationality:'',nationalityName:''}] ,
            Religion: [{religion:'',religionName:''}] ,
            Blood: [{bloodGroup:'',bloGrpName:''}] ,
            Relation: [{relationShip:'',relationShipName:''}] ,
            Occupation: [{occu:'',occuName:''}] ,
            Qualify: [{qualification:'',qualificationName:''}] ,
            Subject: [{subject:''}] ,
            Study: [{study:''}] ,
            Reason: [{reason:''}] ,
            Bank: [{bank:'',bankName:''}] ,

            empCode:'', empName:'', inteCode:'', sex:'', doj:'',  paCode:'',  branchCode:'', branchName:'', companyName:'', divName:'', regZoneName:'', regionName:'',
            zoneName:'', martialStatus:'', grade:'', gradeDescn:'', desgnCode:'', desgnName:'', deptCode:'', deptName:'', empCategory:'', empCategoryName:'',
            joinAs:'', joinAsName:'', isWorking:'', relivDate:'', mailIdOff:'', mobileOff:'', mobileNet:'', mobileNetCode:'', funCrepHead:'', funCrepHeadName:'',
            admRepHead:'', admRepHeadName:'', substitute:'', substituteName:'', empType:'', empTypeName:'', woff:'', woffName:'', proBfrDate:'', proBtoDate:'',
            confirmDate:'', dob:'', dobCelebrate:'',  shiftType:'', shiftTypeName:'', panNo:'', pfNo:'', pfElgDate:'', esIno:'', esIelgDate:'', graduatyNo:'',
            supanuationNo:'', passPortNo:'', passPortUpTo:'', swfContr:'', swfContrNo:'', lwfContr:'', lwfContrNo:'', vehclass:'', vehNo:'', licenseNo:'', licenseUpTo:'',
            nationality:'', nationalityName:'', religion:'', religionName:'', bloodGroup:'', bloodGroupName:'', mailIdPer:'', salaryAcNo:'', salaryAcBank:'',
            salaryAcBankName:'', egrossSal:'', ebasicPay:'', isPfEligible:'', isEsiEligible:'', docNo:'', docDate:'', docIntNo:'', iceContact:'', icePhoneNo:'',
            ctcMonAmt:'', ctcYearAmt:'', ctcDayAmt:'', cfelDays:'', elgelDays:'', trbBranchCode:'', effectFrom:'', effectTo:'', salPayMode:'', isActive:'', caste:'',
            casteName:'', desgnGrpCode:'', desgnGrpName:'', vehType:'', subBrCode:'', subBrName:'', totExpYear:'', totExpMonth:'', docType:'', revisedFrom:'', arriErFrom:'',
            arriErTo:'', isCalcarrear:'', changeType:'', salHead:'', salHeadName:'', formulae:'', calcAmt:'', finalAmt:'', salType:'', payType:'', salHeadType:'', compName:'',
            placeempwrkexp:'', workFrom:'', workUpTo:'', designation:'', role:'', salary:'', remarks:'', addressType:'', addressTypeName:'',  countryCode:'', countryName:'',
            stateCode:'',  distCode:'',  distName:'', talukCode:'', talukName:'', cityCode:'', cityName:'', pinCode:'', postOff:'', address1:'', address2:'', Address3:'',
            stdCodeempadd:'', phoneNoempadd:'', mobileNo:'', qualCode:'', qualName:'', instName:'', place:'', univName:'', passYear:'', medium:'', majorSub:'', majorSubName :'',
            marksPerc:'', studyMode:'', studyModeName:'',isComp:'', reason:'', reasonName:'', qdeadline:'', relation:'', relationName:'', occupation:'',
            occupationName:'', isLegalHeir:'', age:'', annualIncome:'', stdCode:'', phoneNo:'',
           
          };
          this.sexChange = this.sexChange.bind(this);
          this.join = this.join.bind(this);
          this.relieve = this.relieve.bind(this);
          this.proFrom = this.proFrom.bind(this);
          this.proTo = this.proTo.bind(this);
          this.confrmDate = this.confrmDate.bind(this);
          this.dobChange = this.dobChange.bind(this);
          this.dobCele = this.dobCele.bind(this);
          this.pfCont = this.pfCont.bind(this);
          this.passport = this.passport.bind(this);
          this.license = this.license.bind(this);
          this.esiCont = this.esiCont.bind(this);
          this.staff = this.staff.bind(this);
          this.labour = this.labour.bind(this);
          this.veh = this.veh.bind(this);
       
  }
  veh(event){
    this.setState({vehType:event.target.value})
  }
  staff(event){
    this.setState({swfContr:event.target.value})
  }
  labour(event){
    this.setState({lwfContr:event.target.value})
  }
  proFrom(event){
    this.setState({proBfrDate:event.target.value})
  }
  proTo(event){
    this.setState({proBtoDate:event.target.value})
  }
  confrmDate(event){
    this.setState({confirmDate:event.target.value})
  }
  dobChange(event){
    this.setState({dob:event.target.value})
  }
  dobCele(event){
    this.setState({dobCelebrate:event.target.value})
  }
  pfCont(event){
    this.setState({pfElgDate:event.target.value})
  }
  esiCont(event){
    this.setState({esIelgDate:event.target.value})
  }
  passport(event){
    this.setState({passPortUpTo:event.target.value})
  }
  license(event){
    this.setState({licenseUpTo:event.target.value})
  }
  join(event){
    this.setState({doj:event.target.value})
  }
  relieve(event) {
    this.setState({relivDate: event.target.value});
  }
  sexChange(event) {
    this.setState({sex: event.target.value});
  }
  service(event) {
    this.setState({mobileNet: event.target.value});
  }
  BankChange=(event,value)=>{
    this.setState({bank:value.gcmCode})
    this.setState({bankName:value.gcmDesc})
    }
  ReasonChange=(event,value)=>{
    this.setState({reason:value.gcmDesc})
    }
    
  StudyChange=(event,value)=>{
    this.setState({study:value.gcmDesc})
    }
    
  SubjectChange=(event,value)=>{
    this.setState({subject:value.gcmCode})
    }
    
  QualifyChange=(event,value)=>{
    this.setState({qualification:value.gcmCode})
    this.setState({qualificationName:value.gcmDesc})
    }
  OccupationChange=(event,value)=>{
    this.setState({occu:value.gcmCode})
    this.setState({occuName:value.gcmDesc})
    }
  RelationChange=(event,value)=>{
    this.setState({relationShip:value.gcmCode})
    this.setState({relationShipName:value.gcmDesc})
    }
  BloodChange=(event,value)=>{
    this.setState({bloodGroup:value.gcmCode})
    this.setState({bloGrpName:value.gcmDesc})
    }
    
  ReligionChange=(event,value)=>{
    this.setState({religion:value.gcmCode})
    this.setState({religionName:value.gcmDesc})
    }
  NationalityChange=(event,value)=>{
    this.setState({nationality:value.gcmCode})
    this.setState({nationalityName:value.gcmDesc})
    }
    
  AddrTypeChange=(event,value)=>{
    this.setState({addressType:value.gcmCode})
    this.setState({addressTypeName:value.gcmDesc})
    }
  WeekChange=(event,value)=>{
    this.setState({woff:value.gcmCode})
    this.setState({weekDayName:value.gcmDesc})
    }
    
  ShtypeChange=(event,value)=>{
    this.setState({shiftType:value.gcmCode})
    this.setState({shiftTypeName:value.gcmDesc})
    }
  EmptypeChange=(event,value)=>{
    this.setState({empType:value.gcmCode})
    this.setState({empTypeName:value.gcmDesc})
    }
  SalaryHeadChange=(event,value)=>{
    this.setState({salHead:value.salHeadCode})
    this.setState({salHeadName:value.descn})
     }
  PincodeChange=(event,value)=>{
    this.setState({pinCode:value.pinCode})
    this.setState({postOff:value.postOff})
     }
  CityChange=(event,value)=>{
    this.setState({cityCode:value.cityCode})
    this.setState({cityName:value.cityName})
     }
  TalukChange=(event,value)=>{
    this.setState({talukCode:value.talukCode})
    this.setState({talukName:value.talukName})
     }
  DistrictChange=(event,value)=>{
    this.setState({distCode:value.districtCode})
    this.setState({distName:value.districtName})
     }
  StateChange=(event,value)=>{
    this.setState({stateCode:value.stateCode})
    this.setState({stateName:value.stateName})
     }
  CountryChange=(event,value)=>{
    this.setState({countryCode:value.countryCode})
    this.setState({countryName:value.countryName})
     }
  AlternateChange=(event,value)=>{
    this.setState({substitude:value.desgnCode})
    this.setState({substitudeName:value.desgName})
     }
     FnReportChange=(event,value)=>{
      this.setState({funcRepHead:value.desgnCode})
      this.setState({funcRepHeadName:value.gcmDesc})
       }
       ADMReportChange=(event,value)=>{
        this.setState({admRepHead:value.desgnCode})
        this.setState({admRepHeadName:value.gcmDesc})
         }
  JoinedAsChange=(event,value)=>{
    this.setState({joinAs:value.desgnCode})
    this.setState({joinAsName:value.desgName})
     }
  CategoryChange=(event,value)=>{
    this.setState({empCategory:value.gcmCode})
    this.setState({empCateName:value.gcmDesc})
     }
  DeptHeadChange=(event,value)=>{
    this.setState({deptHead:value.desgnCode})
    this.setState({dHeadName:value.gcmDesc})
     }
  DeptChange=(event,value)=>{
    this.setState({deptCode:value.deptCode})
    this.setState({deptName:value.deptName})
     }
  DesgnChange=(event,value)=>{
    this.setState({desgnCode:value.desgnCode})
    this.setState({desgName:value.desgName})
     }
  DesgnGroupChange=(event,value)=>{
    this.setState({desgnGrpCode:value.gcmCode})
    this.setState({desgnGrpName:value.gcmDesc})
     }
  GradeChange=(event,value)=>{
    this.setState({grade:value.grade})
    this.setState({gradeDescn:value.gradeDesc})
     }
  BranchChange=(event,value)=>{
    this.setState({branchCode:value.branchCode})
    this.setState({branchName:value.branchName})
     }
     SubBranchChange=(event,value)=>{
      this.setState({subBrCode:value.branchCode})
      this.setState({subBrName:value.branchName})
       }
  EmployeeChange=(event,value)=>{
    this.setState({empCode:value.empCode})
    this.setState({empName:value.empName})
     }
   componentDidMount() {  
    this.EmployeeData(); 
    this.BranchData();  
    this.GradeData();
    this.DesgnGroupData();   
    this.DesgnData();
    this.DeptData();
    this.DeptHeadData();
    this.CategoryData();
    this.JoinedAsData();
    this.AlternateData();
    this.ServiceProviderData();
    this.CountryData();
    this.StateData();
    this.DistrictData();
    this.TalukData();
    this.CityData();
    this.PincodeData();
    this.SalaryHeadData();
    this.EmptypeData();
    this.ShtypeData();
    this.WeekData();
    this.AddrTypeData();
    this.NationalityData();
    this.ReligionData();
    this.BloodData();
    this.RelationData();
    this.OccupationData();
    this.QualifyData();
    this.SubjectData();
    this.StudyData();
    this.ReasonData();
    this.BankData();
   }
   BankData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=BNM').then(response => {  
    console.log(response.data);  
    this.setState({  
        Bank: response.data  
    });  
    });  
    }
   ReasonData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=RSN').then(response => {  
    console.log(response.data);  
    this.setState({  
        Reason: response.data  
    });  
    });  
    }
   StudyData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=STM').then(response => {  
    console.log(response.data);  
    this.setState({  
        Study: response.data  
    });  
    });  
    }
   SubjectData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=SUB').then(response => {  
    console.log(response.data);  
    this.setState({  
        Subject: response.data  
    });  
    });  
    }
   QualifyData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=QLY').then(response => {  
    console.log(response.data);  
    this.setState({  
        Qualify: response.data  
    });  
    });  
    }
   OccupationData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=OCU').then(response => {  
    console.log(response.data);  
    this.setState({  
        Occupation: response.data  
    });  
    });  
    }
   RelationData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=RLA').then(response => {  
    console.log(response.data);  
    this.setState({  
        Relation: response.data  
    });  
    });  
    }
   BloodData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=BLG').then(response => {  
    console.log(response.data);  
    this.setState({  
        Blood: response.data  
    });  
    });  
    }
   ReligionData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=RLG').then(response => {  
    console.log(response.data);  
    this.setState({  
        Religion: response.data  
    });  
    });  
    }
   NationalityData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=NAT').then(response => {  
    console.log(response.data);  
    this.setState({  
      Nationality: response.data  
    });  
    });  
    }
   AddrTypeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=ADR').then(response => {  
    console.log(response.data);  
    this.setState({  
      AddrType: response.data  
    });  
    });  
    }
   WeekData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=WKD').then(response => {  
    console.log(response.data);  
    this.setState({  
      Week: response.data  
    });  
    });  
    }
   ShtypeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=SFT').then(response => {  
    console.log(response.data);  
    this.setState({  
      Shtype: response.data  
    });  
    });  
    }
    
   EmptypeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=EMT').then(response => {  
    console.log(response.data);  
    this.setState({  
      Emptype: response.data  
    });  
    });  
    }
   SalaryHeadData(){
    axios.post('https://localhost:44381/api/TmEmployees/SalaryHead').then(response => {  
     console.log(response.data);  
     this.setState({  
        SalaryHead: response.data  
     });  
     });  
     }  
   PincodeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Pincode').then(response => {  
     console.log(response.data);  
     this.setState({  
        Pincode: response.data  
     });  
     });  
     }  
   CityData(){
    axios.post('https://localhost:44381/api/TmEmployees/City').then(response => {  
     console.log(response.data);  
     this.setState({  
        City: response.data  
     });  
     });  
     }  
   TalukData(){
    axios.post('https://localhost:44381/api/TmEmployees/Taluk').then(response => {  
     console.log(response.data);  
     this.setState({  
        Taluk: response.data  
     });  
     });  
     }  
   DistrictData(){
    axios.post('https://localhost:44381/api/TmEmployees/District').then(response => {  
     console.log(response.data);  
     this.setState({  
        District: response.data  
     });  
     });  
     }  
   StateData(){
    axios.post('https://localhost:44381/api/TmEmployees/State').then(response => {  
     console.log(response.data);  
     this.setState({  
        State: response.data  
     });  
     });  
     }   
   CountryData(){
    axios.post('https://localhost:44381/api/TmEmployees/Country').then(response => {  
     console.log(response.data);  
     this.setState({  
        Country: response.data  
     });  
     });  
     }  
   ServiceProviderData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=MOB').then(response => {  
     console.log(response.data);  
     this.setState({  
        ServiceProvider: response.data  
     });  
     });  
     }  
   AlternateData(){
    axios.post('https://localhost:44381/api/TmEmployees/Alternate').then(response => {  
     console.log(response.data);  
     this.setState({  
        Alternate: response.data  
     });  
     });  
     }  
   JoinedAsData(){
    axios.post('https://localhost:44381/api/TmEmployees/JoinedAs').then(response => {  
     console.log(response.data);  
     this.setState({  
        JoinedAs: response.data  
     });  
     });  
     }  
   CategoryData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=ECT').then(response => {  
     console.log(response.data);  
     this.setState({  
        Category: response.data  
     });  
     });  
     }  
   DeptHeadData(){
    axios.post('https://localhost:44381/api/TmEmployees/DeptHead').then(response => {  
     console.log(response.data);  
     this.setState({  
        DeptHead: response.data,
        FnReport: response.data,
        ADMReport: response.data,  
     });  
     });  
     }  
   DeptData(){
    axios.post('https://localhost:44381/api/TmEmployees/Dept').then(response => {  
     console.log(response.data);  
     this.setState({  
        Dept: response.data  
     });  
     });  
     }  
   DesgnData(){
    axios.post('https://localhost:44381/api/TmEmployees/Desgn').then(response => {  
     console.log(response.data);  
     this.setState({  
        Desgn: response.data  
     });  
     });  
     }  
   DesgnGroupData(){
    axios.post('https://localhost:44381/api/TmEmployees/Category?gcmtype=DES').then(response => {  
     console.log(response.data);  
     this.setState({  
        DesgnGroup: response.data,
        
     });  
     });  
     }  
   GradeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Grade').then(response => {  
     console.log(response.data);  
     this.setState({  
        Grade: response.data  
     });  
     });  
     }  
   BranchData(){
    axios.post('https://localhost:44381/api/TmEmployees/Branch').then(response => {  
     console.log(response.data);  
     this.setState({  
        Branch: response.data,
        SubBranch: response.data   
     });  
     });  
     }  
   EmployeeData(){
    axios.post('https://localhost:44381/api/TmEmployees/Employee').then(response => {  
     console.log(response.data);  
     this.setState({  
        Employee: response.data  
     });  
     });  
     }   
     View(empCode) {
      axios.post('https://localhost:44381/api/TmEmployees/ViewEmployee?empcode='+empCode )
        .then(response => {
       
          console.log(response.data);
          this.setState({
           inteCode: response.data[0].inteCode,
            sex: response.data[0].sex,
            doj: response.data[0].doj,
            paCode: response.data[0].paCode,
            branchCode: response.data[0].branchCode,
            branchName: response.data[0].branchName,
            companyName: response.data[0].companyName,
            divName: response.data[0].divName,
            regZoneName: response.data[0].regZoneName,
            regionName: response.data[0].regionName,
            zoneName: response.data[0].zoneName,
            martialStatus: response.data[0].martialStatus,
            grade: response.data[0].grade,
            gradeDescn: response.data[0].gradeDescn,
            desgnCode: response.data[0].desgnCode,
            desgnName: response.data[0].desgnName,
            deptCode: response.data[0].deptCode,
            deptName: response.data[0].deptName,
            empCategory: response.data[0].empCategory,
            empCategoryName: response.data[0].empCategoryName,
            joinAs: response.data[0].joinAs,
            joinAsName: response.data[0].joinAsName,
            relivDate: response.data[0].relivDate,
            mailIdOff: response.data[0].mailIdOff,
            mobileOff: response.data[0].mobileOff,
            isWorking: response.data[0].isWorking,
            mobileNet: response.data[0].mobileNet,
            mobileNetCode: response.data[0].mobileNetCode,
            funCrepHead: response.data[0].funCrepHead,
            funCrepHeadName: response.data[0].funCrepHeadName,
            admRepHead: response.data[0].admRepHead,
            admRepHeadName: response.data[0].admRepHeadName,
            substitute: response.data[0].substitute,
            substituteName: response.data[0].substituteName,
            empType: response.data[0].empType,
            empTypeName: response.data[0].empTypeName,
            woff: response.data[0].woff,
            woffName: response.data[0].woffName,
            proBfrDate: response.data[0].proBfrDate,
            proBtoDate: response.data[0].proBtoDate,
            confirmDate: response.data[0].confirmDate,
            dob: response.data[0].dob,
            dobCelebrate: response.data[0].dobCelebrate,
            shiftType: response.data[0].shiftType,
            shiftTypeName: response.data[0].shiftTypeName,
            panNo: response.data[0].panNo,
            pfNo: response.data[0].pfNo,
            pfElgDate: response.data[0].pfElgDate,
            esIno: response.data[0].esIno,
            esIelgDate: response.data[0].esIelgDate,
            graduatyNo: response.data[0].graduatyNo,
            supanuationNo: response.data[0].supanuationNo,
            passPortNo: response.data[0].passPortNo,
            passPortUpTo: response.data[0].passPortUpTo,
            swfContr: response.data[0].swfContr,
            swfContrNo: response.data[0].swfContrNo,
            lwfContr: response.data[0].lwfContr,
            lwfContrNo: response.data[0].lwfContrNo,
            vehclass: response.data[0].vehclass,
            vehNo: response.data[0].vehNo,
            licenseNo: response.data[0].licenseNo,
            licenseUpTo: response.data[0].licenseUpTo,
            nationality: response.data[0].nationality,
            nationalityName: response.data[0].nationalityName,
            religion: response.data[0].religion,
            religionName: response.data[0].religionName,
            bloodGroup: response.data[0].bloodGroup,

            bloodGroupName: response.data[0].bloodGroupName,
            mailIdPer: response.data[0].mailIdPer,
            salaryAcNo: response.data[0].salaryAcNo,
            salaryAcBank: response.data[0].salaryAcBank,
            salaryAcBankName: response.data[0].salaryAcBankName,
            egrossSal: response.data[0].egrossSal,
            ebasicPay: response.data[0].ebasicPay,
            isPfEligible: response.data[0].isPfEligible,
            isEsiEligible: response.data[0].isEsiEligible,
            docNo: response.data[0].docNo,
            docDate: response.data[0].docDate,
            docIntNo: response.data[0].docIntNo,
            iceContact: response.data[0].iceContact,
            icePhoneNo: response.data[0].icePhoneNo,
            ctcMonAmt: response.data[0].ctcMonAmt,
            ctcYearAmt: response.data[0].ctcYearAmt,
            ctcDayAmt: response.data[0].ctcDayAmt,
            cfelDays: response.data[0].cfelDays,
            elgelDays: response.data[0].elgelDays,
            trbBranchCode: response.data[0].trbBranchCode,
            effectFrom: response.data[0].effectFrom,
            effectTo: response.data[0].effectTo,
            salPayMode: response.data[0].salPayMode,
            isActive: response.data[0].isActive,
            caste: response.data[0].caste,
            casteName: response.data[0].casteName,
            desgnGrpCode: response.data[0].desgnGrpCode,
            desgnGrpName: response.data[0].desgnGrpName,
            vehType: response.data[0].vehType,
            subBrCode: response.data[0].subBrCode,
            subBrName: response.data[0].subBrName,
            totExpYear: response.data[0].totExpYear,
            totExpMonth: response.data[0].totExpMonth,
            docType: response.data[0].docType,
            revisedFrom: response.data[0].revisedFrom,
            arriErFrom: response.data[0].arriErFrom,
            arriErTo: response.data[0].arriErTo,
            isCalcarrear: response.data[0].isCalcarrear,
            changeType: response.data[0].changeType,
            salHead: response.data[0].salHead,
            salHeadName: response.data[0].salHeadName,
            formulae: response.data[0].formulae,
            calcAmt: response.data[0].calcAmt,
            finalAmt: response.data[0].finalAmt,
            salType: response.data[0].salType,
            payType: response.data[0].payType,
            salHeadType: response.data[0].salHeadType,
            compName: response.data[0].compName,
            placeempwrkexp: response.data[0].placeempwrkexp,
            workFrom: response.data[0].workFrom,
            workUpTo: response.data[0].workUpTo,
            designation: response.data[0].designation,
            role: response.data[0].role,
            salary: response.data[0].salary,
            remarks: response.data[0].remarks,
            addressType: response.data[0].addressType,
            addressTypeName: response.data[0].addressTypeName,
            countryCode: response.data[0].countryCode,
            countryName: response.data[0].countryName,
            stateCode: response.data[0].stateCode,
            distCode: response.data[0].distCode,
            distName: response.data[0].distName,
            talukCode: response.data[0].talukCode,
            talukName: response.data[0].talukName,
            cityCode: response.data[0].cityCode,
            cityName: response.data[0].cityName,

            pinCode: response.data[0].pinCode,
            postOff: response.data[0].postOff,
            address1: response.data[0].address1,
            address2: response.data[0].address2,
            address3: response.data[0].address3,
            stdCodeempadd: response.data[0].stdCodeempadd,
            phoneNoempadd: response.data[0].phoneNoempadd,
            mobileNo: response.data[0].mobileNo,
            qualCode: response.data[0].qualCode,
            qualName: response.data[0].qualName,
            instName: response.data[0].instName,
            place: response.data[0].place,
            univName: response.data[0].univName,
            passYear: response.data[0].passYear,
            medium: response.data[0].medium,
            majorSub: response.data[0].majorSub,
            marksPerc: response.data[0].marksPerc,
            studyModeName: response.data[0].studyModeName,
            
            isComp: response.data[0].isComp,
            reason: response.data[0].reason,
            reasonName: response.data[0].reasonName,
            qdeadline: response.data[0].qdeadline,
            relation: response.data[0].relation,
            relationName: response.data[0].relationName,
            occupation: response.data[0].occupation,
            occupationName: response.data[0].occupationName,
            isLegalHeir: response.data[0].isLegalHeir,
            age: response.data[0].age,
            annualIncome: response.data[0].annualIncome,
            stdCode: response.data[0].stdCode,
            phoneNo: response.data[0].phoneNo,
            Employ:response.data[0].empAddrs,
            Quali:response.data[0].empquals,
            Prior:response.data[0].empwrkexps,
            Relat:response.data[0].empFamilies,
            Salary:response.data[0].empsaldtls
          });
        })
    }        
	render() {
		return (
            <div style={{position:"absolute"}}> 
            <GridContainer  >
                <GridItem >
                  <Card>
                    <CardHeader color="primary"style={{height:40,width:900}} >
                    <h4 >Employee Master</h4>
                     </CardHeader>
                     <CardBody>
                       <div>
                <div style={{borderStyle:"ridge"}}>   
            <Tabs style={{color:"black"}} onSelect={(index, label) => console.log(label + ' selected')}>
            <Tab label="Master">
            <div class="col"style={{borderStyle:"ridge"}}>
                        <table>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Employee Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                     <td> <TextField id="empCode" value={this.state.empCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Employee} getOptionLabel={option => option.empName} className="txt2" 
  id="empName"  onChange={this.EmployeeChange} renderInput={params => ( <TextField {...params}label={this.state.empName }  fullWidth /> )}/> </td>
                      <td><button type="button"onClick={e => this.View(this.state.empCode)} class="btn btn-info"style={{marginTop:20,height:30}}>View</button></td>
                      </tr>
                   </table>
                   <table>
                      <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Int Emp.Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                       <td><TextField id="inteCode" value={this.state.inteCode}/></td>
                       <td><InputLabel style={{color:"black"}}className="label">Personal A/C Code</InputLabel></td>
                       <td><TextField id="paCode" value={this.state.paCode}/></td>
                       <td><InputLabel for="ccReq" style={{color:"black"}}className="label">Working</InputLabel></td>
                         <td>
                        <div class="form-check">
                    <input class="form-check-input"checked={this.state.isWorking === "Y"}onChange={this.ValueChange} type="checkbox" value="Y" id="ccReq"/>
  </div>
  </td>
                       </tr>
                       <tr>
                         <td><InputLabel style={{color:"black"}}className="label">Date of Join</InputLabel></td>
                         <td> <TextField id="doj" type="datetime-local"onChange={this.join} value={this.state.doj}InputLabelProps={{shrink: true,}}/></td>
                         <td><InputLabel style={{color:"black"}}className="label">Date of leaving</InputLabel></td>
                         <td> <TextField id="relivDate" type="datetime-local"onChange={this.relieve} value={this.state.relivDate}InputLabelProps={{shrink: true,}}/></td>
                       <td><InputLabel style={{color:"black"}}className="label">&nbsp;&nbsp;&nbsp;Sex</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label>
            <input   type="radio"   value="M"  checked={this.state.sex === "M"}  onChange={this.sexChange}/>Male&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="F"  checked={this.state.sex === "F"}  onChange={this.sexChange}/>Female&nbsp;&nbsp;&nbsp;</label> </div>
           </div></td>
                       </tr>
                   </table>
                   <table>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Branch/Unit</InputLabel></td>
                     <td> <TextField id="branchCode" value={this.state.branchCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Branch} getOptionLabel={option => option.branchName} className="txt2" 
  id="branchName"  onChange={this.BranchChange} renderInput={params => ( <TextField {...params}label={this.state.branchName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">Company</InputLabel></td>
                       <td><TextField id="companyName"style={{width:250}} value={this.state.companyName}/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Sub Branch</InputLabel></td>
                     <td> <TextField id="subBrCode" value={this.state.subBrCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.SubBranch} getOptionLabel={option => option.branchName} className="txt2" 
  id="subBrName"  onChange={this.SubBranchChange} renderInput={params => ( <TextField {...params}label={this.state.subBrName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">Division</InputLabel></td>
                       <td><TextField id="divName"style={{width:250}} value={this.state.divName}/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Grade</InputLabel></td>
                     <td> <TextField id="grade" value={this.state.grade}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Grade} getOptionLabel={option => option.gradeDesc} className="txt2" 
  id="gradeDescn"  onChange={this.GradeChange} renderInput={params => ( <TextField {...params}label={this.state.gradeDescn }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">Zone</InputLabel></td>
                       <td><TextField id="regZoneName" style={{width:250}} value={this.state.regZoneName}/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">DesignationGroup</InputLabel></td>
                     <td> <TextField id="desgnGrpCode" value={this.state.desgnGrpCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.DesgnGroup} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="desgnGrpName"  onChange={this.DesgnGroupChange} renderInput={params => ( <TextField {...params}label={this.state.desgnGrpName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">Region</InputLabel></td>
                       <td><TextField id="regionName"style={{width:250}} value={this.state.regionName}/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Designation</InputLabel></td>
                     <td> <TextField id="desgnCode" value={this.state.desgnCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Desgn} getOptionLabel={option => option.desgName} className="txt2" 
  id="desgnName"  onChange={this.DesgnChange} renderInput={params => ( <TextField {...params}label={this.state.desgnName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">Territory</InputLabel></td>
                       <td><TextField id="zoneName"style={{width:250}} value={this.state.zoneName}/></td>
                      </tr>
                      <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Department</InputLabel></td>
                     <td> <TextField id="deptCode" value={this.state.deptCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Dept} getOptionLabel={option => option.deptName} className="txt2" 
  id="deptName"  onChange={this.DeptChange} renderInput={params => ( <TextField {...params}label={this.state.deptName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">MailIdOfficial</InputLabel></td>
                       <td><TextField id="mailIdOff"style={{width:250}} value={this.state.mailIdOff}/></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Department Head</InputLabel></td>
                     <td> <TextField id="deptHead" value={this.state.deptHead}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.DeptHead} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="dHeadName"  onChange={this.DeptHeadChange} renderInput={params => ( <TextField {...params}label={this.state.dHeadName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">MobilenoOfficial</InputLabel></td>
                       <td><TextField id="mobileOff"style={{width:250}} value={this.state.mobileOff}/></td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Category</InputLabel></td>
                     <td> <TextField id="empCategory" value={this.state.empCategory}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Category} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="empCategoryName"  onChange={this.CategoryChange} renderInput={params => ( <TextField {...params}label={this.state.empCategoryName }  fullWidth /> )}/> </td>
                       <td><InputLabel style={{color:"black"}}className="label">ServiceProvider</InputLabel></td>
                       <td> <Autocomplete    freeSolo  options={this.state.ServiceProvider} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="mobileNet"   renderInput={params => ( <TextField {...params}onChange={this.service} label={this.state.mobileNet} fullWidth /> )}/> </td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Joined As</InputLabel></td>
                     <td> <TextField id="joinAs" value={this.state.joinAs}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.JoinedAs} getOptionLabel={option => option.desgName} className="txt2" 
  id="joinAsName"  onChange={this.JoinedAsChange} renderInput={params => ( <TextField {...params}label={this.state.joinAsName }  fullWidth /> )}/> </td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">FunctionalReporting</InputLabel></td>
                     <td> <TextField id="funCrepHead" value={this.state.funCrepHead}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.FnReport} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="funCrepHeadName"  onChange={this.FnReportChange} renderInput={params => ( <TextField {...params}label={this.state.funCrepHeadName }  fullWidth /> )}/> </td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">AdministrativeReporting</InputLabel></td>
                     <td> <TextField id="admRepHead" value={this.state.admRepHead}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.ADMReport} getOptionLabel={option => option.gcmDesc} className="txt2" 
  id="admRepHeadName"  onChange={this.ADMReportChange} renderInput={params => ( <TextField {...params}label={this.state.admRepHeadName }  fullWidth /> )}/> </td>
                       </tr>
                       <tr>
                     <td><InputLabel style={{color:"black"}}className="label">Alternate</InputLabel></td>
                     <td> <TextField id="substitute" value={this.state.substitute}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Alternate} getOptionLabel={option => option.desgName} className="txt2" 
  id="substituteName"  onChange={this.AlternateChange} renderInput={params => ( <TextField {...params}label={this.state.substituteName }  fullWidth /> )}/> </td>
                       </tr>
                   </table>
                          
                 </div>
                </Tab>
            <Tab label="Basic">
            <div class="col" style={{borderStyle:"ridge"}}>
                    <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">EmpType&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td> <TextField id="empType" value={this.state.empType}/></td>
                            <td><TextField  type="hidden"  id="empTypeName" value={this.state.empTypeName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Emptype} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="empTypeName"  onChange={this.EmptypeChange} renderInput={params => ( <TextField {...params} label={this.state.empTypeName}  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Weekly Off</InputLabel></td>
                            <td> <TextField id="woff" value={this.state.woff}/></td>
                            <td><TextField  type="hidden"  id="woffName" value={this.state.woffName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Week} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="woffName"  onChange={this.WeekChange} renderInput={params => ( <TextField {...params} label={this.state.woffName}  fullWidth /> )}/> </td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Shift Type</InputLabel></td>
                            <td> <TextField id="shiftType" value={this.state.shiftType}/></td>
                            <td><TextField  type="hidden"  id="shiftTypeName" value={this.state.shiftTypeName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Shtype} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="shiftTypeName"  onChange={this.ShtypeChange} renderInput={params => ( <TextField {...params} label={this.state.shiftTypeName}  fullWidth /> )}/> </td>
                            
                        </tr>
                     </table>
                     <table>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Probation Form</InputLabel></td>
                            <td><TextField id="proBfrDate"style={{width:217}} type="datetime-local"value={this.state.proBfrDate}onChange={this.proFrom} InputLabelProps={{shrink: true,}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Probation To</InputLabel></td>
                            <td><TextField id="proBtoDate"style={{width:217}} type="datetime-local"value={this.state.proBtoDate}onChange={this.proTo} InputLabelProps={{shrink: true,}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Confirmation Date</InputLabel></td>
                            <td><TextField id="confirmDate"style={{width:217}} type="datetime-local"value={this.state.confirmDate}onChange={this.confrmDate} InputLabelProps={{shrink: true,}}/></td>
                         </tr>
                         <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Date of Birth</InputLabel></td>
                            <td><TextField id="dob"style={{width:217}} type="datetime-local"value={this.state.dob}onChange={this.dobChange} InputLabelProps={{shrink: true,}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">DOB Celebration</InputLabel></td>
                            <td><TextField id="dobCelebrate"style={{width:217}} type="datetime-local"value={this.state.dobCelebrate}onChange={this.dobCele} InputLabelProps={{shrink: true,}}/></td>
                            
                         </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">PAN No</InputLabel></td>
                            <td><TextField id="panNo"style={{width:217}} value={this.state.panNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PF No</InputLabel></td>
                            <td><TextField id="pfNo"style={{width:217}} value={this.state.pfNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">PF Contribution</InputLabel></td>
                            <td><TextField id="pfElgDate" style={{width:217}}type="datetime-local"onChange={this.pfCont}value={this.state.pfElgDate} InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Gratuity No</InputLabel></td>
                            <td><TextField id="graduatyNo"style={{width:217}}value={this.state.graduatyNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">ESI No</InputLabel></td>
                            <td><TextField id="esIno"style={{width:217}} value={this.state.esIno}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">ESI Contribution</InputLabel></td>
                            <td><TextField id="esIelgDate"style={{width:217}} type="datetime-local"onChange={this.esiCont}value={this.state.esIelgDate} InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Superannuation No</InputLabel></td>
                            <td><TextField id="supanuationNo"style={{width:217}} value={this.state.supanuationNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Passport No</InputLabel></td>
                            <td><TextField id="passPortNo"style={{width:217}}value={this.state.passPortNo}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Passport Exp</InputLabel></td>
                            <td><TextField id="passPortUpTo"style={{width:217}} type="datetime-local"onChange={this.passport}value={this.state.passPortUpTo} InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">Voters ID</InputLabel></td>
                            <td><TextField id="formname"style={{width:217}} value={this.state.voterID}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">DrivingLicense No</InputLabel></td>
                            <td><TextField id="licenseNo"style={{width:217}} value={this.state.licenseNo}/></td>
                           
                            <td><InputLabel style={{color:"black"}}className="label">Dri.Lic.Exp</InputLabel></td>
                            <td><TextField id="licenseUpTo"style={{width:217}} type="datetime-local"onChange={this.license}value={this.state.licenseUpTo} InputLabelProps={{shrink: true,}}/></td>
                        </tr>
                        </table>
                         <table>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">Veh.RegNo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td><TextField id="vehNo" value={this.state.vehNo}style={{width:217}}/></td>
                            <td><InputLabel style={{color:"black"}}className="label">Vehicle Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel></td>
                            <td> 
                            <Select style={{width:150}} >
                            <MenuItem value="O"selected={this.state.vehType === "O"}onChange={this.veh} >OWN</MenuItem>
                             <MenuItem value="C">COMPANY</MenuItem>
                            </Select></td>
                            <td>
                            <Select style={{width:250}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         >
          <MenuItem value={10}>FIXED TWO WHEELER</MenuItem>
          <MenuItem value={20}>VARIABLE TWO WHEELER</MenuItem>
          <MenuItem value={30}>FIXED FOUR WHEELER</MenuItem>
          <MenuItem value={20}>VARIABLE FOUR WHEELER</MenuItem>
          <MenuItem value={30}>NOT ELIGIBLE</MenuItem>
        </Select> </td>
                           
                         </tr>
                  
                     </table>
                     <table>
                         <tr>
                         <td><InputLabel for="ccReq1" style={{color:"black"}}className="label">StaffWelfareContribution</InputLabel></td>
                         <td>
                        <div class="form-check">
                    <input class="form-check-input"checked={this.state.swfContr === "Y"}onChange={this.staff} type="checkbox" value="Y" id="swfContr"/>
  </div>
  </td>
                          <td><InputLabel style={{color:"black"}}className="label">St.Wel.Cont.No</InputLabel></td>
                            <td><TextField id="swfContrNo" value={this.state.swfContrNo}/></td>
                         </tr>
                         <tr>
                       
                         <td><InputLabel for="ccReq2" style={{color:"black"}}className="label">LabourWelfareContribution</InputLabel></td>
                         <td>
                        <div class="form-check">
                    <input class="form-check-input"checked={this.state.lwfContr === "Y"}onChange={this.labour} type="checkbox" value="Y" id="lwfContr"/>
  </div> </td>
                          <td><InputLabel style={{color:"black"}}className="label">La.Wel.Cont.No</InputLabel></td>
                            <td><TextField  id="lwfContrNo"value={this.state.lwfContrNo}/></td>
                         </tr>
                     </table>
                                </div>
            </Tab>
            <Tab label="Address">
            <div class="col" style={{borderStyle:"ridge"}}>
                                     <table>
                                    <tr>
                            <td><InputLabel style={{color:"black"}}className="label">AddressType</InputLabel></td>
                            <td> <TextField id="addressType" value={this.state.addressType}/></td>
                            <td><TextField  type="hidden"  id="addressTypeName" value={this.state.addressTypeName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.AddrType} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="addressTypeName"  onChange={this.AddrTypeChange} renderInput={params => ( <TextField {...params} label={this.state.addressTypeName}  fullWidth /> )}/> </td>
                           
                            <td><InputLabel for="ccReq" style={{color:"black"}}className="label">Comm.Address</InputLabel></td>
                         <td>
                        <div class="form-check">
                    <input class="form-check-input"checked={this.state.ccReq === "Y"}onChange={this.ValueChange} type="checkbox" value="Y" id="ccReq"/>
  </div>
  </td>
                          <td><InputLabel  className="label"style={{color:"black"}}>SameAsPermanentAddress</InputLabel></td>
                           </tr>
                           </table>
                            <table>
                            <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Country</InputLabel></td>
                            <td> <TextField id="countryCode" value={this.state.countryCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Country} getOptionLabel={option => option.countryName} className="txt2" 
  id="countryName"onChange={this.CountryChange}   renderInput={params => ( <TextField {...params}label={this.state.countryName }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Address1</InputLabel></td>
                            <td><TextField id="address1" style={{width:430}}value={this.state.address1}/></td>
                           </tr>
                        <tr>
                        <td><InputLabel style={{color:"black"}}className="label">State</InputLabel></td>
                        <td> <TextField id="stateCode" value={this.state.stateCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.State} getOptionLabel={option => option.stateName} className="txt2" 
  id="stateName"onChange={this.StateChange}   renderInput={params => ( <TextField {...params}label={this.state.stateName }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Address2</InputLabel></td>
                            <td><TextField id="address2" style={{width:430}}value={this.state.address2}/></td>
                            </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">District</InputLabel></td>
                            <td> <TextField id="distCode" value={this.state.distCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.District} getOptionLabel={option => option.districtName} className="txt2" 
  id="distName"onChange={this.DistrictChange}   renderInput={params => ( <TextField {...params}label={this.state.distName }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Address3</InputLabel></td>
                            <td><TextField id="address3" style={{width:430}}value={this.state.address3}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Taluk/Mandal</InputLabel></td>
                            <td> <TextField id="talukCode" value={this.state.talukCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Taluk} getOptionLabel={option => option.talukName} className="txt2" 
  id="talukName"onChange={this.TalukChange}   renderInput={params => ( <TextField {...params}label={this.state.talukName }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Std Code</InputLabel></td>
                            <td><TextField id="stdCodeempadd" style={{width:430}}value={this.state.stdCodeempadd}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">City/Town</InputLabel></td>
                            <td> <TextField id="cityCode" value={this.state.cityCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.City} getOptionLabel={option => option.cityName} className="txt2" 
  id="cityName"onChange={this.CityChange}   renderInput={params => ( <TextField {...params}label={this.state.cityName }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Resi.Ph.No</InputLabel></td>
                            <td><TextField id="phoneNoempadd" style={{width:430}}value={this.state.phoneNoempadd}/></td>
                        </tr>
                        <tr>
                            <td><InputLabel style={{color:"black"}}className="label">Pincode</InputLabel></td>
                            <td> <TextField id="pinCode" value={this.state.pinCode}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Pincode} getOptionLabel={option => option.postOff} className="txt2" 
  id="postOff"onChange={this.PincodeChange}   renderInput={params => ( <TextField {...params}label={this.state.postOff }  fullWidth /> )}/> </td>
                            <td><InputLabel style={{color:"black"}}className="label">Mobile No</InputLabel></td>
                            <td><TextField id="mobileNo" style={{width:430}}value={this.state.mobileNo}/></td>
                        </tr>
                       </table>
                       </div>
                       <div class="col" style={{borderStyle:"ridge"}}>
                       <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>Address Detail
                         <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
                         <button type="button" style={{borderRadius:7}}>Add</button>
                         <button type="button"style={{borderRadius:7}}>Clear</button>
                           <button type="button"style={{borderRadius:7}}>Delete</button>
                         </div></h4>
                         <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
                <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>AddrType</th><th>AddrDesc</th> <th>CountryCode</th><th>CountryName</th> <th>StateCode</th>
                            <th>StateName</th><th>DistrictCode</th> <th>DistrictName</th><th>TalukCode</th> <th>TalukName</th>
                            <th>CityCode</th><th>CityName</th> <th>PinCode</th><th>PostOff</th> <th>StateCode</th>
                            <th>Address1</th> <th>Address2</th><th>Address3</th><th>STDCode</th><th>Rest.Ph.No</th> <th>MobileNo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Employ.map(member =>
                        <tr key={member.id}><td>{member.addressType} </td> <td>{member.addressTypeName}</td> <td>{member.countryCode}</td><td>{member.countryName}</td>
                        <td>{member.stateCode} </td> <td>{member.distCode}</td><td>{member.distName}</td> <td>{member.talukCode}</td><td>{member.talukName} </td>
                        <td>{member.cityCode}</td> <td>{member.cityName}</td><td>{member.pinCode}</td> <td>{member.postOff} </td><td>{member.address1}</td> <td>{member.address2}</td>
                        <td>{member.address3}</td><td>{member.stdCodeempadd} </td><td>{member.phoneNoempadd}</td><td>{member.mobileNo}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div></div></div>
                        
                       </div>
                       
                      
                             
                            
            </Tab>
            <Tab label="Personal" >
            <div class="col" style={{borderStyle:"ridge"}}>
            
        <table>
         <tr>
             <td><InputLabel className="label"style={{color:"black"}}>Nationality</InputLabel> </td>
             <td> <TextField id="nationality" value={this.state.nationality}/></td>
                            <td><TextField  type="hidden"  id="nationalityName" value={this.state.nationalityName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Nationality} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="nationalityName"  onChange={this.NationalityChange} renderInput={params => ( <TextField {...params} label={this.state.nationalityName}  fullWidth /> )}/> </td>
      </tr>
      <tr>
             <td><InputLabel className="label"style={{color:"black"}}>Religion</InputLabel> </td>
             <td> <TextField id="religion" value={this.state.religion}/></td>
                            <td><TextField  type="hidden"  id="religionName" value={this.state.religionName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Religion} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="religionName"  onChange={this.ReligionChange} renderInput={params => ( <TextField {...params} label={this.state.religionName}  fullWidth /> )}/> </td>
             <td><InputLabel className="label"style={{color:"black"}}>Marital Status</InputLabel> </td>
             <td>
             <Select style={{width:150}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         >
          <MenuItem value={10}>Married</MenuItem>
          <MenuItem value={20}>UnMarried</MenuItem>
          <MenuItem value={30}>Divorce</MenuItem>
          <MenuItem value={20}>Seperated</MenuItem>
          <MenuItem value={30}>Widower</MenuItem>
        </Select>
             </td>
      </tr>
      <tr>
             <td><InputLabel className="label"style={{color:"black"}}>BloodGroup</InputLabel> </td>
             <td> <TextField id="bloodGroup" value={this.state.bloodGroup}/></td>
                            <td><TextField  type="hidden"  id="bloodGroupName" value={this.state.bloodGroupName}/></td>
                           <td> <Autocomplete    freeSolo  options={this.state.Blood} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="bloodGroupName"  onChange={this.BloodChange} renderInput={params => ( <TextField {...params} label={this.state.bloodGroupName}  fullWidth /> )}/> </td>
             <td><InputLabel className="label"style={{color:"black"}}>MailId Personal</InputLabel> </td>
             <td><TextField className="txt2" id="reasonName" /></td>
      </tr>
</table>
          </div>  
          <div class="col" style={{borderStyle:"ridge"}}>
          <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>Employee Family/Reference By Personal Detail
          <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
    <button type="button" style={{borderRadius:7}}>Add</button>
    <button type="button"style={{borderRadius:7}}>Clear</button>
    <button type="button"style={{borderRadius:7}}>Delete</button>
  </div></h4>
  <div>
    <table>
          <tr>
             <td><InputLabel className="label"style={{color:"black"}}>RelationShip</InputLabel> </td>
             <td> <TextField id="relation" value={this.state.relation}/></td>
               <td><TextField  type="hidden"  id="relationName" value={this.state.relationName}/></td>
              <td> <Autocomplete    freeSolo  options={this.state.Relation} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="relationName"  onChange={this.RelationChange} renderInput={params => ( <TextField {...params} label={this.state.relationName}  fullWidth /> )}/> </td>
             <td><InputLabel for="ccReq" style={{color:"black"}}className="label">Is Nominee&nbsp;</InputLabel></td>
             <td> <div class="form-check">
              <input class="form-check-input"checked={this.state.isLegalHeir === "Y"}onChange={this.ValueChange}type="checkbox" value="Y" id="ccReq"/>
            </div> </td>
      </tr>
      <tr>
             <td><InputLabel className="label"style={{color:"black"}}>Occupation</InputLabel> </td>
             <td> <TextField id="occupation" value={this.state.occupation}/></td>
             <td><TextField  type="hidden"  id="occupationName" value={this.state.occupationName}/></td>
              <td> <Autocomplete    freeSolo  options={this.state.Occupation} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="occupationName"  onChange={this.OccupationChange} renderInput={params => ( <TextField {...params} label={this.state.occupationName}  fullWidth /> )}/> </td>
             <td><InputLabel className="label"style={{color:"black"}}>Annual Income</InputLabel> </td>
             <td><TextField className="txt2" id="annualIncome" value={this.state.annualIncome}/></td>
      </tr>
      </table>
  <table>
  <tr>
             <td><InputLabel className="label"style={{color:"black"}}>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
              <td><TextField className="txt2" id="reasonName"value={this.state.name} /></td>
             <td><InputLabel className="label"style={{color:"black"}}>Age</InputLabel> </td>
             <td><TextField className="txt2"style={{width:140}}value={this.state.age} id="age" /></td>
             <td><InputLabel className="label"style={{color:"black"}}>Phone No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
             <td><TextField className="txt2" id="phoneNo"value={this.state.phoneNo} /></td>
      </tr>
  </table>
  </div>
  </div>
  <div class="col" style={{borderStyle:"ridge"}}>
          <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>Qualification Detail
          <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
    <button type="button" style={{borderRadius:7}}>Add</button>
    <button type="button"style={{borderRadius:7}}>Clear</button>
    <button type="button"style={{borderRadius:7}}>Delete</button>
  </div></h4>
  <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
    <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>RelationShip</th><th>RelationShipDesc</th><th>Occupation</th> <th>OccupationDesc</th>
                            <th>IsNominee</th><th>Age</th> <th>AnnualIncome</th><th>STDCode</th> <th>PhoneNO</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Relat.map(member =>
                        <tr >
                            <td>{member.relation} </td> <td>{member.relationName}</td> <td>{member.occupation}</td><td>{member.occupationName}</td>
                    <td>{member.isLegalHeir} </td> <td>{member.age}</td><td>{member.annualIncome}</td><td>{member.stdCode}</td><td>{member.phoneNo}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div></div></div>
  </div>
           </Tab>
           <Tab label="Education/Exp" >
           <div class="col" style={{borderStyle:"ridge"}}>
           <table>
          <tr>
          <td><InputLabel className="label"style={{color:"black"}}>Qualification&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
          <td> <TextField style={{width:100}} id="qualCode" value={this.state.qualCode}/></td>
          <td><TextField  type="hidden"  id="qualName" value={this.state.qualName}/></td>
           <td> <Autocomplete style={{width:200}}   freeSolo  options={this.state.Qualify} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="qualName"  onChange={this.QualifyChange} renderInput={params => ( <TextField {...params} label={this.state.qualName}  fullWidth /> )}/> </td>
             <td><InputLabel className="label"style={{color:"black"}}>Medium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputLabel> </td>
            <td><TextField className="txt2" value={this.state.medium}id="medium" /></td>
            <td><InputLabel className="label"style={{color:"black"}}>%of Marks</InputLabel> </td>
          <td><TextField  id="marksPerc"value={this.state.marksPerc} /></td>
          </tr>
          </table>
          <table>
          <tr>
          <td><InputLabel className="label"style={{color:"black"}}>Institute Name</InputLabel> </td>
          <td><TextField style={{width:310}}value={this.state.instName} id="instName" /></td>
          <td><InputLabel className="label"style={{color:"black"}}>Subject</InputLabel> </td>
          <td><TextField  type="hidden"  id="majorSub" value={this.state.majorSub}/></td>
            <td> <Autocomplete    freeSolo  options={this.state.Subject} getOptionLabel={option => option.gcmCode} className="txt2" 
 id="subject"  onChange={this.SubjectChange} renderInput={params => ( <TextField {...params} label={this.state.subject}  fullWidth /> )}/> </td>
            <td><InputLabel className="label"style={{color:"black"}}>Year</InputLabel> </td>
          <td><TextField  id="passYear"value={this.state.passYear} /></td>
          </tr>
          <tr>
          <td><InputLabel className="label"style={{color:"black"}}>Place</InputLabel> </td>
          <td><TextField style={{width:310}}className="txt2"id="place" value={this.state.place}/></td>
          <td><InputLabel className="label"style={{color:"black"}}>Modeofstudy</InputLabel> </td>
          <td><TextField  type="hidden"  id="studyModeName" value={this.state.studyModeName}/></td>
          <td> <Autocomplete    freeSolo  options={this.state.Study} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="studyModeName"  onChange={this.StudyChange} renderInput={params => ( <TextField {...params} label={this.state.studyModeName}  fullWidth /> )}/> </td>
            <td><InputLabel className="label"style={{color:"black"}}>Remarks</InputLabel> </td>
          <td><TextField  id="remarks"value={this.state.remarks} /></td>
          </tr>
          <tr>
          <td><InputLabel className="label"style={{color:"black"}}>UniversityName</InputLabel> </td>
          <td><TextField  style={{width:310}}className="txt2" id="univName" value={this.state.univName}/></td>
          <td><InputLabel className="label"style={{color:"black"}}>Reason</InputLabel> </td>
          <td><TextField  type="hidden"  id="reasonName" value={this.state.reasonName}/></td>
            <td> <Autocomplete    freeSolo  options={this.state.Reason} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="reasonName"  onChange={this.ReasonChange} renderInput={params => ( <TextField {...params} label={this.state.reasonName}  fullWidth /> )}/> </td>
            <td><InputLabel className="label"style={{color:"black"}}>Deadline</InputLabel> </td>
            <td> <TextField id="qdeadline" type="date" value={this.state.qdeadline}
    InputLabelProps={{ shrink: true,}} /></td>
          </tr>
          </table>
             </div>
             <div class="col" style={{borderStyle:"ridge"}}>
          <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>Qualification Detail
          <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
    <button type="button" style={{borderRadius:7}}>Add</button>
    <button type="button"style={{borderRadius:7}}>Clear</button>
    <button type="button"style={{borderRadius:7}}>Delete</button>
  </div></h4>
  <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
                <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>Qualification</th><th>QualificationDesc</th> <th>InstitudeName</th><th>Place</th> <th>UniversityName</th>
                            <th>year</th><th>Medium</th> <th>Subject</th><th>%Marks</th> <th>ModeOfStudy</th>
                            <th>Remarks</th><th>Reason</th> <th>Deadline</th> 
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Quali.map(member =>
                        <tr key={member.id}><td>{member.qualCode} </td> <td>{member.qualName}</td> <td>{member.instName}</td><td>{member.place}</td>
                        <td>{member.univName} </td> <td>{member.passYear}</td><td>{member.medium}</td> <td>{member.majorSub}</td><td>{member.marksPerc} </td>
                        <td>{member.studyModeName}</td> <td>{member.remarks}</td><td>{member.reasonName}</td> <td>{member.qdeadline} </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div></div></div>
  <div>
<table>
  <tr>
<td><td><InputLabel className="label"style={{color:"black"}}>PriorExperience</InputLabel> </td></td>
  </tr>
</table>
  </div>
  </div>
  <div class="col" style={{borderStyle:"ridge"}}>
          <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>PriorExperience Detail
          <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
    <button type="button" style={{borderRadius:7}}>Add</button>
    <button type="button"style={{borderRadius:7}}>Clear</button>
    <button type="button"style={{borderRadius:7}}>Delete</button>
  </div></h4>
  <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
                <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>CompanyName</th><th>Place</th> <th>WorkFrom</th><th>WorkTo</th> <th>Designation</th>
                            <th>Role</th><th>MonthSalary</th> <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Prior.map(member =>
                        <tr >
                            <td>{member.compName} </td> <td>{member.placeempwrkexp}</td> <td>{member.workFrom}</td><td>{member.workUpTo}</td>
                        <td>{member.designation} </td> <td>{member.role}</td><td>{member.salary}</td><td>{member.remarks}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div></div></div>
  
  </div>


 
           

           </Tab>
           <Tab label="MonthlySalary" >
           <div class="col" style={{borderStyle:"ridge"}}>
           <table >
                   
                   <tr>
                       <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PaymentMode</InputLabel></td>
                       <td>  <div class="form-check-inline">
                       <div className="radio"> <label>
            <input   type="radio"   value="A"  checked={this.state.isActive === "A"}  onChange={this.onValueChange}/>Bank&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="I"  checked={this.state.isActive === "I"}  onChange={this.onValueChange}/>Cash&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="FA"  checked={this.state.isActive === "FA"}  onChange={this.onValueChange}/>Cheque</label> </div>
            </div></td>
            <td><InputLabel className="label"style={{color:"black"}}>SB A/C No</InputLabel> </td>
            <td><TextField className="txt2" id="reasonName" /></td>
                   </tr>
                   <tr>
  <td><InputLabel className="label"style={{color:"black"}}>MonthlyGrossSal</InputLabel> </td>
            <td><TextField  id="reasonName" /></td>
            <td><InputLabel className="label"style={{color:"black"}}>BasicPay</InputLabel> </td>
          <td><TextField  id="reasonName" /></td>
          <td><TextField  type="hidden"  id="bankName" value={this.state.bankName}/></td>

          </tr>

  </table>
  <table>
    <tr>
    <td><InputLabel className="label"style={{color:"black"}}>Bank</InputLabel> </td>
    <td> <TextField id="bank" value={this.state.bank}/></td>
      <td> <Autocomplete    freeSolo  options={this.state.Bank} getOptionLabel={option => option.gcmDesc} className="txt2" 
 id="bankName"  onChange={this.BankChange} renderInput={params => ( <TextField {...params} label={this.state.bankName}  fullWidth /> )}/> </td>
   
    <td><InputLabel className="label"style={{color:"black",fontSize:18}}>PF Eligible</InputLabel></td>
         <td>  <div class="form-check-inline">
         <div className="radio"> <label>
            <input   type="radio"   value="Y"  checked={this.state.isActive === "Y"}  onChange={this.onValueChange}/>Yes&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="N"  checked={this.state.isActive === "N"}  onChange={this.onValueChange}/>No</label> </div>
           </div></td>
           <td><InputLabel className="label"style={{color:"black"}}>Balance CL</InputLabel> </td>
    <td> <TextField id="reasonCode"  /></td>
    </tr>
    <tr>
    <td><InputLabel className="label"style={{color:"black"}}>Grade</InputLabel> </td>
    <td> <TextField id="grade" value={this.state.grade}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.Grade} getOptionLabel={option => option.gradeDesc} className="txt2" 
  id="gradeDescn"  onChange={this.GradeChange} renderInput={params => ( <TextField {...params}label={this.state.gradeDescn }  fullWidth /> )}/> </td>
    <td><InputLabel className="label"style={{color:"black",fontSize:18}}>ESI Eligible</InputLabel></td>
         <td>  <div class="form-check-inline">
         <div className="radio"> <label>
            <input   type="radio"   value="Y"  checked={this.state.isActive === "Y"}  onChange={this.onValueChange}/>Yes&nbsp;&nbsp;&nbsp;</label> </div>
            <div className="radio"> <label>
            <input   type="radio"   value="N"  checked={this.state.isActive === "N"}  onChange={this.onValueChange}/>No</label> </div>
           </div></td>
           <td><InputLabel className="label"style={{color:"black"}}>Balance EL</InputLabel> </td>
            <td> <TextField id="reasonCode"  /></td>
    </tr>
  </table> </div>
  <div class="col" style={{borderStyle:"ridge"}}>
          <h4 color="success" style={{backgroundColor:"rgb(164, 63, 184)",color:"white",height:30}}>Salary Detail
          <div class="btn-group "style={{position: "absolute",right: 20,height:30}}>
    <button type="button" style={{borderRadius:7}}>Add</button>
    <button type="button"style={{borderRadius:7}}>Clear</button>
    <button type="button"style={{borderRadius:7}}>Delete</button>
  </div></h4>
  <table>
  <tr>
          <td><InputLabel className="label"style={{color:"black"}}>Salary Head&nbsp;&nbsp;&nbsp;</InputLabel> </td>
          <td> <TextField id="salHead" value={this.state.salHead}/></td>
 <td> <Autocomplete    freeSolo  options={this.state.SalaryHead} getOptionLabel={option => option.descn} className="txt2" 
  id="salHeadName"onChange={this.SalaryHeadChange}   renderInput={params => ( <TextField {...params}label={this.state.salHeadName }  fullWidth /> )}/> </td>
     </tr>    
  </table>
  <table>
  <tr>
  <td><InputLabel className="label"style={{color:"black"}}>PaymentType</InputLabel> </td>
             <td>
             <Select style={{width:180}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         >
          <MenuItem value={10}>Monthly</MenuItem>
          <MenuItem value={20}>Yearly</MenuItem>
          <MenuItem value={30}>Special</MenuItem>
          
        </Select>
             </td>
          <td><InputLabel className="label"style={{color:"black"}}>Formulae</InputLabel> </td>
          <td><TextField id="formulae"value={this.state.formulae} /></td>
         
     </tr>    
     <tr>
     <td><InputLabel className="label"style={{color:"black"}}>Calc.Amt</InputLabel> </td>
          <td><TextField id="calcAmt" value={this.state.calcAmt}/></td>
          <td><InputLabel className="label"style={{color:"black"}}>Final.Amt</InputLabel> </td>
          <td><TextField id="finalAmt" value={this.state.finalAmt}/></td>
     </tr>
  </table>
  </div>

  
      <div class="scrolltable" id="Scrolltable" style={{borderRadius:8, LEFT: 1, width: 1068, overflow:"scroll", top: 4,height:150}}>
    <div class="scrolltableHead" style={{width: 970, height: 25,}}>
    <div class="scrolltablebody" id="bd" style={{width: 1050, height: 54,backgroundColor:"white"}}>
                <table className="table table-hover" >
                    <thead >
                        <tr>
                            <th>SalaryHead</th><th>SalaryHeadDesc</th><th>Formula</th> <th>Calc.Amt</th>
                            <th>FinalAmt</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.Salary.map(member =>
                        <tr >
                            <td>{member.salHead} </td> <td>{member.salHeadName}</td> <td>{member.formulae}</td>
                             <td>{member.calcAmt}</td><td>{member.finalAmt}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div></div></div>
            <div>
    <table>
    <tr>
     <td><InputLabel className="label"style={{color:"black"}}>CTC Amt/Month</InputLabel> </td>
          <td><TextField id="ctcMonAmt" value={this.state.ctcMonAmt}/></td>
          <td><InputLabel className="label"style={{color:"black"}}>CTC Amt/Year</InputLabel> </td>
          <td><TextField id="ctcYearAmt"value={this.state.ctcYearAmt} /></td>
          <td><InputLabel className="label"style={{color:"black"}}>CTC Amt/Day</InputLabel> </td>
          <td><TextField id="ctcDayAmt" value={this.state.ctcDayAmt}/></td>
     </tr>
    </table>
      </div>
           </Tab>
          
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

