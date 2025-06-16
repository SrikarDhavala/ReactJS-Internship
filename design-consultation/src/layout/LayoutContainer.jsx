import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function LayoutContainer() {
    
    return(
        <div className='bg-[#252525] min-h-screen'>
            <Header />
            <main className='relative z-0'>
                <Outlet></Outlet>
            </main>
            <Footer />
        </div>
    );
}

export default LayoutContainer