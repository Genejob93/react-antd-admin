import "./mock/index"
import axios from "axios"

axios.get("/api/goods/goodsList", {
    params: {
        limit: 5,
        page: 1,
    },
}).then((res) => {
    console.log("前端请求到的 mockjs 数据", res);
    // return
})
let a = 123
console.log("1d2345678", a)
export {
    a,
}