import React, { Fragment } from 'react';
import data from '../data/data';
import Card from './Card';
import logo from '../assets/logo.svg';

function ImageSlide({ nextProperty, prevProperty, property, properties }) {

  return (
    <Fragment>
      <button
        onClick={nextProperty}
        disabled={property.index === data.properties.length - 1}
      >
        Next
      </button>
      <button onClick={prevProperty} disabled={property.index === 0}>
        Prev
      </button>

      <div className='page'>
        <section>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Image slideshow</h1>
        </section>

        <div className='col'>
          <div className={`cards-slider active-slide-${property.index}`}>
            <div
              className='cards-slider-wrapper'
              style={{
                transform: `translateX(-${
                  property.index * (100 / properties.length)
                }%)`,
              }}
            >
              {properties.map(property => (
                <Card key={property._id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ImageSlide;
