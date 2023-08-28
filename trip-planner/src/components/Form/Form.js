import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import form_svg from "./form.svg";
import payment_svg from "./payment.svg";

import "./Form.css";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

function Form() {
  const [isSubmitMode, setisSubmitMode] = useState(false);
  const [displaymode, setDisplayMode] = useState("block");
  const [visibility, visibilityMode] = useState("hidden");

  const handleProceedClick = () => {
    setisSubmitMode(true);
    if (displaymode === "block") {
      setDisplayMode("none");
    } else {
      setDisplayMode("block");
    }
    if (visibility === "visible") {
      visibilityMode("hidden");
    } else {
      visibilityMode("visible");
    }
  };

  const handleFormClick = () => {
    setisSubmitMode(false);
    if (displaymode === "block") {
      setDisplayMode("none");
    } else {
      setDisplayMode("block");
    }
    if (visibility === "visible") {
      visibilityMode("hidden");
    } else {
      visibilityMode("visible");
    }
  };

  const [formdata, setformdata] = useState({});

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformdata({ ...formdata, [name]: value });
  };
  const planner_data = [
    {
      place_type: "Accomodation",
      place_name: "Capital O 89586 Hotel Canada Palace & Banquet",
      place_img: "https://i.ibb.co/z2cWbXZ/hotel.webp",
      rating: "⭐⭐⭐",
      time: "1hr",
      price: "3679",
      icon: "fas fa-regular fa-house-chimney",
      icon_color: "brown",
      icon_bgcolor: "blanchedalmond",
    },
    {
      place_type: "Attraction",
      place_name: "Kankaria",
      place_img: "https://i.ibb.co/FmtVXWw/kankaria.png",
      time: "2hr",
      rating: " ",
      price: " ",
      icon: "fas fa-solid fa-camera-retro",
      icon_color: "black",
      icon_bgcolor: "rgb(121, 232, 121)",
    },
    {
      place_type: "Attraction",
      place_name: "Science City",
      place_img: "https://i.ibb.co/mvH6958/gujarat-science-city-1-1626372058.jpg",
      rating: " ",
      time: "1hr",
      price: " ",
      icon: "fas fa-solid fa-camera-retro",
      icon_color: "black",
      icon_bgcolor: "rgb(121, 232, 121)",
    },
    {
      place_type: " ",
      rating: " ",
      time: " ",
      price: " ",
      icon: " ",
      icon_color: " ",
      icon_bgcolor: " ",
      place_name: "Lunch Time",
      place_img: "https://i.ibb.co/TYD3j7F/meal.png",
    },
    {
      place_type: "Attraction",
      place_name: "Auto World Vintage Car Museum",
      place_img: "https://i.ibb.co/FgfPqXC/auto-vintage-museum.jpg",
      rating: " ",
      time: "1hr",
      price: " ",
      icon: "fas fa-solid fa-camera-retro",
      icon_color: "black",
      icon_bgcolor: "rgb(121, 232, 121)",
    },
    {
      place_type: "Attraction",
      place_name: "Balvatika And N.h. Museum",
      place_img: "https://i.ibb.co/BPpfxRG/balvatika.jpg",
      rating: " ",
      time: "3hr",
      price: " ",
      icon: "fas fa-solid fa-camera-retro",
      icon_color: "black",
      icon_bgcolor: "rgb(121, 232, 121)",
    },
    {
      place_type: " ",
      rating: " ",
      time: " ",
      price: " ",
      icon: " ",
      icon_color: " ",
      icon_bgcolor: " ",
      place_name: "Dinner Time",
      place_img: "https://i.ibb.co/qRG8xCK/dinner.png",
    },
  ];
  const planner_data2 = [
    {
      place_type: "Accomodation",
      place_name: "Capital O 89586 Hotel Canada Palace & Banquet",
      place_img: "https://i.ibb.co/z2cWbXZ/hotel.webp",
      rating: "⭐⭐⭐",
      time: "1hr",
      price: "INR 3679",
    },
    {
      place_type: "Accomodation",
      place_name: "Capital O 89586 Hotel Canada Palace & Banquet",
      place_img: "https://i.ibb.co/z2cWbXZ/hotel.webp",
      rating: "⭐⭐⭐",
      time: "1hr",
      price: "INR 3679",
    },
    {
      place_type: "Accomodation",
      place_name: "Capital O 89586 Hotel Canada Palace & Banquet",
      place_img: "https://i.ibb.co/z2cWbXZ/hotel.webp",
      rating: "⭐⭐⭐",
      time: "1hr",
      price: "INR 3679",
    },
    {
      place_type: "Accomodation",
      place_name: "Capital O 89586 Hotel Canada Palace & Banquet",
      place_img: "https://i.ibb.co/z2cWbXZ/hotel.webp",
      rating: "⭐⭐⭐",
      time: "1hr",
      price: "INR 3679",
    },
  ];

  const [daysdata, setDaysData] = useState(planner_data);
  
  const handleButton1 = () => {
    setDaysData(planner_data);
  };
  const handleButton2 = () => {
    setDaysData(planner_data2);
  };
  // function handleButton3(){
  //   const days_data = planner_data;
  // }

  return (
    <>
      <div className={`container ${isSubmitMode ? "proceed-mode" : ""}`}>
        <div class="forms-container">
          <div class="form_submit-proceed" style={{ display: displaymode }}>
            <form className="submit-form ">
              <h2 class="title">Details</h2>
              <div class="input-field">
                <i class="fas fa-sharp fa-solid fa-city"></i>
                <input
                  type="text"
                  placeholder="City Name"
                  name="cityname"
                  onChange={handlechange}
                  required
                />
              </div>
              <div class="input-field">
                <i class="fas fa-solid fa-user"></i>
                <input
                  type="number"
                  placeholder="Number Of People"
                  name="num_of_people"
                  onChange={handlechange}
                  required
                />
              </div>
              <div>
                <div className="main_start_end">
                  <div className="start">
                    Enter start date:
                    <input
                      class="inputField"
                      type="date"
                      id="date_picker"
                      placeholder="Enter Date "
                      required
                    />
                  </div>
                  <i
                    class="fas fa-sharp fa-solid fa-arrow-right"
                    id="start_end_arrow"
                  ></i>
                  <div className="end">
                    Enter end date:
                    <input
                      class="inputField"
                      type="date"
                      id="date_picker"
                      placeholder="Enter Date"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="radio_transport">
                <span className="both_radio">
                  Do You Want Transport Facility:
                  <input
                    type="radio"
                    name="transport"
                    className="radio_1"
                    onChange={handlechange}
                    value="Yes"
                  />
                  Yes
                  <input
                    type="radio"
                    name="transport"
                    className="radio_2"
                    onChange={handlechange}
                    value="No"
                  />
                  No
                </span>
              </div>
              <div className="hotel_dropdown">
                <span>
                  Select Hotel:
                  <select
                    className="stars_hotel_dropdown"
                    name="rating"
                    onChange={handlechange}
                    required
                  >
                    <option selected hidden>
                      <b>
                        <i>--Select Ratings--</i>
                      </b>
                    </option>
                    <option value="1 Star">😑 1 Star</option>
                    <option value="2 Star">😐 2 Star</option>
                    <option value="3 Star">🙂 3 Star</option>
                    <option value="4 Star">😀 4 Star</option>
                    <option value="5 Star">🤯 5 Star</option>
                  </select>
                </span>
              </div>
              <input type="submit" value="Submit" class="btn solid" />
            </form>
          </div>
          <div className="proceed-form" style={{ visibility: visibility }}>
            <div className="planner_sub_container">
              <div className="planner_button_container">
                <button
                  type="button"
                  className="planner_day_button"
                  onClick={handleButton1}
                >
                  <img src="https://i.ibb.co/7nk7bQ9/calendar-9.png" alt="day1" />
                  Day1
                </button>

                <button
                  type="button"
                  className="planner_day_button"
                  onClick={handleButton2}
                >
                  <img src="https://i.ibb.co/JQ055tb/calendar-10.png" alt="day2" />
                  Day2
                </button>

                <button type="button" className="planner_day_button">
                  <img
                    src="https://i.ibb.co/0Zz2y03/calendar-8.png"
                    alt="day3"
                  />
                  Day3
                </button>
              </div>

              <div className="planner_card_main_container">
                <div className="planner_card_sub_container">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                  >
                    {daysdata.map((data, index) => {
                      if (
                        data.place_type &&
                        data.rating &&
                        data.time &&
                        data.price &&
                        data.icon &&
                        data.icon_color &&
                        data.icon_bgcolor === " "
                      ) {
                        return (
                          <>
                            <SwiperSlide
                              key={index}
                              className="planner_swiper-slide"
                            >
                              <div className="planner_swipe_slide_div_expand">
                                <div className="planner_card_img_expand">
                                  <img src={data.place_img} alt="Place Image" />
                                </div>
                                <div className="planner_card_description_expand">
                                  <p>
                                    <strong>🍜{data.place_name}</strong>
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          </>
                        );
                      } 
                      
                      else if (data.rating && data.price === " ") {
                        return (
                          <>
                            <SwiperSlide
                              key={index}
                              className="planner_swiper-slide"
                            >
                              <div className="planner_swipe_slide_div">
                                <div className="planner_card_img_attraction">
                                  <div>
                                    <img
                                      src={data.place_img}
                                      alt="Place Image"
                                    />
                                  </div>
                                  <div>
                                    <button
                                      className="planner_placetype_button"
                                      style={{
                                        backgroundColor: data.icon_bgcolor,
                                      }}
                                    >
                                      <i className={data.icon} style={{ color: data.icon_color }}></i>
                                      {data.place_type}
                                    </button>
                                  </div>
                                </div>
                                <div className="planner_card_description_attraction">
                                  <p className="planner_card_attraction_para">
                                    <strong>{data.place_name}</strong>
                                  </p>
                                  <p className="planner_card_time_attraction">
                                    <i className="fa-regular fa-clock"></i>
                                    {data.time}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          </>
                        );
                      } 
                      
                      else {
                        return (
                          <>
                            <SwiperSlide
                              key={index}
                              className="planner_swiper-slide"
                            >
                              <div className="planner_swipe_slide_div">
                                <div className="planner_card_img">
                                  <div>
                                    <img
                                      src={data.place_img}
                                      alt="Place Image"
                                    />
                                  </div>
                                  <div>
                                    <button
                                      className="planner_placetype_button"
                                      style={{
                                        backgroundColor: data.icon_bgcolor,
                                      }}
                                    >
                                      <i
                                        className={data.icon}
                                        style={{ color: data.icon_color }}
                                      ></i>{" "}
                                      {data.place_type}
                                    </button>
                                  </div>
                                </div>
                                <div className="planner_card_description">
                                  <p>
                                    <strong>{data.place_name}</strong>
                                  </p>
                                  <p>{data.rating}</p>
                                  <p className="planner_card_time">
                                    <i className="fa-regular fa-clock"></i>
                                    {data.time}
                                  </p>
                                  <p>
                                    INR <strong>{data.price}</strong>
                                  </p>
                                  <button className="planner_card_booknow">
                                    Book Now
                                  </button>
                                </div>
                              </div>
                            </SwiperSlide>
                          </>
                        );
                      }
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                class="btn transparent"
                id="sign-up-btn"
                onClick={handleProceedClick}
              >
                Proceed
              </button>
            </div>
            <img src={form_svg} class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                class="btn transparent"
                id="sign-in-btn"
                onClick={handleFormClick}
              >
                Back
              </button>
            </div>
            <img src={payment_svg} class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;