import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import DeveloperPortal from './pages/DeveloperPortal'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BecomeADeveloper from './pages/BecomeADeveloper'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/developer-portal' element={<DeveloperPortal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/become-a-developer' element={<BecomeADeveloper />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
