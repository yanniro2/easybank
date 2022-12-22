import React from 'react'
import bg_banner from "../images/bg-intro-desktop.svg"
import bg_banner_2 from "../images/bg-intro-mobile.svg"
import banner from "../images/image-mockups.png"
function Hero()
{
    return (
        <div className="w-screen h-screen font-Public font-normal px-5  pt-[5rem] z-0  flex item-center justify-center text-Dark-Blue bg-Very-Light-Gray Mobile:py-5">
            <div className="content w-4/5 flex justify-between Mobile:flex-col Mobile:w-full Mobile:item-center Tablet:w-full">
                <div className="left w-1/2 h-full flex flex-col gap-5 justify-center animate__animated animate__bounceInLeft Mobile:order-2 Mobile:w-full Mobile:h-1/2 Mobile:items-center Mobile:text-center">
                    <h1 className='text-[3rem]'>Next generation digital banking</h1>
                    <p className=' text-Grayish-Blue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>

                    <button className='w-[10em]'>Request Invite</button>
                </div>
                <div className="right w-1/2 h-full relative Mobile:order-1 Mobile:w-full Mobile:h-1/2">
                    <img src={bg_banner} alt="bg banner" className='w-full h-full object-center absolute -right-[10%] animate__animated animate__bounceInDown animate__delay-1s Mobile:hidden' />
                    <img src={banner} alt="mockup img" className='w-full h-auto absolute Desktop:top-[60%] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[20] Mobile:-translate-y-1/3 Mobile:object-fill Mobile:left-[50%] Mobile:-translate-x-1/2 Mobile:w-[80%] Tablet: Mobile:top-[0] Desktop:left-[75%]' />
                    <img src={bg_banner_2} alt="bg banner mobile" className='absolute z-[10] top-0 bottom-0 -left-2 right-0  h-full w-full object-cover  animate__animated animate__bounceInRight animate__delay-1s hidden Mobile:block' />
                </div>
            </div>


        </div>
    )
}

export default Hero
