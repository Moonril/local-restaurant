import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import LandingPage from './components/LandingPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/home' element={<HomePage />}  />
        {/* <Route path='/recipe/:id' element={<RecipePage />}  /> */}
        <Route path='*' element={<NotFound />}  />
      </Routes>
    </>
  )
}

export default App
