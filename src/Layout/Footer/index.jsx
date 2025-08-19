import React from 'react';

function Footer() {
    return (
        <footer className="py-4 text-center text-sm text-gray-400">
            {/* Remove or comment out the email line below */}
            {/* <div>vickreyalex@gmail.com</div> */}
            <div>&copy; {new Date().getFullYear()} Alex Vickrey. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
