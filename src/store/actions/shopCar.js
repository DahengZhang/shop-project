export const ADD_GOODS = 'ADD_GOODS'
export const DEL_GOODS = 'DEL_GOODS'

export const AddGoods = (value) => {
    return {
        type: ADD_GOODS,
        value
    }
}

export const DelGoods = (value) => {
    return {
        type: DEL_GOODS,
        value
    }
}

export const AsyncAddGoods = (value) => {
    return dispatch => {
        return new Promise(() => {
            setTimeout(() => {
                dispatch(AddGoods(value))
            }, 1000)
        })
    }
}
