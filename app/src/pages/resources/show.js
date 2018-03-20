import React from 'react'
import { connect } from 'react-redux'
import ResourceListItem from '../../components/ResourceListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { getResource, deleteResource } from '../../action-creators/resources'
import { CONFIRM_DELETE_RESOURCE } from '../../constants'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  })
})

class Resource extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getResource(id)
  }

  render() {
    const props = this.props
    const { classes } = props
    console.log('PROPS in Show.js', props)
    if (props.resource._id !== props.match.params.id) {
      return <h1>Loading Resource...</h1>
    }

    return (
      <div>
        <MenuAppBar {...props} showBackArrow={true} title="Resource" />
        <div style={{ marginTop: '34px' }}>
          <div>
            <Paper className={classes.root} elevation={2}>
              <ResourceListItem resource={props.resource} />
              <Typography style={{ paddingTop: '8px' }} component="p">
                {props.resource.purpose}
              </Typography>
            </Paper>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/resources/${props.resource._id}/edit`}
            >
              <Button>Edit</Button>
            </Link>

            <Button color="secondary" onClick={props.toggleConfirmDelete}>
              Delete
            </Button>
          </div>
        </div>
        <Dialog
          open={props.resource.confirmDelete}
          onClose={props.toggleConfirmDelete}
        >
          <DialogTitle>{'Delete'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Are you sure you want to delete this resource?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={props.toggleConfirmDelete}
              color="primary"
              autofocus
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                props.deleteResource(props.resource._id, props.history)
              }
              color="primary"
              autoFocus
            >
              Confirm Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

/*

*/
const mapStateToProps = state => {
  return {
    resource: state.resource
  }
}

const mapActionsToProps = dispatch => {
  return {
    getResource: id => dispatch(getResource(id)),
    toggleConfirmDelete: () => dispatch({ type: CONFIRM_DELETE_RESOURCE }),
    deleteResource: (id, history) => dispatch(deleteResource(id, history))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Resource))
