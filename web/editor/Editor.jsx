import 'codemirror/lib/codemirror.css'

import { Controlled as CodeMirror } from 'react-codemirror2'
import htmlStore from './sotre';

const Editor = () => {
  let [loading, value, error, dispatch] = htmlStore.useContext()
  return <CodeMirror
    value={value}
    options={{
      mode: 'string',
      theme: 'material',
      lineNumbers: true
    }}
    onBeforeChange={(editor, data, value) => {
      dispatch(value);
    }}
    onChange={(editor, data, value) => {

    }}
  />
}

export default Editor