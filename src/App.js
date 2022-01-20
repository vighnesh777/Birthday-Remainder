
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './components/Home/Home';
import Today from './components/Today/Today';
import Add from './components/Add/Add';
function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>} exact/>
          <Route path="/today" element={<Today/>} exact/>
          <Route path="/add" element={<Add/>} exact/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
