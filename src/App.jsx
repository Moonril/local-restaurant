import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Navbar from './components/Navbar'

function App() {

  const location = useLocation()


  return (
    <>
    { location != 'http://localhost:5173/' &&
      (
        <Navbar  />

      )

    }
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/home' element={<HomePage />}  />
        {/* <Route path='/recipe/:id' element={<RecipePage />}  /> */}
        <Route path='*' element={<NotFound />}  />
        <Route path='/login' element={<Login />}  />
      </Routes>
    </>
  )
}

export default App
