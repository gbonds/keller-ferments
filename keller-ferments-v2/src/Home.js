import React from 'react'

export default function Home() {
    return (
        <main>
            <section className="hero-section" id="homepage-hero">
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
                        {/* TODO break these product items into components */}
                        <div className="content-item">
                            <a href="" className="content-item__product-link">
                                <img
                                    className="content-item__img"
                                    src="./img/pickles-thumbnail_800px.jpg"
                                    alt="Jar of pickles"
                                />
                                <h4 className="content-item__header">Classic Pickles</h4>
                            </a>
                            <p className="content-item__subheader">Starting at $8</p>
                        </div>
                        <div className="content-item">
                            <a href="" className="content-item__product-link">
                                <img
                                    className="content-item__img"
                                    src="./img/kombucha-thumbnail_800.jpg"
                                    alt="Jar of kombucha brewing"
                                />
                                <h4 className="content-item__header">Kombucha Starter Kit</h4>
                            </a>
                            <p className="content-item__subheader">Starting at $35</p>
                        </div>
                        <div className="content-item">
                            <a href="" className="content-item__product-link">
                                <img
                                    className="content-item__img"
                                    src="./img/kimchi-thumbnail_800.jpg"
                                    alt="Bowl of kimchi"
                                />
                                <h4 className="content-item__header">Yo' Mama's Kimchi</h4>
                            </a>
                            <p className="content-item__subheader">Starting at $12</p>
                        </div>
                    </div>
                    <button className="btn--transparent">View More</button> {/* TODO add link to button */}
                </div>
            </section>

            <section id="reviews-section" className="section-wrapper">
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
                        {/* TODO break recipe items into components */}
                        <article className="recipe-article content-item">
                            <img
                                className="content-item__img"
                                src="img/kimchi-pancake_183px.jpeg"
                                alt="kimchi pancake"
                            />
                            <div className="recipe-article__content">
                                <h4 className="content-item__header">Kimchi Pancake</h4>
                                <p className="content-item__subheader">July 12, 2020</p>
                                <p className="content-item__body">
                                    Ingredients ½ cup kimchi, ¾ cup rice flour, 3 Tbsp neutral
                                    oil…
                                </p>
                                <p>
                                    <a href="#" className="content-item__recipe-link">Read More</a>→
                                </p>
                            </div>
                        </article>
                        <article className="recipe-article content-item">
                            <img
                                className="content-item__img"
                                src="img/snackboard_183px.jpeg"
                                alt="snackboard"
                            />
                            <div className="recipe-article__content">
                                <h4 className="content-item__header">Party Snack Board</h4>
                                <p className="content-item__subheader">March 25, 2020</p>
                                <p className="content-item__body">
                                    Ingredients Pickles, handful roasted nuts, gouda cheese…
                                </p>
                                <p>
                                    <a href="#" className="content-item__recipe-link">Read More</a>→
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}
