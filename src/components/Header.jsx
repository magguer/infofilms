import ButtonHeader from "./ButtonHeader";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 h-[70px] w-sceen bg-gray-800">
        <div>
          <a href="/" className="text-3xl">
            🎬
          </a>
        </div>
        <div className="gap-3 flex items-center">
          <div>
            <ButtonHeader imgButton={"Contacto"} />
          </div>
          <div>
            <ButtonHeader imgButton={"Nosotros"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
