import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Tasks from './Components/Tasks'
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Tasks />} path='/tasks' />
          <Route element={<Update />} path='/update/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
