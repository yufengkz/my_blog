import Cookies from 'js-cookie'

export const TOKEN_KEY = 'token'

export const setToken = (token, date) => {
    Cookies.set(TOKEN_KEY, token, {expires: date || 1})
}

export const getToken = () => {
    return Cookies.get(TOKEN_KEY) || false
}

export const setCookie = (name, value, date) => {
    return Cookies.set(name, value, {expires: date || 1})
}

export const getCookie = async (name) => {
    return await Cookies.get(name) || false
}

export const removeCookie = async (name) => {
    if(name) {
        await Cookies.remove(name)
        return true
    }else{
        await Cookies.remove()
        return true
    }
}

// 随机数
export const random = (n, m) => {
    return Math.floor(Math.random() * (m - n) + n)
}