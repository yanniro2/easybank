import React from 'react'
import img_1 from "../images/icon-online.svg";
import img_2 from "../images/icon-budgeting.svg";
import img_3 from "../images/icon-onboarding.svg";
import img_4 from "../images/icon-api.svg";
function Choose()
{

    const choose_data = [
        {
            id: 1,
            heading: "online banking",
            icon: img_1,
            text: "Our modern web and mobile applications allow you to keep track of your finances  wherever you are in the world.",
        },
        {
            id: 2,
            heading: "Simple Budgeting",
            icon: img_2,
            text: " See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
            id: 3,
            heading: "Fast Onboarding",
            icon: img_3,
            text: "We don’t do branches. Open your account in minutes online and start taking control  of your finances right away.",
        },
        {
            id: 4,
            heading: "Open API",
            icon: img_4,
            text: "  Manage your savings, investments, pension, and much more from one account. Tracking  your money has never been easier.",
        },
    ]


    const Content = () => choose_data.map((datas) =>
    (<div key={datas.id} className="flex flex-col gap-5 w-full h-full border-2 rounded p-5 cursor-pointer border-Light-Grayish-Blue hover:border-Lime-Green hover:drop-shadow hover:shadow transition animate__animated animate__zoomIn Mobile:items-center Mobile:gap-2 Mobile:p-1 Tablet:h-auto">
        <div className="icon">
            <img src={datas.icon} alt="icon img" />
        </div>
        <h3 className='font-m capitalize'>{datas.heading}</h3>
        <p>{datas.text}</p>
    </div>)
    );
    return (
        <div className="w-screen h-screen font-Public font-normal px-5  pt-[8rem] z-0 overflow-hidden flex item-center justify-center text-Dark-Blue  bg-Light-Grayish-Blue Mobile:text-center Mobile:h-full Mobile:p-3 Tablet:pt-5">
            <div className="content w-4/5 flex gap-[5rem] flex-col Mobile:w-full Mobile:gap-2 Tablet:w-full Tablet:gap-5">
                <div className="heading flex flex-col gap-3 h-1/5 animate__animated animate__zoomIn Mobile:px-5 Mobile:h-auto">
                    <h1 className='text-[1.5rem]'>Why choose Easybank?</h1>
                    <p className='w-1/2 Mobile:w-full'>We leverage Open Banking to turn your bank account into your financial hub. Control
                        your finances like never before.</p>
                </div>

                <div className="box flex gap-3 w-full h-4/5 Mobile:h-auto Mobile:flex-col Mobile:px-5 Mobile:items-center Mobile:justify-center Tablet:h-auto">
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Choose
