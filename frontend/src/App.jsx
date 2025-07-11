import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage"
import PropertyPage from "./pages/PropertyPage";

import Navbar from "./components/Navbar";
import About from "./components/About";

import ScrollToTop from "./components/ScrollToTop";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import { DiscussPropertyPage } from "./pages/DiscussPropertyPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative ">
      {/* Background gradient */}
      {/* <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
        </div>
      </div> */}

      {/* Navbar is sticky and always visible */}
      <Navbar />
      <ScrollToTop />

      {/* Page Content */}
      <div className="relative z-40">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/property' element={<PropertyPage />} />
          <Route exact path="/property/:id" element={<PropertyDetailPage />} />
          <Route exact path="/discuss-property" element={<DiscussPropertyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
