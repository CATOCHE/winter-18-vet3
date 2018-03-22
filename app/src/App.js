import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/categories/show'
import Home from './pages/home'
import Resource from './pages/resources/show'
import Resources from './pages/resources'
import Categories from './pages/categories'

import NewResource from './pages/resources/new-resource'

import AddCategory from './pages/categories/addCategory'
import Search from './pages/search'

import EditResource from './pages/resources/edit'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route
              exact
              path="/resources/new"
              render={props => <NewResource {...props} />}
            />
            <Route exact path="/resources/:id" component={Resource} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/new" component={AddCategory} />
            <Route path="/categories/:id" component={Category} />
            <Route path="/search" component={Search} />
            <Route path="/resources/:id/edit" component={EditResource} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
