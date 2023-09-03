import React from 'react'
// import './Blog.css'
// import { useLocation } from 'react-router-dom';

function Blog() {
    // const location = useLocation();
    // const city = location.state.data;
    // console.log(city)
    const Blog_arry = [{
        "name": "New Delhi",
        "img_source": "",
        "details": [
            "Delhi - the capital city of India is popular for its rich cultures and traditions. The city hosts some of the most majestic historical monuments and architectural marvels along with beautiful gardens and modern-day entertainment sites. In short, the city is a delight to people of every age.",
            "Delhi is officially both a Union Territory and City located in Northern India. It covers an area of around 1484 sq km and bordered by the states of Haryana and Uttar Pradesh. It's officially referred to as the National Capital Territory of Delhi with New Delhi as its capital. The Urban area of the city consists of the satellite cities of Gurgaon, Noida, Ghaziabad and Faridabad, which are collectively called the Central National Capital Region (CNCR).",
            "Q : WHAT IS DELHI BEST KNOWN FOR?",
            "          The capital city of India has so many famous places for tourists to explore. Some of the popular places worth paying a visit are Qutab Minar, India Gate, Humayun's Tomb, Safdarjung Tomb, Red Fort, Purana Qila, Lodhi Garden, Jama Masjid, Lotus Temple, Akshardham, Garden of Five senses, Jantar Mantar, Agrasen ki Baoli, Rashtrapati Bhawan, ISKCON Temple, Gurudwara Bangla Sahib and more.",
            "There are so many things Delhi is best known for. Delhi is popular for its ancient Mughal era's monuments. Delhi is popular for its mouth-watering spicy streets food. The cheap shopping places like Sarojni, Lajpat, Chandni Chowk, Palika make Delhi one of the best shopping destinations in the country. Delhi was the first city to incorporate Metro services. It's Metro connectivity and service is by far the best in the country. Delhi University is considered as one of the top universities in Asia. Students from different parts of the country and around the globe come here for pursuing further studies."
        ]
    }]
  return (
    <div>
      
                <div className='blog_start'>
               <h1 className='blog_title'>India Travel & tourism Blog</h1>
               <p className="blog_caption">Looking for something useful to read about travelling in India? You've come to the right place. Join the league of readers who find here detailed insights, interesting travel tips and ideas and daily inspiration.</p>


               </div> 
                <section className='bloglink'>
                <div className='container'>
                <div className='row'>
                <div className='col'>
                <ul className='left_link'>
                    <li><a href='#' className='menu-list'>Mumbai</a></li>
                    <li><a href='#' className='menu-list'>Manali</a></li>
                    <li><a href='#' className='menu-list'>Shimala</a></li>
                    <li><a href='#' className='menu-list'>Kochi</a></li>
                    <li><a href='#' className='menu-list'>Goa</a></li>
                    <li><a href='#' className='menu-list'>Shimala</a></li>
                    <li><a href='#' className='menu-list'>Ahmedabad</a></li>
                </ul>

                </div>
                <div className='search_div'>
                <form action="" id="searchform" method="get" role="search">
          <input type="text" value="" name="s" id="s" className="inpt" placeholder="Search.."/>
          <input type="submit" id="searchsubmit" value="" className="butn"/> 
		  </form>
          </div>
                </div>

                </div>

                </section>

          {
                
                
                Blog_arry.map((list) => {
                    return (<>
                      
                       <div className='hentry'>
                            <h2 className='blog_heading'>{list.name}</h2>
                        
                            <div className='blog_img'>

                                <img src={list.img_source} alt='sorry' className='' />
                            </div>
                            </div>
                         
                        
                            <div className='flex-row'>

                            <div className='flex-child-element1 hentry_description '>
                                {
                                    
                                    list.details.map((para) => {
                                        return (
                                            <>
                                                    <p>{para}</p>
                                                    
                                            </>
                                        )
                                    })
                                    
                                }
                                <a href='#' className='blog_btn'>Read more</a>
                                </div>
                       
                        <div className='flex-child-element2 hentry-card'>
                        <h2>Our Featured Posts</h2>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Islands-Near-Phi-Phi_6th-dec-400x229.jpg" alt='sorry' className='blog_photo'></img>
                        <a href="#" className='blog_btn'>6 Adventure Sports In Kochi That Will Let You Challenge Your Fears In 2023!</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Ahmedabad-18th_nov-400x225.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>Top 26 Places To Visit Near Ahmedabad On Your Gujarat Vacation </a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Apple-Country-Resort-400x267.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>10 Best Resorts In Manali To Pamper The Nature Lover In You</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2023/07/Mumbai-Cover.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>8 Best Places To Visit In Mumbai For 2 Days</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://i.ibb.co/9qsV8Mt/jaipur.png" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>“The In-Depth Guide To… jaipur”</a>
                        </div>
                        </div>
                        </div>
                      
                    </>)
                })
            } 

    {/* <div>
      <h2>{city.title}</h2>
      <p>{city.description}</p>
      Additional blog content can be added here
    </div> */}
       
    </div>
  )
}

export default Blog
