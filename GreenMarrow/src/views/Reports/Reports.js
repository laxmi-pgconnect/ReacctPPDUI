import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Reports() {

  return (
    <UncontrolledDropdown>
      <DropdownToggle  color="success"style={{width:150}}>
      Reports
      </DropdownToggle>
      <DropdownMenu >
       
        <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
      Accounts
      </DropdownToggle>
      <DropdownMenu >
       <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Purchase
      </DropdownToggle>
      <DropdownMenu >
     <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Stores
      </DropdownToggle>
      <DropdownMenu >
      <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Production
      </DropdownToggle>
      <DropdownMenu >
         <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Stocks
      </DropdownToggle>
      <DropdownMenu >
         <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Admin
      </DropdownToggle>
      <DropdownMenu >
         <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

      <UncontrolledDropdown direction="right" >
      <DropdownToggle color="primary" direction="right"style={{width:160}} caret>
       Master
      </DropdownToggle>
      <DropdownMenu >
         <DropdownItem   >Godown</DropdownItem>
      </DropdownMenu>
      </UncontrolledDropdown>

     


     
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}