import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Account from './Components/Pages/Account';
import Courses from './Components/Pages/Courses';
import Detail from './Components/Pages/Detail';
import Blog from './Components/Pages/Blog'
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './Components/Pages/Home.';
import SignUp from './Components/Pages/SignUp';



function App() {
  return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            {/* <Route path='/about' element={<About/>}/> */}
            <Route path='/account' element={<Account/>}/> 
            <Route path='/blog' element={<Blog/>}/> 
            <Route path='/courses'  element={<Courses/>}/>
            <Route path='/detail' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
        
  )
}

export default App;
