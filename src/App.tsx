import { useEffect } from "react";
import { AppRoutes } from "./routes/Router";
import api from '@/Api'

export function App() {
  useEffect(() => {
    api.get('/').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      <AppRoutes />
    </div>
  )
}
