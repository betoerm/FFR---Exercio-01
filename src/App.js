import React from 'react';
//import logo from './logo.svg';
import './bootstrap.css';
import { NavComponent } from './components/NavComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { SearchComponent } from './components/SearchComponent';
import { ImageComponent } from './components/ImageComponent';
import { CardTextComponent } from './components/CardTextComponent';
import { NavVerticalComponent } from './components/NavVerticalComponent';

var images = [
  "/react-image-gallery/img/cat1.jpg",
  "/react-image-gallery/img/cat2.jpg",
  "/react-image-gallery/img/cat3.jpg"
];

function App() {
  return (
  <div>
    <div className="row">
      <NavbarComponent 
        title="NAV"
        items={['Topic 01', 'Topic 02', 'Topic 03', 'Topic 04']}
      />
      <SearchComponent/>
    </div>

    <NavComponent
      title="teste"
      items={['Section 01', 'Section 02', 'Section 03', 'Section 04' ]}
    />

    <div className="row">
      <div class="col-sm">
        <ImageComponent 
          imageUrls={images}
        />
      </div>

      <div class="col-sm">
        <CardTextComponent
          item={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida lacus et magna viverra, eleifend mattis massa feugiat. Maecenas laoreet, libero sed posuere scelerisque, neque augue vehicula nunc, eu congue erat felis malesuada elit.'}
        />
        <CardTextComponent
          item={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida lacus et magna viverra, eleifend mattis massa feugiat. Maecenas laoreet, libero sed posuere scelerisque, neque augue vehicula nunc, eu congue erat felis malesuada elit.'}
        />
        <CardTextComponent
          item={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida lacus et magna viverra, eleifend mattis massa feugiat. Maecenas laoreet, libero sed posuere scelerisque, neque augue vehicula nunc, eu congue erat felis malesuada elit.'}
        />
    </div>
    <div class="col-sm">
      <NavVerticalComponent
        items={['Section 01', 'Section 02', 'Section 03', 'Section 04' ]} 
      />
    </div>
    </div>


  </div>     
  );
}

export default App;
