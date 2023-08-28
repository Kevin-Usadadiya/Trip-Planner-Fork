import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Stories from './components/Stories/Stories'
import Tours from './components/Tours/Tours'
import Form from './components/Form/Form';
import Login from './components/RegistrationAndLogin/Login';
import Footer from './components/Footer/Footer';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/RegistrationAndLogin/SignUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {

  
  return (
    <>


     <BrowserRouter>
       <AuthContextProvider>

       <ScrollToTop /> 

     <Navbar/>
       <Routes>
       
         <Route exact path='/' element={
           <>
           
           <Home />
           <Footer/>
           </>
         }>

         </Route>

         <Route exact path='/tours' element={
           <>
             
             <Tours/>
             <Footer/>
           </>
         }>
       </Route>

         <Route exact path='/stories' element={
           <>
           
             <Stories/>
             <Footer/>
           </>
         }>
       </Route>
         <Route exact path='/planner' element={
           <>
           
             <Form/>
             <Footer/>
           </>
         }>
       </Route>

         <Route exact path='/login' element={
           <>
             <Login/>
             <Footer/>
           </>
         }>
       </Route>

         <Route exact path='/signup' element={
           <>
             <SignUp/>
             <Footer/>
           </>
         }>
       </Route>
       </Routes>
       </AuthContextProvider>
     </BrowserRouter>


    
    </>
  );
}


