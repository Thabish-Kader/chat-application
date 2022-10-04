import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './Pages/Banner';
import { Issue } from './Pages/Issue';
import { IssuesList } from './Pages/IssuesList';
import { Register } from './Pages/Register';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './Pages/Main';
import { LoginPage } from './Pages/LoginPage';
import { Facilities } from './Pages/Facilities';
import { ChatRoom } from './Pages/Chat/ChatRoom';

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
        <Route path='/services' element={<Facilities/>}/>
        <Route path='/issue' element={<Issue/>}/>
        <Route path='/issueslist' element={<IssuesList/>}/>
        <Route path='/chat' element={<ChatRoom/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
