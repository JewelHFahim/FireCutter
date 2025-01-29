import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

const AccountInfo = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [edit, setEdit] = useState(false);


  const onSubmit = (data) => {
    console.log(data);
    toast.success("Information updated")
    setEdit(!edit);
  }

  const inputCont = 'w-full border-b-2 border-gray-300 flex flex-col md:flex-row md:items-center md:gap-10';
  const inputCss = 'md:w-[80%] h-10 md:h-14 focus:outline-none bg-transparent'

  return (
    <div className='w-full h-full p-5'>
      <div className='w-full h-full text-sm'>
        <h3 className='uppercase'>Account Information</h3>


        {
        !edit && 
        <div className='mt-10 flex md:block flex-col gap-y-5'>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Full name</label>
            <input type="text" value="Jewel Hossain Fahim" readOnly className={inputCss}/>
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Phone number</label>
            <input type="text" value="01911209322" readOnly className={inputCss}/>
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Addrss in details</label>
            <input type="text" value="73/3 Monipuri Para, Farmgate, Dhaka- 1215" readOnly className={inputCss}/>
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Email address</label>
            <input type="text" value="jewelhfahim@mail.com" readOnly className={inputCss}/>
          </div>

          <button onClick={()=>setEdit(!edit)} type='button' className='h-9 m-w-max px-12 bg-gray-800 text-white mt-10'>Edit</button>
        </div>
        }

        {edit &&
          <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex md:block flex-col gap-y-5'>
          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Full name <span className='text-red-500'>*</span> </label>
            <input type="text" defaultValue="Jewel Hossain Fahim" className={inputCss}
            {...register("fullName")}
            />
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Phone number <span className='text-red-500'>*</span></label>
            <input type="text" defaultValue="01911209322" className={inputCss}
            {...register("contact")}
            />
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Addrss in details <span className='text-red-500'>*</span></label>
            <input type="text" defaultValue="73/3 Monipuri Para, Farmgate, Dhaka- 1215" className={inputCss}
            {...register("address")}
            />
          </div>

          <div className={inputCont}>
            <label className='md:w-[20%] text-gray-400'>Email address <span className='text-red-500'>*</span></label>
            <input type="text" value="jewelhfahim@mail.com" readOnly className='w-[80%] h-14 focus:outline-none bg-transparent text-gray-400'/>
          </div>

          <button type='submit' className='h-9 m-w-max px-12 bg-gray-800 text-white mt-5'>Save</button>
        </form>}

      </div>
    </div>
  )
}

export default AccountInfo