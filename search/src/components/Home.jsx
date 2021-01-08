import React from 'react'

export default function Home({ name }) {

    const nameElement = (name) ? <p className="subtitle is-4">Developed by {name}</p> : null

    return (
        <section className="hero Home is-warning">
            <div className="hero-body">
                <div className="container">
                    <p className="title">Plantr Search App</p>
                    <p className="subtitle">React controlled Django Template</p>
                    { nameElement }
                </div>
            </div>
        </section>
    )
}
