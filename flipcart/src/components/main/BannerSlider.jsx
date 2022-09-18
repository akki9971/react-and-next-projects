import React from 'react'

export const BannerSlider = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide m-1" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item h-25 active" data-bs-interval="6000">
                    <img src="/images/5691822.jpg" className="d-block w-100 img-fluid" alt="5691822" />
                </div>
                <div className="carousel-item h-25" data-bs-interval="6000">
                    <img src="./images/woman-holding-various-shopping-bags-copy-space.jpg" className="d-block w-100 img-fluid" alt="woman-holding-various-shopping-bags-copy-space" />
                </div>
                <div className="carousel-item h-25" data-bs-interval="6000">
                    <img src="./images/woman-shopping-bags-copy-space.jpg" className="d-block w-100 img-fluid" alt="woman-shopping-bags-copy-space" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
