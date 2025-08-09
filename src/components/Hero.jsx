import React from 'react'

const Hero = () => {
    return (
        <section className='container' >
            <div className="hero d-flex justify-content-between align-items-center mt-5">
                <h3>Popular Products</h3>
                <a className='fs-6' href="">See All Products</a>
            </div>


            <div className="product-card">

                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1440201227_two-sided-business-cards-by-printivo.png" className="card-img-top complementaryCard" alt="Business card design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Two-sided Business Cards</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦15,100 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Two-sided Bu...
                            <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572522725_flyer-1sided.png" className="card-img-top" alt="Flyer design" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">A5 flyers (Single Sided)</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦25,800 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover  border-0 mt-4">Browse A5 flyers (S... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1656003107_social-media--15.png" className="card-img-top" alt="sticker" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Round Stickers (3.5" Diameter)</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦17,000  </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover  border-0 mt-4">Browse Round Sticke... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1661456358_social-media--16.png" className="card-img-top" alt="Mugs design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Simple Mugs</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦4,800 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Simple Mugs <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1439790190_postcard.jpg" className="card-img-top" alt="Postcard design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Postcards (A6)</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦22,300 </span>
                        <span className='text-muted fs-6'>per 50</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Postcards (A... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1446183154_big%20rollup%20banner.png" className="card-img-top" alt="Banner design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Roll Up Banners (Big Base)</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦65,500</span>
                        <span className='text-muted fs-6'>per 1</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Roll Up Bann... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572259118_product-5-(1).png" className="card-img-top" alt="Posters design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">A2 Posters</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦71,100</span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse A2 Posters <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473167305_trifold-brochure-printing.png" className="card-img-top" alt="Brochure design" height={"55%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Trifold Brochures</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦47,500 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Trifold Broc... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1456215784_12.png" className="card-img-top idCard" alt="ID-card design" height={"57%"} />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Landscape ID Cards</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦4,500 </span>
                        <span className='text-muted fs-6'>per 1</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Landscape ID... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3">
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1485151940_White-tshirt.png" className="card-img-top" alt="T-shirt Mockup" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Off White T-shirts</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦6,000 </span>
                        <span className='text-muted fs-6'>per 1</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Off White T-...<i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572258123_product-3-(1).png" className="card-img-top" alt="A4 paper bag design" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">A4 Branded Paper Bags</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦115,280 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse A4 Branded P... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="card shadow shadow-sm mt-3">
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg" className="card-img-top" alt="A4 Courier bag design" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">A4 Courier Bags</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦27,500 </span>
                        <span className='text-muted fs-6'>per 100</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse A4 Courier B...<i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>


            <div className="hero d-flex justify-content-between align-items-center mt-5">
                <h3>Popular Categories</h3>
                <a className='fs-6' href="">See All Categories</a>
            </div>

            <div className="product-card">

                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473159158_Christmas-card-for-this-wonderful-season.png" className="card-img-top" alt="Greeting Cards design" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Greeting Cards</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦29,800 </span>
                        <span className='text-muted fs-6'>per 50</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Greeting Car... <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="card shadow shadow-sm mt-3" >
                    <img src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1473165427_stickers.png" className="card-img-top" alt="Stickers" />
                    <div className="card-body card-body1">
                        <h6 className="card-title mb-3">Stickers</h6>
                        <p className="card-text ">STARTING AT</p>
                        <span className='fs-5' style={{ fontWeight: "bold" }}>₦5,400 </span>
                        <span className='text-muted fs-6'>per 75</span>
                        <a href="#" className="btn icon-link icon-link-hover border-0 mt-4">Browse Stickers <i class="fa-solid fa-angle-right ms-2 bi" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero