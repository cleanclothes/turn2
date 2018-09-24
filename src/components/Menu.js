import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/take-action">Turn H&amp;M Around</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/news">News</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/destination">Destination: Living Wage</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/faq">F.A.Q.</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/dossier">Delve deeper</Link></li>

            </ul>

        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
