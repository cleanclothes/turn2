import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import stockholm01 from '../assets/images/stockholm01.jpg'
import berlin01 from '../assets/images/berlin01.jpg'
import wemove from '../assets/images/wemove.png'
import challenge01 from '../assets/images/challenge01.jpg'
import challenge02 from '../assets/images/challenge02.jpg'
import { TwitterShareButton } from 'react-twitter-embed'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Take action - Turn H&M Around</title>
      <meta
        name="description"
        content="Sign the petition and let your voice be heard"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>WILL YOU HELP TURN H&amp;M AROUND ?</h1>
          </header>
          <p>
            In 2013 H&amp;M committed to ensuring living wages by 2018, which
            brought the brand a lot of positive media coverage. Now H&amp;M is
            trying to cover up that commitment, pretending they have been saying
            something else all along. Meanwhile hundreds of thousands of workers
            making H&amp;M clothing still cannot lift themselves out of poverty
            with the hard work hidden behind the glossy storefronts. H&amp;M has
            the financial means and the power to stay true to their original
            commitment. Not only that – they could even go beyond that and cover
            their whole supply chain.
          </p>
          <h3>Use your voice on social media</h3>
          <p>
            We are giving H&amp;M shareholders the opportunity to improve
            millions of lives: by voting for our living wage resolution on 7 May
            when they meet in Stockholm.{' '}
          </p>
          <p>
            Your voice can make a difference! Ask key shareholders to use their
            influence and do the right thing!
          </p>
          <h3>Twitter</h3>
          <b>Tweet the following using the button:</b>
          <p>
            I support the @cleanclothes #LivingWage resolution and urge you to
            vote for it on 7 May! Do the right thing @Swedbank @nordea @folksam
            @Alecta @storebrand_no @AP4se #ShareYourProfits #TurnAroundHM
            #LivingWageNow@AP4se
          </p>
          <TwitterShareButton
            options={{
              text:
                'I support the @cleanclothes #LivingWage resolution and urge you to vote for it on 7 May! Do the right thing @Swedbank @nordea @folksam @Alecta @storebrand_no #ShareYourProfits @AP4se #TurnAroundHM #LivingWageNow',
            }}
          />

          <h3>Facebook</h3>
          <b>
            Please copy the following message on the wall of major H&amp;M
            shareholders:
          </b>
          <p>
            Despite H&amp;M’s promise of a living wage by 2018, workers who make
            #HM clothes are still expected to survive on poverty wages. Please
            use your influence as a major H&amp;M shareholder to change this. On
            7 May, #ShareYourProfits and vote for the Clean Clothes Campaign’s
            proposal to establish a living wage fund for the workers!
            #TurnAroundHM #LivingWageNow
          </p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/folksam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://facebook.com/folksam
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Nordea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://facebook.com/Nordea
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/storebrand.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://facebook.com/storebrand.no
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/swedbanksverige/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://facebook.com/swedbanksverige
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Alecta.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/Alecta.se/
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/familjenerlingperssonsstiftelse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/familjenerlingperssonsstiftelse/
              </a>
            </li>
          </ul>
          <h3>
            <a
              href="https://act.wemove.eu/campaigns/Living-Wages-HM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign the petition
            </a>
          </h3>
          <a
            href="https://act.wemove.eu/campaigns/Living-Wages-HM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="image right" src={wemove} alt="logo wemove.eu" />
          </a>
          <p>
            We've teamed up with{' '}
            <a
              href="https://act.wemove.eu/campaigns/Living-Wages-HM"
              target="_blank"
              rel="noopener noreferrer"
            >
              wemove.eu
            </a>{' '}
            to let our voices be heard.
          </p>
          <p>
            So please{' '}
            <a
              href="https://act.wemove.eu/campaigns/Living-Wages-HM"
              target="_blank"
              rel="noopener noreferrer"
            >
              sign the petition
            </a>{' '}
            and let your friends know to do the same!
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
