import React from 'react'
// import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// import { useEffect } from 'react';
import { useState } from 'react';

export default function MergePricing() {
    const [show, setShow] = useState(false);
    // useEffect(() => {
    //     alert("Hello! I am an alert box!!");
    //     console.log("Hello!");
        
           
    //             $('.row').click(function(){
    //                 $("#divShowHide").toggle();
    //             });
    // },[])
  return (
    <div>
      <div className="super_container mt-5">
        <div className="single_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-lg-2 order-1">
                    
                        <div className="image_selected" style={{background:"#8E7D7D", padding:"90px 20px 10px 20px"}}><img src="img/front-view-w-logo.png" class="img-fluid" alt="augrade"/></div>
                        {
                            show && <div id="divShowHide">
                            <div className="row">
                                <div className="col-lg-3">
                                </div>
                                <div className="col-lg-6">
                                    <div className="mt-5 text-center">
                                        <p className="pfs28roboto">Which plan do you want <br/> <span className="pfs16-black">( You can change later )</span></p>
                                    </div>
                                    <div className ="row mt-4 pt-4" style={{border:"1px solid #000", borderRadius:"40px"}}> 
                                        <div className="col-lg-6">
                                            <p className="pfs28roboto">Starter Plan</p>
                                        </div>
                                        <div className="col-lg-6" style={{textAlign:"right"}}>
                                            <p className="pfs28roboto">$599 <br/> <span className="pfs16-black">/yr/user</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                </div>
                                <div className="col-lg-6">
                                    <div className ="row mt-4 pt-4" style={{border:"1px solid #000", borderRadius:"40px"}}> 
                                        <div className="col-lg-6">
                                            <p className="pfs28roboto">Pro Plan</p>
                                        </div>
                                        <div className="col-lg-6" style={{textAlign:"right"}}>
                                            <p className="pfs28roboto">$1249 <br/> <span className="pfs16-black">/yr/user</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                </div>
                                
                            </div>
                            </div>
                        }
                        
                    </div>
                    <div className="col-lg-4 order-3 px-4">
                        <div className="product_description">
                            <div className="hfs40roboto mb-4">Augrade Merge</div>
                            
                            <div> <span className="product_price">$1249</span> &nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-black shop-button">Early bird price</button></div>
                            <p className="pt-4 mb-4 pfs20roboto">The Lightest yet most powerful Spatial Computer</p>
                            <div className ="row">
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
                            <hr className="singleline" />
                            <div> 
                                <div className="row" style={{marginTop: "15px"}}>
                                    <div className="col-xs-6"> <span className="pfs28roboto">Pick a colour</span><br /> <button className="btn button-green btn-sm">&nbsp;&nbsp;&nbsp;</button> <button className="btn button-orange btn-sm">&nbsp;&nbsp;&nbsp;</button> <button className="btn button-red btn-sm">&nbsp;&nbsp;&nbsp;</button> <button className="btn button-yellow btn-sm">&nbsp;&nbsp;&nbsp;</button> </div>
                                </div>
                            </div>
                            <hr className="singleline" />
                            <p className="pfs28roboto">Buy Industry specific Dreamspace <span className="pfs16-black">( You can buy later )</span></p>
                            
                            <div onClick={()=>setShow(!show)} id="btnShowHideReal" className="row product-realestate text-center mt-4">
                                <p className="pfs24">Real estate</p>
                            </div>
                            
                            <div onClick={()=>setShow(!show)} id="btnShowHideAerospace" className="row product-aerospace text-center mt-4">
                                <p className="pfs24">Aerospace</p>
                            </div>
                            
                            <div onClick={()=>setShow(!show)} id="btnShowHideAutomobile" className="row product-automobile text-center mt-4">
                                <p className="pfs24">Automobile</p>
                            </div>
                            
                            <div className ="row mt-4 pt-4" style={{border:"1px solid #000", borderRadius:"40px"}}>
                                <p className="pfs20roboto">Add a coverage plan</p>
                                <p className="pfs16-black">$499/yr</p>   
                                <div className="col-lg-4">
                                    <img src="img/merge.png" className="img-fluid rounded-top" alt="augrade"/>
                                </div>
                                <div className="col-lg-8">
                                    
                                    <p className="pfs16-black">Your seamless usage & peace of mind is precious. Get accidental damage protection & coverage for your new Merge.</p>
                                    <ul>
                                        <li className="pfs16-black">Accidental damage protection</li>
                                        <li className="pfs16-black">Theft & Loss coverage</li>
                                        <li className="pfs16-black">Priority support & care</li>
                                        <li className="pfs16-black">Express shipping</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="row mt-5">
                                
                                <div className="col-xs-6"> <button type="button" className="btn btn-black shop-button">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="container-fluid bg-black mb-5">
        <div className="container pb-5 pb-5">
            <div className="mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="display-2 text-white hfs48 pt-5 animated slideInDown">What’s in the box?</h1>
            </div>
            
            <div className="row g-5 pt-3">
                <div className="col-lg-1 col-md-12">
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                            <p className="pfs24 mb-3">Augrade<br/> Merge</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                        <p className="pfs24 mb-3">Charging<br/> Case</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                            <p className="pfs24 mb-3">Charging<br/> Case</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-black mt-5">
        <div className="container pb-5 pb-5">
            <div className="mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="display-2 text-white hfs48 pt-5 animated slideInDown">A simple buying process</h1>
            </div>
            
            <div className="row g-5 pt-3">
                <div className="col-lg-1 col-md-12">
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                            <p className="pfs24 mb-3">Place the<br/> order request</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                        <p className="pfs24 mb-3">Team verifies buyer & organization, within 24 hrs</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item position-relative h-100">
                        <div className="rounded p-4">
                            <p className="pfs24 mb-3">Payment link<br/> opened up +<br/> agreements</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5 mt-5">
        <div className="container">
            
            <div className="row g-0 feature-row">    
                <div className="col-md-6 col-lg-3 video-no-padding wow fadeIn" data-wow-delay="0.1s">
                    <div className="feature-item h-100">
                        
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 bg-black video-no-padding wow fadeIn" data-wow-delay="0.3s">
                    <div className="feature-item h-100 px-4 pt-4 pb-3">
                        <h1 className="display-2 text-white pfs32 animated slideInDown">Enhance your workflow</h1>
                        <p className="pfs16-white">Our constraints based AI OS system that can run on all devices to empower you to create, edit/validate & visualise 3D models</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 video-no-padding wow fadeIn" data-wow-delay="0.5s">
                    <div className="feature-item h-100">
                        
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 bg-black video-no-padding wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item h-100 px-4 pt-4 pb-3">
                        <h1 className="display-2 text-white pfs32 animated slideInDown">Enhance your workflow</h1>
                        <p className="pfs16-white">Our constraints based AI OS system that can run on all devices to empower you to create, edit/validate & visualise 3D models</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 bg-black video-no-padding wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item h-100 px-4 pt-4 pb-3">
                        <h1 className="display-2 text-white pfs32 animated slideInDown">Enhance your workflow</h1>
                        <p className="pfs16-white">Our constraints based AI OS system that can run on all devices to empower you to create, edit/validate & visualise 3D models</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 video-no-padding wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item h-100">
                        
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 bg-black video-no-padding wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item h-100 px-4 pt-4 pb-3">
                        <h1 className="display-2 text-white pfs32 animated slideInDown">Enhance your workflow</h1>
                        <p className="pfs16-white">Our constraints based AI OS system that can run on all devices to empower you to create, edit/validate & visualise 3D models</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 video-no-padding wow fadeIn" data-wow-delay="0.7s">
                    <div className="feature-item h-100">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5 mt-4">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-4 col-md-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs24gothic-black">Create 3D models</p>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs24gothic-black">Validate the designs & 3D Models</p>
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs32gothicblack">Perform simulations in AR</p>
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-lg-8 col-md-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs24gothic-black">Edit with simple hand gestures</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs24gothic-black">Scale to room size & walkaround the 3D models</p>
                    </div>
                </div>
            </div>
            
            <div className="row mt-5">
                <div className="col-lg-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item possibilities position-relative h-100">
                        <p className="pt-4 pfs32gothicblack">Verify the 3D models against manufactured parts</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div className="container-xxl py-5 mb-5">
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
