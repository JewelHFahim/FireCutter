import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [pass, setPass] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [conPass, setConPass] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Information updated")
  }

  const inputCont = 'w-full border-b-2 border-gray-300 flex flex-col md:flex-row md:items-center md:gap-10';
  const inputCss = 'md:w-[75%] h-10 md:h-14 focus:outline-none bg-transparent'

  return (
    <div className='w-full h-full p-5'>
      <div className='w-full h-full text-sm'>
        <h3 className='uppercase'>Reset your password</h3>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex flex-col gap-5'>

          <div className={inputCont}>
            <label className='md:w-[25%] text-gray-400'>Old password <span className='text-red-500'>*</span></label>
            <div className='relative w-full'>
            <input type={pass ? "text" : "password"} placeholder='********' className={inputCss}
            {...register("password")}
            />
            <button onClick={()=>setPass(!pass)} type='button' className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-gray-500'> 
             {pass ? <BsEye /> : <BsEyeSlash />}
            </button>
            </div>
          </div>

          <div className={inputCont}>
            <label className='md:w-[25%] text-gray-400'>New password <span className='text-red-500'>*</span></label>
            <div className='relative w-full'>
            <input type={newPass ? "text" : "password"} placeholder='********' className={inputCss}
            {...register("newPassword")}
            />
            <button onClick={()=>setNewPass(!pass)} type='button' className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-gray-500'> 
             {newPass ? <BsEye /> : <BsEyeSlash />}
            </button>
          </div>
          </div>

          <div className={inputCont}>
            <label className='md:w-[25%] text-gray-400'>Confirm password <span className='text-red-500'>*</span></label>
            <div className='relative w-full'>
              <input type={conPass ? "text" : "password"} placeholder='********' className={inputCss}
              {...register("ConfirmPassword")}
              />
              <button onClick={()=>setConPass(!pass)} type='button' className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-gray-500'> 
              {conPass ? <BsEye /> : <BsEyeSlash />}
              </button>
            </div>
          </div>

          <button type='submit' className='md:w-max h-9 m-w-max px-12 bg-gray-800 text-white mt-5'>Save</button>
        </form>

      </div>
    </div>
  )
}

export default ResetPassword