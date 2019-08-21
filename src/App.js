import React from 'react';
import logo from './logo.svg';
import './bootstrap.css';
import { SidebarComponent } from './components/SidebarComponent';
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <NavbarComponent 
      title="NAV"
      items={['Topic 01', 'Topic 02']}
    />  
  );
}

export default App;
