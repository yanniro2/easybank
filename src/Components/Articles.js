import React from 'react'
import img_1 from "../images/image-currency.jpg"
import img_2 from "../images/image-restaurant.jpg"
import img_3 from "../images/image-plane.jpg"
import img_4 from "../images/image-confetti.jpg"


function Articles()
{
    const article_Datas = [
        {
            id: 1,
            img: img_1,
            writter: "By Claire Robinson",
            heding: "Receive money in any currency with no fees",
            text: "The world is getting smaller and we’re becoming more mobile. So why should you be   forced to only receive money in a single …",
        },
        {
            id: 2,
            img: img_2,
            writter: "By Wilson Hutton",
            heding: "Treat yourself without worrying about money",
            text: "Our simple budgeting feature allows you to separate out your spending and set   realistic limits each month.That means you …",
        },
        {
            id: 3,
            img: img_3,
            writter: "By Wilson Hutton",
            heding: "Take your Easybank card wherever you go ",
            text: " We want you to enjoy your travels.This is why we don’t charge any fees on purchases   while you’re abroad.We’ll even show you …",
        },
        {
            id: 4,
            img: img_4,
            writter: "By Claire Robinson",
            heding: "Our invite-only Beta accounts are now live!",
            text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta.  It’s easy to request an invite through the site ...",
        },

    ];

    const Content = () => article_Datas.map((datas) => (
        <div key={datas.id} className="flex flex-col gap-3 bg-White rounded overflow-hidden hover:shadow-lg hover:drop-shadow-lg cursor-pointer transition animate__animated animate__flipInX animate__delay-1s Tablet:gap-1 Tablet:text-[12px]">
            < div className="top w-full h-1/2  Tablet:min-h-[5rem] Tablet:max-h-[5rem]" >
                <img src={datas.img} alt="img" className='w-full h-full object-cover' />
            </div >
            <div className="bottom w-full h-1/2 p-3 flex flex-col gap-3 Tablet:p-1 Tablet:gap-1 Tablet:h-auto">
                <small className=' text-Grayish-Blue'>{datas.writter}</small>
                <h1 className='font-l capitalize'>{datas.heding}</h1>
                <p className='text-[14px] Tablet:text-[12px]'>{datas.text}</p>
            </div>

        </div >
    ))


    return (
        <div className="w-screen h-screen font-Public font-normal px-5  pt-[5rem] z-0 overflow-hidden flex item-center justify-center text-Dark-Blue bg-Very-Light-Gray Mobile:p-3 Mobile:text-center Mobile:h-full Mobile:mb-[2rem]">
            <div className="content w-4/5 h-full flex flex-col gap-[2rem] Tablet:w-full">
                <h1 className='text-[1.5rem]'>Latest Articles</h1>
                <div className='flex gap-5 w-full Mobile:flex-col'>
                    <Content />
                </div>

            </div>

        </div>
    )
}

export default Articles
