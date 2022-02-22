// 1 .IMPORTACIÓN

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'


// 2. FUNCION (COMPONENTE)

/* ej
function suma(a,b) {
  return a + b
}

suma(1,2)

*/



function App() {

  const name = "Mauricio"

  return (
    <div className="App">
      <Header nombre={name}/>
      <Footer nombre={name}/>
    </div>
  );
}


// 3.EXPORTACIÓ
// module.expors = App
export default App;
