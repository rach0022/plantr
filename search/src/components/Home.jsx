import React, { useState } from 'react'

// home will show the home page where the user can
// search or view their saved list
export default function Home({ name }) {
    // create a search term and setter using useState
    // along with a callback to set the value for the search bar
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchBarOnChange = ev => setSearchTerm(ev.target.value)

    // create a name element if the prop is supplied
    const nameElement = (name) ? <p className="subtitle is-4">Developed by {name}</p> : null

    return (
        <section className="hero Home is-warning">
            <div className="hero-body">
                <div className="container">
                    <p className="title">Plantr Search App</p>
                    <p className="subtitle">React controlled Django Template</p>
                    {nameElement}
                    <div className="column is-4">
                        <p className="control has-icons-left">
                            <input type="text" value={searchTerm} className="input" onChange={handleSearchBarOnChange} />
                            <span className="icon is-left"><i className="fas fa-search"></i></span>
                        </p>
                        <div className="buttons">
                            <button className="button is-info">
                                <span>Saved</span>
                                <span className="icon"><i className="fas fa-save"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
