import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  pageMargin: { marginTop: '56px' }
})

const Search = props => {
  // props.toggleDrawer()
  const { classes } = props
  console.log('Search Function Props', props)
  return (
    <div>
      <MenuAppBar title="Search" />
      <div style={{ marginTop: '44px' }}>
        <List>
          {map(r => <ResourceListItem resource={r} />, props.resources)}
        </List>
        <Link to="/search/new">
          <Button
            className={classes.button}
            variant="fab"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Button>
        </Link>
      </div>
    </div>
  )
}
//{map(r => <ResourceListItem resource={r} />, props.resources)}
const mapStateToProps = state => {
  return {
    search: state.search,
    resources: state.resources
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Search)))
