import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Destination = (props) => (
    <Layout>
        <Helmet>
            <title>Destination: Living Wage</title>
            <meta name="description" content="H&M should take concrete steps to increasing wages" />
        </Helmet>


        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>DESTINATION: LIVING WAGE</h1>
                    </header>
                    <p className="content">Where we want H&amp;M to get their workers is to a wage that is earned in a standard working week of no more than 48 hours,
                 and that allows a garment worker to be able to buy food for herself and her family, pay the rent, pay for healthcare, clothing, transportation and education and have a small amount of savings for when something unexpected happens.</p>


            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-cutlery"></span>
                <strong>Food</strong>
              </li>
              <li className="style1">
                <span className="icon fa-home"></span>
                <strong>Rent</strong>
              </li>
              <li className="style3">
                <span className="icon fa-medkit"></span>
                <strong>Healthcare</strong>
              </li>
              <li className="style4">
                <span className="icon fa-shopping-basket"></span>
                <strong>Clothing</strong>
              </li>
              <li className="style5">
                <span className="icon fa-bus"></span>
                <strong>Transportation</strong>
              </li>
              <li className="style5">
                <span className="icon fa-graduation-cap"></span>
                <strong>Education</strong>
              </li>
              <li className="style5">
                <span className="icon fa-money"></span>
                <strong>Savings</strong>
              </li>
            </ul>
            <header className="major">
              <h2>ORIGIN: POVERTY WAGE</h2>
            </header>
            <p className="content">One of the people whose hard work goes into what we find in H&amp;M’s stores recently told us: "I would give everything to be able to buy a toy car for my four children. I dream about it day and night, but I doubt I would ever be able to make this come true."
            <br/>
              <br />The origin of the journey we want H&amp;M to undertake is the current situation, in which hundreds of thousands of workers have to constantly worry about how to feed themselves and their families, how to make sure they do not find themselves without a roof above their heads, what to do about the unavoidable fees if they want to send their children to school, what would happen if there is a medical emergency &hellip; </p>
              <p className="content">
            What it is like to live on poverty wages is evident from <a href="http://workerdiaries.org//wp-content/uploads/2017/04/Garment_Worker_Diaries_Cambodia_Interim_Report.pdf" target="_blank" rel=" noopener noreferrer">Sokhaeng’s story</a> reported in Worker diaries:
"Despite earning the minimum wage, Sokhaeng’s pay often did not cover all of her expenses and obligations. Consider the demands on her July paycheck. In the week she received her payment, she sent 560,000 riels to her mother using the mobile money service Wing; gave her brother an 80,000 riels loan repayment; paid her and Pisen’s rent and utility bills for 163,000 riels; and bought 137,900 riels of basic items for the home. Within a matter of days, Sokhaeng had spent nearly all of her salary, which left her with a fraction of the cash that she needed to meet the rest of the month’s expenses."  </p>


                </div>
            </section>


        </div>

    </Layout>
)

export default Destination