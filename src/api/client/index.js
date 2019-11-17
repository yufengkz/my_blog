import axios from '../../lib/axios'

// 获取用户信息
export const _getUserInfo = async () => await axios.post(`/getUser`, {id: 1})
// 获取文章标签
export const _getTags = async () => await axios.get(`/tag/list`)
// 获取推荐文章
export const _getHotArticle = async () => await axios.get(`/article/list`)

//获取文章详情
export const _getDetail = async id => await axios.get(`/article/detail/${id}`)