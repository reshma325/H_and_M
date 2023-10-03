import React from 'react'
import "../component/SignIn.css"
import close from '../images/close.png'

const SignIn = () => {
    return (
        <div id='signin_screen'>
            <div id='signin_main'>
                <div id='signin_box'>
                    <div id='signin_header'>
                        <h2>Sign In</h2>
                        <img src={close} alt='' />

                    </div>
                    <div id='signin_sub_header'>
                        <p>
                            Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.
                        </p>

                    </div>
                    <div id='signin_form'>
                        <div></div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default SignIn