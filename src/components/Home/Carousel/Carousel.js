import React from 'react';
import graphics from '../../../images/graphics.jpg'
import mobile from '../../../images/mobile .jpg'


const Carousel = () => {
    return (

        <section style={{marginTop:'50px'}} className="container text-center">
            <div id="carouselExampleIndicators" class="carousel slide penguin-slide" data-bs-ride="carousel">
                <p> PROJECTS</p>
            <h1 className="text-center ">Some Of Our Previously Done Projects </h1>
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>        
                </ol>
                <div className="carousel-inner text-center">
                    <div class="carousel-item active">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-sm-12 pt-5 mt-5 col-md-6 gy-15 col-lg-6">
                                <h2>Graphics Design</h2>
                                <p>Lorem Ipsum is simply dummy tex of the                                 
                                    printing and typesetting industry.</p>                               
                            </div>
                            <div class="col-sm-12 pt-5 mt-5 col-md-6 gy-15 col-lg-6">
                            <img style={{height: '200px'}} src={graphics} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-sm-12 pt-5 mt-5 col-md-6 gy-15 col-lg-6">
                                <h2>Mobile Application Development</h2>
                                <p>Lorem Ipsum is simply dummy tex  of the         
                                    printing and typesetting industry.</p>                               
                            </div> 
                            <div class="col-sm-12 pt-5 mt-5 col-md-6 gy-15 col-lg-6">
                            <img style={{height: '200px'}} src={mobile} alt=""/>                                
                            </div>
                        </div>
                    </div>        
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </section>
    );
};

export default Carousel;