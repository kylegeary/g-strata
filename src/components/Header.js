import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/kyle-geary.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Kyle Geary" /></a>
                    <h1><strong>Hi, I'm Kyle.</strong><br/>
                    &nbsp;I build progressive web applications<br />
                    &nbsp;that are fast, responsive, and accessible.</h1>

                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
