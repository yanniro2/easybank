import React from 'react'
import logo from "../images/logo white.svg";
import img_1 from "../images/icon-facebook.svg"
import img_2 from "../images/icon-youtube.svg"
import img_3 from "../images/icon-twitter.svg"
import img_4 from "../images/icon-pinterest.svg"
import img_5 from "../images/icon-instagram.svg"
function Footer()
{

    const social_Datas = [
        {
            id: 1,
            img: img_1,
        },
        {
            id: 1,
            img: img_2,
        },
        {
            id: 1,
            img: img_3,
        },
        {
            id: 1,
            img: img_4,
        },
        {
            id: 1,
            img: img_5,
        },
    ]

    const Social = () => social_Datas.map((datas) => (
        <div key={datas.id} >
            <img src={datas.img} alt="social icons" className='w-[1rem] cursor-pointer object-center hover:drop-shadow-md hover:shadow-md hover:scale-150 transition' />
        </div>
    ))
    return (
        <div className='flex flex-col bg-Dark-Blue items-center pb-3 animate__animated animate__backInUp'>
            <div className="w-screen h-[20vh] font-Public font-normal p-5   z-0 overflow-hidden flex  item-center justify-center  text-White bg-Dark-Blue Mobile:flex-col Mobile:h-full">

                <div className="content w-4/5 flex h-full items-center justify-between Mobile:w-full Mobile:flex-col Mobile:gap-3 Mobile:items-center Mobile:text-center Tablet:w-full">
                    <div className='h-full flex flex-col justify-evenly Mobile:gap-3 Mobile:items-center Mobile:text-center'>
                        <img src={logo} alt="logo img" />
                        <div className="social flex gap-3 items-center">
                            <Social />
                        </div>
                    </div>

                    <div className='h-full flex flex-col justify-evenly Mobile:gap-3 Mobile:items-center Mobile:text-center'>

                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>About us</a>
                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>Contact</a>
                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>Blog</a>

                    </div>

                    <div className='h-full flex flex-col justify-evenly Mobile:gap-3 Mobile:items-center Mobile:text-center'>

                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>Careers</a>
                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>Support</a>
                        <a href="#" className='text-White text-[14px] hover:text-Lime-Green transition'>Privacy Policy</a>

                    </div>

                    <div className='h-full flex flex-col justify-evenly items-end Mobile:gap-3 Mobile:items-center Mobile:text-center Mobile:mt-5'>
                        <button className='w-[10rem]'>Request Invite</button>

                        <p>© Easybank. All Rights Reserved</p>
                    </div>
                </div>


            </div>
            <span >Coded by <a href="#" className=' underline text-White'>Niroyan</a></span>
        </div>
    )
}

export default Footer
