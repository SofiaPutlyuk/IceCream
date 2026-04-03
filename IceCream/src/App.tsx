import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import ErrorPage from './components/pages/ErrorPage/ErrorPage'
import HomePage from './components/main/HomePage/HomePage'
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage'
import OurTeamPage from './components/pages/OurTeamPage/OurTeamPage'
import ReviewPage from './components/pages/ReviewPage/ReviewPage'
import ComingSoonPage from './components/pages/ComingSoonPage/ComingSoonPage'
import CheckOutPage from './components/pages/CheckOutPage/CheckOutPage'
import IceCreamsPage from './components/pages/IceCreamsPage/IceCreamsPage'
import ShowIceCreamPage from './components/pages/ShowIceCreamPage/ShowIceCreamPage'
import ConatctUsPage from './components/pages/ContactUsPage/ContactUsPage'
import FaqPage from './components/pages/FaqPage/FaqPage'
import ThankYouPage from './components/pages/ThankYouPage/ThankYouPage'
import TermsAndContidionPage from './components/pages/TermsAndContidionPage/TermsAndContidionPage'
import SpecialOffersPage from './components/pages/SpecialOffersPage/SpecialOffersPage'
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart'
import JourneyPage from './components/pages/JourneyPage/JourneyPage'
import BlogPage from './components/pages/BlogPage/BlogPage'
import MissionPage from './components/pages/MissionPage/MissionPage'
import Login from './components/User/Login/Login'
import Registration from './components/User/Registration/Registration'
function App() {
  return (
      <Routes>
        <Route path="/" element={<LayOut />} >
          <Route index element={<HomePage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
          <Route path="team" element={<OurTeamPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="soon" element={<ComingSoonPage />} />
          <Route path="checkOut" element={<CheckOutPage />} />
          <Route path="contactUs" element={<ConatctUsPage />} />
          <Route path="iceCreams" element={<IceCreamsPage />}>
            <Route path=":id" element={<ShowIceCreamPage />} />
          </Route>
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="special" element={<SpecialOffersPage />} />
          <Route path="mission" element={<MissionPage />} />
          <Route path="terms" element={<TermsAndContidionPage />} />
          <Route path="thank" element={<ThankYouPage />} />
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Registration/> }/>
        </Route>
      </Routes>
  )
}

export default App
