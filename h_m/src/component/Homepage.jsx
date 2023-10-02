import React from 'react'
import "../component/Homepage.css"
import right from '../images/right_arrow.png'

const Homepage = () => {
  return (
    <div id='home_screen' >
      <div id='home_main'>
        <div id='t_bar'>
          <p>Members get free shipping above Rs.1999</p>
          <p>Free & flexible 15 days return</p>
          <p>Download the H&M App</p>

        </div>
        <div id='big_img_1'>
          <span id='span1'>
            <img src='https://image.hm.com/content/dam/TOOLBOX/inlocal/3x2_PINK_VALENTINE.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv'>
            <p>MEMBER DAYS</p>
            <h3>Get double points & win daily rewards</h3>
            <p> Join for a week full of member celebrations. Stay tuned!</p>
          </div>
          <div id='otherdiv_footer'>
            <ul>
              <li>Ladies</li>
              <li>Men</li>
              <li>Divided</li>
              <li>Kids & Baby</li>
              <li>Home</li>
              <li>Sports</li>

            </ul>
            <p>Valid online & in-store till 6th Oct'23</p>

          </div>
        </div>
        <div id='small_img_1'>
          <div id='small_img_1_head'>
            <h3>Win a wardrobe for a year</h3>
            <p>Members enter now to get 365 days of fabulous fashion from H&M! </p>

          </div>
          <div id='small_img_1_foot'>
            <p>Know More</p>
            <p>Join Now </p>

          </div>

        </div>
        <div id='image_1'>
          <span>
            <img src='https://image.hm.com/content/dam/global_campaigns/season_08/men/3078l/3078L-3x2.jpg?imwidth=820' alt='' />

          </span>
          <div id='otherdiv_2'>
           
            <div id='pop'>

             
              <img src={right} alt='' />

            </div>
            <div id='pop_2'>
            <p>Rs. 1,499.00</p>
              <p>Slim Fit Fine-knit pol... </p>
            </div  >
            
          

          </div>
          <div id='otherdiv_2_footer'>
            <h2>All Knits needed</h2>
            <h3>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</h3>
            <p> Shop Now</p>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Homepage