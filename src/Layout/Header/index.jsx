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
        <div className={`px-2 py-2 sticky top-0 ${showButton ? "shadow-lg bg-green-500" : ""}`}>
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="">
                    <Link to='/' className='text-4xl'>Title</Link>
                </div>
                <div className="flex gap-6 items-center">
                    <Link to='/' className='text-xl'>Portfolio</Link>
                    <Link to='/about' className='text-xl'>About</Link>
                </div>
            </div>
        </div>
    )
}

export default Index