import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';

const SizeGuide = () => {

    const [sizeGuide, setSizeGuide] = useState({});
    useEffect(() => {
        let bodyFormData = new FormData();
        bodyFormData.append('session_id', '3qb9bv7i5mlfs589oja05k44u1');
        bodyFormData.append('id_currency', 'INR');
        bodyFormData.append('iso_codeq', 1);
        bodyFormData.append('email', 'aa@velsof.com');
        bodyFormData.append('platform', 'web');
        bodyFormData.append('device_is_mobile', 'false');
        bodyFormData.append('product_id', '2539205');
        axiosInstance.post(`appGetSizeChart?version=1.11&SID=3qb9bv7i5mlfs589oja05k44u1&__store=default`, bodyFormData)
            .then((res) => {
                setSizeGuide(res.data);
                // console.log(res.data);
            }).catch((err) => console.log(err));
    }, []);

    let contact_no = sizeGuide.contact_no;
    let email_address = sizeGuide.email_address;
    let help_title_text = sizeGuide.help_title_text;
    let help_subtitle_text = sizeGuide.help_subtitle_text;
    let subtitle_text = sizeGuide.subtitle_text;
    let title_text = sizeGuide.title_text;
    let row_header_text = sizeGuide.row_header_text;
    let row_data = sizeGuide.row_data;
    let full_size_chart = sizeGuide.full_size_chart;
    let product_details = sizeGuide.product_details;
    return (
        <>
            <div className="size mt-30">
                <h6 className="text-black"><span>Size -</span> UK/IND</h6>
                <button onClick={() => sizeGuideFunction()} className="btn-blank text-underline">Size Guide</button>
            </div>
            <div className="newsletter fp size-guide" id="size-guide-form">
                <div className="bg"></div>
                <div className="center-box">
                    <div className="newsletter-heading">
                        <h3>SIZE GUIDE</h3>
                        <button onClick={() => sizeGuideCloseFunction()} className="btn-blank"><img src="../assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" /></button>
                    </div>
                    <div className="newsletter-body">
                        <div className="product-info">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading bg-light mt-20">
                                        <h4 className="text-black">{subtitle_text}</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-5 mt-25">
                                    <img src={product_details?.image_src} className="img-fluid mx-auto d-block" alt="" />
                                </div>
                                <div className="col-md-7 col-7 mt-25">
                                    <div className="text">
                                        <h5 className="text-black text-left">{product_details?.designer_name}</h5>
                                        <p className="text-left">{product_details?.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive mt-25">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    {
                                                        row_header_text?.map((e) => {
                                                            return (
                                                                <th key={e}>{e}</th>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    row_data?.map((e) => {
                                                        return (
                                                            <tr key={e}>
                                                                {
                                                                    e?.map((i,index) => {
                                                                        return (
                                                                            <td key={index}>{i}</td>
                                                                        )
                                                                    })
                                                                }
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 mx-auto">
                                    <button onClick={() => sizeGuideFullFunction()} className="btn-primary mt-20">VIEW FULL SIZE GUIDE</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="bt-blck"></div>
                                </div>
                                <div className="col-12">
                                    <section className="contact-section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="contact-us-section">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-6 col-6">
                                                                <div className="content-box">
                                                                    <h6 className="text-black">Whatsapp</h6>
                                                                    <img src="../assets/images/icons/Whatsapp.svg" className="d-block img-fluid mx-auto mb-3" alt="Whats App" />
                                                                    <p><Link to={`https://wa.me/+${contact_no}`} className="hidden-link">+{contact_no}</Link></p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-6">
                                                                <div className="content-box br-none">
                                                                    <h6 className="text-black">Email</h6>
                                                                    <img src="../assets/images/icons/Email.svg" className="d-block img-fluid mx-auto mb-3" alt="Whats App" />
                                                                    <p><Link to={`mailto:${email_address}`} className="hidden-link">{email_address}</Link></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-8 mx-auto">
                                    <div className="disclaimer-text">
                                        <p className="text-black">{help_subtitle_text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SIZE GUIDE ENDS */}


            {/* SIZE GUIDE STARTS */}
            <div className="newsletter fp size-guide" id="size-guide-full-form">
                <div className="bg"></div>
                <div className="center-box">
                    <div className="newsletter-heading">
                        <h3>VIEW FULL SIZE GUIDE</h3>
                        <button onClick={() => sizeGuideFullBackFunction()} className="btn-blank"><img src="../assets/images/icons/left-arrow-black.svg" className="back-btn-newsletter" alt="" /></button>
                        <button onClick={() => sizeGuideFullCloseFunction()} className="btn-blank"><img src="../assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" /></button>
                    </div>
                    <div className="newsletter-body">
                        <div className="accordion" id="sizeGuideFullMain">
                            {full_size_chart &&
                                Object.entries(full_size_chart).map((e) => {
                                    return (
                                        <div className="accordion-item" key={e[0]}>
                                            <h2 className="accordion-header" id="MenSizeGuide">
                                                <button className="accordion-button collapsed text-underline" type="button" data-bs-toggle="collapse" data-bs-target="#MenSizeGuideCollapse" aria-expanded="false" aria-controls="MenSizeGuideCollapse">
                                                    {e?.[0]}
                                                </button>
                                            </h2>
                                            <div id="MenSizeGuideCollapse" className="accordion-collapse collapse" aria-labelledby="MenSizeGuide" data-bs-parent="#sizeGuideFullMain">
                                                <div className="accordion-body">
                                                    <div className="accordion" id="Meninner">
                                                        {
                                                            Object.entries(e[1]).map((a) => {
                                                                return (
                                                                    <div className="accordion-item" key={a[0]}>
                                                                        <h2 className="accordion-header" id="topwear">
                                                                            <button className="accordion-button text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#topwearcollapse" aria-expanded="true" aria-controls="topwearcollapse">
                                                                                {a[0]}
                                                                                {/* {console.log(a[1].row_data)} */}
                                                                            </button>
                                                                        </h2>
                                                                        <div id="topwearcollapse" className="accordion-collapse collapse show" aria-labelledby="topwear" data-bs-parent="#Meninner">
                                                                            <div className="accordion-body">
                                                                                <div className="row">
                                                                                    <div className="col-md-12">
                                                                                        <div className="table-responsive mt-25">
                                                                                            <table className="table text-center">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        {
                                                                                                            a[1]?.row_header_text.map((e,index) => {
                                                                                                                return (
                                                                                                                    <th key={index}>{e}</th>
                                                                                                                )
                                                                                                            })
                                                                                                        }

                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>

                                                                                                    {
                                                                                                        a[1]?.row_data.map((b,index) => {
                                                                                                            return (
                                                                                                                <tr key={index}>
                                                                                                                    {
                                                                                                                        b?.map((c,index) => {
                                                                                                                            return (
                                                                                                                                <td key={index}>{c}</td>
                                                                                                                            )
                                                                                                                        })
                                                                                                                    }
                                                                                                                </tr>
                                                                                                            )
                                                                                                        })
                                                                                                    }
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="bt-blck"></div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="disclaimer-text">
                                    <p className="text-black">*Please note the measurements may vary according to different brand and styles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SIZE GUIDE ENDS */}
        </>


    )
}

export default SizeGuide