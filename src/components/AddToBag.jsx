import React from 'react'

const AddToBag = () => {
    return (
        <div className="add-to-cart-btn mt-20">
            <button className="btn-primary">ADD TO BAG</button>
            <button className="btn-blank"><img src="./src/public/assets/images/icons/wishlist.svg" className="img-fluid mx-auto d-block" /></button>
        </div>
    )
}

export default AddToBag