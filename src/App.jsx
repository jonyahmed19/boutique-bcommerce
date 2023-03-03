import { useState } from 'react'
import './App.css'
import catImg from './assets/images/cat-img-1.jpg'

function App() {


  return (
    <div className="App">


    <div className="page-holder">
      
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="fw-bold text-uppercase text-dark">Boutique</span></a>
            <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="detail.html">Product detail</a>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">               
                <li className="nav-item"><a className="nav-link" href="cart.html"> <i className="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small className="text-gray fw-normal">(2)</small></a></li>
                <li className="nav-item"><a className="nav-link" href="#!"> <i className="far fa-heart me-1"></i><small className="text-gray fw-normal"> (0)</small></a></li>
                <li className="nav-item"><a className="nav-link" href="#!"> <i className="fas fa-user me-1 text-gray fw-normal"></i>Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!--  Modal --> */}
      <div className="modal fade" id="productView" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content overflow-hidden border-0">
            <button className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0"><a className="glightbox product-view d-block h-100 bg-cover bg-center" style={{background: catImg}} href="img/product-5.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href="img/product-5-alt-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href="img/product-5-alt-2.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a></div>
                <div className="col-lg-6">
                  <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 1"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 2"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 3"><i className="fas fa-star small text-warning"></i></li>
                      <li className="list-inline-item m-0 4"><i className="fas fa-star small text-warning"></i></li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                    <div className="row align-items-stretch mb-4 gx-0">
                      <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                          <div className="quantity">
                            <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                            <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue="1" />
                            <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5"><a className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                    </div><a className="btn btn-link text-dark text-decoration-none p-0" href="#!"><i className="far fa-heart me-2"></i>Add to wish list</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- HERO SECTION--> */}
      <div className="container">
        <section className="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{background: catImg}}>
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="shop.html">Browse collections</a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CATEGORIES SECTION--> */}
        <section className="pt-5">
          <header className="text-center">
            <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
            <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
          </header>
          <div className="row">
            <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src={catImg} alt=""/><strong className="category-item-title">Clothes</strong></a>
            </div>
            <div className="col-md-4"><a className="category-item mb-4" href="shop.html"><img className="img-fluid" src={catImg} alt=""/><strong className="category-item-title">Shoes</strong></a><a className="category-item" href="shop.html"><img className="img-fluid" src={catImg} alt=""/><strong className="category-item-title">Watches</strong></a>
            </div>
            <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src={catImg} alt=""/><strong className="category-item-title">Electronics</strong></a>
            </div>
          </div>
        </section>
        {/* <!-- TRENDING PRODUCTS--> */}
        <section className="py-5">
          <header>
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
          </header>
          <div className="row">
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-primary">Sale</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-info">New</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-danger">Sold</div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Red digital smartwatch</a></h6>
                <p className="small text-muted">$250</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Nike air max 95</a></h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Joemalone Women prefume</a></h6>
                <p className="small text-muted">$25</p>
              </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="product text-center">
                <div className="position-relative mb-3">
                  <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={catImg} alt="..." /></a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                      <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                      <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Apple Watch</a></h6>
                <p className="small text-muted">$351</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- SERVICES--> */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center gy-3">
              <div className="col-lg-4">
                <div className="d-inline-block">
                  <div className="d-flex align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use xlinkHref="#delivery-time-1"> </use>
                    </svg>
                    <div className="text-start ms-3">
                      <h6 className="text-uppercase mb-1">Free shipping</h6>
                      <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-inline-block">
                  <div className="d-flex align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use xlinkHref="#helpline-24h-1"> </use>
                    </svg>
                    <div className="text-start ms-3">
                      <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                      <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-inline-block">
                  <div className="d-flex align-items-end">
                    <svg className="svg-icon svg-icon-big svg-icon-light">
                      <use xlinkHref="#label-tag-1"> </use>
                    </svg>
                    <div className="text-start ms-3">
                      <h6 className="text-uppercase mb-1">Festivaloffers</h6>
                      <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- NEWSLETTER--> */}
        <section className="py-5">
          <div className="container p-0">
            <div className="row gy-3">
              <div className="col-lg-6">
                <h5 className="text-uppercase">Let's be friends!</h5>
                <p className="text-sm text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
              </div>
              <div className="col-lg-6">
                <form action="#">
                  <div className="input-group">
                    <input className="form-control form-control-lg" type="email" placeholder="Enter your email address" aria-describedby="button-addon2" />
                    <button className="btn btn-dark" id="button-addon2" type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-dark text-white">
        <div className="container py-4">
          <div className="row py-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Customer services</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#!">Help &amp; Contact Us</a></li>
                <li><a className="footer-link" href="#!">Returns &amp; Refunds</a></li>
                <li><a className="footer-link" href="#!">Online Stores</a></li>
                <li><a className="footer-link" href="#!">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h6 className="text-uppercase mb-3">Company</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#!">What We Do</a></li>
                <li><a className="footer-link" href="#!">Available Services</a></li>
                <li><a className="footer-link" href="#!">Latest Posts</a></li>
                <li><a className="footer-link" href="#!">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-uppercase mb-3">Social media</h6>
              <ul className="list-unstyled mb-0">
                <li><a className="footer-link" href="#!">Twitter</a></li>
                <li><a className="footer-link" href="#!">Instagram</a></li>
                <li><a className="footer-link" href="#!">Tumblr</a></li>
                <li><a className="footer-link" href="#!">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-top pt-4" style={{borderColor: "#1d1d1d !important"}}>
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                <p className="small text-muted mb-0">&copy; 2021 All rights reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="small text-muted mb-0">Template designed by <a className="text-white reset-anchor" href="https://bootstrapious.com/p/boutique-bootstrap-e-commerce-template">Bootstrapious</a></p>
                {/* <!-- If you want to remove the backlink, please purchase the Attribution-Free License. See details in readme.txt or license.txt. Thanks!--> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
    </div>
  )
}

export default App
