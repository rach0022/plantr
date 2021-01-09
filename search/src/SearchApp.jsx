import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Home, AppNav, PlantList } from './components'

export default function SearchApp() {
    return (
        <div className="SearchApp">
            <Router>
                <AppNav />
                <Switch>
                    <Route exact path='/search'>
                        <Home name="Ravi" />
                    </Route>
                    <Route path='/search/saved'>
                        <PlantList type="saved" />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

render(<SearchApp />, document.getElementById('app'))