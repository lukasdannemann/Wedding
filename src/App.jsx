
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tal from './components/Tal'
import Osa from './components/Osa'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <Router>
      <Header />
      <div className="app">
        {/* <Navigation /> */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/osa" element={<Osa />} />
            <Route path="/tal" element={<Tal />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
