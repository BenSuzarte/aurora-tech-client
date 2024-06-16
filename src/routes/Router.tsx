import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from '@/pages/SignIn'
import { Register } from '@/pages/Register'
import Jobs from '@/pages/Jobs/Jobs'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <SignIn/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/jobs" element={ <Jobs/> }></Route>
      </Routes>
    </Router>
  )
}
