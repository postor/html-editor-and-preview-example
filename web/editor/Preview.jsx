import { useRef } from "react"
import htmlStore from "./sotre"

let Preview = () => {
  let [loading, value] = htmlStore.useContext()
  
  let blob = new Blob([loading
    ? 'loading...'
    : value], { type: "text/html; charset=utf-8" })
  return <iframe src={URL.createObjectURL(blob)} />
}

export default Preview