import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import Form from '../../components/Form'
import { connect } from 'react-redux'
import { editResource, chgResource } from '../../action-creators/resources'

const EditResource = props => {
  return (
    <div>
      <Form
        cancelUrl={`/resources/`}
        onChange={props.onChange}
        onSubmit={e => props.onSubmit}
        {...props.currentResource}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return { currentResource: state.currentResource }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(chgResource(field, value)),
    //onSubmit: (history, resource) => e => {
    //  e.preventDefault()
    //  dispatch(editResource(resource, history))
    //  }
    onSubmit: () => alert('Bing-Bong')
  }
}

export default EditResource
