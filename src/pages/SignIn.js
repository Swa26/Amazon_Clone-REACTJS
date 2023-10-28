import React, { useState } from 'react'
import { logoblack } from '..'
import { ArrowRight, Password } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../Redux/amazonSlice';
function SignIn() {
    const dispatch=useDispatch();
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erremail, setErrEmail] = useState("");
    const [errpassword, setErrPassword] = useState("");
    const [UserEmailErr, setUserEmailErr] = useState("");
    const [UserPasswordErr, setUserPasswordErr] = useState("");
    const [loading, setLoading] = useState(false);
    const [succMessage, setSuccMessage] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    }
    const handleSignin = (e) => {
        e.preventDefault();
        if (!email) {
            setErrEmail("Enter Your Email")
        }
        if (!password) {
            setErrPassword("Please Enter Passsword");
        }
        if (email && password) {
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(setUserInfo({
                        _id:user.uid,
                        username:user.displayName,
                        email:user.email,
                        image:user.photoURL
                    }))
                    setLoading(false);
                    setSuccMessage("Logged In Sucessfully! Welcome You Back");
                    setTimeout(() => {
                        navigate("/")
                    }, 2000)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("auth/invalid-email")) {
                        setUserEmailErr("Invalid Email");
                    }
                    if (errorCode.includes("auth/wrong-password")) {
                        setUserEmailErr("Wrong Password! try again");
                    }
                });
            setEmail("");
            setPassword("")
        }
    }
    return (
        <div className='w-full p-5'>
            <div className='w-full bg-gray-100 pb-10'>
                {
                    succMessage ? (
                        <div className='w-full flex justify-center items-center py-32'>
                            <p className='border-[1px] border-green-600 text-green-500 font-titleFont text-lg font-semibold px-6 py-2'>
                                {succMessage}
                            </p>
                        </div>
                    ) : (
                        <form className='w-[25rem] mx-auto flex flex-col items-center'>
                            <img className='w-32 m-3' src={logoblack}></img>
                            <div className='w-full border border-zinc-200 p-6'>
                                <h2 className='font-titleFont text-3xl font-medium mb-4'>
                                    Sign In
                                </h2>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-sm font-medium'>Email Or Phone Number</p>
                                        <input value={email} onChange={handleEmail} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type="email"></input>
                                        {
                                            erremail && (
                                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{erremail}</p>
                                            )
                                        }
                                        {
                                            UserEmailErr && (
                                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{UserEmailErr}</p>
                                            )
                                        }
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-sm font-medium'>Password</p>
                                        <input value={password} onChange={handlePassword} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type="password"></input>
                                        {
                                            errpassword && (
                                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errpassword}</p>
                                            )
                                        }
                                        {
                                            UserPasswordErr && (
                                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{UserPasswordErr}</p>
                                            )
                                        }
                                    </div>
                                    <button onClick={handleSignin} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7df15] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                                        Continue
                                    </button>
                                    <p className='text-xs text-black leading-4 mt-4'>
                                        By Continuing, you agree to Amazon's <span className='text-blue-600'>Condition's of use {" "}</span >and <span className='text-blue-600'>Privacy Notice.</span>
                                    </p>
                                    <p className='text-xs text-gray-600 mt-4 cursor-pointer group'>
                                        <ArrowRight />
                                        <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need Help?</span>
                                    </p>

                                </div>
                            </div>

                            <p className='w-full flex items-center text-xs text-gray-600 mt-4'>
                                <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                                <span className='w-1/3 text-center' >New To Amazon?</span>
                                <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                            </p>
                            <Link to="/registration" className='w-full'><button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create Your Amazon Account</button></Link>
                        </form>
                    )
                }

            </div>
            <div className='w-full bg-gradient-to-t from-white via-white to-zinc-300 flex flex-col gap-4 justify-center items-center py-10'>
                <div className='flex items-center gap-6'>
                    <p className='text-xs text-blue-700 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Condition's Of Use
                    </p>
                    <p className='text-xs text-blue-700 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Privacy Notice
                    </p>
                    <p className='text-xs text-blue-700 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                        Condition's Of Use
                    </p>
                </div>
                <p className='text-xs text-gray-600'>&#169; 1996-2023, React-Capstone , Inc. or it's affiliates</p>
            </div>
        </div>
    )
}

export default SignIn