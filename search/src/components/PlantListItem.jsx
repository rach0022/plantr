import React from 'react'

// Display a plant in a bulma card
// data is from trefle.io
export default function PlantListItem({
    id,
    common_name,
    scientific_name,
    family,
    family_common_name,
    image_url
}) {
    // check if we have an image and add it to the card as a background
    const imageBackground = (imageURL.trim() !== "")
        ? <img src={imageURL} alt={imageAlt} className="card-image" />
        : null
    const selector = (imageBackground) ? 'has-image' : null
    return (
        <div className={`card PlantListItem ${selector}`} key={id}>
            {imageBackground}
            <div className="card-content">
                <div className="title">{common_name}</div>
                <div className="subtitle">{scientific_name}</div>
                <div className="subtitle is-5" title={family_common_name}>{family}</div>
            </div>
        </div>
    )
}
