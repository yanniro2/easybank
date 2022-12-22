import React from 'react'
import logo from "../images/logo.svg"
import menuIcon from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import 'animate.css';
function Navbar({ menuShow, menu })
{
    return (
        <div className='h-[4rem] w-full  shadow fixed top-0 left-0 right-0 flex items-center justify-evenly Desktop:justify-between Desktop:px-5  default:justify-between default:px-3 large:justify-between large:px-5 z-[3000] bg-White  animate__animated animate__fadeInDown Mobile:px-4 Mobile:justify-between animate__animated animate__fadeInDown transition'>
            <img src={logo} alt="logo img" className='object-cover' />
            <ul className='flex gap-3 Desktop:gap-5 large:gap-10 Mobile:hidden'>
                <li className='relative group group transition'>Home
                    <div className='border-b-[3px] border-b-Lime-Green w-full h-3 absolute -bottom-[1rem] hidden group-hover:block transition'></div>
                </li>
                <li className='relative group group transition'>About <div className='border-b-[3px] border-b-Lime-Green w-full h-3 absolute -bottom-[1rem] hidden group-hover:block transition'></div></li>
                <li className='relative group group transition'>Contact <div className='border-b-[3px] border-b-Lime-Green w-full h-3 absolute -bottom-[1rem] hidden group-hover:block transition'></div></li>
                <li className='relative group group transition'>Blog <div className='border-b-[3px] border-b-Lime-Green w-full h-3 absolute -bottom-[1rem] hidden group-hover:block transition'></div></li>
                <li className='relative group group transition'>Careers <div className='border-b-[3px] border-b-Lime-Green w-full h-3 absolute -bottom-[1rem] hidden group-hover:block transition'></div></li>
            </ul>
            <button className="mobile_menu Mobile:block hidden p-3" onClick={menuShow}>
                {(!menu) && (<img src={menuIcon} alt=" menu icon" className=' cursor-pointer object-fill  hover:scale-125 transition' />)}
                {menu && (<img src={close} alt=" menu icon" className=' cursor-pointer object-fill  hover:scale-125 transition' />)}
            </button>
            <button className='Mobile:hidden' >Request Invite</button>
        </div >
    )
}

export default Navbar
