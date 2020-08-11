import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function Masters() {

  return (
    <UncontrolledDropdown>
      <DropdownToggle  color="primary"style={{width:150}}>
       Masters
      </DropdownToggle>
      <DropdownMenu >
       
        <UncontrolledDropdown direction="right" >
      <DropdownToggle color="success" direction="right"style={{width:220}} caret>
       Inventory
      </DropdownToggle>
      <DropdownMenu >
      <DropdownItem href="http://localhost:3000/admin/taxform" >TaxForm</DropdownItem>
      <DropdownItem  color="success" >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" style={{width:"auto"}}>
      <DropdownToggle color="success" direction="right"style={{width:220}}caret>
       Human Resource
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem  >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right">
      <DropdownToggle color="success" direction="right"style={{width:220}} caret>
       Accounts
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right" style={{width:220}}>
       User Creation
      </DropdownToggle>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right"style={{width:220}} >
       Document Back Date
      </DropdownToggle>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right" style={{width:220}}>
       User Role
      </DropdownToggle>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right" style={{width:220}}>
       Employee Userrole-Map
      </DropdownToggle>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right"style={{width:220}} >
       Doc Action-Emp Mapping
      </DropdownToggle>
      </UncontrolledDropdown>

      <UncontrolledDropdown>
      <DropdownToggle color="success" direction="right"style={{width:220}} >
       Document Branch Map
      </DropdownToggle>
      </UncontrolledDropdown>
      

      <UncontrolledDropdown direction="right">
      <DropdownToggle  color="success" direction="right"style={{width:220}} caret >
      Common Master
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>
     
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}