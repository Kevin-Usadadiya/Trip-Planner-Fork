import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Stories from './components/Stories'
import Tours from './components/Tours'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>


     {/* <BrowserRouter>
       

       <Routes>
       
         <Route exact path='/' element={
           <>
           <Navbar/>
           <Home />
           </>
         }>

         </Route>

         <Route exact path='/tours' element={
           <>
             <Navbar/>
             <Tours/>
           </>
         }>
       </Route>

         <Route exact path='/stories' element={
           <>
             <Stories/>
           </>
         }>
       </Route>
       </Routes>
     </BrowserRouter>
 */}

    
    </>
  );
}

export default App;
