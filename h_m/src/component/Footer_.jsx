import React from 'react'
import '../component/Footer_.css'
import right from '../images/right.png'
// import fb from '../images/fb.png'
// import insta from '../images/insta.png'
// import twitter from '../images/twitter.png'
// import youtube from '../images/youtube.png'
// import pintrest from '../images/pin.png'
import hm from '../images/hm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faInstagram, faYoutube, faTwitter, faFacebookSquare, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'

const Footer_ = () => {
    const router= useNavigate();
    const navigateToNewPage = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    
        // Navigate to the new page
        router();
      };

    return (
        <div id='footer_main'>
            <div id='main'>
                <div id='f_top'>
                    <div id='f_top_1'>
                        <p>SHOP</p>
                        <li>Ladies</li>
                        <li onClick={navigateToNewPage}>Men</li>
                        <li>Baby</li>
                        <li>Kids</li>
                        <li>H&M HOME</li>
                        <li>Sport</li>

                    </div>
                    <div id='f_top_2'>
                        <p>CORPORATE INFO</p>
                        <li>Career at H&M</li>
                        <li> About H&M group</li>
                        <li>Sustainability H&M Group</li>
                        <li>Press</li>
                        <li> Investor relations</li>
                        <li>Corporate governance</li>
                    </div>
                    <div id='f_top_3'>
                        <p>HELP</p>
                        <li>Customer Service</li>
                        <li>My H&M</li>
                        <li>Find a store</li>
                        <li>Legal & Privacy</li>
                        <li>Contact</li>
                        <li>Report a Scam</li>
                        <li>Cookie Notice</li>
                        <li>Cookie Settings</li>
                    </div>
                    <div id='f_top_4'>
                        <p>
                            Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!
                        </p>
                        <div>
                            <p>Read More</p>
                            <img src={right} alt='' />
                        </div>

                    </div>
                </div>
                <div id='f_bottom'>
                    <div id='f_bottom_1'>
                        <li id='fb'>
                        <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                            {/* <img src={fb} alt=''/> */}
                        </li>
                        <li id='twitter'><FontAwesomeIcon icon={faTwitter} size='lg' />
                            {/* <img src={twitter} alt=''/> */}
                        </li>
                        <li id='insta'> <FontAwesomeIcon icon={faInstagram}size='lg'/>
                            {/* <img src={insta} alt=''/> */}
                        </li>
                        <li id='youtube'><FontAwesomeIcon icon={faYoutube}size='lg' />
                            {/* <img src={youtube}alt=''/> */}
                        </li>
                        <li id='pinterest'><FontAwesomeIcon icon={faPinterest}size='lg' />
                            {/* <img src={pintrest} alt=''/> */}
                        </li>

                    </div>
                    <div id='f_bottom_2'>
                        <p>
                        The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.
                        </p>
                    </div>
                    <div id='f_bottom_3'>
                    <img src={hm} alt='Logo' onClick={navigateToNewPage}></img>
                    </div>
                    <div id='f_bottom_4'>
                        <p>INDIA</p><p> |  Rs.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer_