import React from 'react'
import Menu from '../Menu'
import './Layout.css'

const Layout = ({ withMenu, children }) => (
    <section className="container">
        {withMenu && (
            <Menu links={
                [
                    {
                        to: '/',
                        text: 'Home'
                    },
                    {
                        to: '/penalty-timer',
                        text: 'Penalty Timer'
                    },
                    {
                        to: '/penalty-box-manager',
                        text: 'Penalty Box Manager'
                    },
                    {
                        to: '/both',
                        text: 'Both'
                    }
                ]
            } />
        )}
        {children}
    </section>
)

export default Layout