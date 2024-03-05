import React from 'react'

function Button({name, icon, onClick, bg, bPad, color, bRad, hColor}) {
    return (
        <div className={`p-[0.4rem 0.2rem] rounded-[${bRad}] rounded-[30px] outline-none text-[${color}] bg-${bg} hover:bg-${hColor} border-none flex gap-[5rem] items-center cursor-pointer duration-300`} style={{
            padding: bPad,

        }} onClick={onClick}>
            {icon}
            {name}
        </div>
    )
}


export default Button