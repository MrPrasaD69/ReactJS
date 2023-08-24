import React, { useState,useCallback } from 'react'

export default function ContactUs() {

    const [formData, setFormData] = useState({ first_name: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        alert('A form was submitted: ' + JSON.stringify(formData));

        try {
            const response = await fetch('http://localhost:4000/store-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error:', error);
    }
}

    // const FORM_ENDPOINT = "https://practical-roentgen.31-187-70-64.plesk.page/api/Api.php";

    // const [first_name,setFirstname]=useState("");
    // const [last_name,setLastname]=useState("");
    // const [email_id,setEmailid]=useState("")

    
    //     const data = {
    //         first_name: first_name,
    //         last_name: last_name,
    //         email_id : email_id
    //       };

    //       const onSubmitHandler = useCallback(() => {
    //         fetch(FORM_ENDPOINT, {
    //           method: "POST",
    //           headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(data),
    //         })
    //           .then((response) => {
    //             if (response.status !== 200) {
    //               throw new Error(response.statusText);
    //             }
    //             return response.json();
    //           })
    //           .then(() => {
    //             console.log("We'll be in Touch with you.");
    //             console.log("success");
    //           })
    //           .catch((err) => {
    //             console.log(err.toString());
    //             console.log("error");
    //           });
    //       }, []);
          
    

    // function saveUser(){
    //     alert(first_name);
    //     let data={first_name,last_name,email_id}

    //     fetch("https://practical-roentgen.31-187-70-64.plesk.page/api/Api.php", {
    //         method:'POST',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     }).then((result)=>{
    //         alert("result"+result);
    //     })
    // }

  return (
    <div>
        <div className="container-xxl contact-us mb-5" bis_skin_checked="1">
            <div className="container vertical-align-middle" bis_skin_checked="1">
                <div className="row g-5 pb-4" bis_skin_checked="1">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8 text-center mb-5 pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}} bis_skin_checked="1">
                        <h1 className="display-5 hfs48black pt-5 pb-5">Welcome To Augrade<br/> Support</h1>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid mb-5 pb-5 contactus-accordin" bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h1 className="hfs40 mb-5">Some common questions</h1>
                        </div>
                    </div>
                </div>
                <div className="row" bis_skin_checked="1">
                    <div className="col-md-3" bis_skin_checked="1">
                        <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical" bis_skin_checked="1">
                            <a className="nav-link mb-3 p-3 text-center shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <span className="pfs20">Augrade Company</span>
                            </a>
        
                            <a className="nav-link mb-3 p-3 text-center shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> 
                                <span className="pfs20">Our Products</span>   
                            </a>
        
                            <a className="nav-link mb-3 text-center p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                <span className="pfs20">Your Account</span>  
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-1" bis_skin_checked="1">
                    </div>
        
                    <div className="col-md-8" bis_skin_checked="1">
                        <div className="tab-content" id="v-pills-tabContent" bis_skin_checked="1">
                            <div className="tab-pane fade bg-white show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" bis_skin_checked="1">
                                <div className="accordion" id="accordionExample" bis_skin_checked="1">
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How can  I get updates about your products?
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can I join Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Are your products available?
                                        </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            Can I join the Early access program?
                                        </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                            When will the product(s) launch?
                                        </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                                            How can I avail your Website/app development service?
                                        </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div className="tab-pane fade bg-white" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" bis_skin_checked="1">
                                <div className="accordion" id="accordionExample" bis_skin_checked="1">
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How can  I get updates about your products?
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can I join Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Are your products available?
                                        </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            Can I join the Early access program?
                                        </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                            When will the product(s) launch?
                                        </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                                            How can I avail your Website/app development service?
                                        </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                            <div className="tab-pane fade bg-white" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" bis_skin_checked="1">
                                <div className="accordion" id="accordionExample" bis_skin_checked="1">
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How can  I get updates about your products?
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How can I join Augrade?
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Are your products available?
                                        </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            Can I join the Early access program?
                                        </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                            When will the product(s) launch?
                                        </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item" bis_skin_checked="1">
                                        <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button pfs20roboto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                                            How can I avail your Website/app development service?
                                        </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" bis_skin_checked="1">
                                        <div className="accordion-body pfs16-black" bis_skin_checked="1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        
        
        <div className="container-xxl bg-gray py-5" bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp"}} bis_skin_checked="1">
                    <h1 className="display-5 mb-4 hfs40roboto">Can't find what you are looking for?</h1>
                    <p className="pfs20">If you still can't find what you're looking for in our support resources, contact customer support directly.</p>
                    <br/>
                    <button type="button" className="btn btn-black">CONTACT US</button>
                </div>
            </div>
        </div>
        
        <div className="container-xxl py-5 mt-4 mb-5 contact-form">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>

                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <img src="img/contactus2.png" className="img-fluid" alt="augrade"/>
                        <p className="mb-4 pfs20">Fill the form and we will get in touch with you<br/> within 24 hours!</p>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <h3 className="mb-4 pfs24gothic-black text-center">Contact Us</h3>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                        <form  onSubmit={onSubmitHandler} method="POST">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="labelpadding">
                                        <label for="firstname" className="pfs20roboto">First Name</label>
                                        {/* <input type="text" name="first_name" value={first_name} onChange={(e)=>{setFirstname(e.target.value)}} className="form-control" id="firstname" placeholder="Please enter your first name" /> */}
                                        <input type="text" name="first_name" value={formData.name} onChange={handleChange} className="form-control" id="firstname" placeholder="Please enter your first name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="labelpadding">
                                        <label for="lastname" className="pfs20roboto">Last Name</label>
                                        {/* <input type="text" name="last_name" value={last_name} onChange={(e)=>{setLastname(e.target.value)}} className="form-control" id="lastname" placeholder="Please enter your last name" /> */}
                                        {/* <input type="text" name="last_name" value={last_name} onChange={handleChange} className="form-control" id="lastname" placeholder="Please enter your last name" /> */}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="labelpadding">
                                        <label for="email" className="pfs20roboto">Email ID</label>
                                        {/* <input type="email" name="email_id" value={email_id} onChange={(e)=>{setEmailid(e.target.value)}} className="form-control" id="emailid" placeholder="Please enter your email id" /> */}
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    
                                    <div className="col-sm-12">
                                        <div className="labelpadding">
                                            <br/>
                                            <label className="pfs20roboto">Select Interest</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                            AR Glasses
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                            Company Updates
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                            AR/VR
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                            Wearable tech
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-dark rounded-pill py-1 px-5" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
