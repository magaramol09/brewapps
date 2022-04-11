import React  from 'react'
import { Link } from "react-router-dom";

export default function Main() {
   

    
    return (<>
        <div className='container main-section'>
            <h3>Live Spaces</h3>
            <div className="form-check checkbox-lg">
                <input className="form-check-input rounded-pill" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    All NFTs on Cyber eithr belong t or were minted byt their space creator.
                </label>
            </div>
            <div className="row main-routing">

                <div className="col-4 col-lg-2 main-routing-heading">
                    <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"> <Link  to="/"> 24h Trending </Link> </span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><Link to="/teufzer"> letest show </Link> </span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><Link to="/popular"> most popular </Link> </span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><Link to="/denesis"> in denesis </Link> </span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><Link to="/temple"> in temple </Link> </span>
                </div>
                <div className="col-4 col-lg-2 main-routing-heading">
                    <i className="fa-solid fa-fire-flame-curved" i />
                    <span className="main-routing-heading-item"><Link to="/void"> in void </Link> </span>
                </div>

            </div>

        </div>

    </>
    )
}
