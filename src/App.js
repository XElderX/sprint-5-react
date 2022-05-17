import {HashRouter,Routes, Route} from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Greeter from './components/greeter/Greeter';
import ShoppinApp from './components/shoppinApp/ShoppinApp';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Navigation />
      <Routes>
        <Route index element={<Greeter/>}/>
      <Route path ='*' element={ <main style={{padding:"1rem", color: "red"}}>
        <h3>Unfortunately &#x2639; There's nothing to show</h3>
      </main>}/>
      <Route path='/greeter' element={<Greeter />}/>
      <Route path='/shoppinApp' element={<ShoppinApp />}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
