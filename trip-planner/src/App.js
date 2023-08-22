import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Stories from './components/Stories/Stories'
import Tours from './components/Tours/Tours'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const cardData = [
    {title: "Taj Mahal", url: "https://i.ibb.co/jWrY1Nh/tajmahal.jpg", subtitle:"One of the 7 Wonders", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente qui sit saepe libero expedita"},

    {title: "Golden Temple", url: "https://i.ibb.co/h11rJVF/golden-temple.jpg", subtitle:"A Gem to Watch", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente qui sit saepe libero expedita"},

    {title: "Shimla", url: "https://i.ibb.co/M7JVY7q/north.jpg", subtitle:"The Best Hill Station in India", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente qui sit saepe libero expedita"},
  ]

  const exploreData = [
    {title:"BACKPACKING ",url:"https://i.ibb.co/vdh103q/holiday.png"},
    {title:"RELIGIOUS ",url:"https://i.ibb.co/rGVP8bN/temple.png"},
    {title:"MONUMENTAL ",url:"https://i.ibb.co/hfJSnXc/goi.png"},
    {title:"HIKING ",url:"https://i.ibb.co/71qsf7V/hiking.png"},
  ]
  const reviewData = [
    {url : "https://i.ibb.co/NFD7mxk/e.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?" ,rating : "⭐⭐⭐⭐⭐"},

    {url : "https://i.ibb.co/995LbFg/c.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?",rating : "⭐⭐⭐⭐"},

    {url : "https://i.ibb.co/MVzCMJq/b.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?",rating : "⭐⭐⭐⭐"},

    {url : "https://i.ibb.co/dL14kSY/a.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?",rating : "⭐⭐⭐"},

    {url : "https://i.ibb.co/7pwNKhq/hero.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?",rating : "⭐⭐⭐⭐⭐"},

    {url : "https://i.ibb.co/m6gMpj5/g.jpg", review_content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. uos voluptate harum. Magni rerum nulla ex facilis aliquam non?",rating : "⭐⭐⭐⭐"}
  ]
  return (
    <>


     <BrowserRouter>
       
     <Navbar/>
       <Routes>
       
         <Route exact path='/' element={
           <>
           
           <Home cardData = {cardData} exploreData = {exploreData} reviewData = {reviewData}/>
           </>
         }>

         </Route>

         <Route exact path='/tours' element={
           <>
             
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
       <Footer/>
     </BrowserRouter>


    
    </>
  );
}

export default App;
