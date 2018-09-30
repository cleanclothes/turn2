import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import stockholm01 from '../assets/images/stockholm01.jpg'
import berlin01 from '../assets/images/berlin01.jpg'
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

                    <h4>Leave a message on <a href="https://www.facebook.com/hm/" target="_blank" rel="noopener noreferrer">H&amp;M's Facebook wall.</a></h4>
                    <p>Let your creative sparks fly, or use one of these messages:</p>
                    <blockquote>I want people who make the clothes I buy from you to be paid a living wage. Please H&amp;M, stop turning your back on the commitment you made in 2013 and make sure workers get a #LivingWageNow! #TurnAroundHM</blockquote>
                    <blockquote>I was shocked to learn about poverty wages at your "gold" and "platinum" supplier factories. Those workers were covered by your commitment to a living wage by 2018! No more empty words, H&amp;M, I want workers to be paid a #LivingWageNow! #TurnAroundHM</blockquote>
                    <blockquote>It is important for me to know that workers who make my clothes can have decent lives. To begin with, I expect you to stay true to the commitment that 850,000 garment workers will get a living wage by 2018. #TurnAroundHM #LivingWageNow</blockquote>

                </div>
            </section>
        </div>

    </Layout>
)

export default Generic