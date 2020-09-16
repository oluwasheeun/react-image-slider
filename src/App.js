import React, { useState } from 'react';
import './App.css';
import data from './data/data';
import ImageSlide from './component/ImageSlide';

function App() {
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  return (
    <div className='App'>
      <ImageSlide
        nextProperty={nextProperty}
        prevProperty={prevProperty}
        property={property}
        properties={properties}
      />
    </div>
  );
}

export default App;
