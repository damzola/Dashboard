import {Routes, Route} from 'react-router-dom'
import Home from './module/home'
import Dashboard from './module/dashboard'
function App() {
  return (
    <>
    <div style={{backgroundColor: "#efede1"}}>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
    </div>

    </>
  )
}

export default App
