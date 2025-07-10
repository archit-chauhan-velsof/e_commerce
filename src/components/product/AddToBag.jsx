import React, { useEffect } from 'react'
import axios from 'axios';

const AddToBag = ({sizeOptionsDetails}) => {

    let addToBagHandler = (sizeOptionsDetails) => {
        let bodyFormData = new FormData();

        if (sizeOptionsDetails?.option_value_id) {

            bodyFormData.append('session_id', '3qb9bv7i5mlfs589oja05k44u1');
            bodyFormData.append('id_currency', 'INR');
            bodyFormData.append('iso_codeq', 1);
            bodyFormData.append('email', 'aa@velsof.com');
            bodyFormData.append('platform', 'web7');
            bodyFormData.append('device_is_mobile', 'false');
            bodyFormData.append('cart_products', `{"request_type":"add","voucher":"","user_type":"","email":"","coupon":"","cart_products":[{"giftcard_fields":"","product_type":"configurable","id_product_attribute":[{"qty":0,"value":"${sizeOptionsDetails.option_value_id}","id":"${sizeOptionsDetails.option_id}","required":"1","name":"${sizeOptionsDetails.sizeName}","quantity":1}],"custom_options":[],"quantity":1,"product_id":"${sizeOptionsDetails.product_id}","minimal_quantity":0}],"customization_details":[],"session_id":"3qb9bv7i5mlfs589oja05k44u1"}`);
            axios.post(`https://staging.darveys.com/index.php/mobileappbuilder/apicall/appAddToCart?version=1.11&SID=v96m3ioclkkva3m1ulfujk0221&__store=default`, bodyFormData)
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => console.log(err));
        }
        else{
            alert('select the size');
        }
    }

    return (
        <div className="add-to-cart-btn mt-20">
            <button className="btn-primary" onClick={()=>addToBagHandler(sizeOptionsDetails)}>ADD TO BAG</button>
            <button className="btn-blank"><img src="../public/assets/images/icons/wishlist.svg" className="img-fluid mx-auto d-block" /></button>
        </div>
    )
}

export default AddToBag