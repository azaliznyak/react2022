
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import TodosPage from "./pages/TodosPage/TodosPage";


function App() {
  return (

      <div>
          <Routes>

          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'albums'} element={<AlbumsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>
              <Route path={'todos'} element={<TodosPage/>}/>

          </Route>


      </Routes>
      </div>
  );
}

export default App;
