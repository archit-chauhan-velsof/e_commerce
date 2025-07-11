import React from 'react'
import { Link } from 'react-router-dom'

const ShareProduct = () => {
    return (
        <div className="share mt-30">
            <ul>
                <li><p className="text-black">Share:</p></li>
                <li><Link to="#"><img src="../assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" /></Link></li>
                <li><Link to="#"><img src="../assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" /></Link></li>
                <li><Link to="#"><img src="../assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" /></Link></li>
                <li><Link to="#"><img src="../assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" /></Link></li>
            </ul>
        </div>
    )
}

export default ShareProduct