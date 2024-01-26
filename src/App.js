import {BrowserRouter, Routes , Route} from "react-router-dom";
 import Layout from "./Layout";
 import Home from "./Home";
 import About from "./About";
 import Contact from "./Contact";
 import Service from "./Service";
 import Counter from"./Counter";
 import Effect from "./Effect";
 export default function App(){
   return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="service" element={<Service/>}/>
       <Route path="counter" element={<Counter/>}/>
       <Route path="effect" element={<Effect/>}/>


     </Route>
     </Routes>
     </BrowserRouter>
  )
} 