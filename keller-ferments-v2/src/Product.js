import React from 'react'
import products from './productData'

const favProdList = products.filter(singleProduct => singleProduct.favorite === true)

export default function Product() {
    return (
        <>
            {favProdList.map((singleProduct) => {
                const { id, url, name, price, image } = singleProduct

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
            })}
        </>
    )
}
