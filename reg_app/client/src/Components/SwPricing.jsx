import React from 'react'

export default function SwPricing() {
    return (
        <div>
            <div className="super_container mt-5">

                <div className="single_product">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8 order-lg-2 order-1">
                                <div className="image_selected" style={{background:"#8E7D7D", padding:"20px"}}><img src="img/merge-pricing.png" class="img-fluid" alt="augrade"/></div>
                                <div className="row" style={{padding: "0px 100px"}}>
                                    <div className="col-lg-12">
                                        <div className="row pt-2 pb-2" style={{borderRadius:"40px", background:"#F7F7F7", marginTop:"-24px !important"}}>
                                            <div className="col-lg-6 text-center" style={{borderRight:"1px solid rgba(0, 0, 0, 0.25)"}}>
                                                <span className="pfs16-black">$1249 Total Price</span>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <span className="pfs16-black">$1049 After Potential discount</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-lg-2">
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="hfs40roboto mb-4">Augrade Merge</div>

                                        <div> <span className="product_price">$1249</span> &nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-black shop-button">Early bird price</button></div>
                                        <p className="pt-4 mb-4 pfs20roboto">The Lightest yet most powerful Spatial Computer</p>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <p className="pfs24gothic-black">Number of devices</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product_quantity"> <input id="quantity_input" type="text" pattern="[0-9]*" value="1" />
                                                    <div className="quantity_buttons">
                                                        <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up"></i></div>
                                                        <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form">
                                            <form className="sw-pricing mt-3 mb-3">
                                                <div className="form-group row" bis_skin_checked="1">
                                                    <label for="inputName" className="col-sm-4 col-form-label">Name</label>
                                                    <div className="col-sm-8" bis_skin_checked="1">
                                                        <input type="text" className="form-control" id="inputName" placeholder="Please enter your full name" />
                                                    </div>
                                                </div>
                                                <div className="form-group row" bis_skin_checked="1">
                                                    <label for="inputEmail" className="col-sm-4 col-form-label">Email</label>
                                                    <div className="col-sm-8" bis_skin_checked="1">
                                                        <input type="email" className="form-control" id="inputEmail" placeholder="Please enter your email id" />
                                                    </div>
                                                </div>
                                                <div className="form-group row" bis_skin_checked="1">
                                                    <label for="inputCompany" className="col-sm-4 col-form-label">Company</label>
                                                    <div className="col-sm-8" bis_skin_checked="1">
                                                        <input type="text" className="form-control" id="inputCompany" placeholder="Please enter your Company name" />
                                                    </div>
                                                </div>
                                                <div className="form-group row" bis_skin_checked="1">
                                                    <label for="inputMobile" className="col-sm-4 col-form-label">Mobile</label>
                                                    <div className="col-sm-8" bis_skin_checked="1">
                                                        <input type="text" className="form-control" id="inputMobile" placeholder="Please enter your mobile number" />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-outline-dark mt-4">Submit request</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 order-3 px-4">
                                <div className="product_description">
                                    <div className="pfs32roboto mb-4">Augrade Dreamspace</div>

                                    <div> <span className="product_price">$599</span> &nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-black shop-button">Starting price</button></div>
                                    <p className="pt-4 mb-4 pfs20roboto">Create, Edit/Validate & Visualise 3D models, on the go.</p>

                                    <hr className="singleline" />
                                    <p className="pfs28roboto">Select Industry specific workspace</p>

                                    <div className="row product-realestate text-center mt-4">
                                        <p className="pfs24">Real estate</p>
                                    </div>

                                    <div className="row product-aerospace text-center mt-4">
                                        <p className="pfs24">Aerospace</p>
                                    </div>

                                    <div className="row product-automobile text-center mt-4">
                                        <p className="pfs24">Automobile</p>
                                    </div>

                                    <hr className="singleline mt-4" />
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="mt-3 text-center">
                                                <p className="pfs28roboto">Which plan do you want <br /> <span className="pfs16-black">( You can change later )</span></p>
                                            </div>
                                            <div className="row mt-4 pt-4" style={{border:"1px solid #000", borderRadius:"40px"}}>
                                                <div className="col-lg-6">
                                                    <p className="pfs28roboto">Starter Plan</p>
                                                </div>
                                                <div className="col-lg-6" style={{textAlign:"right"}}>
                                                    <p className="pfs28roboto">$599 <br /> <span className="pfs16-black">/yr/user</span></p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row mt-4 pt-4" style={{border:"1px solid #000", borderRadius:"40px"}}>
                                                <div className="col-lg-6">
                                                    <p className="pfs28roboto">Pro Plan</p>
                                                </div>
                                                <div className="col-lg-6" style={{textAlign:"right"}}>
                                                    <p className="pfs28roboto">$1249 <br /> <span className="pfs16-black">/yr/user</span></p>
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


            <div className="container-xxl mb-4 mt-5" bis_skin_checked="1">
                <div className="container" bis_skin_checked="1">
                    <div className="row g-5" bis_skin_checked="1">
                        <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.1s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}}>
                            <h1 className="display-5 mb-4 hfs40roboto">A simple & easy process</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5" bis_skin_checked="1">
                <div className="container bg-lightgray" bis_skin_checked="1">
                    <div className="row g-5 pt-5 pb-5" bis_skin_checked="1">
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.1s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Place the order</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.3s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.3s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Team verifies buyer & organization, within 24 hrs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Payment link opened up + agreements</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">After payment, software ( if bought) access given while device is delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl mb-4 mt-4" bis_skin_checked="1">
                <div className="container" bis_skin_checked="1">
                    <div className="row g-5" bis_skin_checked="1">
                        <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.1s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}}>
                            <h1 className="display-5 mb-4 hfs40roboto">What’s in the Box?</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5" bis_skin_checked="1">
                <div className="container bg-lightgray" bis_skin_checked="1">
                    <div className="row g-5 pt-5 pb-5" bis_skin_checked="1">
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.1s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Device</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.3s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.3s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Carrying<br /> case</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s" bis_skin_checked="1" style={{visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp"}}>
                            <div className="service-item text-center position-relative h-100" bis_skin_checked="1">
                                <div className="rounded p-4" bis_skin_checked="1">
                                    <p className="pfs28roboto mb-3">Adapter &<br /> Cables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container below-banner py-5 mt-5 mb-5 wow fadeIn rounded-40" data-wow-delay="0.1s" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}} bis_skin_checked="1">
                <div className="container text-center py-5" bis_skin_checked="1">
                    <h1 className="display-2 text-white mb-4 hfs48 pt-5 pb-3  slideInDown">Delivering Unparalled<br /> Results</h1>
                </div>
            </div>

            <div className="container mb-5 pb-4" bis_skin_checked="1">
                <div className="row" bis_skin_checked="1">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}} bis_skin_checked="1">
                        <h1 className="display-5 mb-4 hfs48blue">60%<br /> Time Saved</h1>
                        <p className="mb-4 fw-normal pfs24black">Save at least 60% time per project & boost your team’s productivity</p>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s" style={{visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp"}} bis_skin_checked="1">
                        <h1 className="display-5 mb-4 hfs48blue">20%<br />
                            Cost Saved</h1>
                        <p className="mb-4 fw-normal pfs24black">Save 20% direct cost per project & boost your time to completion flexibly</p>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s" style={{visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp"}} bis_skin_checked="1">
                        <h1 className="display-5 mb-4 hfs48blue">30x<br />
                            Reduction</h1>
                        <p className="mb-4 fw-normal pfs24black">Reduce the development time drastically per project</p>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-black pt-5 pb-5" bis_skin_checked="1">
                <div className="container py-5" bis_skin_checked="1">
                    <div className="row" bis_skin_checked="1">

                        <div className="col-md-4" bis_skin_checked="1">
                            <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical" bis_skin_checked="1">
                                <a className="nav-link mb-3 p-3 shadow active" id="v-pills-create3dmodel-tab" data-toggle="pill" href="#v-pills-create3dmodel" role="tab" aria-controls="v-pills-create3dmodel" aria-selected="false">
                                    <span className="pfs24gothic-black">Create 3D Model</span>
                                </a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-createimages-tab" data-toggle="pill" href="#v-pills-createimages" role="tab" aria-controls="v-pills-createimages" aria-selected="false">
                                    <span className="pfs24gothic-black">Create images</span>
                                </a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-validate3dmodels-tab" data-toggle="pill" href="#v-pills-validate3dmodels" role="tab" aria-controls="v-pills-validate3dmodels" aria-selected="false">
                                    <span className="pfs24gothic-black">Validate 3D models</span>
                                </a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-edit3dmodels-tab" data-toggle="pill" href="#v-pills-edit3dmodels" role="tab" aria-controls="v-pills-edit3dmodels" aria-selected="true">
                                    <span className="pfs24gothic-black">Edit 3D models/images</span>
                                </a>

                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-assetlibrary-tab" data-toggle="pill" href="#v-pills-assetlibrary" role="tab" aria-controls="v-pills-assetlibrary" aria-selected="true">
                                    <span className="pfs24gothic-black">Asset Library</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-8" bis_skin_checked="1">
                            <div className="tab-content" id="v-pills-tabContent" bis_skin_checked="1">
                                <div className="tab-pane fade shadow rounded bg-white p-5 active show" id="v-pills-create3dmodel" role="tabpanel" aria-labelledby="v-pills-create3dmodel-tab" bis_skin_checked="1">


                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Try Text to 3D</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Try Image to 3D</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent" bis_skin_checked="1">
                                        <br />
                                        <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab" bis_skin_checked="1">Try Text to 3D content goes here......</div>
                                        <br />
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" bis_skin_checked="1">Try Image to 3D content goes here-----</div>
                                        <br />
                                    </div>


                                    <h4 className="pfs28 mb-4">Create 3D Model</h4>
                                    <p className="pfs20 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="text-center">
                                        <img src="img/create-models.gif" className="img-fluid rounded mt-3" alt="augrade"/>
                                    </div>
                                </div>

                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-createimages" role="tabpanel" aria-labelledby="v-pills-createimages-tab" bis_skin_checked="1">
                                    <h4 className="pfs28 mb-4">Create Images</h4>
                                    <p className="pfs20 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="text-center">
                                        <img src="img/carousel-1.jpg" className="img-fluid rounded mt-3" alt="augrade"/>
                                    </div>
                                </div>

                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-validate3dmodels" role="tabpanel" aria-labelledby="v-pills-validate3dmodels-tab" bis_skin_checked="1">
                                    <h4 className="pfs28 mb-4">Validate 3D model</h4>
                                    <p className="pfs20 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="text-center">
                                        <img src="img/validate.gif" className="img-fluid rounded mt-3" alt="augrade"/>
                                    </div>
                                </div>

                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-edit3dmodels" role="tabpanel" aria-labelledby="v-pills-edit3dmodels-tab" bis_skin_checked="1">
                                    <h4 className="pfs28 mb-4">Edit 3D Model/Images</h4>
                                    <p className="pfs20 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="text-center">
                                        <img src="img/carousel-1.jpg" className="img-fluid rounded mt-3" alt="augrade"/>
                                    </div>
                                </div>

                                <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-assetlibrary" role="tabpanel" aria-labelledby="v-pills-assetlibrary-tab" bis_skin_checked="1">
                                    <h4 className="pfs28 mb-4">Asset Library</h4>
                                    <p className="pfs20 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="text-center">
                                        <img src="img/carousel-1.jpg" className="img-fluid rounded mt-3" alt="augrade"/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5 pt-2" bis_skin_checked="1">
                                <button type="button" className="btn btn-dark">Try for free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5 mb-5 mt-4">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="hfs40roboto mb-4">Question? Answers</h3>
                    </div>
                    <div className="row g-5">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Question? Answers #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Question? Answers #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Question? Answers #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                        Question? Answers #4
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                        Question? Answers #5
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                        Question? Answers #6
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body pfs16-black">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
