import Carousel from "../Components/Carousel"
import Categories from "../Components/Categories"
import Electronics from "../Components/Electronics"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


const LandingPage = () => {
    return (
        <div className="w-dvw h-dvh bg-slate-100 overflow-x-hidden overflow-y-scroll no-scrollbar">
            <Navbar />
            <Categories />
            <Carousel />
            <Electronics />
            <Footer />
        </div>
    )
}

export default LandingPage