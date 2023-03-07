import ButtonMenuBurguer from "./ButtonMenuBurguer";

function BurguerMenuBody({ setShowBurguerMenu, showBurguerMenu }) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setShowBurguerMenu(false);
    }
  });

  return (
    <div className="relative">
      <div className="shadow h-screen w-[300px] bg-gray-800 bg-opacity-80 translate-all duration-200 mt-[70px] text-white">
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer text={"Home"} path={"/"} blanck={false} />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Quiénes somos?"}
            path={"/about"}
            blanck={false}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"Hack Adacemy"}
            path={"https://www.ha.dev/"}
            blanck={true}
          />
        </div>
        <div onClick={() => setShowBurguerMenu(!showBurguerMenu)}>
          <ButtonMenuBurguer
            text={"API Movies"}
            path={"https://www.themoviedb.org/"}
            blanck={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BurguerMenuBody;
