import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


import pic08 from '../posts/fainting.jpg'
import pic09 from '../posts/circles-graphic.jpg'
import pic10 from '../posts/toycar.jpg'
import hmwagesfull from '../assets/images/hm-wages-september2018-full.pdf'
import hmwagessummary from '../assets/images/hm-wages-september2018-summary.pdf'
import hmbackdossier from '../assets/images/background-hm-roadmap.pdf'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Delving deeper</title>
            <meta name="description" content="background information and reports " />
        </Helmet>



        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Delving deeper</h2>
                    </header>
                    <p>Background documents, research and evidence</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href={hmwagesfull} className="image">
                        <img src={pic08} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Wage Research - September 2018</h3>
                            </header>
                            <p>This is the full version of our research, including interviews with workers.</p>
                            <p>Total length is 17 pages</p>
                            <ul className="actions">
                                <li><a href={hmwagesfull} className="button">View (PDF)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href={hmwagessummary} className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Wage Research - September 2018 - summary</h3>
                            </header>
                            <p>This is the summary version.</p>
                            <p>Total length is 8 pages</p>
                            <ul className="actions">
                                <li><a href={hmwagessummary} className="button">View (PDF)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href={hmbackdossier} className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Background document: H&amp;M's Roadmap and how it changed.</h3>
                            </header>
                            <p>A full background document, including the promises that H&amp;M made on their website before removing them...</p>
                            <ul className="actions">
                                <li><a href={hmbackdossier} className="button">View (PDF)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing