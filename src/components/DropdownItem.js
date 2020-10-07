import { Component, tags, hooks, useState } from "@odoo/owl"

const { xml } = tags;

const TEMPLATE = xml/* xml */`
    <div><t t-slot="default"/></div>
`

export default class DropdownItem extends Component {

	static template = TEMPLATE

    state = useState({})
    
    mounted() {
        console.log(this)
    }

}