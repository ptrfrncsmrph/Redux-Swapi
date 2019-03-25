import React from "react"

const style = {
  background: "tomato",
  color: "white"
}

const ErrorPre = ({ err }) => (
  <pre style={style}>{JSON.stringify(err, null, 2)}</pre>
)

export default ErrorPre
