import marked from 'marked'
import hljs from 'highlight.js'
import xss from 'xss'

// 转化 md 语法为 html
const translateMarkdown = (plainText, isGuardXss = false) => {
	return marked(isGuardXss ? xss(plainText) : plainText, {
		renderer: new marked.Renderer(),
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: true,
		smartLists: true,
		smartypants: true,
		highlight: (code) => {
			return hljs.highlightAuto(code).value
		}
	})
}
export default translateMarkdown