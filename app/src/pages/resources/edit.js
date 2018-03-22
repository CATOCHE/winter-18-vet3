import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import Form from '../../components/Form'
import { connect } from 'react-redux'
import {
  editResource,
  chgResource,
  getResource
} from '../../action-creators/resources'

const EditResource = props => {
  console.log('PROPS', props)
  return (
    <div>
      <Form
        cancelUrl={`/resources`}
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.resource)}
        value={props.resource}
        {...props.resource}
      />
    </div>
  )
}

const mapStateToProps = state => {
  console.log('STATE IS ', state)
  return {
    // currentResource: state.resource
    resource: state.resource,
    currentResource: state.resource
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      console.log('This is the mapActionsToProps field-value', field, value)
      dispatch(chgResource(field, value))
    },
    onSubmit: (history, resource) => e => {
      e.preventDefault()
      dispatch(editResource(resource, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditResource)
