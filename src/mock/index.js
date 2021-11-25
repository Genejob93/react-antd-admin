/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： yangjianyun@58.com
 * @date: 2021-11-25 10:06:53
 * @description: mockjs 拦截模拟数据
 */

const Mock = require("mockjs")
const url = require("url")

const data = Mock.mock({
    "data": {
        "code": 0,
        "msg": "请求成功",
        "list|1-10": [
            {
                "id|+1": 0, // 初始值是0 自增1
                "goodsName": "@ctitle(3,5)", // 官网 这个名字是 3-5之间
                "goodsPrice|+1": 100,
                "address": "@county(true)", //
                "telNum": /^1(3|5|7|8|9)\d{9}$/,   //正则写的电话后面1开头，
                "goodsImg": "@image('200x100','#894FC4','FFF','alley')", //生成图片
                "date": "@date('yyyy-MM-dd HH:mm:ss')", // 时间
                "email": "@email()", // 邮箱
            },
        ],
    },
})

// 配置拦截 ajax 请求
Mock.mock(/\/api\/goods\/goodsList/, "get", function (options) {
    // 第一次配置 mock拦截 ajax, 这里之所以分步写,是因为想知道每一步的目的, 有点儿繁琐,但是好理解
    const rUrl = options?.url // 前端请求的 url
    const parsedUrl = url.parse(rUrl, true) // url 模块解析 请求url
    const queryParams = parsedUrl?.query // 拿到 queryParams 请求参数
    const {limit, page} = queryParams
    // 根据分页条件, 返回分页数据
    // page: 1, limit: 5, slice(0,5) 5条
    // page: 2, limit: 5, slice(5,10) 5 条
    // page: 3, limit: 5, slice(10,15) 5 条
    return data.data.list.slice((page - 1) * limit, (limit * page))
})

const data1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(111111, data1.slice(0, 4), data1);