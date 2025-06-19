import {Routes, Route} from 'react-router-dom'
import Home from './module/home'
import Dashboard from './module/dashboard'
import User from './module/users'
import Report from './module/report'
import Setting from './module/setting'
import Dashboardnav from './navigation/dashboardnav'
function App() {
  return (
    <>
    {/* <div style={{backgroundColor: "#efede1"}}> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route element={<Dashboardnav/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/setting' element={<Setting/>}/>

        </Route>
        
      </Routes>
    {/* </div> */}

    </>
  )
}

export default App
