import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './Pages/Banner';
import { Issue } from './Pages/Issue';
import { IssuesList } from './Pages/IssuesList';
import { Register } from './Pages/Register';
import { Services } from './Pages/Services';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { LoginPage } from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/home' element={<Banner/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/issue' element={<Issue/>}/>
        <Route path='/issueslist' element={<IssuesList/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
