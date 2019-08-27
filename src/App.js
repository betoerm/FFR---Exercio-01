import React from 'react';
//import logo from './logo.svg';
import './bootstrap.css';
import { SidebarComponent } from './components/SidebarComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { SearchComponent } from './components/SearchComponent';
import { ImageComponent } from './components/ImageComponent';
import { CardTextComponent } from './components/CardTextComponent';

var images = [
  "/react-image-gallery/img/cat1.jpg",
  "/react-image-gallery/img/cat2.jpg",
  "/react-image-gallery/img/cat3.jpg"
];

function App() {
  return (
  <div>
    <NavbarComponent 
      title="NAV"
      items={['Topic 01', 'Topic 02']}
    />

    <SearchComponent/>

    <SidebarComponent
      title="teste"
      items={['Teste 01', 'Teste 02']}
    />

    <ImageComponent 
      imageUrls={images}
    />

    <CardTextComponent
      item={'Hello World'}
    />

  </div>     
  );
}

export default App;
