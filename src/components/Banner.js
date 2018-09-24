import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h2>Help turn H&amp;M around!</h2>
            </header>
            <div className="content">
                <h3 style={{ color: '#000' }}>Sign the Living Wage petition <br />
                    and get active on social media.</h3>
                <ul className="actions">
                    <li><a href="take-action/" className="button big next scrolly">Take action!</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
