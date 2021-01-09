import React from 'react'

export default function PlantList({ type, search = "" }) {
    if (type === "saved") {
        console.log('User wants his saved list preform fetch')
    } else { // use the search value to preform the search
        console.log("User wants to search, preform fetch to search")
    }
    return (
        <section className="PlantList section">
            <div className="container">
                <h1 className="title">Plant List</h1>
            </div>
        </section>
    )
}
