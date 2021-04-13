import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <ul className='navItems'>
                    <li>Book Barn</li>
                    <li>Categories</li>
                    <li>Sign in</li>
                </ul>
            </div>
        )
    }
}
