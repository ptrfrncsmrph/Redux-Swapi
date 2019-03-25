import React, { useEffect } from "react"
import { connect } from "react-redux"
import { either, maybe } from "../lib"

import { ErrorPre } from "../components"
import { CharacterList } from "../components"
import { fetchFrom } from "../actions"

const validURL = "https://swapi.co/api/people/"
const invalidURL = "https://swi.co/api/people/"

const onError = err => (
  <>
    <h3 style={{ color: "tomato" }}>Error</h3>
    <ErrorPre err={err} />
  </>
)

const onLoading = <h3>Loading...</h3>

const onSuccess = maybe(onLoading, data => (
  <>
    <h3>Success</h3>
    <CharacterList characters={data.results} />
  </>
))

const CharacterListView = ({ characters, fetchFrom }) => {
  useEffect(() => {
    fetchFrom(validURL)
  }, [])
  return either(onError, onSuccess)(characters)
}

export default connect(
  ({ characters }) => ({ characters }),
  {
    fetchFrom
  }
)(CharacterListView)
