import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
function App() {

  return (
    <div className="App">
       <BrowserRouter>
           <Routes>
                <Route path={'/'} element={<Login/>} />
                <Route path={'/dashboard'} element={
                  <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>} />
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
