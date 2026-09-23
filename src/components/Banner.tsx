
import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className='flex justify-between container mx-auto my-20 h-120 items-center'>
            <div className=' text-center md:text-left'>

                <h1 className="text-4xl sm:text-5xl text-text lg:text-7xl font-extrabold tracking-tight tex leading-tight mb-6">
              Build Your Ideal <br/>
              <span className="bg-linear-to-r from-gradient-giantsorange via-gradient-magentapink to-gradient-brightviolet bg-clip-text text-transparent">
                Development Stack
              </span>
              </h1>
              <p className="text-base sm:text-lg text-banner-text mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
              <button className="bg-linear-to-r from-gradient-giantsorange  to-gradient-vividrose text-background px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-gradient-vividrose-500/20 w-full sm:w-auto">
                Explore Technologies
              </button>
              
            
            <button className="border border-learnmore-border text-learnmore bg-learnmore-bg px-16 py-3.5 rounded-lg font-medium hover:bg-learnmore-border transition-colors w-full sm:w-auto">
  Learn More
</button>
            </div>
            </div>
            <div>
                <div className="flex-1 w-full flex justify-center md:justify-end">
           
            <img
              src={BannerImage}
              alt="BannerImage"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
            />
          </div>
            </div>
        </section>
    );
};

export default Banner;