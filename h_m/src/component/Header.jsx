import React, { useContext } from 'react'
import './Header.css'

import dots from '../images/dots.png'
import user from '../images/user.png'
import like from '../images/like.png'
import bag from '../images/bag.png'
import search from '../images/search.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'




const Header = () => {
  const router = useNavigate();
  const { Logout, state } = useContext(AuthContext)


  return (
    <div id='screen'>
      <div id='header_top'>
        <div id='h_t_left'>
          <p>Customer Service</p>
          <p>Newsletter</p>
          <p>Find a store</p>
          <img src={dots} alt=''>
          </img>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

          {/* <li >Customer Service</li>
          <li>Newsletter</li>
          <li>Find a store</li>
          <li> <img src={dots} alt=''>
          </img></li> */}

        </div>
        <div id='h_t_middle'>
          <img onClick={() => router('/')} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt='Logo'></img>
        </div>
        <div id='h_t_right'>
          {state?.member?.id ? <>
          <div id='main_h_t_right_l' onClick={Logout} >

            <img src={user} alt='' />
            <p >Logout</p> </div>
            </>:   <div id='if' onClick={() => router('/signin')}> 
            <img src={user} alt='' />
            <p >Sign In</p>
            
            </div>}





         
          <div id='main_h_t_right_m'>
            <img src={like} alt=''>

            </img>
            <p>Favourites</p>

          </div>
          <div id='main_h_t_right_r'>
            {/* <FontAwesomeIcon icon={faHeart} /> */}
            <img src={bag} alt=''>

            </img>
            <p>Shopping bag(0)</p>

          </div>

        </div>

      </div>
      <div id='header_bottom'>
        <div id='h_b_left'>
          <li>Ladies</li>
          <li onClick={() => router('/mens')}>Men</li>
          <li>Divided</li>
          <li>Baby</li>
          <li>Kids</li>
          <li>H&M HOME</li>
          <li>Sport</li>
          <li>Sustainability</li>
          <li>Sale</li>
        </div>
        <div id='h_b_right'>
          <div id='search'>
            <img src={search} alt='' />
            <p>  Search products</p>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Header