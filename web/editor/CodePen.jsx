import Editor from "./Editor"
import Preview from "./Preview"
import htmlStore from "./sotre"

let { Provider } = htmlStore
const CodePen = () => {
  return <Provider>
    <Editor />
    <Preview />
  </Provider>
}
export default CodePen