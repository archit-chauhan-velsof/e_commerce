import React from 'react'

const ProductImages = () => {
    return (
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
    )
}

export default ProductImages