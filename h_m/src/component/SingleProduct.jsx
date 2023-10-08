import React from 'react'
import './SingleProduct.css'
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const router = useNavigate();
  return (
    <div id='single_screen'>
        <div id='single_breadcrumb'>
        <p onClick={() => router('/')}>HM.com / Men / Hoodies &Sweatshirts / Hoodies /</p><span onClick={() => router('/mens')}>&nbsp; Relaxed Fit Printed hoodie</span>
        </div>
        <div id='single_main'>
            <div id='single_product'>
                <div id='sp_card'>
                    <div id='left_card'>

                    </div>
                    <div id='right_card'>

                    </div>

                </div>

            </div>
            <div id='style_rec'>

            </div>


        </div>
         </div>
  )
}

export default SingleProduct