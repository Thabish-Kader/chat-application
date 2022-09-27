import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './Pages/Banner';
import { Issue } from './Pages/Issue';
import { Login } from './Pages/Login';
import { Services } from './Pages/Services';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      {/* <Login/> */}
      <Services/>
      <Issue/>
    </div>
  );
}

export default App;
