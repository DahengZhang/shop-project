import React from 'react'
import { connect } from 'react-redux'
import { AddGoods, DelGoods } from '../store/actions/shopCar'

const maoStateToProps = (state, props) => ({
    goodsList: state
})

const maoDispatchToProps = (dispatch, props) => ({
    add: v => {
        dispatch(AddGoods(v))
    },
    del: v => {
        dispatch(DelGoods(v))
    }
})

export default connect(maoStateToProps, maoDispatchToProps)(props => {
    const { goodsList, add, del } = props
    return (
        <div className="page shop-car">
            This is shop car
            {goodsList.map(item => {
                return (
                    <li key={item.id}>
                        {item.name}购买数量{item.count}
                        <button onClick={() => del(item)}>减少</button>
                        <button onClick={() => add(item)}>添加</button>
                    </li>
                )
            })}
        </div>
    )
})
