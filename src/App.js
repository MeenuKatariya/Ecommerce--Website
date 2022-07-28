
import './App.css';

import  Navbar  from './Components/Navbar';
import {Home} from "./Components/Home"
import {Login} from "./Components/pages/Login"
import { Pages } from './Components/pages/Pages';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Pages/>
    </div>
  );
}

export default App;
