import { Route, Routes } from "react-router-dom"
import { Router } from "./components/Router"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function App() {

  return (
    <main className='w-screen h-screen flex flex-col overflow-hidden'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/*' element={<Router />} />
      </Routes>

    </main>
  )
}

export default App
