import { Component, tags, useState } from "@odoo/owl";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const { xml, css } = tags;

const TEMPLATE = xml/* xml */`
   <div>
        
        <Dropdown>
            <t t-foreach="state.items" t-as="item" >
                <DropdownItem><t t-esc="item"/></DropdownItem>
            </t>
        </Dropdown>
         
   </div>
`

export class App extends Component {

    static template = TEMPLATE;

    static components = { Dropdown, DropdownItem }

    state = useState({
        items: {          
            first: 'First',
            second: 'Second',
            third: 'Third'
        }
    })

}