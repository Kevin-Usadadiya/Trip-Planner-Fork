import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Tours.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Tours() {

  const tours_data = [
  { title : "New Delhi",
    sub_title : "Delhi NCR",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/cwY6Hnc/delhi.png"
  },
  { title : "GOA",
    sub_title : "Beaches",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/RSkqkng/beach-chair.png"
  },
  { title : "Agra",
    sub_title : "Heritage City",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/zhV3Rsv/taj-mahal.png"
  },
  { title : "Kochi",
    sub_title : "City of Rivers",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/CBQRj31/kochi.png"
  },
  { title : "Mysore",
    sub_title : "City of Artifacts",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/pfJ10zf/mysore.png"
  },
  { title : "Shimla",
  sub_title : "City of Visitors",
  description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
  img : "https://i.ibb.co/7nDKgQ6/shimla.png"
},
  { title : "Mumbai",
    sub_title : "City of Richness",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/hfJSnXc/goi.png"
  },
  { title : "Jaipur",
    sub_title : "The Pink City",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/9qsV8Mt/jaipur.png"
  },

  { title : "Sikkim",
    sub_title : "Delhi NCR",
    description: "New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT).",
    img : "https://i.ibb.co/kxW7J3V/Sikkim.png"
  }
  ]
  return (
    <>    
      <div className='tours_main_container'>
        <div>

        </div>

        <div className='tours_city_main_container'>
            <div className='tours_heading'>
              <h1>Cities to Explore</h1>
            </div>
            <div>
            <Swiper
                    
                    // centeredSlides={true}
                    breakpoints={{
                      300: {
                        // width:300,
                        slidesPerView:1,
                      },
                      // when window width is >= 640px
                      640: {
                        // width: 640,
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        // width: 768,
                        slidesPerView: 2,
                      },
                      1180: {
                        // width: 768,
                        slidesPerView: 3,
                      },
                    }}
                    spaceBetween={20}
                    slidesPerView={2}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[ Autoplay,Pagination, Navigation]}
                    
                    className="mySwiper"
                  >
                    {
                      tours_data.map((data,index)=>{
                        return(
                          <>
                          <SwiperSlide>
                            <div className='tours_main_card' key={index}>
                              <div className='tours_main_card_icon'>
                                <img src={data.img} alt={data.title} />
                              </div>

                              <div className='tours_main_card_content'>
                                <h1>{data.title}</h1>
                               <p>✨{data.sub_title}✨</p>
                                <div className='tours_main_card_subcontent'>{data.description}</div>
                                

                              </div>
                              <div className='tour_main_card_utils'>
                                <button className='tour_main_card_button'>Read More</button>
                                <button className='tour_main_card_button'>Book Now</button>
                              </div>
                              {/* <ul style={{display: 'flex'}}>
                                <li style={{margin: '10px'}}>{data.place1}</li>
                                <li style={{margin: '10px'}}>{data.place2}</li>
                                <li style={{margin: '10px'}}>{data.place3}</li>
                              </ul> */}
                            </div>
                          </SwiperSlide>
                          </>
                        )
                      })
                    }
        
      </Swiper>
            </div>
        </div>

        <div>

        </div>
      </div>
    </>
  )
}

export default Tours
