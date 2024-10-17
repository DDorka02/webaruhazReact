import './App.css';
import Termekek from './componens/Termekek';
import {adatokLista} from './adatok';
import { useState } from 'react';

function App() {
  const [lista,setlista]=useState([])
  function katt(adat){
    const ujLista=[...lista]
    ujLista.push(adat)
    setlista([...ujLista])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <article>
      <Termekek lista={adatokLista} katt={katt}/>
      </article>
      <aside>
          <h2>Kiválasztott lista</h2>
          <Termekek lista={lista} katt={katt} />
      </aside>
      <footer><p>Dobszay Dorka</p></footer>
    </div>
  );
}

export default App;
