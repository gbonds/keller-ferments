import React from 'react'
import products from './productData'

/* Filters all products with favorite property set to true, then filters first 3 in the array (0 to 2 in the index) */
const allFavProdList = products.filter(singleProduct => singleProduct.favorite === true)
const topFavProdList = allFavProdList.slice(0, 3)

export default function Product() {
    return (
        <>
            {topFavProdList.map((singleProduct) => {
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
