import Contact from "./Contact"
import Logo from "./Logo"
import curlyImage from "../assets/curlyImage.png"


const Header = () => {
  return (
    <div className="w-full h-screen bg-[#FFF6E1]">
        <nav className="flex items-center justify-between md:px-[150px] sm:px-[90px] px-[20px] mx-auto sm:py-7 py-5">
          <Logo />
          <Contact />
        </nav>
        <div>
          <div className="relative">
            <h1 className="text-[30px] text-center font-[500] leading-[35px]">
            Best Corporate Video Production Company
            </h1>
            <p className="text-[12px] leading-[15px] text-center font[400] w-[287px] mx-auto mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Ut incididunt ut
 labore et dolore magna aliqua.</p>
          <div className="flex items-center justify-center">
          <button className="bg-[#0089D0] rounded-[39px] text-[12px] font-[400] text-white px-3 py-2 my-4">
            Get Started
          </button>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <p className="text-[12px] font-[400]"><span className="text-[14px] font-bold">A+ Rating </span> &nbsp;&nbsp; 4.9 out of RATTING</p>
            <div>
            <i class="fa-solid fa-star text-[10px] text-[#FDB812]"></i>
            <i class="fa-solid fa-star text-[10px] text-[#FDB812]"></i>
            <i class="fa-solid fa-star text-[10px] text-[#FDB812]"></i>
            <i class="fa-solid fa-star text-[10px] text-[#FDB812]"></i>
            <i class="fa-solid fa-star text-[10px] text-[#FDB812]"></i>
            </div>
          </div>
          <img src={curlyImage} alt="" className="w-[65px] rotate-[100deg] absolute bottom-8 right-14" />
          </div>
        </div>
    </div>
  )
}

export default Header
