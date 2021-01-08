import React from 'react'
import { render } from 'react-dom'
import { Home } from './components'

export default function SearchApp() {
    return (
        <div className="SearchApp">
            <Home name="Ravi"/>
        </div>
    )
}

render(<SearchApp />, document.getElementById('app'))