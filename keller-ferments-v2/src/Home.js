import React from 'react'
import allProducts from './productData'
// import Product from './Product' 
import allRecipes from './recipeData'

/* Filters all products with favorite property set to true, then filters first 3 in the array (0 to 2 in the index) */
const topFavProducts = (allProducts.filter(singleProduct => singleProduct.favorite === true)).slice(0, 3)
/* Filters the last two most recent recipes (e.g. if length of array is 4, will display 2nd and 3rd objects in array.) */
const recentRecipes = (allRecipes).slice((allRecipes.length - 2), (allRecipes.length))

export default function Home() {
    return (
        <main>
            <section className="hero-section" id="homepage-hero" style={{ backgroundImage: `url(require("/img/pickle-collection_dark.jpg"))`, backgroundColor: 'gray' }}>
                <div className="content-wrapper">
                    <h2 className="hero__header">
                        Homemade ferments that are good for your gut and your tastebuds.
                    </h2>
                    <p className="hero__body">
                        We carefully produce a variety of fermented goods, ranging from
                        pickles and kimchi to kombucha and other cultures. Come find us in a
                        store!
                    </p>
                    <button className="btn--accent">See Locations</button>
                    {/* TODO add link to button */}
                </div> {/* .content-wrapper ends */}
            </section>

            <section id="product-feature-section">
                <div className="content-wrapper">
                    <h2 className="section__subheader">Products</h2>
                    <h3 className="section__header">Our Favorites</h3>
                    <div className="content-container">
                        {/* Iterates over topFavProducts list and returns Product component for each item in list. */}
                        {topFavProducts.map((singleProduct) => {
                            const { id, url, name, price, image } = singleProduct

                            {/* TODO create separate component for Recipe/Product, but HOW? see Product.js for current attempt, do I need to create a useState? */ }
                            return (
                                <div key={id} className="content-item">
                                    <a href={url} target="_blank" className="content-item__product-link">
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
                    </div>
                    <button className="btn--transparent">View More</button> {/* TODO add link to button */}
                </div>
            </section>

            <section id="reviews-section" className="section-wrapper" style={{ backgroundImage: `url(require("/img/jar-wall_dark.jpg"))`, backgroundColor: 'gray' }}>
                <div className="content-wrapper">
                    <h2 className="section__subheader">Reviews</h2>
                    <h3 className="section__header">You'll Love Us!</h3>
                    <div className="content-container">
                        {/* TODO break reviews into separate components */}
                        <div className="content-item">
                            <h4 className="content-item__header">“Delicious and fun”</h4>
                            <p className="content-item__body">
                                So glad I ordered the Kombucha Kit! It’s been so fun making my
                                own at home.<br />
                                <strong>-Felicia</strong>
                            </p>
                        </div>
                        <div className="content-item">
                            <h4 className="content-item__header">“Love all the options”</h4>
                            <p className="content-item__body">
                                My wife and I appreciated the different level of spiciness
                                available for the kimchi- this way, both of us can enjoy in our
                                own way.<br />
                                <strong>-Joseph</strong>
                            </p>
                        </div>
                        <div className="content-item">
                            <h4 className="content-item__header">“Fantastic quality”</h4>
                            <p className="content-item__body">
                                I’m really appreciating the quality of their pickles. The flavor
                                of the veg is outstanding.<br />
                                <strong>-Mark</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="recipes-section" className="section-wrapper">
                <div className="content-wrapper">
                    <h2 className="section__subheader">Recipes</h2>
                    <h3 className="section__header">Get Inspired</h3>
                    <div className="content-container">
                        {/* Iterates over recentRecipes list and returns article for each item in list. */}
                        {recentRecipes.map((singleRecipe) => {
                            const { id, url, name, image, date } = singleRecipe

                            {/* TODO create separate component for Recipe/Product, but HOW? see Product.js for current attempt, do I need to create a useState? */ }
                            return (
                                <article key={id} className="recipe-article content-item">
                                    <img
                                        className="content-item__img"
                                        src={image}
                                        alt={name}
                                    />
                                    <div className="recipe-article__content">
                                        <h4 className="content-item__header">{name}</h4>
                                        <p className="content-item__subheader">{date}</p>
                                        <p className="content-item__body">
                                            ingredients...
                                        </p>
                                        <p>
                                            <a href={url} className="content-item__recipe-link">Read More</a>→
                                </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}
