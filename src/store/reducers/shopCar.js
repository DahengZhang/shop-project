import { ADD_GOODS, DEL_GOODS } from '../actions/shopCar'

export default function (state = [], action) {
    const { type, value } = action
    const index = state.findIndex(item => item.id === value.id)
    if (type === ADD_GOODS) {
        if (index !== -1) {
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    count: state[index].count + 1
                },
                ...state.slice(index + 1, state.length)
            ]
        } else {
            return [ ...state, { ...value, count: 1 } ]
        }
    } else if (type === DEL_GOODS && index !== -1) {
        if (state[index].count <= 1) {
            return state.filter(item => item.id !== value.id)
        } else {
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    count: state[index].count - 1
                },
                ...state.slice(index + 1, state.length)
            ]
        }
    } else {
        return state
    }
}
