import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Breadcrumbs from './Breadcrumbs'
import ProductMain from './ProductMain'
import Footer from './footer/Index'
import Header from './header/Index'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'
import SizeGuide from './SizeGuide'
import SizeOptions from './SizeOptions'
import AddToBag from './AddToBag'
import Accordions from './Accordions'
import ShareProduct from './ShareProduct'


const Product = () => {

	const [productData,setProductData] = useState({});
	const [loading,setLoading] = useState(false);

	useEffect(()=>{
		setLoading(true);
		let bodyFormData = new FormData();
		bodyFormData.append('session_id','3qb9bv7i5mlfs589oja05k44u1');
		bodyFormData.append('id_currency','INR');
		bodyFormData.append('iso_codeq',1);
		bodyFormData.append('platform','web');
		bodyFormData.append('device_is_mobile','false');
		bodyFormData.append('product_id','2539205');
		bodyFormData.append('product_url','green-embroidered-logo-polo-2539205');
		axios.post(`https://staging.darveys.com/index.php/mobileappbuilder/apicall/appGetProductDetails?version=1.11&SID=3qb9bv7i5mlfs589oja05k44u1&__store=default`,bodyFormData)
		.then((res)=>{
			setProductData(res.data.product);
			console.log(res.data.product);
			
		}).catch((err)=>console.log(err)).finally(()=>setLoading(false));
	},[]);

	let breadcrumbData = productData.category_name;
	let description = productData.description;
	let designer = productData.designer_name;
	let discount_percentage = productData.discount_percentage;
	let discount_price = productData.discount_price;
	let is_size_guide_available =  productData.is_size_guide_available;
	let product_name = productData.name;
	// options
	let price = productData.price;
	let accordionData = productData.product_additional_info;
	let emi_details = productData.product_info;
	console.log("info",emi_details);


	if(loading){
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

			<Breadcrumbs breadcrumbData={breadcrumbData}/>

			<div className="clearfix"></div>

			<section className="products-main">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8">
							{/* images */}
							<ProductImages/>
							<div className="authentication-text mt-40 d-dsk">
								<p className="text-black">Authenticated by:</p>
								<img src="./src/public/assets/images/authenticated-img.png" alt="" className="d-block img-fluid" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="product-desc d-dsk">
								{/* ProductDetails */}
								<ProductDetails designer={designer} productName={product_name} price={price} discountPercentage={discount_percentage} emiDetails = {emi_details} discountPrice={discount_price}/>
								{is_size_guide_available ? <SizeGuide/> : ""}
								<SizeOptions/>
								<AddToBag/>
								<Accordions description={description} otherDetails = {accordionData}/>
								<ShareProduct/>
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
											<img src="./src/public/assets/images/icons/Share-Icon.png" alt="" className="img-fluid mx-auto d-block" />
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className="col-12">
							{/* PRODUCTS-MAIN STARTS */}
							<section className="products-main mt-25 d-mbl">
								<div className="container-fluid">
									<div className="row">
										<div className="col-lg-4">
											<div className="product-desc">
												<div id="app" className="d-mbl">
													<div className="test" id="size_prod">
														Select Size
													</div>
												</div>
												<div className="accordion mt-20" id="accordionExample">
													<div className="accordion-item">
														<h2 className="accordion-header" id="headingOne">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																<b>Description</b>
															</button>
														</h2>
														<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
															<div className="accordion-body">
																<p>Amp up your wardrobe with this orange classic fit mesh polo from Ralph Lauren crafted in cotton featuring short sleeves, spread collar and button placket.</p>
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h2 className="accordion-header" id="headingTwo">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																<b>Delivery Timeline</b>
															</button>
														</h2>
														<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
															<div className="accordion-body">
																<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h2 className="accordion-header" id="headingThree">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																<b>Authencity Guarantee</b>
															</button>
														</h2>
														<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
															<div className="accordion-body">
																<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h2 className="accordion-header" id="headingFour">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
																<b>Style Code & Color</b>
															</button>
														</h2>
														<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
															<div className="accordion-body">
																<div className="style-box">
																	<p>Style Code: &nbsp;&nbsp;106-lot4932</p>
																	<p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
																</div>
															</div>
														</div>
													</div>
													<div className="accordion-item">
														<h2 className="accordion-header" id="headingFour">
															<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
																<b>5% Cashback</b>
															</button>
														</h2>
														<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
															<div className="accordion-body">
																<div className="style-box">
																	<p>Style Code: &nbsp;&nbsp;106-lot4932</p>
																	<p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* PRODUCTS-MAIN ENDS */}

							<div className="clearfix"></div>

							{/* AUTHENTICATED BY STARTS */}
							<section className="authenticated-by spacer d-mbl">
								<div className="container-fluid">
									<div className="row">
										<div className="col-12">
											<h5 className="text-black text-center">Authenticated By:</h5>
											<img src="./src/public/assets/images/authenticated-img.png" className="img-fluid mx-auto d-block mt-25" alt="" />
										</div>
									</div>
								</div>
							</section>
							{/* AUTHENTICATED BY ENDS */}
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


			{/* SIZE GUIDE STARTS */}
			<div className="newsletter fp size-guide" id="size-guide-form">
				<div className="bg"></div>
				<div className="center-box">
					<div className="newsletter-heading">
						<h3>SIZE GUIDE</h3>
						<button onClick={() => sizeGuideCloseFunction()} className="btn-blank"><img src="./src/public/assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" /></button>
					</div>
					<div className="newsletter-body">
						<div className="product-info">
							<div className="row">
								<div className="col-12">
									<div className="heading bg-light mt-20">
										<h4 className="text-black">Men's Clothing Top Wear</h4>
									</div>
								</div>
								<div className="col-md-5 col-5 mt-25">
									<img src="./src/public/assets/images/product_image.png" className="img-fluid mx-auto d-block" alt="" />
								</div>
								<div className="col-md-7 col-7 mt-25">
									<div className="text">
										<h5 className="text-black text-left">Versache Collection</h5>
										<p className="text-left">Orange graphic print polo</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="table-responsive mt-25">
										<table className="table text-center">
											<thead>
												<tr>
													<th>Standard</th>
													<th>IT Size</th>
													<th>Collar Size (IN)</th>
													<th>UK/US/IN</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>XXS</td>
													<td>42</td>
													<td>12-12.5</td>
													<td>32,33</td>
												</tr>
												<tr>
													<td>XS</td>
													<td>44</td>
													<td>13-13.5</td>
													<td>34,35</td>
												</tr>
												<tr>
													<td>S</td>
													<td>46</td>
													<td>14-14.5</td>
													<td>36,37</td>
												</tr>
												<tr>
													<td>M</td>
													<td>48</td>
													<td>15-15.5</td>
													<td>38,39</td>
												</tr>
												<tr>
													<td>L</td>
													<td>50</td>
													<td>16-16.5</td>
													<td>40,41</td>
												</tr>
												<tr>
													<td>XL</td>
													<td>52</td>
													<td>17-17.5</td>
													<td>42,43</td>
												</tr>
												<tr>
													<td>XXL</td>
													<td>54</td>
													<td>18-18.5</td>
													<td>44,45</td>
												</tr>
												<tr>
													<td>XXXL</td>
													<td>56</td>
													<td>19-19.5</td>
													<td>46,47</td>
												</tr>
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
																	<img src="./src/public/assets/images/icons/Whatsapp.svg" className="d-block img-fluid mx-auto mb-3" alt="Whats App" />
																	<p><a href="https://wa.me/+918810420296" className="hidden-link">+91 88104 20296</a></p>
																</div>
															</div>
															<div className="col-lg-4 col-md-6 col-6">
																<div className="content-box br-none">
																	<h6 className="text-black">Email</h6>
																	<img src="./src/public/assets/images/icons/Email.svg" className="d-block img-fluid mx-auto mb-3" alt="Whats App" />
																	<p><a href="mailto:assistance@darveys.com" className="hidden-link">assistance@darveys.com</a></p>
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
										<p className="text-black">*Please note the measurements may vary according to different brand and styles.</p>
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
						<button onClick={() => sizeGuideFullBackFunction()} className="btn-blank"><img src="./src/public/assets/images/icons/left-arrow-black.svg" className="back-btn-newsletter" alt="" /></button>
						<button onClick={() => sizeGuideFullCloseFunction()} className="btn-blank"><img src="./src/public/assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" /></button>
					</div>
					<div className="newsletter-body">
						<div className="accordion" id="sizeGuideFullMain">
							<div className="accordion-item">
								<h2 className="accordion-header" id="MenSizeGuide">
									<button className="accordion-button collapsed text-underline" type="button" data-bs-toggle="collapse" data-bs-target="#MenSizeGuideCollapse" aria-expanded="false" aria-controls="MenSizeGuideCollapse">
										Men
									</button>
								</h2>
								<div id="MenSizeGuideCollapse" className="accordion-collapse collapse" aria-labelledby="MenSizeGuide" data-bs-parent="#sizeGuideFullMain">
									<div className="accordion-body">
										<div className="accordion" id="Meninner">
											<div className="accordion-item">
												<h2 className="accordion-header" id="topwear">
													<button className="accordion-button text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#topwearcollapse" aria-expanded="true" aria-controls="topwearcollapse">
														Topwear
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
																				<th>Standard</th>
																				<th>IT Size</th>
																				<th>Collar Size (IN)</th>
																				<th>UK/US/IN</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>XXS</td>
																				<td>42</td>
																				<td>12-12.5</td>
																				<td>32,33</td>
																			</tr>
																			<tr>
																				<td>XS</td>
																				<td>44</td>
																				<td>13-13.5</td>
																				<td>34,35</td>
																			</tr>
																			<tr>
																				<td>S</td>
																				<td>46</td>
																				<td>14-14.5</td>
																				<td>36,37</td>
																			</tr>
																			<tr>
																				<td>M</td>
																				<td>48</td>
																				<td>15-15.5</td>
																				<td>38,39</td>
																			</tr>
																			<tr>
																				<td>L</td>
																				<td>50</td>
																				<td>16-16.5</td>
																				<td>40,41</td>
																			</tr>
																			<tr>
																				<td>XL</td>
																				<td>52</td>
																				<td>17-17.5</td>
																				<td>42,43</td>
																			</tr>
																			<tr>
																				<td>XXL</td>
																				<td>54</td>
																				<td>18-18.5</td>
																				<td>44,45</td>
																			</tr>
																			<tr>
																				<td>XXXL</td>
																				<td>56</td>
																				<td>19-19.5</td>
																				<td>46,47</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="bottomwear">
													<button className="accordion-button text-grey collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bottomwearcollapse" aria-expanded="false" aria-controls="bottomwearcollapse">
														Bottomwear
													</button>
												</h2>
												<div id="bottomwearcollapse" className="accordion-collapse collapse" aria-labelledby="bottomwear" data-bs-parent="#Meninner">
													<div className="accordion-body">
														<div className="row">
															<div className="col-md-12">
																<div className="table-responsive mt-25">
																	<table className="table text-center">
																		<thead>
																			<tr>
																				<th>Standard</th>
																				<th>IT Size</th>
																				<th>Collar Size (IN)</th>
																				<th>UK/US/IN</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>XXS</td>
																				<td>42</td>
																				<td>12-12.5</td>
																				<td>32,33</td>
																			</tr>
																			<tr>
																				<td>XS</td>
																				<td>44</td>
																				<td>13-13.5</td>
																				<td>34,35</td>
																			</tr>
																			<tr>
																				<td>S</td>
																				<td>46</td>
																				<td>14-14.5</td>
																				<td>36,37</td>
																			</tr>
																			<tr>
																				<td>M</td>
																				<td>48</td>
																				<td>15-15.5</td>
																				<td>38,39</td>
																			</tr>
																			<tr>
																				<td>L</td>
																				<td>50</td>
																				<td>16-16.5</td>
																				<td>40,41</td>
																			</tr>
																			<tr>
																				<td>XL</td>
																				<td>52</td>
																				<td>17-17.5</td>
																				<td>42,43</td>
																			</tr>
																			<tr>
																				<td>XXL</td>
																				<td>54</td>
																				<td>18-18.5</td>
																				<td>44,45</td>
																			</tr>
																			<tr>
																				<td>XXXL</td>
																				<td>56</td>
																				<td>19-19.5</td>
																				<td>46,47</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header" id="activewear">
													<button className="accordion-button collapsed text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#activewearcollapse" aria-expanded="false" aria-controls="activewearcollapse">
														Activewear
													</button>
												</h2>
												<div id="activewearcollapse" className="accordion-collapse collapse" aria-labelledby="activewear" data-bs-parent="#Meninner">
													<div className="accordion-body">
														<div className="row">
															<div className="col-md-12">
																<div className="table-responsive mt-25">
																	<table className="table text-center">
																		<thead>
																			<tr>
																				<th>Standard</th>
																				<th>IT Size</th>
																				<th>Collar Size (IN)</th>
																				<th>UK/US/IN</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>XXS</td>
																				<td>42</td>
																				<td>12-12.5</td>
																				<td>32,33</td>
																			</tr>
																			<tr>
																				<td>XS</td>
																				<td>44</td>
																				<td>13-13.5</td>
																				<td>34,35</td>
																			</tr>
																			<tr>
																				<td>S</td>
																				<td>46</td>
																				<td>14-14.5</td>
																				<td>36,37</td>
																			</tr>
																			<tr>
																				<td>M</td>
																				<td>48</td>
																				<td>15-15.5</td>
																				<td>38,39</td>
																			</tr>
																			<tr>
																				<td>L</td>
																				<td>50</td>
																				<td>16-16.5</td>
																				<td>40,41</td>
																			</tr>
																			<tr>
																				<td>XL</td>
																				<td>52</td>
																				<td>17-17.5</td>
																				<td>42,43</td>
																			</tr>
																			<tr>
																				<td>XXL</td>
																				<td>54</td>
																				<td>18-18.5</td>
																				<td>44,45</td>
																			</tr>
																			<tr>
																				<td>XXXL</td>
																				<td>56</td>
																				<td>19-19.5</td>
																				<td>46,47</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="WomenSizeGuide">
									<button className="accordion-button collapsed text-underline" type="button" data-bs-toggle="collapse" data-bs-target="#WomenSizeGuideCollapse" aria-expanded="false" aria-controls="WomenSizeGuideCollapse">
										Women
									</button>
								</h2>
								<div id="WomenSizeGuideCollapse" className="accordion-collapse collapse" aria-labelledby="WomenSizeGuide" data-bs-parent="#sizeGuideFullMain">
									<div className="accordion-body">
										<p className="text-black">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Magni totam, atque nisi alias illum velit itaque, repudiandae possimus cupiditate voluptas veniam modi, accusamus at eveniet saepe esse quos libero error nobis quis! Aliquid quibusdam similique qui tempora eum beatae enim at, numquam veritatis ducimus cupiditate dolor earum tempore placeat inventore modi atque. Laboriosam id iste modi sed, dolorem optio obcaecati eveniet aliquid incidunt nostrum eum quidem perspiciatis earum animi nisi ducimus aliquam et assumenda dolorum sapiente voluptas, cumque, excepturi ex laborum aut! Adipisci optio laudantium ex quibusdam totam quam cumque, soluta magni id doloremque libero unde debitis distinctio sint repudiandae sed. Amet dicta quas delectus ratione enim deleniti officiis, tempore impedit tempora nisi nesciunt perspiciatis ipsum fugiat commodi expedita dolores!</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="KidsSizeGuide">
									<button className="accordion-button collapsed text-underline" type="button" data-bs-toggle="collapse" data-bs-target="#KidsSizeGuideCollapse" aria-expanded="false" aria-controls="KidsSizeGuideCollapse">
										Kids
									</button>
								</h2>
								<div id="KidsSizeGuideCollapse" className="accordion-collapse collapse" aria-labelledby="KidsSizeGuide" data-bs-parent="#sizeGuideFullMain">
									<div className="accordion-body">
										<p className="text-black">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Magni totam, atque nisi alias illum velit itaque, repudiandae possimus cupiditate voluptas veniam modi, accusamus at eveniet saepe esse quos libero error nobis quis! Aliquid quibusdam similique qui tempora eum beatae enim at, numquam veritatis ducimus cupiditate dolor earum tempore placeat inventore modi atque. Laboriosam id iste modi sed, dolorem optio obcaecati eveniet aliquid incidunt nostrum eum quidem perspiciatis earum animi nisi ducimus aliquam et assumenda dolorum sapiente voluptas, cumque, excepturi ex laborum aut! Adipisci optio laudantium ex quibusdam totam quam cumque, soluta magni id doloremque libero unde debitis distinctio sint repudiandae sed. Amet dicta quas delectus ratione enim deleniti officiis, tempore impedit tempora nisi nesciunt perspiciatis ipsum fugiat commodi expedita dolores!</p>
									</div>
								</div>
							</div>
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





		</div>
	)
}

export default Product