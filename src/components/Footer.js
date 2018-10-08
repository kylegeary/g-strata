import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/kylegeary" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://instagram.com/kylegeary" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:kgeary09@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Kyle Geary 2018</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
