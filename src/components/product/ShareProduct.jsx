import React from 'react'

const ShareProduct = () => {
    return (
        <div className="share mt-30">
            <ul>
                <li><p className="text-black">Share:</p></li>
                <li><a href=""><img src="../public/assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" /></a></li>
                <li><a href=""><img src="../public/assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" /></a></li>
                <li><a href=""><img src="../public/assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" /></a></li>
                <li><a href=""><img src="../public/assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" /></a></li>
            </ul>
        </div>
    )
}

export default ShareProduct