import React from 'react';
import style from './App.module.css';
import { Header } from './components/header/header';
import { NavPanel } from './components/navPanel/navPanel';

function App() {
  return (
    <div className={style.background}>
      <Header/>
      <NavPanel />
    </div>
  );
}

export default App;
