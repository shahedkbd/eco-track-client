import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const ForgetPassword = () => {

    const {resetPassword, setLoading} = use(AuthContext)

    const handleForgetPassword =(e) =>{
        e.preventDefault()
        const email = e.target.email.value
        console.log(email);
        

        resetPassword(email)
        .then(()=>{
            toast("Password reset email sent!")

            setLoading(false)

        })
        .catch(error=>{
            console.log(error.message);
            
        })
    }
    return (
        <div className='place-items-center w-fit py-10 mx-auto shadow-2xl rounded-2xl my-10'>
            <h2 className='text-center text-4xl font-bold poppins text-[#7a9352]'>Forgot Password</h2>
            <form onSubmit={handleForgetPassword} className='w-96 p-10'>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <button className="btn btn-neutral mt-4 ">Forget Password</button>
            </fieldset>
          </form>
        </div>
    );
};

export default ForgetPassword;