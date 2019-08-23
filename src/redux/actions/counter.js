import * as constants from '../constants'

export const increment = () => {
    return {type: constants.INCREMENT}
}

export const decrement = () => {
    return {type: constants.DECREMENT}
}

export const reset = () => {
    return {type: constants.RESET}
}