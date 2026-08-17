
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tal from './components/Tal'
import Osa from './components/Osa'
import Gavor from './components/Gavor/Gavor'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ScrollToTopBtn from './components/ScrollToTopButton/ScrollToTopBtn'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Footer from './components/Footer/Footer'
import CodeGate from './components/CodeGate/CodeGate'
import ErrorPage from './components/ErrorPage/ErrorPage'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider, useAuth } from './context/AuthContext'

function Layout() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="app">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}

function AppContent() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <CodeGate />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/osa" element={<Osa />} />
          <Route path="/tal" element={<Tal />} />
          <Route path="/gavor" element={<Gavor />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App
