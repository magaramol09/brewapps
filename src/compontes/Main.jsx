import React from 'react'

export default function Main() {
    return (<>
        <div className='container main-section'>
            <h3>Live Spaces</h3>
            <div className="form-check checkbox-lg">
                <input className="form-check-input rounded-pill" type="checkbox" value="" id="flexCheckChecked" checked />
                <label className="form-check-label" for="flexCheckChecked">
                    All NFTs on Cyber eithr belong t or were minted byt their space creator.
                </label>
            </div>
            <div className="row main-routing">

                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"> <a href=""> 24h Trending </a></span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-chart-mixed"></i>
                    <span className="main-routing-heading-item"><a href=""> letest show </a></span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><a href=""> most popular </a></span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><a href=""> in denesis </a></span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><a href=""> in temple </a></span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i class="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><a href=""> in void </a></span>
                </div>

            </div>

        </div>


    </>
    )
}
