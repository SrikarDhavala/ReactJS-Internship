import { FaLongArrowAltRight } from 'react-icons/fa'


function HeroSection() {

    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a time!
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture and beauty of every nation. Sort, search and filter through countries to find the details you need.
                    </p>
                    <button className="btn btn-darken bt-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src='/images/world-map.png' alt='world-map' className='banner-image'></img>
                </div>
            </div>
        </main>
    );
}

export default HeroSection