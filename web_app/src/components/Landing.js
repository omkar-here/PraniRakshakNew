import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect } from 'react';
import tick from '../imgs/tick.png'
import {Contact1} from '../imgs/Contact1.png'
import {Contact} from '../imgs/Contact.png'
import {Contact2} from '../imgs/Contact2.png'
import accuracy from '../icons/accuracy.png'
import demo from '../demo/demo.mp4'
import animalspotting from '../icons/animal-spotting.png'
import easeofuse from '../icons/ease-of-use.png'
import offenceregistration from '../icons/offence-registration.png'
import savesmanuallabour from '../icons/saves-manual-labour.png'
import speciesidentification from '../icons/species-identification.png'
import JeevRakshak from '../imgs/JeevRakshak.png'
import Logo from '../imgs/Logo.png'
import MobileNet from '../imgs/MobileNet.png'
import MobileNetSSD from '../imgs/MobileNetSSD.png'
import Species from '../imgs/Species-Identification.png'
import SSD from '../imgs/SSD.png'
import Classify from './Classify';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//EmailJS
import emailjs from '@emailjs/browser'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Landing = () => {
  
    return (
        <div className="App">
        {/* <div id="overlayer"></div> */}
  
        {/* <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <div className="site-logo"><img src={Logo} alt="Jeev-Rakshak-Logo" height="50"  style={{cursor:'pointer'}} width="50"/></div>
                <h5>&nbsp;Prani Rakshak</h5>
                <div>
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="ml-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="#glance-section" className="nav-link">Glance</a></li>
                      <li><a href="#demo-section" className="btn btn-outline-black py-3 px-5">Try Now</a></li>
                    </ul>
                  </nav>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>
                </div>
              
              </div>
            </div>
            
          </header>
          
          <div 
          className="intro-section custom-owl-carousel" 
          id="home-section">
            <div 
            // className="container"
            style={{display:'flex'}}
            >
              <div className="row align-items-center">
                <div 
                className="col-lg-6 mr-auto" 
                data-aos="fade-up"
                >
                  {/* <div 
                  className="owl-carousel slide-one-item-alt-text"
                  > */}
                  {/* <div className="custom-owl-carousel slide-one-item-alt"> */}
                  <Carousel autoPlay={0.5} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false} stopOnHover={true} interval={2000}>
                  <div className="slide-text" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <h1>Prani Rakshak</h1>
                      <p className="mb-5">Prani Rakshak is a wildlife species identification and offence registration web app.<br/>The web app takes an image as an input and passes this image to the MobileNet+SSD model and the model returns that image with bounding boxes around the identified animals along with their probable species.</p>
                      <p><a href="#demo-section" className="btn btn-outline-light py-3 px-5 smoothscroll">Try Now</a></p>
                    </div>
                    
                    <div className="slide-text" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <h1>MobileNets?</h1>
                      <p className="mb-5">MobileNets are a family of mobile-first computer vision models for TensorFlow, designed to effectively maximize accuracy while being mindful of the restricted resources for an on-device or embedded application.<br/>MobileNets are small, low-latency, low-power models parameterized to meet the resource constraints of a variety of use cases.<br/>They can be built upon for classification, detection, embeddings and segmentation.</p>
                    </div>

                    <div className="slide-text" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <h1>SSD?</h1>
                      <p className="mb-5">SSD (Single Shot Detector) uses many of the same ideas as YOLO but works even better as it combines predictions across multiple feature maps at different sizes.<br/>SSD is designed to be independent of the base network, and so it can run on top of pretty much anything, including MobileNet.</p>
                    </div>

                    <div className="slide-text" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <h1>MobileNet-SSD?</h1>
                      <p className="mb-5">MobileNet+SSD uses a variant called SSDLite that uses depthwise separable layers instead of regular convolutions for the object detection portion of the network.<br/>With SSDLite on top of MobileNet, you can easily get truly real-time results (i.e. 30 FPS or more).</p>
                    </div>
                  </Carousel>
                   
                  
                  {/* </div> */}
                </div>

                <div className="col-lg-6 ml-auto"  data-aos="fade-up" data-aos-delay="100">
                              
                  {/* <div className="owl-carousel slide-one-item-alt"> */}
                    <Carousel autoPlay={0.5} showThumbs={false} showArrows={false} showIndicators={false} infiniteLoop={true} interval={2000}>
                    <img src={JeevRakshak} alt="JeevRakshak" className="img-fluid"/>
                    <img src={MobileNet} alt="MobileNet" className="img-fluid"/>
                    <img src={SSD} alt="SSD" className="img-fluid"/>
                    <img src={MobileNetSSD} alt="MobileNet-SSD" className="img-fluid"/>
                    </Carousel>
                    
                  {/* </div> */}

                  {/* <div className="owl-custom-direction">
                    <a href="/#" className="custom-prev"><span className="icon-keyboard_arrow_left"></span></a>
                    <a href="/#" className="custom-next"><span className="icon-keyboard_arrow_right"></span></a>
                  </div> */}

                </div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/>

          <div className="site-section section-1">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-5 mr-auto mb-5">
                  <img src={Species} alt="Jeev Rakshak" className="img-fluid"/>
                </div>
                
                <div className="col-lg-5 mr-auto mb-5"  data-aos="fade-up">
                  <div className="mb-5">
                    <h2 className="section-title">Prani Rakshak</h2>
                    <p className="black-text">Prani Rakshak is a wildlife species identification and offence registration web app.<br/>The web app takes an image as an input and passes this image to the MobileNet+SSD model and the model returns that image with bounding boxes around the identified animals along with their probable species.</p>
                    <ul className="ul-check list-unstyled success">
                      <li className="black-text">Ease Of Use</li>
                      <li className="black-text">Saves Manual Labour</li>
                      <li className="black-text">Brilliant Accuracy</li>
                      <li className="black-text">Fully Automatic Animal Spotting System</li>
                      <li className="black-text">Species Identification</li>
                      <li className="black-text">Offence Registration</li>
                    </ul>  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-dark" id="features-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Features</h2>
                </div>
              </div>
            </div>
              
              <MultiCarousel slides={5} responsive={responsive} infinite={true} autoPlay={true}   autoPlaySpeed={1800} >
              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={easeofuse} alt="Ease-Of-Use-Icon" height="60px" width="60px"/></span>
                  <h3>Ease Of Use</h3>
                  <p className="black-text">Simple, elegant and mobile-compatible interface.<br/><br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={savesmanuallabour} alt="Saves-Manual-Labour-Icon" height="60px" width="60px"/></span>
                  <h3>Saves Manual Labour</h3>
                  <p className="black-text">It saves a tremendous amount of time for biology researchers and the human volunteers that help by labeling images.<br/>Thus it dramatically reduces the cost to gather valuable information from wild habitats.</p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={accuracy} alt="Accuracy-Icon" height="60px" width="60px"/></span>
                  <h3>Brilliant Accuracy</h3>
                  <p className="black-text">It identifies animals in the input images and gives results with bounding boxes with an accuracy of 96%.<br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={animalspotting} alt="Fully-Automatic-Animal-Spotting-System-Icon" height="60px" width="60px"/></span>
                  <h3>Fully Automatic Animal Spotting System</h3>
                  <p className="black-text">It can automatically identify species of animals in the input images and can easily give truly real-time results.<br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={speciesidentification} alt="Species-Identification-Icon" height="60px" width="60px"/></span>
                  <h3>Species identification</h3>
                  <p className="black-text">Bounding box species identification of the input image for 11 species that include Butterfly, Elephant, Tiger, Lion, Horse, Panda, Bear, Monkey, Dog, Deer and Human.<br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={offenceregistration} alt="Offence-Registration-Icon" height="60px" width="60px"/></span>
                  <h3>Offence Registration</h3>
                  <p className="black-text">Users can register offences towards animals by uploading an image or the geo-location or both.<br/><br/><br/><br/></p>
                </div>
              </div>
              </MultiCarousel>
              

          </div>

          <div className="site-section" id="glance-section"  data-aos="fade">
        <div style={{ marginBottom: '50px' }} className="container">

          <div className="row align-items-center">
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <video src={demo} className="img-fluid" controls loop />
            </div>
            
            <div className="col-md-6 mr-auto order-2 order-md-1">  
              <h2 className="section-title mb-3">At a Glance</h2>
              <p className="black-text mb-5">TensorFlow.js is an amazing library<br/>You can make cool projects and test it out yourselves. View how the model works on videos captured by camera traps throughout the world!</p>
              <p style={{ fontWeight: '500', color: '#C3073F' }} className="mb-5">Note: Model can only identify the animals on which it is trained on.</p>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark" id="demo-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Demo</h2>
                </div>
              </div>
            </div>
          <div style={{ marginTop: '10px', marginBottom: '100px' }}>
            <Classify />
          </div>
          <div style={{ marginTop: '100px', marginBottom: '50px' }}>
            <Detect />
          </div>
        </div>
        <div style={{ marginTop: '100px' }} className="container">
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={react} width="250" height="250" alt="react" />
            </div>
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={tf} width="250" height="250" alt="tf" />
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={keras} width="200" height="200" alt="keras" />
                <h1>Keras</h1>
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={colab} width="200" height="200" alt="colab" />
                <h1>Colab</h1>
            </div>
          </div>
        </div>
      </div>
          
          <footer className="footer-section bg-dark">
            <div className="container">
              <div className="row">
                
                <div className="col-md-4">
                  <h3>About Us</h3>
                  <p>We are a bunch of programmers.</p>
                </div>

                <div className="col-md-3 ml-auto">
                  <h3>Links</h3>
                  <ul className="list-unstyled footer-links">
                    <li><a href="#home-section" className="smoothscroll">Home</a></li>
                    <li><a href="#features-section" className="smoothscroll">Features</a></li>
                    <li><a href="#glance-section" className="smoothscroll">Glance</a></li>
                    <li><a href="#demo-section" className="smoothscroll">Demo</a></li>
                    {/* <li><a href="https://github.com/amurto" className="smoothscroll">Github</a></li> */}
                  </ul>
                </div>

                <div className="col-md-4">
                  <h3>Project</h3>
                  <p>This is a project we made as a part of our SEM 6 curriculum.</p>
                </div>
              
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Landing;