import React, {useContext } from 'react';
import { DarkModeContext } from '../App';


const Footer = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className={`flex flex-col max-w-[1900px] px-2 py-1 mx-auto justify-between ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} sm:flex-row text-center`}>
            <p className='py-1 mx-auto animate-jumpy'>codinglounge</p>
            <p className= 'py-1 mx-auto animate-jumpy'>In progress</p>
        </div>
    );
};

export default Footer;