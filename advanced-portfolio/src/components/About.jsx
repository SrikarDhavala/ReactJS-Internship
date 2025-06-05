import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profileImage from '../assets/profile.jpg'

function About() {

    return(
        <section id="about" className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-15 lg:mt-5">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-3xl sm-text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
                        Hi, I am 
                    </h1>
                    <h2 className="text-4xl sm-text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                        Srikar
                    </h2>
                    <h3 className="text-xl sm-text-2xl md:text-3xl font-semibold text-blue-500 mb-4 leading-tight">
                        <span className="text-white">
                            I am a 
                        </span>
                        <TypeAnimation
                        sequence={[
                            " Python Developer",
                            1000,
                            " Frontend Developer",
                            1000,
                            " Coder",
                            1000,
                            " Gamer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={180}
                        className='text-blue-500 font-bold'
                        repeat={Infinity}
                        />
                    </h3>
                    <p className='text-base sm:text-lg md:text-md text-gray-400 mb-5 mt-5 leading-relaxed'>
                        <i>about me ^_^</i>
                    </p>
                    <a href='#' target='_blank' rel='noopener noreferrer' className='inline-block text-white py-2 px-5 rounded-full mt-5 text-lg font-bold transition duration-300 hover:scale-105' style={{
                        background: 'linear-gradient(90deg, #2a7ffe, #3883f2)',
                        boxShadow: '0 0 2px #2a7ffe, 0 0 2px #2a7ffe, 0 0 15px #2a7ffe'
                    }}>
                        Download Resume
                    </a>
                </div>

                <div className='md:w-1/2 flex justify-center md:justify-end'>
                <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-blue-500 rounded-full' tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05} transitionSpeed={1000} gyroscope={true}>
                    <img src={profileImage} alt='profile image' className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(42,127,254,0.5)]' />
                </Tilt>
                </div>
            </div>
        </section>
    );
}

export default About