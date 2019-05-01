import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import indiaworkers02 from '../assets/images/india-workers02.jpg'
import cambodiaworkers01 from '../assets/images/cambodia-workers01.jpg'
import cambodiaworkers02 from '../assets/images/cambodia-workers02.jpg'
import stockholm01 from '../assets/images/stockholm01.jpg'
import pic01 from '../assets/images/pic01.jpg'
import turnaround from '../assets/images/turnaround.svg'
import ahead from '../assets/images/ahead.svg'
import turnright from '../assets/images/turnright.svg'
import turnaroundhm from '../assets/images/turnaroundhm.png'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Turn Around H&M"
          meta={[
            {
              name: 'description',
              content: 'H&M needs to take concrete steps towards a living wage',
            },
            { name: 'keywords', content: 'living wage, h&m' },
          ]}
        >
          {/* OpenGraph tags */}
          <meta property="og:url" content="https://turnaroundhm.org" />
          <meta property="og:title" content="Turn Around H&M" />
          <meta
            property="og:description"
            content="Let's make sure H&M starts paying a living wage"
          />
          <meta property="og:image" content={turnaroundhm} />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="463882227038771" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="cleanclothes" />
          <meta name="twitter:title" content="Turn Around H&M" />
          <meta
            name="twitter:description"
            content="Let's make sure H&M starts paying a living wage"
          />
          <meta name="twitter:image" content={turnaroundhm} />
        </Helmet>

        <Banner />

        <div id="main">
          <div className="inner">
            <header className="major">
              <h2>TURN AROUND, H&amp;M !</h2>
            </header>
            <span className="image right">
              <img src={pic01} alt="Workers in H&M Factory" />
            </span>
            <b>
              Hey H&amp;M, you seem to be quite lost. Or did you forget your
              destination altogether?
            </b>
            <br />
            <p>Here’s a short version of what you need to do:</p>
            <ul className="actions">
              <li>
                <div>
                  <img src={turnaround} alt="Turn around" />
                  <br />
                  <b>Turn around</b>
                  <br />
                  to stay true <br />
                  to your commitment
                </div>
              </li>
              <li>
                <div>
                  <img src={ahead} alt="Go straight" />
                  <br />
                  <b>Go straight</b>
                  <br />
                  to your suppliers
                </div>
              </li>
              <li>
                <div>
                  <img src={turnright} alt="Turn right" />
                  <br />
                  <b>Take the right turn</b>
                  <br />
                  to make sure workers <br />
                  get paid a living wage
                </div>
              </li>
            </ul>
          </div>
          <br clear="all" />
          <p className="box">
            In 2013 H&amp;M committed to ensuring living wages by 2018, which
            brought the brand a lot of positive media coverage. Now H&amp;M is
            trying to cover up that commitment, pretending they have been saying
            something else all along.
            <br />
            <br />
            Meanwhile hundreds of thousands of workers making H&amp;M clothing
            still cannot lift themselves out of poverty with the hard work
            hidden behind the glossy storefronts.
            <br />
            <br />
            H&amp;M has the financial means and the power to stay true to their
            original commitment. Not only that – they could even go beyond that
            and cover their whole supply chain.
          </p>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${stockholm01})` }}>
              <header className="major">
                <h3>Help turn H&amp;M Around!</h3>
                <p>take action</p>
              </header>
              <Link to="/take-action" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${cambodiaworkers02})` }}>
              <header className="major">
                <h3>News</h3>
                <p>the latest from the campaign</p>
              </header>
              <Link to="/news" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${cambodiaworkers01})` }}>
              <header className="major">
                <h3>Destination: Living Wage</h3>
                <p>where H&amp;M should go to</p>
              </header>
              <Link to="/destination" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${indiaworkers02})` }}>
              <header className="major">
                <h3>FAQ</h3>
                <p>debunking H&amp;M, and about this campaign</p>
              </header>
              <Link to="/faq" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Delve deeper</h2>
              </header>
              <p>
                H&amp;M produces fancy Corporate Social Responsibility reports
                and many long-worded{' '}
                <em>approaches, pilot schemes and roadmaps</em>. However, the
                reality in the factories is often strikingly different. <br />
                We have gathered research, interviewed workers in several
                countries, and also preserved some of the promises that H&amp;M{' '}
                <em>"conveniently" </em> removed from earlier versions of their
                website.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/dossier" className="button next">
                    OK, show me
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
