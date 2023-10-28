import React, { useState } from 'react'
import { logoblack } from '..'
import { ArrowRight } from '@mui/icons-material';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {RotatingLines} from 'react-loader-spinner';
import {motion} from 'framer-motion'

function Registration() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  //Error Message Starts
  const [errclientName, setErrClientName] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [errcPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");

  //Loading Start Here
  const [loading, setLoading] = useState(false);
  const [succMessage, setSuccMessage] = useState("")
  //Handle Function Starts
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName("");
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  }
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  }

  //Email Validation Start
  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  //Submit Start Here
  const handleRegistration = (e) => {
    e.preventDefault();
    !clientName && setErrClientName("Enter Your Name");
    if (!email) {
      setErrEmail("Please Enter Valid Email");
      setFirebaseErr("")
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter A Valid Email");
      }
    }
    if (!password) {
      setErrPassword("Please Enter Password")
    }
    else {
      if (password.length < 6) {
        setErrPassword("Password Length Should Be Greater Than 6")
      }
    }
    if (!cPassword) {
      setErrCPassword("Please Re-Enter Password")
    }
    else {
      if (cPassword !== password) {
        setErrCPassword("Password Not Matched");
      }
    }
    if (clientName && email && emailValidation(email) && password && password.length >= 6 && cPassword === password) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          })
          // Signed up 
          const user = userCredential.user;
          setLoading(false);
          setSuccMessage("Account Created Sucessfully!");
          setTimeout(() => {
            navigate("/signin")
          }, 3000)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email Is Already Used..Please Try Another One");
          }
          // ..
        });

      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setFirebaseErr("");
    }
  }
  return (
    <div className='w-full p-5'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[26rem] mx-auto flex flex-col items-center'>
          <img className='w-32' src={logoblack}></img>
          <div className='w-full border border-zinc-600 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>
              Create Account
            </h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input value={clientName} onChange={handleName} className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='text'></input>
                {
                  errclientName && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errclientName}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email Or Mobile Number</p>
                <input value={email} onChange={handleEmail} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='email'></input>
                {
                  erremail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{erremail}</p>
                  )
                }
                {
                  firebaseErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{firebaseErr}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input value={password} onChange={handlePassword} className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password'></input>
                {
                  errpassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errpassword}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter Password</p>
                <input value={cPassword} onChange={handleCPassword} className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password'></input>
                {
                  errcPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errcPassword}</p>
                  )
                }
              </div>
              <p className='text-xs text-gray-600'>Password Must Be 6 Characters.</p>
              <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7df15] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                Continue
              </button>
              {
                loading && (
                  <div className='flex justify-center'>
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                  </div>
                )
              }
              {
                succMessage && (
                  <div>
                    <motion.p
                    initial={{y:10,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.5}}
                    className='text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center'
                    >
                      {succMessage}
                    </motion.p>
                  </div>
                )
              }
            </div>
            <p className='text-xs text-black leading-4 mt-4'>
              By Continuing, you agree to Amazon's <span className='text-blue-600'>Condition's of use {" "}</span >and <span className='text-blue-600'>Privacy Notice.</span>
            </p>
            <div>
              <p className='text-xs text-black'>Already Have Account? <span className='text-xs text-blue-700 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Sign In<span><ArrowRight /></span></span></p>
              <p className='text-xs text-black'>Buying For Work? <span className='text-xs text-blue-700 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Create A Free Business Account<span><ArrowRight /></span></span></p>
            </div>
          </div>

        </form>
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

export default Registration