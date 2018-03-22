import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'

const Form = ({
  // We're adding these as props that we're going to use.  Creating a props object and destructuring it into pieces.
  _id,
  name,
  formalName,
  shortDesc,
  purpose,
  primaryPhone,
  value,
  onChange,
  onSubmit,
  cancelUrl,
  showValueInput
}) => {
  /* creates a ternary to see whether there's a value field.
   If it's true, it will show the value input.  If false, it returns null. */
  const valueInput = showValueInput ? (
    <div>
      <label className="dib">value</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange('value', e.target.value)}
      />
    </div>
  ) : null

  const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    menu: {
      width: 200
    }
  })
  /* Below, we're showing our name, id, and possibly our value field (if showValueInput is set to true) */
  return (
    /* onSubmit is one of our props. It's defined in our starwars/form.js file
    (or buzzwords/form.js, or cookies/form.js, etc.). When they click submit,
    pass in ID, name, and value to the onSubmit function as an object.

    onChange: on a change, we're going to update our 'name' value in state with the
    value of what's in our text box */

    <form onSubmit={onSubmit({ _id, name, value })}>
      <FormControl>
        <div>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={e => {
              console.log('This is the name form')

              onChange('name', e.target.value)
            }}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="formalName"
            label="Formal Name"
            value={formalName}
            onChange={e => onChange('formalName', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="shortDesc"
            label="Short Description"
            value={shortDesc}
            onChange={e => onChange('shortDesc', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="purpose"
            label="Purpose"
            value={purpose}
            onChange={e => onChange('purpose', e.target.value)}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="primaryPhone"
            label="Primary Phone"
            value={primaryPhone}
            onChange={e => onChange('primaryPhone', e.target.value)}
            margin="normal"
          />
        </div>
        {valueInput}
        <div>
          <button>Submit</button>
          <Link to={cancelUrl}>Cancel</Link>
        </div>
      </FormControl>
    </form>
  )
}

export default Form
