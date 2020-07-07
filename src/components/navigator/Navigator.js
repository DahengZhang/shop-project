import React from 'react'
import classnames from 'classnames'
import { Link, withRouter } from 'react-router-dom'

import './style.scss'

export default withRouter(props => {
    return (
        <div className="component navigator">
            <Link className={classnames('link-item', { 'active': props.location.pathname === '/' })} to="/">发现</Link>
            <Link className={classnames('link-item', { 'active': props.location.pathname === '/shop-car' })} to="/shop-car">购物车</Link>
            <Link className={classnames('link-item', { 'active': props.location.pathname === '/mine' })} to="/mine">我的</Link>
        </div>
    )
})
