import React, { useState } from 'react'
import DenesisAPI from './API/DenesisAPI';




export default function Denesis() {
  const [data, Setdata] = useState(DenesisAPI)
  return (
    <div className="container main-section-card">

      <div className="row main-card">
        {data.map((curEle) => {
          const {id,img,title,info}=curEle;

          return (
            <div className="col-12 col-lg-4" id={id}>
              <div className="row ">
                <div className="col-12 col-lg-12 " >
                  <div className="col-main-card">
                    <img src={img}
                      className='img-fluid card-img' alt="" />
                    <div className="img-info">
                      <h3>{title}</h3>
                      <p>{info}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
