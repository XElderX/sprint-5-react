import {BrowserRouter,Routes, Route} from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Greeter from './components/greeter/Greeter';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Greeter/>}/>
      <Route path ='*' element={ <main style={{padding:"1rem", color: "red"}}>
        <h3>Unfortunately &#x2639; There's nothing to show</h3>
      </main>}/>
      <Route path='/greeter' element={<Greeter />}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
