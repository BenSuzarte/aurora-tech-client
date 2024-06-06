import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from '@/pages/SignIn'
import { Register } from '@/pages/Register'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <SignIn/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
      </Routes>
    </Router>
  )
}
