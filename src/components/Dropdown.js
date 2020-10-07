import { Component, tags, hooks, useState } from "@odoo/owl"

const { xml } = tags;

const TEMPLATE = xml/* xml */`
    <div><t t-slot="default"/></div>
`

export default class Dropdown extends Component {

	static template = TEMPLATE

	state = useState({})

}