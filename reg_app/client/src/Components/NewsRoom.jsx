import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsRoom() {
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h1 className="hfs40 mt-4">Latest News</h1>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-8 col-md-12 nopadding mt-4 pt-2">
                    <div className="blog-post rounded">
                        <div className="blog-img d-block overflow-hidden position-relative">
                            <img src="img/newsroom1.png" className="img-fluid" alt="augrade"/>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-12 nopadding mt-4 pt-2">
                    <div className="blog-post rounded">
                        <div className="content p-4 border" style={{height:"380px"}}>
                            <br/>
                            <small className="text-muted p">Update</small>
                            <h4 className="mt-1 mb-3"><Link to="#" className="text-dark title">A blog title that<br/> is amazing</Link></h4>
                            <br/><br/><br/><br/><br/><br/><br/>
                            <small className="text-muted p">October 11, 2020</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                    <div className="blog-post rounded">
                        <div className="blog-img d-block overflow-hidden position-relative">
                            <img src="img/blog.png" className="img-fluid rounded-top" alt="augrade"/>
                        </div>
                        <div className="content p-4 border">
                            <small className="text-muted p">Update</small>
                            <h4 className="mt-1 mb-3"><Link to="#" className="text-dark title">A blog title that is amazing</Link></h4>
                            <small className="text-muted p float-right">October 11, 2020</small>
                            <small><Link to="#" className="text-primary">Moodish Team</Link></small>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                    <div className="blog-post rounded">
                        <div className="blog-img d-block overflow-hidden position-relative">
                            <img src="img/blog.png" className="img-fluid rounded-top" alt="augrade"/>
                        </div>
                        <div className="content p-4 border">
                            <small className="text-muted p">Update</small>
                            <h4 className="mt-1 mb-3"><Link to="#" className="text-dark title">A blog title that is amazing</Link></h4>
                            <small className="text-muted p float-right">October 11, 2020</small>
                            <small><Link to="#" className="text-primary">Moodish Team</Link></small>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                    <div className="blog-post rounded">
                        <div className="blog-img d-block overflow-hidden position-relative">
                            <img src="img/blog.png" className="img-fluid rounded-top" alt="augrade"/>
                        </div>
                        <div className="content p-4 border">
                            <small className="text-muted p">Update</small>
                            <h4 className="mt-1 mb-3"><Link to="#" className="text-dark title">A blog title that is amazing</Link></h4>
                            <small className="text-muted p float-right">October 11, 2020</small>
                            <small><Link to="#" className="text-primary">Moodish Team</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="singleline mt-5" />
        </div>
        
        <div className="container-fluid mb-5 pb-5" bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h1 className="hfs40 mb-5">Filter articles</h1>
                        </div>
                    </div>
                </div>
                <div className="row" bis_skin_checked="1">
                    <div className="col-md-3" bis_skin_checked="1">
                        
                        <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical" bis_skin_checked="1">
                            <a className="nav-link mb-3 p-3 text-center shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <span className="pfs20">Updates</span>
                            </a>
        
                            <a className="nav-link mb-3 p-3 text-center shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> 
                                <span className="pfs20">Case Studies</span>   
                            </a>
        
                            <a className="nav-link mb-3 text-center p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                <span className="pfs20">Product/service</span>  
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-1" bis_skin_checked="1">
                    </div>
        
                    <div className="col-md-8" bis_skin_checked="1">
                        
                        <div className="tab-content" id="v-pills-tabContent" bis_skin_checked="1">
                            <div className="tab-pane fade bg-white show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" bis_skin_checked="1">
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                            </div>
                            
                            <div className="tab-pane fade bg-white" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" bis_skin_checked="1">
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                            </div>
                            
                            <div className="tab-pane fade bg-white" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" bis_skin_checked="1">
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                                <div className="row">
                                    <div className="col-lg-3 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="blog-img d-block overflow-hidden position-relative">
                                                <img src="img/newsroom2.png" className="img-fluid" alt="augrade"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-9 col-md-12">
                                        <div className="blog-post rounded">
                                            <div className="content p-4">
                                                <small className="text-muted p">Update</small>
                                                <h4 className="mt-2 mb-3 pfs28"><Link to="#" className="text-dark pfs28">A blog title that is amazing</Link></h4>
                                                <small className="text-muted p">October 11, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="singleline mb-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
