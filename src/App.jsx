
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tal from './components/Tal'
import Osa from './components/Osa'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ScrollToTopBtn from './components/ScrollToTopButton/ScrollToTopBtn'
import Footer from './components/Footer/Footer'
import { LanguageProvider } from './context/LanguageContext'

function App() {

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Navigation />
        <div className="app">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/osa" element={<Osa />} />
              <Route path="/tal" element={<Tal />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ScrollToTopBtn />
      </Router>
    </LanguageProvider>
  )
}

export default App
