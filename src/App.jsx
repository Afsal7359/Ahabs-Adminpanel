import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Menu from './Pages/Menu';

const App = () => {
  return (
    <>
      <Router>
      <div className="main-wrapper">
        <Header/>
        <Sidebar/>
        <div className="page-wrapper">
            <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/Menu' element={<Menu/>}/>
              </Routes>
            </Suspense>
              </div>
            </div>
      </div>
      </Router>
    </>
  )
}

export default App