import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import stockholm01 from '../assets/images/stockholm01.jpg'
import berlin01 from '../assets/images/berlin01.jpg'
import wemove from '../assets/images/wemove.png'
import challenge01 from '../assets/images/challenge01.jpg'
import challenge02 from '../assets/images/challenge02.jpg'

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

                    <p>You can join the <b><a href="https://www.instagram.com/explore/tags/turnaroundhmchallenge/" target="_blank" rel="noopener noreferrer">#TurnaroundHMChallenge</a></b>, and have some fun on Instagram!</p>
                    <h4>HOW?</h4>
                    <img src={challenge01} alt="Instagam challenge" />  <img src={challenge02} alt="Instagam challenge" />
                    <ul>
                        <li><b>Sign the <a href="https://act.wemove.eu/campaigns/Living-Wages-HM" target="_blank" rel="noopener noreferrer">petition</a></b></li>
                        <li><b>Take a picture</b> of something overturned, or turned around, or take a selfie and overturn it</li>
                        <li><b>Post it on Instagram</b> using #turnaroundhm and #turnaroundhmchallenge and nominate two or more friends to do the same!</li>
                    </ul>

                    <p>For inspiration, have a look at <a href="https://www.instagram.com/explore/tags/turnaroundhmchallenge/" target="_blank" rel="noopener noreferrer">what others have done</a>. Have fun!</p>


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