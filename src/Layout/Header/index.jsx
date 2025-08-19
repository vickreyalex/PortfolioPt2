import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100)
            {
                setShowButton(true);
            } else
            {
                setShowButton(false);
            }
        });
    });
    return (
        <div
            className={`px-2 py-2 sticky top-0 z-50 transition-colors duration-300 ${
                showButton
                    ? "bg-black/60 backdrop-blur-md shadow-lg" // changed from bg-slate-900/70
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="">
                    <Link to='/' className='text-4xl'>Alex Vickrey</Link>
                </div>
                <div className="flex gap-6 items-center">
                    <Link to='/' className='text-xl'>About</Link>
                    <Link to='/portfolio' className='text-xl'>Portfolio</Link>
                    <Link to='/contact' className='text-xl'>Contact</Link>
                    <a
                        href="https://www.linkedin.com/in/alexander-vickrey"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Index
