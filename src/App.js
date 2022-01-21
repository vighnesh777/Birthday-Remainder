
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './components/Home/Home';
import Today from './components/Today/Today';
import Add from './components/Add/Add';
function App() {
  return (
    <div className="App">
<BrowserRouter>
        <Routes>

          <Route path="/" element={<Add/>} exact/>
          <Route path="/today" element={<Today/>} exact/>
          <Route path="/all" element={<Home/>} exact/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
