/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： yangjianyun@58.com
 * @date: 2021-11-25 13:12:28
 * @description: 公用方法
 */

/**
 * 向session中存储数据
 * @param key
 * @param itemValue
 */
export const setSessionItem = (key, itemValue) => {
    sessionStorage.setItem(key, JSON.stringify(itemValue))
}

/**
 * 删除session中数据项
 * @param key
 */
export const removeSessionItem = (key) => {
    sessionStorage.getItem(key) && sessionStorage.removeItem(key)
}

/**
 * @param key session 的 key
 * @param  可选, 是否取完值立即删除, 默认为true
 * @returns {string | any | {}}
 */
export const getSessionItem = (key, isRemove = true) => {
    let sessionValue = (sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key))) || {}
    // 删除本地存储
    isRemove && removeSessionItem(key)
    return sessionValue
}

/**
 * 向 localstorage 中存储数据
 * @param key
 * @param itemValue
 */
export const setLocalStorageItem = (key, itemValue) => {
    localStorage.setItem(key, JSON.stringify(itemValue))
}

/**
 * 删除 localstorage 中数据项
 * @param key
 */
export const removeLocalStorageItem = (key) => {
    localStorage.getItem(key) && localStorage.removeItem(key)
}

/**
 *获取 localstorage 中的数据
 * @param key
 */
export const getLocalStorageItem = (key) => {
    let localStorageVal = (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key))) || {}
    // localStorage 中的数据 一般不轻易删除,因为可能要全局使用
    // removeLocalStorageItem(key)
    return localStorageVal
}
