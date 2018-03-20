import fetch from 'isomorphic-fetch'
import {
  SET_RESOURCES,
  GET_RESOURCE,
  CHG_CURRENT_RESOURCE,
  CLEAR_CURRENT_RESOURCE,
  ERROR
} from '../constants'
const url = 'http://localhost:5000'

/*
getResources()
- use fetch to make a GET to /resources
- take array of resource documents and t  urn them into json
- dispatch an action containing the resources as a payload:
	dispatch({type: SET_RESOURCES, payload: resources})
*/
export const getResources = async (dispatch, getState) => {
  const resources = await fetch(`${url}/resources`).then(res => res.json())
  dispatch({ type: SET_RESOURCES, payload: resources })
}

export const getResource = id => async (dispatch, getState) => {
  dispatch({ type: GET_RESOURCE, payload: {} })
  const resource = await fetch(`${url}/resources/${id}`).then(res => res.json())
  dispatch({ type: GET_RESOURCE, payload: resource })
}

export const deleteResource = (id, history) => async (dispatch, getState) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const method = 'DELETE'
  const response = await fetch(`${url}/resources/${id}`, {
    method,
    headers
  }).then(res => res.json())
  if (!response.ok) {
    dispatch({ type: ERROR, payload: 'Could not delete resource' })
    return
  }
  dispatch(getResources)
  history.push('/resources')
}

export const addResource = (resource, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(resource)

  const result = await fetch(`${url}/resources`, {
    headers,
    method,
    body
  }).then(res => res.json())

  if (result) {
    if (result.ok) {
      dispatch(getResources)
      dispatch({ type: CLEAR_CURRENT_RESOURCE })
      history.push('/resources')
    }
  }
}

export const chgResource = (field, value) => async (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_RESOURCE, payload: { [field]: value } })
}
