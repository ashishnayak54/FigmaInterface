import React from 'react';
import './App.scss';
import DisplayForm from './components/DisplayForm'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Global SCSS Files Creation Interface</h1>
      </header>
      <main className='container'>
        <DisplayForm />
      </main>
    </div>
  );
}

export default App;
