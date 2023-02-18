import './App.css'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth'



//components



const App = () => {
  return (
      <div>
        <AuthProvider>
      
      <Outlet />
      
      </AuthProvider>
    </div>
  )
}

export default App
