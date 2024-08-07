"use client"

import React from 'react';


const ContactForm = () =>{
    return(
        <div className='flex h-4/6 align-center justify center m-auto my-40'>
        <form className='justify-center m-auto border-2 rounded-lg p-10'>
            <div className='justify-center text-center text-xl font-bold'> Get in Contact </div>
            <div className='m-3'>
            <label>Full Name:</label>
            <input type='text' id='fname' name='fName' className='relative border-2 border-black h-6 right-0 ml-2'/>
            </div>
            <div className='m-3'>
            <label>Email:</label>
            <input type='email' id='lname' name='lName' className='border-2 border-black h-6 ml-11' required/>
            </div>
            <div className='m-3'>
            <label>Message:</label>
            <textarea id='message' name='message' className='border-2 border-black ml-4'/>
            </div>
            <div className='ml-32 justify-center ' >
            <button className='bg-yellow-200 px-3 py-2 rounded-md text-black' type='submit'>Submit</button>
            </div>
        </form>
        </div>
    )
}

export default ContactForm