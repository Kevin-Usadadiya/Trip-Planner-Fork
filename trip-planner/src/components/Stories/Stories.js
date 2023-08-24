
import React from "react";
import { useState } from "react";
import "./Stories.css";
// import Blog from './components/Blog/Blog';

function Stories() {
  const cards = [
    {
      image: "https://i.ibb.co/jMtRYRg/lehpalace.jpg",
      title: "Leh Palace",
      text: "The Leh Palace is a historical royal palace which looks over the town of Leh-Ladakh amid the spectacular Himalayan mountain range. Sengge Namgyal built this majestic palace in 1600.",
      category: "Palace",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/8zSNWZR/christ-church-shimla.jpg",
      title: "Christ Church Shimla",
      text: "During the British Raj in India, the area around the church was occupied by a huge flock of Britishers and Anglo-Indians. Since they were the followers of Christianity, they asked the government to build a place of worship for them.",
      category: "Church",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/frTL7Xt/redfort.jpg",
      title: "Card-4",
      text: "Delhi, the capital of India has become a major tourist attraction over the years. The place has a vast history which is a major reason for a lot of people visiting the place. It is the heart of India. ",
      category: "Forts",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/jMtRYRg/lehpalace.jpg",
      title: "Card-5",
      text: "Delhi, the capital of India has become a major tourist attraction over the years. The place has a vast history which is a major reason for a lot of people visiting the place. It is the heart of India. ",
      category: "Palace",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/jMtRYRg/lehpalace.jpg",
      title: "Card-6",
      text: "Delhi, the capital of India has become a major tourist attraction over the years. The place has a vast history which is a major reason for a lot of people visiting the place. It is the heart of India.",
      category: "Church",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/jMtRYRg/lehpalace.jpg",
      title: "Card-7",
      text: "Delhi, the capital of India has become a major tourist attraction over the years. The place has a vast history which is a major reason for a lot of people visiting the place. It is the heart of India.",
      category: "Church",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/jMtRYRg/lehpalace.jpg",
      title: "Card-8",
      text: "Delhi, the capital of India has become a major tourist attraction over the years. The place has a vast history which is a major reason for a lot of people visiting the place. It is the heart of India.",
      category: "Forts",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/8zSNWZR/christ-church-shimla.jpg",
      title: "Christ Church Shimla",
      text: "During the British Raj in India, the area around the church was occupied by a huge flock of Britishers and Anglo-Indians. Since they were the followers of Christianity, they asked the government to build a place of worship for them.",
      category: "Palace",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
    {
      image: "https://i.ibb.co/8zSNWZR/christ-church-shimla.jpg",
      title: "Christ Church Shimla",
      text: "During the British Raj in India, the area around the church was occupied by a huge flock of Britishers and Anglo-Indians. Since they were the followers of Christianity, they asked the government to build a place of worship for them.",
      category: "Forts",
      cimage: "https://i.ibb.co/7NVtRP4/pune.png",
      cname: "Pune",
    },
  ];

  const [image1, setImage] = useState(cards);
  const [imgstyle, setImgStyle] = useState("none");
  const [cardstyle, setCardStyle] = useState("grid");
  // const [readmore, setReadmore] = useState('')

  const allItem = () => {
    const finalData = cards.filter((value) => {
      setCardStyle("grid");
      if (imgstyle === "none") {
        setImgStyle("block");
      } else {
        setImgStyle("none");
      }
      return value;
    });
    setImage(finalData);
  };

  const specificImg = (C) => {
    const finalData = cards.filter((value) => {
      setCardStyle("none");
      if (imgstyle === "none") {
        setImgStyle("block");
      } else {
        setImgStyle("none");
      }
      return value.category === C;
    });
    setImage(finalData);
  };

  function onImageClick() {
    if (imgstyle === "none") {
      setImgStyle("block");
    } else {
      setImgStyle("none");
    }
  }

  // function savedetail(e){
  // setReadmore('Red Fort')
  // }
  return (
    <div>
      <div>
        <section>
          <div className="stories_main_container">
            <div class="stories_main_heading" style={{ textAlign: "center" }}>
              <h1>Some Famous Places Story</h1>
            </div>

            <div className="stories_input-icons">
              <form>
                <span>
                <i class="fas fa-search">
          </i>
                <input
                  type="text"
                  placeholder="Search Place"
                  className="stories_searchbar"
                />
               </span>
                {/* <img
                  src="https://i.ibb.co/sWtCf9G/search.png"
                  alt="search"
                  className="stories_search_btn"
                /> */}
              </form>
            </div>
            <br />
            <hr />
            <br />

            <div class="stories_filters">
              <div id="stories_div1">
                <div>
                  <button class="stories_btn" onClick={allItem}>
                    All
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Forts")}
                  >
                    Forts
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Church")}
                  >
                    Church
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Palace")}
                  >
                    Palace
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Temples")}
                  >
                    Temples
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Mountains")}
                  >
                    Mountains
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Beaches")}
                  >
                    Beaches
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Museum")}
                  >
                    Museum
                  </button>
                  <button
                    class="stories_btn"
                    onClick={() => specificImg("Wildlife")}
                  >
                    Wildlife
                  </button>
                </div>
              </div>

              <div id="stories_div2">
                <div className="stories_select_menu">
                  <div className="select-stories_btn" onClick={onImageClick}>
                    <span className="sBtn-text">Select You Vibe </span>
                    <img
                      src="https://i.ibb.co/P4R2qc2/larrow.png"
                      alt="lower arrow"
                      className="filter_larrow"
                    />
                  </div>
                  <div style={{ display: imgstyle }}>
                    <ul className="stories_options">
                      <li
                        style={{ "--delay": "1" }}
                        onClick={allItem}
                        className="stories_option"
                      >
                        <img src="https://i.ibb.co/ynMVSbS/all.png" alt="" />
                        <span className="option-text">All</span>
                      </li>
                      <li
                        style={{ "--delay": "2" }}
                        className="stories_option"
                        onClick={() => specificImg("Forts")}
                      >
                        <img src="https://i.ibb.co/FYTnCcd/fort.png" alt="" />
                        <span className="option-text">Forts</span>
                      </li>
                      <li
                        style={{ "--delay": "3" }}
                        className="stories_option"
                        onClick={() => specificImg("Church")}
                      >
                        <img src="https://i.ibb.co/3fV2JT8/church.png" alt="" />
                        <span className="option-text">Church</span>
                      </li>
                      <li
                        style={{ "--delay": "4" }}
                        className="stories_option"
                        onClick={() => specificImg("Palace")}
                      >
                        <img src="https://i.ibb.co/xsq4g66/palace.png" alt="" />
                        <span className="option-text">Palace</span>
                      </li>
                      <li
                        style={{ "--delay": "5" }}
                        className="stories_option"
                        onClick={() => specificImg("Temples")}
                      >
                        <img src="https://i.ibb.co/SPkc6T6/temple.png" alt="" />
                        <span className="option-text">Temple</span>
                      </li>
                      <li
                        style={{ "--delay": "6" }}
                        className="stories_option"
                        onClick={() => specificImg("Mountains")}
                      >
                        <img
                          src="https://i.ibb.co/ZcM301q/mountain.png"
                          alt=""
                        />
                        <span className="option-text">Mountain</span>
                      </li>
                      <li
                        style={{ "--delay": "7" }}
                        className="stories_option"
                        onClick={() => specificImg("Beaches")}
                      >
                        <img
                          src="https://i.ibb.co/2NxNTxZ/beaches.png"
                          alt=""
                        />
                        <span className="option-text">Beaches</span>
                      </li>
                      <li
                        style={{ "--delay": "8" }}
                        className="stories_option"
                        onClick={() => specificImg("Museum")}
                      >
                        <img src="https://i.ibb.co/0hBnZnH/museum.png" alt="" />
                        <span className="option-text">Museum</span>
                      </li>
                      <li
                        style={{ "--delay": "9" }}
                        className="stories_option"
                        onClick={() => specificImg("Wildlife")}
                      >
                        <img
                          src="https://i.ibb.co/Lz9kmgC/wildlife.png"
                          alt=""
                        />
                        <span className="option-text">Wildlife</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <br />
              <hr />
              <br />
              <br />
              <div class="first stories_card1" style={{ display: cardstyle }}>
                <div>
                  <img src="https://i.ibb.co/frTL7Xt/redfort.jpg" alt="" />
                </div>
                <div className="header">
                  <div>
                    <h3>Red Fort</h3>
                    <br />
                    <p>
                      {" "}
                      Delhi, the capital of India has become a major tourist
                      attraction over the years. The place has a vast history
                      which is a major reason for a lot of people visiting the
                      place. It is the heart of India. Being a metropolitan
                      city, you will find a wide range of options, from shopping
                      markets, malls, galleries to museums and monuments.
                      Various forts and monuments form a major part of the city,
                      making it an amalgamation of historicity and modernity.
                      There are various forts such as Red Fort, Humayun’s Tomb,
                      Qutub Minar, etc. which depict the historic legacy of our
                      country very beautifully.
                    </p>
                  </div>
                  <br />
                  <div class="city">
                    {/* <img src="https://i.ibb.co/7NVtRP4/pune.png" alt="city" /> */}
                    {/* <div class="city-info"> */}
                    {/* <h3 class="city-info">Pune</h3> */}
                    {/* </div> */}
                  </div>
                  <br />
                  {/* <div>
                      <button className='btn' onClick={savedetail}>Read More</button> 
                    <Blog name={readmore}/>  
                  </div> */}
                      <button className='read_more_btn'>Read More</button> 

                </div>
              </div>

              <br />
              <div className="stories_cards">
                {image1.map((card, i) => (
                  <div key={i} className="stories_card">
                    <div>
                      <img src={card.image} alt="" />
                    </div>
                    <div>
                      <h3>{card.title}</h3>

                      <p>{card.text}</p>

                      {/* <div class="city">
                        <img src={card.cimage} alt="city" />
                        <div class="city-info">
                          <h3>{card.cname}</h3>
                        </div>
                      </div>
                      <br /> */}
                      <div>
                        {/* <button className='btn' onClick={()=>{setReadmore(card.title)}}>Read More</button> */}
                        <button className='read_more_btn'>Read More</button>
                        {/* <DetailStory name={readmore}/> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stories;

