import { heroContent } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";

function Hero() {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-40 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl font-sans">
                    Amenyo Sedem
                </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                    Full Stack Developer
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                    {heroContent}
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="My Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;