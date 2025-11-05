import React from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Universities from './pages/Universities'
import UniversityDetails from "./pages/UniversityDetails";

function App() {
  return (
    <div>
      <Router>
        <div className='flex'> 
          <Sidebar/>
          <div className='flex-1 p-5'
          >
            <Routes>
              <Route path='/universities' element={<Universities/>} />
              <Route path="/universities/:id" element={<UniversityDetails />} />
              <Route path= '/courses' element={<h1>Courses</h1>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
