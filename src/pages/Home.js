import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { AddGoods } from '../store/actions/shopCar'

const maoStateToProps = (state, props) => ({})

const maoDispatchToProps = (dispatch, props) => ({
    add: v => {
        dispatch(AddGoods(v))
    }
})

export default connect(maoStateToProps, maoDispatchToProps)(props => {
    const { add } = props
    let [goodsList, setGoodsList] = useState([])
    useEffect(() => {
        axios.get('/goods.json').then(res => {
            const { data: { data: list } } = res
            setGoodsList(list)
        })
    }, [])

    return (
        <div className="page home">
            <ul>
                {goodsList.map(item => {
                    return <li onClick={() => add(item)} key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )
})
