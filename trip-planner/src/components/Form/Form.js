import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import jsPDF from 'jspdf';

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
  const [day1, setDay1] = useState([])
  const [day2, setDay2] = useState([])
  const [day3, setDay3] = useState([])
  const [cityname, setCity] = useState("")
  const [combined, setCombined] = useState([])
  // console.log(combined)

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

  const [daysdata, setDaysData] = useState(day1);

  const handleButton1 = () => {
    setDaysData(day1);
  };
  const handleButton2 = () => {
    setDaysData(day2);
  };
  const handleButton3 = () => {
    setDaysData(day3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to server with the cityname
    axios.post('http://localhost:3001/getplanner', { cityname })
      .then(response => {
        const { cityname, Day1, Day2, Day3 } = response.data;
        setDay1(Day1);
        setDay2(Day2);
        setDay3(Day3);
        setCity(cityname);
        // setCombined([cityname,...Day1,...Day2,...Day3])
      })
      .catch(err => console.log(err))

    handleProceedClick();
  }

// ============================= PDF GENERATION CODE ==============================================
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set the maximum width and height for the content area
    const maxWidth = doc.internal.pageSize.getWidth();
    const maxHeight = doc.internal.pageSize.getHeight();

    doc.setFontSize(24);
    doc.text("Your trip to " + cityname , 20, 25)
    doc.setFontSize(18)
    doc.text(cityname+ ", India", 25, 40)


    let daynum = 2;

    const imgWidth = 80; // Set the desired width
    const imgHeight = 40; // Set the desired height

    let leftColumnX = 15;
    let rightColumnX = 105;
    // Initial Y position
    let currentY = 60;

    // Function to add an image with its description and handle pagination
    const addImageWithDescription = (imageData, description) => {

      // Calculate the height required for the text
      const textHeight = doc.getTextDimensions(description).h;

      // Check if adding the description exceeds the page height
      if (currentY + textHeight + imgHeight > maxHeight) {
        doc.addPage();
        doc.text("Day " + daynum ,20,15)
        currentY = 15; // Reset Y position for the new page
        daynum++
      }
      // Add the image
      doc.addImage(imageData, 'JPEG', leftColumnX,currentY + 10, imgWidth, imgHeight); // Adjust coordinates and dimensions as needed
      doc.setFontSize(16);
      // Add the description text
      doc.text(rightColumnX, currentY + 20, description); // Adjust the Y coordinate as needed
      doc.setFontSize(18);
      // currentY += 90; // Adjust as needed based on your layout

       // Update the Y position for the next element
      currentY += Math.max(50, textHeight) + 10; // Adjust as needed based on your layout
    };

    // Iterate through your data (e.g., Day1) to add images with descriptions
    doc.text("Day 1",20, 55)
    day1.map((place, index) => {
      const imageData = place.place_img;
 
      const description = `Place: ${place.place_name}\nType: ${place.place_type}\nTime: ${place.time}\n`;

      // Add the image with description
      addImageWithDescription(imageData, description);
    });
    
 
    day2.map((place, index) => {
      const imageData = place.place_img;
 
      const description = `Place: ${place.place_name}\nType: ${place.place_type}\nTime: ${place.time}\n`;

      // Add the image with description
      addImageWithDescription(imageData, description);
    });

    day3.map((place, index) => {
      const imageData = place.place_img;
 
      const description = `Place: ${place.place_name}\nType: ${place.place_type}\nTime: ${place.time}\n`;

      // Add the image with description
      addImageWithDescription(imageData, description);
    });

    // Save the PDF
    doc.save(`${cityname}-travel-itinerary.pdf`);
  }




  return (
    <>
      <div className={`container ${isSubmitMode ? "proceed-mode" : ""}`}>
        <div class="forms-container">
          <div class="form_submit-proceed" style={{ display: displaymode }}>

            <form className="submit-form " onSubmit={handleSubmit}>
              <h2 class="title">Details</h2>
              <div class="input-field">
                <i class="fas fa-sharp fa-solid fa-city"></i>
                <input
                  type="text"
                  placeholder="City Name"
                  name="cityname"
                  onChange={(e) => setCity(e.target.value)}
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

                <button type="button" className="planner_day_button" onClick={handleButton3}>
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

              <div className="planner_pdf_download_button">
                {/* <button onClick={renderPdf}>Download PDF</button> */}
                <button onClick={generatePDF} className="btn solid">Download PDF</button>
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
