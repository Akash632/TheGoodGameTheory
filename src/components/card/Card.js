import React from 'react';
import './Card.css';
function Card({data}) {
  return (
    <div className='card-main-container'>
      <div className='card-img-container'>
        <img src={data.image_url}/>
      </div>
      <div className='card-text-container'>
        <h1>{data.name}</h1>
        <p>{data.tagline}</p>
        <div className='card-text-details'>
            <p>ABV : {data.abv}</p>
            <p>VOL : {data.volume.value+"L"}</p>
            <p>ORIGIN : {data.first_brewed}</p>
        </div>
        <p>{data.description.slice(0,400)+"..."}</p>
      </div>
    </div>
  );
}

export default Card;
