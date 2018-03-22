import React from 'react'
import { connect } from 'react-redux'
import {
  map,
  filter,
  compose,
  contains,
  toLower,
  split,
  isNil,
  isEmpty,
  not
} from 'ramda'
import ResourceListItem from '../../components/ResourceListItem'
import List from 'material-ui/List'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import searchStringBuilder from '../../lib/build-search-string'
import searchDocs from '../../lib/search-docs'
import { CHANGE_SEARCH_CRITERIA } from '../../constants'

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

const srcBuilder = searchStringBuilder([
  'name',
  'purpose',
  'formalName',
  'shortDesc'
])

const Search = props => {
  const searchResults = not(
    isNil(props.searchCriteria) || isEmpty(props.searchCriteria)
  )
    ? compose(
        map(r => <ResourceListItem resource={r} />),
        searchDocs(srcBuilder, props.searchCriteria)
      )(props.resources)
    : null

  // props.toggleDrawer()
  const { classes } = props
  console.log('Search Function Props', props)
  return (
    <div>
      <MenuAppBar title="Search" />

      <div style={{ marginTop: '56px' }}>
        <form>
          <TextField
            id="search"
            label="Search Resources"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={props.onSearchChange}
            value={props.searchCriteria}
          />
        </form>
      </div>

      <div style={{ marginTop: '44px' }}>
        {searchResults}
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
    resources: state.resources,
    searchCriteria: state.searchCriteria
  }
}

const mapActionsToProps = dispatch => {
  return {
    onSearchChange: e =>
      dispatch({ type: CHANGE_SEARCH_CRITERIA, payload: e.target.value })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default withDrawer(connector(withStyles(styles)(Search)))
