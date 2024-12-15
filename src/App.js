import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Gallery from './Components/Gallery/Gallery';
import Questions from './Components/Questions/Questions';
import Articles from './Components/Articles/Articles';
import Info from './Components/Info/Info';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


let routes = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'Questions', element: <Questions /> },
      { path: 'articles', element: <Articles /> },
      { path: 'info', element: <Info /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ]
  }
]);
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
