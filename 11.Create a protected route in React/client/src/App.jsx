import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';


function Login() {
  return <h1>Login Page</h1>
}
function Home() {
 return  <h1>Home Page</h1>
}


function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/login' element={<Login/>} />

        <Route path='/home' element={

          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}
export default App;