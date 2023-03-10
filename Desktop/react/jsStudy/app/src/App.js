
import './App.css';
import About from './component/About';
import Home from './component/Home';
import { useState } from 'react';
import Header from './component/Header';
import CustomRoute from './routers/CustomRoute';
import { Link } from 'react-router-dom';

function App() {

  return (
      <CustomRoute/>
  );
}

export default App;
