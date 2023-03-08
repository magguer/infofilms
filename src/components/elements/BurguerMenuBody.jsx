import ButtonMenuBurguer from "./ButtonMenuBurguer";

function BurguerMenuBody({ setShowBurguerMenu, showBurguerMenu }) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setShowBurguerMenu(false);
    }
  });

  return (
    <div className="relative shadow">
      <div className="shadow h-screen w-[300px] bg-gray-800 bg-opacity-80 translate-all duration-200 mt-[70px] text-white">
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Movies"}
            path={"/"}
            blanck={false}
            img={"/movie.png"}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Quiénes somos?"}
            img={"/about.png"}
            path={"/about"}
            blanck={false}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Hack Adacemy"}
            img={"/hack.png"}
            path={"https://www.ha.dev/"}
            blanck={true}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"API Movies"}
            img={"/tmdb.png"}
            path={"https://www.themoviedb.org/"}
            blanck={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BurguerMenuBody;
