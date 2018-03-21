import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import SearchIcon from 'material-ui-icons/Search'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { TOGGLE_DRAWER } from '../constants'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  },
  lastButton: {
    marginLeft: 12,
    marginRight: -12
  }
})

const MenuAppBar = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {props.showBackArrow ? (
            <IconButton
              className={classes.firstButton}
              color="contrast"
              aria-label="Menu"
              onClick={e => props.navigateBack(props.history)}
            >
              <GoBackIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.firstButton}
              color="contrast"
              aria-label="Menu"
              onClick={props.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography className={classes.flex} variant="title" color="inherit">
            {props.title}
          </Typography>
          <Link to="/search">
            <IconButton
              className={classes.lastButton}
              color="contrast"
              aria-label="Search"
            >
              <SearchIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    drawerToggleState: state.drawer
  }
}

const mapActionsToProps = (dispatch, getState) => {
  return {
    toggleDrawer: () => dispatch({ type: TOGGLE_DRAWER }),
    navigateBack: history => {
      console.log('history', history)
      history.goBack()
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(MenuAppBar))
