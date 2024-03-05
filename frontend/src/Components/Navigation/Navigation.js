import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <div className='py-[2rem] px-[1.5rem] w-[374px] h-full bg-[#f5f2f1d0] border-3 border-[#fff] backdrop:blur-[4.5px] rounded-[32px] flex flex-col justify-between gap-[2rem]'>
            <div className="h-[100px] flex items-center gap-[1rem]">
                <img src={avatar} alt="" className='w-[80px] h-[80px] rounded-full object-cover bg-[#fcf6f9] p-[0.2rem] shadow-sm'/>
                <div className="text">
                    <h2 className='text-[#222233] font-bold text-[3rem]'>Flat</h2>
                </div>
            </div>
            <ul className="flex-1 flex flex-col">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`flex gap-3 items-center my-[0.6rem] cursor-pointer duration-200 text-[#22223380] pl-[1rem] relative text-[1.4rem] ${active} === item.id ? 'text-[#222233]': ''`}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </div>
    )
}

export default Navigation