import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HedNavbar from './component/navbar/HedNavbar';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import AboutUs from './component/about/AboutUs';
import Blog from './component/blog/Blog';
import BlogSinglePage from './component/blog/BlogSinglePage';
import News from './component/news/News';
import FeaturesPage from './component/features/FeaturesPage';
import ContactUs from './component/user/ContactUs';
import Login from './component/user/Login';
import Register from './component/user/Register';
import Services from './component/Services/Services';
import TermAndCondition from './component/pages/TermAndCondition';
import PrivacyPolicy from './component/pages/PrivacyPolicy'
import MarketingPage from './component/pages/MarketingPage';
function App() {

  return (
    <>
      <Router>
      <div className="app-container">
      <HedNavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogSinglePage" element={<BlogSinglePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/featuresPage" element={<FeaturesPage />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/contactus' element={<ContactUs />}></Route>

              {/* Terms and Condition , Privacy & Policy Page , Marketing */}
            <Route path="/TermAndCondition" element={<TermAndCondition />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/MarketingPage" element={<MarketingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
