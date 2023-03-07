function AboutRoute() {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h2 className="font-bold text-3xl my-5">Sobre nosotros.</h2>
      <p className="max-w-[300px] tablet:max-w-[400px] laptop:max-w-[800px]">
        Mi nombre es Martín Telechea, soy estudiante del Bootcamp Full Stack de
        Hack Academy. El proyecto por el que navegas actualmente no es mas que
        uno de los ejercicios finales de dicho Bootcamp. Enteramente realizado
        con tecnologías de frontend, entre ellas: React, Tailwind, Axios, etc.
        <br />
        <br />
        Sige navegando por la web y disfruta de la información actualizada que
        nos brinda la API de TMDB (The Movie DB).
        <br />
        <br />
        Un saludo! 👋🏼
      </p>
    </div>
  );
}

export default AboutRoute;
