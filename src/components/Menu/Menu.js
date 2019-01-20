import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

// TODO: add prop-types for type checking
// links scheme:
//
// [
//     {
//         to: <path>,
//         text: <text inside link>
//     }
// ]

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        const { isOpen } = this.state
        if (isOpen) {
            this.setState({ isOpen: false })
        } else {
            this.setState({ isOpen: true })
        }
    }

    render() {
        const { links } = this.props
        const { isOpen } = this.state
        return (
            <div>
                <button onClick={this.toggleMenu}>Menu</button>
                {isOpen && <ul>
                    {links.map(element => (
                        <li key={element.to}>
                            <Link to={element.to}>{element.text}</Link>
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default Menu