
function Contact() {

    return(
        <section id="contact" className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl sm:text-4xl font-bold text-white'>Contact</h2>
                <div className='w-32 h-1 bg-blue-500 mx-auto mt-2'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>
                    I'd love to hear from you - reach out for any opportunities or questions!
                </p>
            </div>

            <div className="mt-8 w-full max-w-md bg-[#030a1f] p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center">
                    Connect With Me
                </h3>

                <form className="mt-4 flex flex-col space-y-4">
                    <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#040e29] text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
                    <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#040e29] text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
                    <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#040e29] text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
                    <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 rounded-md bg-[#040e29] text-white border border-gray-600 focus:outline-none focus:border-blue-500"></textarea>

                    <button type="submit" className="w-full bg-gradient-to-r from-blue-800 to-blue-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact