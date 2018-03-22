import React from 'react'
import Form from '../../components/Form'
import { connect } from 'react-redux'
import { addResource, chgResource } from '../../action-creators/resources'

const NewResource = props => {
  console.log('NewResource props', props)
  return (
    <div>
      <h1>Add Resource</h1>
      <Form
        cancelUrl="/resources"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.resource)}
        {...props.resource}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    resource: state.resource
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => dispatch(chgResource(field, value)),
    onSubmit: (history, resource) => e => {
      e.preventDefault()
      dispatch(addResource(resource, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(NewResource)
