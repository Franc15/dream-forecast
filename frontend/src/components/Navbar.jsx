import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between px-6 py-5 lg:px-7 lg:py-5 fixed w-screen'>
            <div className="w-24 h-24 bg-[url('./assets/logo.png')] bg-center bg-contain bg-no-repeat"></div>
            <div className='flex w-[60%] lg:w-[20%] justify-between text-[#F4F4F6] font-poppins items-center text-sm md:text-base'>
                <Link to="/login">Log In</Link>
                <div>Sign Up</div>
                <button type='button' className='rounded-lg w-[40%] h-8 bg-[#f18f01] hover:bg-yellow-500 text-[#F4F4F6] flex justify-center items-center'>
                    Try Now</button>
            </div>

        </div>
    )
}

export default Navbar