import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import ClassNames from './pages/ClassNames'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/test" element={<ClassNames />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
