import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import i1 from './home.png'

// Swiper Js Library Modules.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function Home() {

  // Arrays of Objects ==> All data like Images, Content, etc..
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
    <div className='home_body'>

      {/* ============================= Home Page Main Photo ============================= */}
      <div className='home_photo'>
        <img src={i1} alt="HOMEPICTURE" />
      </div>

      {/* ============================= Most Popular Tours ============================= */}

      <div className='tours_container'>
        <h1><strong>MOST POPULAR TOURS</strong></h1>

        <div className='card_main'>
          {
            cardData.map((item, index) => {
              return (
                <div key={index} className='card'>
                  <img src={item.url} className='card_image' alt={item.title} />
                  <div className='card_body'>
                    <h1 className='card_title'>{item.title}</h1>
                    <p className='card_sub_title'><strong>{item.subtitle}</strong></p>
                    <p className='card_info'>{item.info}</p>
                    <button className='card_btn'>Book Now</button>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='discover_tours_button_div'>
          <button className='discover_tours_button'>
            <Link to="/tours"><strong>Discover Tours</strong>
            <img src="https://i.ibb.co/WPLX80k/right-arrpw.png" alt="right arrow" /></Link>       
          </button>
        </div>

      </div>
      {/* ============================= Explore Nomadic Logos ============================= */}

      <div className="explore_container">
        <h1>
          Explore Nomadic Trips
        </h1>
        <div className="explore_container_inner">
          {
            exploreData.map((item, index) => {
              return (
                <div key={index} className="explore_container_inner_card">
                  <img src={item.url} alt="item" />
                  <h2>{item.title}</h2>
                </div>
              )
            })
          }
        </div>
        <div className='discover_tours_button_div'>
          <button className='discover_tours_button'>
            <Link to="/stories"><strong>Discover Places</strong>
            <img src="https://i.ibb.co/WPLX80k/right-arrpw.png" alt="right arrow" /></Link>       
          </button>
        </div>

      </div>

      {/* ============================= Reviews ============================= */}
          <div className='home_reviews'>
              <h1>
                  Customer Reviews
              </h1>
          
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >

        {
            reviewData.map((data, index)=>{
              return(
                <>
                <SwiperSlide key={index}>
                  <div className='swipe_slide_div'>
                    <img src={data.url} alt="Review" className='review_image' />
                    <p className='review_star'>{data.rating}</p>
                    <p className='review_para'>{data.review_content}</p>
                  </div>
                </SwiperSlide>
                </>
              )
            })
        }
      </Swiper>
      </div>
    </div>           

  )
}

export default Home
