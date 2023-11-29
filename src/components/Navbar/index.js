import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { motion, AnimateSharedLayout } from 'framer-motion';


const link = [
    {
        text: "Home",
        link: "#",
    }, {
        text: "Blog",
        link: "#",
    }, {
        text: "About",
        link: "#",
    }, {
        text: "Contact",
        link: "#",
    }
]
const Navbar = () => {
    const [selected, setSelected] = useState(0);

    return (
        <nav className='absolute top-0 left-0 z-20 w-full h-24 flex justify-between items-center px-5 sm:px-28'>
            <span className='font-bold text-2xl font-mono '>Portfolio</span>
            <AnimateSharedLayout transition={{ duration: 0.2 }}>
                <ul className='hidden sm:flex items-center text-xl font-medium space-x-24 text-slate-500'>
                    {link.map((link, index) => (
                        <motion.li initial={{ fontSize: "normal" }} animate={{ fontSize: "bold", transition: { duration: 2 } }} key={index} className="relative" onClick={() => setSelected(index)}>
                            <a className={index === selected && "text-indigo-900 font-semibold"} href={link.link}>{link.text}</a>
                            {index === selected && <motion.div layoutId='underline' className='absolute bottom-[-2px] left-0 bg-indigo-900 h-[3px] w-full rounded-lg' />}
                        </motion.li>
                    ))}


                </ul>
            </AnimateSharedLayout>
            <GiHamburgerMenu size={20} className="sm:hidden" />


        </nav>
    )
}

export default Navbar;
