/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： yangjianyun@58.com
 * @date: 2021-11-25 14:16:12
 * @description: login 登录接口mock
 */
const admin = {
    userName: "admin",
    pwd: "admin123",
    token: "admin+admin123",
}
const editor = {
    userName: "editor",
    pwd: "editor123",
    token: "admin+editor123",
}
const tourist = {
    userName: "admin",
    pwd: "tourist123",
    token: "admin+tourist123",
}
const users = [admin, editor, tourist]

export default {
    login(config) {
        const {username} = JSON.parse(config.body);
        console.log("拦截登录 -->>", JSON.parse(config.body));
    },
}