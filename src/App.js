import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Comments from "./pages/Comments/comments";
import UserDetails from "./pages/UserDetails";



function App() {
  return (
    <div>
      <div>
        <h2>menu</h2>
        <ul>
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/layout'}>layout</Link></li>
          <li><Link to={'/about'}>about</Link></li>
        </ul>
      </div>

      <div>
        <h2>content</h2>

        <Routes>
          <Route index element={<Home/>}/>
          <Route path={'/layout'} element={<Layout/>}>
              <Route path={'users'} element={<Users/>}/>
              <Route path={':id'} element={<UserDetails/>}/>

          </Route>
        <Route path={'posts'} element={<Posts/>}/>
        <Route path={'comments'} element={<Comments/>}/>
            <Route/>
          <Route path={'/about'} element={<About/>}/>

        </Routes>
      </div>
    </div>



  );
}

export default App;
