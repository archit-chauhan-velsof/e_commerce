import React from 'react'

const ProductDetails = (props) => {
    return (
        <>
            <h3>{props.designer}</h3>
            <p className="text-black">{props.productName}</p>
            <div className="price mt-30">
                <p><del><i className="fas fa-rupee-sign"></i> {props.price}</del>&nbsp;&nbsp; <span className="text-black"><i className="fas fa-rupee-sign"></i> {props.discountPrice}</span> &nbsp; <span className="text-error">({props.discountPercentage}% off)</span></p>
                <span className="text-grey">{props.emi_details}</span>
            </div>
        </>
    )
}

export default ProductDetails