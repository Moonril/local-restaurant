import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import BookingPage from './components/BookingPage'
import Backoffice from './components/backoffice/Backoffice'

function App() {

  const location = useLocation()


  
  return (
    <>
    { location.pathname != '/' &&
      (
        <Navbar  />

      )

    }
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/backoffice' element={<Backoffice />}  />
        <Route path='/home' element={<HomePage />}  />
        {/* <Route path='/recipe/:id' element={<RecipePage />}  /> */}
        <Route path='*' element={<NotFound />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/reservar' element={<BookingPage />}  />
      </Routes>
    </>
  )
}

export default App
