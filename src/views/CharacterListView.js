import React, { useEffect } from "react"
import { connect } from "react-redux"
import { either } from "../lib"

import { ErrorPre } from "../components"
import { CharacterList } from "../components"
import { fetchFrom } from "../actions"

const CharacterListView = ({ characters, fetchFrom }) => {
  useEffect(() => {
    fetchFrom("https://swapi.co/api/people/")
  }, [])
  return either(err => (
    <>
      <h3 style={{ color: "tomato" }}>Error</h3>
      <ErrorPre err={err} />
    </>
  ))(data => (
    <>
      <h3>Success</h3>
      <CharacterList characters={data.results} />
    </>
  ))(characters)
}

export default connect(
  ({ characters }) => ({ characters }),
  {
    fetchFrom
  }
)(CharacterListView)
