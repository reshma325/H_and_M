import React from 'react'
import './Header.css'
import dots from '../images/dots.png'
import user from '../images/user.png'
import like from '../images/like.png'
import bag from '../images/bag.png'
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"


const Header = () => {

  return (
    <div className='screen'>
      <div className='header_top'>
        <div className='h_t_left'>
          <li >Customer Service</li>
          <li>Newsletter</li>
          <li>Find a store</li>
          <li> <img src={dots} alt=''>
          </img></li>
         
        </div>
        <div className='h_t_middle'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt='Logo'></img>
        </div>
        <div className='h_t_right'>
          <div className='main_h_t_right_l'>
            <img src={user} alt=''>

            </img>
            <p>Sign In</p>
          </div>
          <div className='main_h_t_right_m'>
            <img src={like} alt=''>

            </img>
            <p>Favourites</p>

          </div>
          <div className='main_h_t_right_r'>
          {/* <FontAwesomeIcon icon={faHeart} /> */}
            <img src={bag} alt=''>

            </img>
            <p>Shopping bag(0)</p>

          </div>

        </div>

      </div>
      <div className='header_bottom'>
        <div className='h_b_left'>
          <li>Ladies</li>
          <li>Men</li>
          <li>Divided</li>
          <li>Baby</li>
          <li>Kids</li>
          <li>H&M HOME</li>
          <li>Sport</li>
          <li>Sustainability</li>
          <li>Sale</li>
        </div>
        <div className='h_b_right'>
          <div className='search'>
            <p>  Search Products</p>
         
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header