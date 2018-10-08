import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Kyle Geary - UI Engineer"
        const siteDescription = "Kyle Geary's web development portfolio"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <h2>Skills</h2>
                        <p><strong>Languages</strong> / HTML5, JavaScript ES6, CSS3<br />
                            <strong>Frameworks</strong> / React<br />
                            <strong>Version Control</strong> / BitBucket, Git, GitHub<br />
                            <strong>Platforms</strong> / Magento, Sharepoint, Sitecore, Umbraco, Wordpress<br />
                            <strong>Performance</strong> / PageSpeed Insights, Lighthouse<br />
                            <strong>Design</strong> / Adobe XD</p>
                        <h2>Awards</h2>
                        <p>
                            <strong>Grow with Google</strong> / Developer Challenge Scholarship<br />
                            <strong>Grow with Google</strong> / Front-end Web Development Nanodegree Scholarship
                            </p>
                        <h2>Experience</h2>
                        <p><strong>DEG </strong>/ Senior Application Specialist, UI Engineer&nbsp;<br />
                            March 2015 - present</p>
                        <h2>Education</h2>
                        <p><strong>Google + Udacity</strong> / Front-end Web Development Nanodegree<br />
                            <strong>University of Missouri - Kansas City </strong> / Bachelor of Arts - Communication Studies, Cum Laude <br />
                        </p>
                    </section>
                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="12u 12u$(small)">
                                <form
                                name="contact"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                >
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div><br />
                                    <div><ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex