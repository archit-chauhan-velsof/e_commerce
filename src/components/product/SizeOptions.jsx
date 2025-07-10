import React from 'react'

const SizeOptions = ({sizeOptions,setSizeOptionsDetails,product_id}) => {
    let option_id = sizeOptions?.[0].id;
    return (

        <ul className="size-button mt-10" id="main-size">
            {
                sizeOptions?.[0]?.items.map((e)=>{
                    return (
                         <li key={e.id}><button className="btn-bordered-grey" onClick={()=>{setSizeOptionsDetails({price:e.price,discount_price:e.discount_price,option_value_id:e.id,discount_percentage:e.discount_percentage,option_id:option_id,sizeName:e.value,product_id:product_id});}}>{e.value}</button></li>

                    )
                })
            }
        </ul>

    )
}

export default SizeOptions