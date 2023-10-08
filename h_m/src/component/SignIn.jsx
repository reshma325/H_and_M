import React from 'react'
import "../component/SignIn.css"
import close from '../images/close.png'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const router = useNavigate();

   
    return (
        <div id='newdiv'>
            <div id='signin_screen'>
                <div id='signin_main'>
                    <div id='signin_box'>
                        <div id='signin_header'>
                            <h2>Sign In</h2>
                            <img onClick={()=>router('/')} src={close} alt='' />

                        </div>
                        <div id='signin_sub_header'>
                            <p>
                                Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.
                            </p>

                        </div>
                        <div id='signin_form'>

                            <div id='form_1'>


                                <p> Email <span>*</span></p >
                                <input name='email' type='email' />
                            </div>
                            <div id='form_2'>
                                <p>Password  <span>*</span> </p>
                                <input name='password' type='password'  ></input>

                            </div>
                            <div id='form_3'>
                                <div id='left'>
                                    <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checked" />
                                    <p>Remember me</p>
                                </div>
                                <div id='right'>
                                    <p>Forgot password?</p>
                                </div>

                            </div>
                            <button id='form_4'>Sign In</button>
                            <div id='member'>
                                <div id='member_top' onClick={()=>router('/member')}>
                                    <p>Become a member</p>

                                </div>
                                <div id='member_bottom'>
                                    <p>Membership info</p>

                                </div>

                            </div>






                        </div>

                    </div>

                </div>


            </div>
        </div>

    )
}

export default SignIn