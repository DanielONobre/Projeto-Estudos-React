import logo from './logo.svg';
import './App.css';
import List from './components/list';
import Frase from './components/Frase';
import Item from './Item';
import React from 'react';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto React</h1>
      <p>Meu primeiro app</p>
      <List />
    </div>
  );
}

export default App;
