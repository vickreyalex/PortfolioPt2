import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
            <div className="max-w-2xl text-lg text-gray-200 mb-8 text-center">
                <p className="mb-4">
                    Thanks for stopping by! If you’d like to get in touch, please fill out the form below and I’ll get back to you as soon as I can. If the form isn’t working for some reason, you can connect with me on LinkedIn (linked above in the header).
                </p>
                <p className="mb-4">
                    If you’re a prospective employer, I’d be happy to provide additional materials such as my Resume or my Letter of Recommendation from Lilith Games. I’d also love to chat about how I might be a great fit for your team, or just connect and talk anything gaming!
                </p>
                <p>
                    Looking forward to hearing from you, and thank you for visiting my website!
                </p>
            </div>
            <form
                action="https://formspree.io/f/mgvzbwok"
                method="POST"
                className="w-full max-w-xl flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="p-4 bg-transparent border border-gray-400 rounded text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-4 bg-transparent border border-gray-400 rounded text-white"
                />
                <input
                    type="text"
                    name="website"
                    placeholder="Subject"
                    className="p-4 bg-transparent border border-gray-400 rounded text-white"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="p-4 bg-transparent border border-gray-400 rounded text-white min-h-[120px]"
                />
                <button
                    type="submit"
                    className="bg-cyan-400 text-white font-bold py-4 rounded mt-2 tracking-widest hover:bg-cyan-500 transition"
                >
                    SEND MESSAGE
                </button>
            </form>
        </div>
    );
}

export default Contact;