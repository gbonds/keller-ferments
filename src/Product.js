import React from 'react'
// WORK IN PROGRESS. goal is to have this component the default format for displaying a product item. do I need to create a useState then filter?

const Product = ({ singleProduct }) => {
    return (
        <div key={id} className="content-item">
            <a href={url} className="content-item__product-link">
                <img
                    className="content-item__img"
                    src={image}
                    alt={name}
                />
                <h4 className="content-item__header">{name}</h4>
            </a>
            <p className="content-item__subheader">Starting at ${price}</p>
        </div>
    )
}

export default Product