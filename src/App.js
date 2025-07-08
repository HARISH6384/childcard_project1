 import { BrowserRouter,Routes,Route } from "react-router-dom" 
 import Home from './components/Home'
 import Nav from "./components/Nav"
 import Footer from './components/Footer'
 import Contact from './components/Contact'
 import Blog from './components/Blog'
 import Babies from "./components/Babies"
 import Sensoryplay from './components/Sensoryplay'
  

 
 


 function App(){
  return(

<>
 
<BrowserRouter>
<Nav/>


 
  <Routes>
    
   <Route path="/Home" element={<Home/>}/>
   <Route path="/Blog" element={<Blog/>}/>
   <Route path="/Babies" element={<Babies/>}/>
   <Route path="/SensoryPlay" element={<Sensoryplay/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    
     
    </Routes>  
    <Footer/>
    </BrowserRouter>
   


</>

  )
 }
 export default App