import { flattenDeep } from "lodash"
import './style.css'
const list = [1, [4, [8], 8], 2, [2, 8]]

console.log(flattenDeep(list))