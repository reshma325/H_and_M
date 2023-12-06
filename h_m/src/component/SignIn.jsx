import React, { useContext, useState } from 'react'
import "../component/SignIn.css";
import close from '../images/close.png'
import { useNavigate } from 'react-router-dom'
import api from './Helper/AxiosConfig.js'
import { AuthContext } from './Context/AuthContext.jsx'
import toast from 'react-hot-toast'

const SignIn = () => {
    const router = useNavigate();
    const [memberData,setMemberData]=useState();
    const{Login}=useContext(AuthContext);
    const change=(event)=>{
        setMemberData({...memberData,  [event.target.name]: event.target.value})
    }

    const sendDataToBackEnd=async(event)=>{
        event.preventDefault();
        if(memberData.email && memberData.password){
            if(memberData.password.length>=8){
                try {
                    const response= await api.post("/auth/login",{memberData});
                    if(response.data.success){
                        localStorage.setItem("my_token",JSON.stringify(response.data.token))
                        Login(response.data.member);
                        console.log(response.data,"response.data")
                        toast.success(response.data.message);
                        setMemberData({email:"",password:""});
                        router("/")
                        
                    
                    }else{
                       toast.error("something went wrong,try again later")
                    }
                } catch (error) {
                  
                    toast.error(error?.message)
                    console.log(error, "error here !")
                    
                }
            }else{
                toast.error("password must be 8 digits")
            }
        }else{
            toast.error("Please provide email and password")
        }

    }

   
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
                        <div onSubmit={sendDataToBackEnd} id='signin_form'>

                            <div id='form_1'>


                                <p> Email <span>*</span></p >
                                <input onChange={change} name='email' type='email' />
                            </div>
                            <div id='form_2'>
                                <p>Password  <span>*</span> </p>
                                < input onChange={change} name='password' type='password' /> 

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
                            <button type='submit' id='form_4'>Sign In</button>
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