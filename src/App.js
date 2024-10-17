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
        <p>IKEA</p>
      </header>
      <main>
      <article>
        <h2>Termékek</h2>
        <Termekek lista={adatokLista} katt={katt}/>
      </article>
      <aside>
          <p>A kosár tartalma</p>
          <p>A kosárba {} könyv van</p>
          <p>A kosárban levő könyyvek összege: {}</p>
          <Termekek lista={lista} katt={katt} />
      </aside>
      
      <footer><p>Dobszay Dorka</p></footer>
      </main>
    </div>
  );
}

export default App;
