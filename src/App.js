import "./App.css";
import Termekek from "./componens/Termekek";
import { adatokLista } from "./adatok";
import { useState } from "react";

function App() {
  const [lista, setlista] = useState([]);
  const [db, setdb] = useState(0);
  const [ar, setar] = useState(0);
  function katt(adat) {
    const ujLista = [...lista];
    ujLista.push(adat);
    setlista([...ujLista]);
    let d = db;
    d++;
    setdb(d);
   

    let a = ar;
    a= a + adat.ar;
    setar(a);
   
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
        <p>IKEA</p>
      </header>
      <main>
        <article>
          <Termekek lista={adatokLista} katt={katt} />
        </article>
        <aside>
          <p>A kosár tartalma</p>
          <p>A kosárba {db} db termék van</p>
          <p>A kosárban levő termékek összege: {ar} Ft</p>
          <Termekek lista={lista} katt={katt} />
        </aside>

        <footer>
          <p>Dobszay Dorka</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
