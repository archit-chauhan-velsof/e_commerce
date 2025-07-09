import React from 'react'

const ProductMain = () => {
    return (
        <section className="products-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="elevate-zoom">
                            <img id="img_01" src="./src/public/assets/images/product_image.png" data-zoom-image=".src/public/assets/images/product_image.png" className="d-dsk" />
                            <img src="./src/public/public/assets/images/product_image.png" className="d-mbl" data-zoom-image="./src/public/public/assets/images/product_image.png" />
                            <div id="gal1" className="d-dsk">
                                <a href="#" data-image="./src/public/assets/images/product_image_small.jpg" data-zoom-image="./src/public/assets/images/product_image.png">
                                    <img id="img_01" src="./src/public/assets/images/search-img-1.png" />
                                </a>
                                <a href="#" data-image="./src/public/assets/images/product_image_small.jpg" data-zoom-image="./src/public/assets/images/product_image.png">
                                    <img id="img_01" src="./src/public/assets/images/search-img-1.png" />
                                </a>
                                <a href="#" data-image="./src/public/assets/images/product_image_small.jpg" data-zoom-image="./src/public/assets/images/product_image.png">
                                    <img id="img_01" src="./src/public/assets/images/search-img-1.png" />
                                </a>
                            </div>
                        </div>
                        <div className="authentication-text mt-40 d-dsk">
                            <p className="text-black">Authenticated by:</p>
                            <img src="./src/public/assets/images/authenticated-img.png" alt="" className="d-block img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-desc d-dsk">
                            <h3>Versache Collection</h3>
                            <p className="text-black">Orange graphic print polo</p>
                            <div className="price mt-30">
                                <p><del><i className="fas fa-rupee-sign"></i> 26,500</del>&nbsp;&nbsp; <span className="text-black"><i className="fas fa-rupee-sign"></i> 15,950</span> &nbsp; <span className="text-error">(40% off)</span></p>
                                <span className="text-grey">Incl. Duties & GST, EMI starts @ 887/month</span>
                            </div>
                            <div className="size mt-30">
                                <h6 className="text-black"><span>Size -</span> UK/IND</h6>
                                <button onClick={() => sizeGuideFunction()} className="btn-blank text-underline">Size Guide</button>
                            </div>
                            <ul className="size-button mt-10" id="main-size">
                                <li><button className="btn-bordered-grey">S</button></li>
                                <li><button className="btn-bordered-grey">M</button></li>
                                <li><button className="btn-bordered-grey">L</button></li>
                            </ul>
                            <div className="add-to-cart-btn mt-20">
                                <button className="btn-primary">ADD TO BAG</button>
                                <button className="btn-blank"><img src="./src/public/assets/images/icons/wishlist.svg" className="img-fluid mx-auto d-block" /></button>
                            </div>
                            <div className="accordion mt-30" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <b>Description</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Amp up your wardrobe with this orange classic fit mesh polo from Ralph Lauren crafted in cotton featuring short sleeves, spread collar and button placket.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Delivery Timeline</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Authencity Guarantee</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>Style Code & Color</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="style-box">
                                                <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                                                <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>5% Cashback</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="style-box">
                                                <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                                                <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="share mt-30">
                                <ul>
                                    <li><p className="text-black">Share:</p></li>
                                    <li><a href=""><img src="./src/public/assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" /></a></li>
                                    <li><a href=""><img src="./src/public/assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" /></a></li>
                                    <li><a href=""><img src="./src/public/assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" /></a></li>
                                    <li><a href=""><img src="./src/public/assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <section className="product-name bg-mobile-light mt-sm-20 text-center d-mbl">
                            <div className="container-fluid">
                                <div className="row">
                                    <h3 className="text-black">Ralph Lauren</h3>
                                    <p className="desc-text">Aqua classic fit mesh polo</p>
                                    <p className="text">
                                        <i className="fas fa-rupee-sign"></i> <del>14,500</del>&nbsp;
                                        <span className="text-black"><i className="fas fa-rupee-sign"></i> 8,950</span>
                                        <span className="text-error">(83%)</span>
                                    </p>
                                    <span className="text-black">Incl. GST & Duties, EMI starts @ <i className="fas fa-rupee-sign"></i> 498/month</span>
                                    <div className="share-button">
                                        <img src="./src/public/assets/images/icons/Share-Icon.png" alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-12">
                        {/* PRODUCTS-MAIN STARTS */}
                        <section className="products-main mt-25 d-mbl">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="product-desc">
                                            <div id="app" className="d-mbl">
                                                <div className="test" id="size_prod">
                                                    Select Size
                                                </div>
                                            </div>
                                            <div className="accordion mt-20" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <b>Description</b>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Amp up your wardrobe with this orange classic fit mesh polo from Ralph Lauren crafted in cotton featuring short sleeves, spread collar and button placket.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <b>Delivery Timeline</b>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <b>Authencity Guarantee</b>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <b>Style Code & Color</b>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div className="style-box">
                                                                <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                                                                <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            <b>5% Cashback</b>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div className="style-box">
                                                                <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                                                                <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* PRODUCTS-MAIN ENDS */}

                        <div className="clearfix"></div>

                        {/* AUTHENTICATED BY STARTS */}
                        <section className="authenticated-by spacer d-mbl">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="text-black text-center">Authenticated By:</h5>
                                        <img src="./src/public/assets/images/authenticated-img.png" className="img-fluid mx-auto d-block mt-25" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* AUTHENTICATED BY ENDS */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductMain