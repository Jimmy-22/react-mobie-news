import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Layout from './pages/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Layout/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
