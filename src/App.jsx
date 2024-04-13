import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Goals from './pages/Goals'
import WorkoutTracker from './pages/WorkoutTracker'
import WorkoutSchedule from './pages/WorkoutSchedule'
import Layout from './pages/Layout'
function App() {
  

  return (
  <div className="mx-auto max-w-[375px] min-h-screen border-blue-300 border rounded-sm">
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='signin' element={<SignIn/>}/>
    <Route path='signup' element={<SignUp/>}/>
    <Route path='/goals' element={<Goals/>}/>
   <Route element={<Layout/>}>
   <Route path='/workout-tracker' element={<WorkoutTracker/>}/>
    <Route path='/workout-schedule' element={<WorkoutSchedule/>}/>
   </Route>
   </Routes>
  </div>
  )
}

export default App
