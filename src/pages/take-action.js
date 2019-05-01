import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import YouTube from 'react-youtube-embed'

import wemove from '../assets/images/wemove.png'
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
          <h2>WILL YOU HELP TURN H&amp;M AROUND ?</h2>

          <div className="box">
            <h3>Action at the H&amp;M shareholder meeting</h3>
            <p className="spotlights">
              We are giving H&amp;M shareholders the opportunity to improve
              millions of lives: by voting for our{' '}
              <a href="https://turnaroundhm.org/resolution/">
                living wage resolution
              </a>{' '}
              on 7 May when they meet in Stockholm.{' '}
            </p>
            <p>
              Find out more in the short video below, and use your voice on
              social media to support our resolution
            </p>
          </div>

          <p>
            <YouTube id="3GH6z2Shipg" />
            <h3>&nbsp;</h3>
            <h3>Use your voice on social media</h3>
            Your voice can make a difference! Ask key shareholders to use their
            influence and do the right thing!
          </p>
          <h3>Twitter</h3>
          <b>Tweet the following using the button:</b>
          <p>
            I support the @cleanclothes #LivingWage resolution and urge @hm
            shareholders to vote for it on 7 May! Do the right thing @Swedbank
            @nordea @folksam @Alecta @storebrand_no @AP4se #ShareYourProfits
            #TurnAroundHM #LivingWageNow
          </p>
          <TwitterShareButton
            options={{
              text:
                'I support the @cleanclothes #LivingWage resolution and urge @hm shareholders to vote for it on 7 May! Do the right thing @Swedbank @nordea @folksam @Alecta @storebrand_no #ShareYourProfits @AP4se #TurnAroundHM #LivingWageNow',
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
                href="https://www.facebook.com/familjenerlingperssonsstiftelse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/familjenerlingperssonsstiftelse/
              </a>
            </li>
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
          </ul>

          <table>
            <thead>
              <tr>
                <th>Shareholder</th>
                <th># of shares</th>
                <th>Dividend 2019 (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Stefan Persson family and related companies</td>
                <td>785,710,056</td>
                <td>824,995,559</td>
              </tr>
              <tr>
                <td>The Lottie Tham family and related companies</td>
                <td>88,880,400</td>
                <td>93,324,420</td>
              </tr>
              <tr>
                <td>Swedbank Robur fonder</td>
                <td>33,467,469</td>
                <td>35,140,842</td>
              </tr>
              <tr>
                <td>FJÄRDE AP Fund</td>
                <td>22,544,164</td>
                <td>23,671,372</td>
              </tr>
              <tr>
                <td>Nordea</td>
                <td>19,535,656</td>
                <td>20,512,439</td>
              </tr>
              <tr>
                <td>Folksam</td>
                <td>9,878,460</td>
                <td>10,372,383</td>
              </tr>
            </tbody>
          </table>

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
