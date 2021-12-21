import { Routes, Route } from 'react-router-dom'
import './App.css'
// import NavbarMenu from './components/Navbars/NavbarMenu'
import Navbars from './components/Navbars/Navbars'
import Home from './views/Home/Home'
import SignIn from './views/SignIn/SignIn'
import SignUp from './views/SignUp/SignUp'

const App = function () {
   return (
      <>
         <Navbars />
         {/* <NavbarMenu /> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
         </Routes>
      </>
   )
}

export default App
