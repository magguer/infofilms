import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Hero({ handleScrollHome }) {
  return (
    <div className="relative cursor-default">
      <div className="">
        <div>
          <div className="absolute w-full z-10 h-[100vh] desktop:h-[92.2vh] bg-gradient-to-t from-[#17202e]"></div>
          <div className="absolute w-full z-20 h-[100vh] desktop:h-[92.2vh] flex items-end justify-center pb-14">
            <div>
              {/*   <div className="flex items-center">
                <img
                  src="infofilmslogo.png"
                  className="w-[250px] tablet:w-[400px]"
                />
              </div>
              <h3 className="text-white text-italic font-semibold text-lg text-center tablet:text-end tablet:mr-2">
                La wikipedia de peliculas.
              </h3> */}
              <div className="w-full flex justify-center h-[14rem] items-end pb-8  animate-pulse">
                <button className="" onClick={handleScrollHome}>
                  <img
                    className="relative w-20 h-20 opacity-70 top-0 hover:top-2 transition-all duration-200 "
                    src="arrows1.png"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="z-0">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              showArrows={false}
            >
              <div>
                <img
                  className="w-full h-[100vh] desktop:h-[92.2vh] object-cover shadow"
                  src="https://image.tmdb.org/t/p/original/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg"
                  alt="banner1"
                />
              </div>
              <div>
                <img
                  className="w-full h-[100vh] desktop:h-[92.2vh] object-cover shadow"
                  src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
                  alt="banner2"
                />
              </div>
              <div>
                <img
                  className="w-full h-[100vh] desktop:h-[92.2vh] object-cover shadow"
                  src="https://image.tmdb.org/t/p/original/kODNw6GJNdgldUMEhKPlCw8wQCr.jpg"
                  alt="banner3"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
