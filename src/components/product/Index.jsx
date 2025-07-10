import React, { useEffect, useState ,lazy} from 'react'
import axios from 'axios'
import Breadcrumbs from './Breadcrumbs'
import Footer from '../footer/Index'
import Header from '../header/Index'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'
import SizeGuide from './SizeGuide'
// import SizeOptions from './SizeOptions'
import AddToBag from './AddToBag'
import Accordions from './Accordions'
import ShareProduct from './ShareProduct'

const LazySizeOptions = lazy(() => import('./SizeOptions'));

const Product = () => {

	const [productData, setProductData] = useState({});
	const [loading, setLoading] = useState(false);
	const [sizeOptionsDetails, setSizeOptionsDetails] = useState({});

	useEffect(() => {
		setLoading(true);
		let bodyFormData = new FormData();
		bodyFormData.append('session_id', '3qb9bv7i5mlfs589oja05k44u1');
		bodyFormData.append('id_currency', 'INR');
		bodyFormData.append('iso_codeq', 1);
		bodyFormData.append('platform', 'web');
		bodyFormData.append('device_is_mobile', 'false');
		bodyFormData.append('product_id', '2539205');
		bodyFormData.append('product_url', 'green-embroidered-logo-polo-2539205');
		axios.post(`https://staging.darveys.com/index.php/mobileappbuilder/apicall/appGetProductDetails?version=1.11&SID=3qb9bv7i5mlfs589oja05k44u1&__store=default`, bodyFormData)
			.then((res) => {
				setProductData(res.data.product);
				setSizeOptionsDetails({
					price: res.data.product.price,
					discount_price: res.data.product.discount_price,
					option_value_id: null,
					discount_percentage: res.data.product.discount_percentage,
					option_id: null,
					sizeName: null,
					product_id: productData.id_product
				})
				// console.log(res.data.product);
			}).catch((err) => console.log(err)).finally(() => setLoading(false));
	}, []);

	let product_id = productData.id_product;
	let breadcrumbData = productData.category_name;
	let description = productData.description;
	let designer = productData.designer_name;
	let discount_percentage = productData.discount_percentage;
	let discount_price = productData.discount_price;
	let is_size_guide_available = productData.is_size_guide_available;
	let product_name = productData.name;
	let images = productData.images;
	// options
	let sizeOptions = productData.options;
	// console.log(sizeOptions);
	let price = productData.price;
	let accordionData = productData.product_additional_info;
	let emi_details = productData.product_info;
	// console.log("info",emi_details);


	if (loading) {
		return (
			<div>Loading........</div>
		)
	}
	return (
		<div>



			{/* HEADER STARTS */}
			<Header />
			{/* HEADER ENDS */}

			<div className="clearfix"></div>

			<Breadcrumbs breadcrumbData={breadcrumbData} />

			<div className="clearfix"></div>

			<section className="products-main">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8">
							{/* images */}
							<ProductImages images={images} />
							<div className="authentication-text mt-40 d-dsk">
								<p className="text-black">Authenticated by:</p>
								<img src="../public/assets/images/authenticated-img.png" alt="" className="d-block img-fluid" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="product-desc d-dsk">
								{/* ProductDetails */}
								<ProductDetails designer={designer} productName={product_name} price={sizeOptionsDetails.price} discountPercentage={sizeOptionsDetails.discount_percentage} emiDetails={emi_details} discountPrice={sizeOptionsDetails.discount_price} />
								{is_size_guide_available ? <SizeGuide /> : ""}
								<LazySizeOptions sizeOptions={sizeOptions} setSizeOptionsDetails={setSizeOptionsDetails} product_id={product_id} />
								<AddToBag sizeOptionsDetails={sizeOptionsDetails} />
								<Accordions description={description} otherDetails={accordionData} />
								<ShareProduct />
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
											<img src="../public/assets/images/icons/Share-Icon.png" alt="" className="img-fluid mx-auto d-block" />
										</div>
									</div>
								</div>
							</section>
						</div>

					</div>
				</div>
			</section>

			<div className="clearfix"></div>

			{/* FOOTER-STARTS */}
			<Footer />
			{/* FOOTER ENDS */}

			<div className="clearfix"></div>

			<div className="bottom-buttton-prod d-mbl">
				<button className="btn-primary btn-fw">ADD TO BAG</button>
			</div>








		</div>
	)
}

export default Product