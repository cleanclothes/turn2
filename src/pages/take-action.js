import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import stockholm01 from '../assets/images/stockholm01.jpg'
import berlin01 from '../assets/images/berlin01.jpg'
import turnaround from '../assets/images/turnaround.svg'
import ahead from '../assets/images/ahead.svg'
import turnright from '../assets/images/turnright.svg'
import ccclogo from '../assets/images/ccc-logo-small.svg'
import turnaroundhm from '../assets/images/turnaroundhm.png'
import wemove from '../assets/images/wemove.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Take action - Turn H&M Around</title>
            <meta name="description" content="Sign the petition and let your voice be heard" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>WILL YOU HELP TURN H&amp;M AROUND ?</h1>
                    </header>
                    <span className="image main"><img src={stockholm01} alt="" /></span>
                    <p>In 2013 H&amp;M committed to ensuring living wages by 2018, which brought the brand a lot of positive media coverage. Now H&amp;M is trying to cover up that commitment, pretending they have been saying something else all along.</p>
                    <p>Meanwhile hundreds of thousands of workers making H&amp;M clothing still cannot lift themselves out of poverty with the hard work hidden behind the glossy storefronts. </p>
                    <p>H&amp;M has the financial means and the power to stay true to their original commitment. Not only that – they could even go beyond that and cover their whole supply chain. </p>
                    <p>You have a voice in determining H&amp;M’s course of action! </p>
                     <h3><a href="https://act.wemove.eu/campaigns/Living-Wages-HM" target="_blank" rel="noopener noreferrer">Sign the petition</a></h3>
                    <a href="https://act.wemove.eu/campaigns/Living-Wages-HM" target="_blank" rel="noopener noreferrer"><img className="image right" src={wemove} alt="logo wemove.eu" /></a>
                    <p>We've teamed up with <a href="https://act.wemove.eu/campaigns/Living-Wages-HM" target="_blank" rel="noopener noreferrer">wemove.eu</a> to let our voices be heard.</p>
                    <p>So please <a href="https://act.wemove.eu/campaigns/Living-Wages-HM" target="_blank" rel="noopener noreferrer">sign the petition</a> and let your friends know to do the same!</p>

                    <h3>Use your voice on social media</h3>

                    <blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">As simple as that <a href="https://twitter.com/hm?ref_src=twsrc%5Etfw">@hm</a>! Keep your promises and guarantee <a href="https://twitter.com/hashtag/FairEmployment?src=hash&amp;ref_src=twsrc%5Etfw">#FairEmployment</a> conditions! Our community can give you thousands of reasons why. Here&#39;s one of them ⤵️  🔊 <a href="https://t.co/V1mTUFPWi3">https://t.co/V1mTUFPWi3</a> <a href="https://twitter.com/cleanclothes?ref_src=twsrc%5Etfw">@cleanclothes</a> <a href="https://twitter.com/hashtag/TurnAroundHM?src=hash&amp;ref_src=twsrc%5Etfw">#TurnAroundHM</a> <a href="https://t.co/xFsMjtgapb">pic.twitter.com/xFsMjtgapb</a></p>&mdash; WeMove.EU (@wemoveEU) <a href="https://twitter.com/wemoveEU/status/1032629174572396545?ref_src=twsrc%5Etfw">August 23, 2018</a></blockquote>


                    <div dangerouslySetInnerHTML={{ __html: '<a href="https://twitter.com/intent/tweet?button_hashtag=turnaroundhm&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-text="@HM #TurnAroundHM #LivingWageNow" data-lang="en" data-dnt="true" data-show-count="false"><b>Tweet your own message to H&amp;M (@HM), using #TurnAroundHM and #LivingWageNow</b></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>' }} />

                    <span className="image left"><img src={berlin01} alt="Activists in Berlin" /></span>
                    <p><br />You could also tweet one of these messages:</p>
                    <blockquote>I want workers behind @HM clothes to be paid a living wage – as #HM promised they would be by 2018! #TurnAroundHM #LivingWageNow </blockquote>
                    <blockquote>I want #LivingWageNow for workers in @HM supply chain! #TurnAroundHM - Stop turning your back on the living wage commitment! #HM </blockquote>
                    <blockquote>Hey, @HM, you committed to making sure that workers are paid a #LivingWage by 2018. Make it happen, #HM! #TurnAroundHM #LivingWageNow </blockquote>


                    <p>Make sure to check back and follow our social media for more ways to support this effort, and/or <a href="http://eepurl.com/dsx8tP" title="Newsletter signup">sign up for our newsletter.</a> </p>
                    <ul className="icons">

                        <li><a href="https://twitter.com/cleanclothes" title="Twitter" target="_blank" rel="noopener noreferrer" className="icon fa-twitter fa-2x alt"></a>
                            <a href="https://twitter.com/cleanclothes" title="Twitter" target="_blank" rel="noopener noreferrer"><h5>@cleanclothes</h5></a>

                        </li>
                        <li><a href="https://www.facebook.com/cleanclothescampaign/" title="Facebook" target="_blank" rel="noopener noreferrer" className="icon  fa-facebook fa-2x alt">
                        </a><a href="https://www.facebook.com/cleanclothescampaign/" title="Facebook" target="_blank" rel="noopener noreferrer" ><h5>cleanclothescampaign</h5></a>

                        </li>
                        <li><a href="https://www.linkedin.com/company/clean-clothes-campaign/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin fa-2x alt"></a>
                            <a href="https://www.linkedin.com/company/clean-clothes-campaign/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><h5>Clean Clothes Campaign</h5></a>

                        </li>
                        <li><a href="http://eepurl.com/dsx8tP" title="Newsletter signup" className="icon fa-bullhorn fa-2x alt"><span className="label">Newsletter signup</span></a>
                            <a href="http://eepurl.com/dsx8tP" title="Newsletter signup" target="_blank" rel="noopener noreferrer"><h5>Newsletter signup</h5></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic