function Hero() {
  return (
    <div className="relative pt-[70px] cursor-default">
      <div className="">
        <div>
          <div className="absolute w-full h-72 bg-black opacity-40"></div>
          <div className="absolute w-full h-72 flex items-center text-center justify-center">
            <div>
              <h1 className="text-white font-bold text-6xl">🎬 MoviHack</h1>
              <h3 className="text-white font-bold text-lg">
                Estrenos de pelicula.
              </h3>
            </div>
          </div>
          <img
            className="w-full h-72 object-cover shadow"
            src="https://t4.ftcdn.net/jpg/02/48/81/31/360_F_248813143_0Hn6ziX9B8FftE8SNjTdmbVEsplQFf65.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
