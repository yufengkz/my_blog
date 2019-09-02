import * as constants from '../constants'

export const setMenuTitle = (MenuName) => {
    return {type: constants.SET_MENU_TITLE, title: MenuName}
}
