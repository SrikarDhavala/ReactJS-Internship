import routeConstants from '../routes/routeConstants'
import { Link } from 'react-router-dom'
import { Icons } from '../assets/icons'
import { IoMdClose } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'

function Header() {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return(
        <header className="text-white flex flex-col relative after:content-[' '] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[' '] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
            <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
                <div className="flex items-center gap-x-9">
                    <Link to={routeConstants.ROOT} className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]">
                        <img src={Icons.logo} alt='site logo' />
                    </Link>
                    <nav className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-[#252525] h-full z-50 p-50 sm:w-[300px] w-full translate-all ease-in-out duration-300 shadow-[0px_14px_28px_rgba(0,0,0,0.25),0px_10px_10px_rgba(0,0,0,0.22)] lg:shadow-none lg:translate-x-0 ${isNavbarOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className='flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out'>
                            <button type='button' onClick={toggleNavbar}>
                                <IoMdClose size={32} />
                            </button>
                        </div>
                        <ul className={`flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center`}>
                            <li>
                                <Link to="" className='text-white text-base font-arial hover:opacity-90 transition-all duration-300 ease-in-out font-normal whitespace-nowrap'>Features</Link>
                            </li>
                            <li>
                                <Link to="" className='text-white text-base font-arial hover:opacity-90 transition-all duration-300 ease-in-out font-normal whitespace-nowrap'>Benefits</Link>
                            </li>
                            <li>
                                <Link to="" className='text-white text-base font-arial hover:opacity-90 transition-all duration-300 ease-in-out font-normal whitespace-nowrap'>Free Generator</Link>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-y-5 items-center lg:hidden mt-6'>
                            <Link to="" className='text-base font-semibold text-white hover:text-[#5b5af7] transition-all duration-300 ease-in-out'>Already a member ?</Link>
                            <Link to="" className='capitalized text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-linear-135 from-[#F1B2A8] via-[#EC57A8] to-[#5B5AF7] whitespace-nowrap w-full'>Log in</Link>
                        </div>
                    </nav>
                </div>
                <div className='lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden'>
                    <Link to="" className='text-base font-semibold text-white hover:text-[#5b5af7] transition-all duration-300 ease-in-out whitespace-nowrap'>Already a member ?</Link>
                    <Link to="" className='capitalized text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-linear-135 from-[#F1B2A8] via-[#EC57A8] to-[#5B5AF7] whitespace-nowrap w-full'>Log in</Link>
                </div>
                <button type='button' className='lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all' onClick={toggleNavbar}>
                    <MdMenu size={32} />
                </button>
            </div>
            <div className='flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-arial flex-1 relative z-10 mt-[100px] px-4'>
                <h1 className='text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]'>Pioneering communications in <span className='bg-gradient-to-r from-[#f1b2a8] via-[#ec57a8] to-[#5b5af7] bg-clip-text text-transparent'>software delivery.</span></h1>
                <p className='lg:text-xl md:text-lg text-base my-[46px]'>Accelerate development with AI-driven speed from design to delivery faster than ever before.</p>
                <form className='w-full'>
                    <div className='flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto'>
                        <input type='email' placeholder='Enter your work email' className='lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full placeholder:text-gray-300 outline:0 font-arial lg:text-base text-sm' />
                        <button type='submit' className='bg-[#5b5af7] rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap text-base px-5 font-semibold hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'>Request Early Access</button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header