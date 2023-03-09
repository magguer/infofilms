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
            path={"/infofilms"}
            blanck={false}
            img={"https://i.ibb.co/RHG5xH3/movie.png"}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Quiénes somos?"}
            img={"https://i.ibb.co/yyn7JHp/about.png"}
            path={"/about"}
            blanck={false}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Hack Adacemy"}
            img={"https://i.ibb.co/By26wss/hack.png"}
            path={"https://www.ha.dev/"}
            blanck={true}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"API Movies"}
            img={"https://i.ibb.co/jJ63ttP/tmdb.png"}
            path={"https://www.themoviedb.org/"}
            blanck={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BurguerMenuBody;
