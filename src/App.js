
import './App.css';
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import Posts from "./components/Posts/Posts";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
  return (
      <div>

<Routes>
  <Route path={'/'} element={<MainLayout/>}>
    <Route path={'albums'} element={<AlbumsPage/>}/>
    <Route path={'comments'} element={<CommentsPage/>}>
      <Route path={':postId'} element={<Posts/>}/>
    </Route>
    <Route path={'todos'} element={<TodosPage/>}/>


  </Route>
    <Route path={'*'} element={<NotFoundPage/>}/>

</Routes>

</div>
  );
}

export default App;
