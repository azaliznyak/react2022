import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";



function App() {
  return (

      <div>

        <Routes>
           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<HomePage/>}/>
               <Route path={'users'} element={<UsersPage/>}/>
               <Route path={'posts'} element={<PostsPage/>}>
               <Route path={':postId'} element={<PostDetailsPage/>}/>
               </Route>


               <Route path={'about'} element={<AboutPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>


        </Routes>

      </div>



  );
}

export default App;
