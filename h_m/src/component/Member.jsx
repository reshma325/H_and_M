import React from 'react'
import "../component/Member.css"
import close from '../images/close.png'
import {useNavigate} from 'react-router-dom'



const Member = () => {
    const router = useNavigate()
    return (
        <div id='m_newdiv'>
            <div id='member_screen'>
                <div id='member_main'>
                    <div id='member_box'>
                        <div id='member_header'>
                            <h2>BECOME A MEMBER</h2>
                            <img onClick={()=>router('/')} src={close} alt='' />
                        </div>
                        <div id='member_sub_header'>
                            <p>
                                Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.
                            </p>

                        </div>
                        <div id='member_form'>
                            <div id='m_form1'>
                                <p> Email <span>*</span></p >
                                <input name='email' type='email' />
                            </div>
                            <div id='m_form2'>
                                <p>Create a password <span>*</span> </p>
                                <input name='password' type='password'  ></input>
                            </div>
                            <div id='m_form3'>
                                <p>Date of birth  <span>*</span> </p>
                                <div>
                                <input name='password' type='number'maxLength={2}placeholder='DD  '  ></input><span id='mspan1'>/</span>
                                <input name='password' type='number'maxLength={2}placeholder='MM   '    ></input><span id='mspan2'>/</span>
                                <input name='password' type='number'maxLength={4} placeholder='YYYY'   ></input>
                                </div>
                                <p>H&M wants to give you a special treat on your birthday</p>
                            </div>
                            <div id='m_form4'>
                                <p>ADD MORE & GET MORE</p>

                            </div>
                            <div id='m_form5'>
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checked" />
                                <p>Yes, email me offers, style updates, and special invites to sales and events.
                                </p>
                            </div>
                            <div id='m_form6'>
                                <p>
                                Wish your inbox was more stylish? No problem, just subscribe to our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight to your inbox!
                                </p>
                            </div>
                            <div id='m_form7'>
                                <p>
                                By clicking ‘Become a member’, I agree to the H&M Membership 
                                </p>
                                <p>Terms and conditions.</p>
                            </div>
                            <div id='m_form8'>
                                <p>To give you the full membership experience, we will process your personal data in accordance with the H&M's <a> Privacy Notice.</a> </p>
                            </div>
                            <button id='m_form9'>
                            Become a member
                               </button>
                            <div id='m_form10' onClick={()=>router('/signin')}>
                                    <p >Sign In </p>

                                </div>
                            


                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Member