import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import { Signin } from "./pages/Signin"
import Signup from "../src/pages/Signup"
import Createpost from "./pages/Createpost"
import Logout from "./pages/Logout"
import Footer from "./components/Footer"
import BlogDetail from "./pages/BlogDetail"
import MyPosts from "./pages/MyPosts"
import ProtectedRoute from "./Auth/protectedRoute"
export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    
      <Route path="/blog/:id" element={<BlogDetail/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route
            path="/create-post"
            element={<ProtectedRoute element={<Createpost />} />}
          />
      <Route path="/my-posts" element={<MyPosts />} />
      <Route path="/log-out" element={<Logout/>}/>
      
    </Routes>
    <Footer/>


    </BrowserRouter>
  )
}