import React, { useContext } from "react";
import { DarkModeContext } from '../App';

export default function Example() {
    const { isDarkMode } = useContext(DarkModeContext);

    return (
        <section className={`relative isolate overflow-hidden px-6 py-10 sm:py-10 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-400'}`}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className={`absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white opacity-30 shadow-xl shadow-indigo-200/10 ring-1 ring-gray-300
                sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center`} />

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-1">
                    <img
                        className="rounded-full mx-auto w-40 h-40 sm:w-60 sm:h-60 xl:h-70 xl:w-70 animate-slideInBottom"

                        //change picture
                        src="https://firebasestorage.googleapis.com/v0/b/portofolio-b0512.appspot.com/o/porfile%20pic.jpeg?alt=media&token=b28d3740-24c7-4808-a680-7770b994a5d6"
                        alt="Yourname"
                    />
                    <figcaption className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className={`font-semibold animate-slideInBottom ${isDarkMode ? 'text-white' : 'text-black'}`}>Yourname</div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className={`${isDarkMode ? 'fill-white' : 'fill-black'}`}>
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <div className={`animate-slideInBottom font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>your position</div>
                    </figcaption>
                    <blockquote className={`text-start text-xl animate-slideInBottom font-semibold leading-8 py-10 ${isDarkMode ? 'text-white' : 'text-black'} sm:text-2xl sm:leading-9`}>
                        <p>
                            
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                        this is  section where you inforation goes, this is  section where you inforation goes
                      

                        

                        </p>
                    </blockquote>
                </figure>
            </div>
        </section>
    );
}