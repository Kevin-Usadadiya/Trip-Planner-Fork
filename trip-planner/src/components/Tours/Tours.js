import React from 'react'
import './Tours.css'

function Tours() {
  return (
    <>    
    <div className='body '>
      <div class="searchBox">
      <input class="searchInput"type="text" name="" placeholder="Search"/>
      <button class="searchButton" href="#">
          <i class="fas fa-search">
          </i>
      </button>            

      </div>
    </div>
    
    <hr className='hr'></hr>

    <div className='di'>Our Tours</div>

    <hr className='hr'></hr>

    <div classname="abc">
      <main className="main">
      <section class="products">
      <div class="product">
            
            <img src="https://i.ibb.co/KNStdcc/ahmedabad-jpeg.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button" onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
    </div>
          <div class="product">
            <img src="https://i.ibb.co/KNStdcc/ahmedabad-jpeg.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add more products here for 3 in 1 row--> */}
      </section>
      <section class="products">
      <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add more products here for 3 in 1 row--> */}
      </section>
      <section class="products">
      <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add more products here for 3 in 1 row--> */}
      </section>
      <section class="products">
      <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add more products here for 3 in 1 row--> */}
      </section>
      <section class="products">
      <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="product">
            <img src="product1.jpg" alt="Product 1"/>
            <h2>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span class="price">$49.99</span>

            {/* <!-- Trigger/Open The Modal --> */}
            <button id="myBtn" className="button"onClick={()=>{
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
            }}>Read more</button>            <button className='button'>Buy now</button>


            {/* <!-- The Modal --> */}
            <div id="myModal" class="modal">

              {/* <!-- Modal content --> */}
              <div class="modal-content">
                <div class="modal-header">
                    <span class="close" onClick={()=>{
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
                  }}>&times;</span>
                  <h2>Modal Header</h2>
                </div>
                <div class="modal-body">
                  <p>Some text in the Modal Body</p>
                  <p>Some other text...</p>
                </div>
                <div class="modal-footer">
                  <h3>Modal Footer</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add more products here for 3 in 1 row--> */}
      </section>
        
      </main>
    </div>    
    </>
  )
}

export default Tours
