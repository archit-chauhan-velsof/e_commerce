import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductImages = ({ images }) => {
    const [mainImage,setMainImage] = useState(images?.[0].src);
    return (
        <div className="elevate-zoom">
            <img id="img_01" src={mainImage} data-zoom-image={mainImage} className="d-dsk w-50" />
            <div id="gal1" className="d-dsk">
                {
                    images?.map((i) => {
                        return (
                            <Link to="#" data-image={i.src} data-zoom-image={i.src} key={i.src}>
                                <img id="img_01" src={i.src} className='w-25 h-25' onClick={()=> setMainImage(i.src)}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductImages