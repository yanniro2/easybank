import React from 'react'

function MobileMenu()
{
    return (
        <div className="fixed top-0 bottom-0 w-screen h-screen  z-[2000] backdrop-blur hidden Mobile:flex  pt-[6rem] justify-center font-Public">
            <div className="content bg-White h-[50vh] w-[80vw] rounded shadow-md flex items-center justify-center ">
                <ul className='flex w-full h-full justify-evenly flex-col items-center'>
                    <li className='text-Dark-Blue  hover:text-Lime-Green cursor-pointer transition hover:underline text-[18px]'>Home</li>
                    <li className='text-Dark-Blue  hover:text-Lime-Green cursor-pointer transition hover:underline text-[18px]'>About</li>
                    <li className='text-Dark-Blue  hover:text-Lime-Green cursor-pointer transition hover:underline text-[18px]'>Contect</li>
                    <li className='text-Dark-Blue  hover:text-Lime-Green cursor-pointer transition hover:underline text-[18px]'>Blog</li>
                    <li className='text-Dark-Blue  hover:text-Lime-Green cursor-pointer transition hover:underline text-[18px]'>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu
