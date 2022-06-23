import React, { useRef, useState } from 'react'
import { IconContext } from "react-icons"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export default function FaqSingle({ faq }) {
    const [active, setActive] = useState(false)
    const ref = useRef(null);
    return (
        <div className='border-b border-[#d64d78] border-opacity-50 py-3'>
            <div className='flex justify-between'>
                <h1 className='font-semibold w-max-[300px]'>{faq.label}</h1>
                <button onClick={() => setActive(!active)}>
                    {active ? <IconContext.Provider value={{ className: "text-primary" }}>
                        <AiOutlineMinus />
                    </IconContext.Provider> : <IconContext.Provider value={{ className: "text-primary" }}>
                        <AiOutlinePlus />
                    </IconContext.Provider>}
                </button>
            </div>
            <p className={active ? "mt-2 h-0 overflow-hidden text-xs transition-all" : "h-0 overflow-hidden text-xs transition-all"} style={active ? { height: `${ref.current.scrollHeight}px` } : {}} ref={ref}>
                {faq.answer}
            </p>
        </div>
    )
}
